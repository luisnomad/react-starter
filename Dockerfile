FROM node:8.1.2

ENV APP /app
RUN mkdir -p $APP

COPY package.json $APP/package.json

WORKDIR $APP

RUN npm install
