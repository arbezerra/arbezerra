FROM node:20 as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . ./
RUN yarn build

FROM node:20 AS prod
WORKDIR /app
COPY package.json .
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
ENV PORT=80
ENV BODY_SIZE_LIMIT=0
CMD ["node", "build"]

