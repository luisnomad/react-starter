FROM node:10.4.0

ENV APP /app
RUN mkdir -p $APP

COPY package.json $APP/package.json
COPY package-lock.json $APP/package-lock.json

WORKDIR $APP

RUN npm install
CMD ["npm", "run", "start:dev"]
