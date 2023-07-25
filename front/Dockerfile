FROM node:20 as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . ./
RUN yarn build

FROM node:20 AS prod
WORKDIR /app
COPY --from=builder /app/build .
COPY --from=builder /app/package.json .
ENV PORT=80
CMD ["node", "index.js"]