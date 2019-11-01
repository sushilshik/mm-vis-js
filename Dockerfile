FROM node:carbon

WORKDIR ./

COPY ./package.json ./package-lock.json .e2eTests/testServer.js ./

RUN npm install

RUN mkdir /home/node/publc

COPY ./app /home/node/public

CMD [ "npm", "start" ]
