FROM node:16

COPY . .
RUN npm ci
RUN npm run types
RUN npm run build

EXPOSE 4000

CMD ["node", "bin/main"]