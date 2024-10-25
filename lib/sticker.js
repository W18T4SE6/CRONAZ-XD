const ffmpeg = require('fluent-ffmpeg');
const os = require('os');
const path = require('path');
const fs = require('fs');
const webp = require('node-webpmux');

async function createTempFile(fileBuffer, extension) {
	const dir = os.tmpdir();
	const tempFilePath = path.join(dir, `tempfile-${Date.now()}.${extension}`);
	await fs.writeFileSync(tempFilePath, fileBuffer);
	return tempFilePath;
}

async function createFile(extension) {
	const dir = os.tmpdir();
	const tempFileName = `tempfile-${Date.now()}.${extension}`;
	const tempFilePath = path.join(dir, tempFileName);
	return tempFilePath;
}

async function addStickerData(stickerBuffer, options) {
	const img = new webp.Image();
	const {
		packname,
		author,
		categories
	} = options;
	const stickerPackId = [...Array(32)].map(() => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')).join('');
	const json = {
		'sticker-pack-id': stickerPackId,
		'sticker-pack-name': (options.packname || ''),
		'sticker-pack-publisher': (options.author || ''),
		'emojis': (options.categories || ['💖']),
		'android-app-store-link': 'https://github.com/KichuExe',
		'ios-app-store-link': 'https://github.com/KichuExe'
	};
	let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
	let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8');
	let exif = Buffer.concat([exifAttr, jsonBuffer]);
	exif.writeUIntLE(jsonBuffer.length, 14, 4);
	await img.load(stickerBuffer);
	img.exif = exif;
	return await img.save(null);
}

async function imageToWebP(buffer, exif) {
	const outputFilePath = await createFile('webp');
	const inputFilePath = await createTempFile(buffer, "jpg");
	await new Promise((resolve, reject) => {
		ffmpeg(inputFilePath)
			.on('error', (err) => {
				console.error('Error during conversion:', err);
				reject(err);
			})
			.on('end', () =>
				resolve(true))
			.addOutputOptions([
				'-vcodec',
				'libwebp',
				"-vf",
				"scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
			])
			.toFormat('webp')
			.save(outputFilePath);
	});
	const buff = fs.readFileSync(outputFilePath);
	fs.unlinkSync(outputFilePath);
	fs.unlinkSync(inputFilePath);
	if (!exif) {
		return buff;
	} else {
		return await addStickerData(
			buff, {
				packname: exif.packname,
				author: exif.author
			}
		);
	}
}

async function videoToWebP(buffer, exif) {
	const outputFilePath = await createFile('webp');
	const inputFilePath = await createTempFile(buffer, "mp4");
	await new Promise((resolve, reject) => {
		ffmpeg(inputFilePath)
			.on('error', (err) => {
				console.error('Error during conversion:', err);
				reject(err);
			})
			.on('end', () =>
				resolve(true))
			.addOutputOptions([
				"-vcodec",
				"libwebp",
				"-vf",
				"scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
				"-loop",
				"0",
				"-ss",
				"00:00:00",
				"-t",
				"00:00:05",
				"-preset",
				"default",
				"-an",
				"-vsync",
				"0"
			])
			.toFormat('webp')
			.save(outputFilePath);
	});
	const buff = fs.readFileSync(outputFilePath);
	fs.unlinkSync(outputFilePath);
	fs.unlinkSync(inputFilePath);
	if (!exif) {
		return buff;
	} else {
		return await this.addStickerMetaData(
			buff, {
				packname: exif.packname,
				author: exif.author
			}
		);
	}
}

module.exports = {
	imageToWebP,
	videoToWebP
}
