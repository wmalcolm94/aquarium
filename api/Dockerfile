FROM node:16 AS build
COPY . /app
WORKDIR /app

RUN npm ci --only=production

FROM gcr.io/distroless/nodejs:16
COPY --from=build /app /app
WORKDIR /app
CMD ["./bin/main.js"]