FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./
COPY ./prisma prisma

RUN yarn install

COPY . .

EXPOSE 8081

ENV PORT 8081

CMD source migrate-and-start.sh