FROM node:20-alpine3.20

RUN apk update && \
    apk add --no-cache git ffmpeg
COPY package.json .
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 8080

CMD ["npm", "start"]
