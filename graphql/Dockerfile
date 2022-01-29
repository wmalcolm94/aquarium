FROM node:16

ENV NODE_ENV=production

COPY . .
RUN npm ci
RUN npm run build

EXPOSE 4000

CMD ["node", "bin/main"]