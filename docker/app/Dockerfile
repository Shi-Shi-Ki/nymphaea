FROM node:14

ENV APP_ROOT /usr/app

WORKDIR $APP_ROOT

RUN mkdir $APP_ROOT/src
COPY src $APP_ROOT/src
COPY package*.json tsconfig*.json nest-cli.json $APP_ROOT/

RUN npm install
RUN npm run build

CMD npm run start

