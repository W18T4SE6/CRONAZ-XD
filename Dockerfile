FROM node:18.16.0-bullseye-slim

RUN apt-get update && \
    apt-get install -y \
    ffmpeg \
    webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/W18T4SE6/CRONAZ-XD.git /ninja
WORKDIR /ninja
RUN npm install
CMD ["node", "index.js"]
