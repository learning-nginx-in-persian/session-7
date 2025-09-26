FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY back.js ./back.js

ENV PORT=3000
EXPOSE 3000
CMD ["node", "back.js"]

