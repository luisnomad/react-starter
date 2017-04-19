FROM node:latest

RUN npm install -g yarn

ENV APP /app
RUN mkdir -p $APP

COPY package.json $APP/package.json
COPY yarn.lock $APP/yarn.lock

WORKDIR $APP

RUN yarn install --pure-lockfile
