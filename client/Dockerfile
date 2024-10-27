FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY src src
COPY public public

COPY tailwind.config.ts tailwind.config.ts
COPY postcss.config.mjs postcss.config.mjs

CMD npm start