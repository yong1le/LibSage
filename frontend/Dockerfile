FROM node:22-slim AS base

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

FROM base AS build

CMD ["npm", "start"]

FROM base AS dev

CMD ["npm", "run", "dev", "--",  "--port", "8080"]