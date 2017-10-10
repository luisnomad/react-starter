FROM node:8.6.0

ENV APP /app
RUN mkdir -p $APP

COPY package.json $APP/package.json
COPY package-lock.json $APP/package-lock.json

WORKDIR $APP

RUN npm install
