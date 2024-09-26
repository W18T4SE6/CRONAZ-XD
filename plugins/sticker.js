const { 𝘤𝘳𝘰𝘯𝘢𝘻, mode, getJson } = require("../lib");
const config = require("../config");
𝘤𝘳𝘰𝘯𝘢𝘻({
  pattern: "waifu",
  fromMe: mode,
  desc: "Random anime images",
  type: "AnimeImage",
}, async (message, match) => {
  var { url } = await getJson('https://api.waifu.pics/sfw/waifu');
  await message.sendFromUrl(url,{caption: `${config.CAPTION}`});
});
𝘤𝘳𝘰𝘯𝘢𝘻({
  pattern: "tsunade",
  fromMe: mode,
  desc: "Random anime images",
  type: "AnimeImage",
}, async (message, match) => {
  await message.sendFromUrl(eypzApi + 'tsunade',{caption: `${config.CAPTION}`});
});
𝘤𝘳𝘰𝘯𝘢𝘻({
  pattern: "neko",
  fromMe: mode,
  desc: "Random anime images",
  type: "AnimeImage",
}, async (message, match) => {
  var { url } = await getJson('https://api.waifu.pics/sfw/neko');
  await message.sendFromUrl(url,{caption: `${config.CAPTION}`});
});
𝘤𝘳𝘰𝘯𝘢𝘻({
  pattern: "loli",
  fromMe: mode,
  desc: "Random anime images",
  type: "AnimeImage",
}, async (message, match) => {
  var { url } = await getJson('https://api.waifu.pics/sfw/neko');
  await message.sendFromUrl(url,{caption: `${config.CAPTION}`});
});


izumi({
  pattern: "shinobu",
  fromMe: true,
  desc: "Random anime images",
  type: "AnimeImage",
}, async (message, match) => {
  await message.sendFromUrl(apiUrl + 'api/anime/loli?apikey=𝘊𝘙𝘖𝘕𝘈𝘡-𝘟𝘋',{caption: `${config.CAPTION}`});
});
