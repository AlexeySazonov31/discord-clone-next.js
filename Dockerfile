# FROM node:22-alpine

# WORKDIR /app

# COPY package.json yarn.lock ./
# COPY ./prisma prisma

# RUN yarn install

# COPY . .

# EXPOSE 8081

# ENV PORT 8081

# CMD source migrate-and-start.sh

# FROM node:22-alpine

# WORKDIR /app

# COPY package.json yarn.lock ./
# COPY ./prisma prisma

# RUN yarn install

# COPY . .

# ENV NODE_ENV production

# EXPOSE 8081

# ENV PORT 8081

# CMD source migrate-and-start.sh

FROM node:22-alpine AS builder
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock ./
COPY ./prisma prisma

RUN yarn install

COPY . .

ENV NODE_ENV production

RUN yarn generate
RUN yarn build

FROM builder AS runner 
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder /app/prisma /app/prisma
RUN yarn add prisma

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone /app/.next/standalone

COPY --from=builder /app/public /app/.next/standalone/public

COPY --from=builder --chown=nextjs:nodejs /app/.next/static /app/.next/standalone/.next/static

USER nextjs

CMD source migrate-and-start.sh
