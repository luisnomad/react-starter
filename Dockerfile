FROM node:8.4.0

ENV APP /app
RUN mkdir -p $APP

COPY package.json $APP/package.json

WORKDIR $APP

RUN npm install
