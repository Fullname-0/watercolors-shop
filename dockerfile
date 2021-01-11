FROM node:14.14.0
COPY . .
RUN npm rebuild node-sass
ENV HOST 0.0.0.0

ENTRYPOINT npm run dev