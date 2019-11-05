FROM node:10-alpine

WORKDIR /usr/src/app
COPY package*.json ./

# $NODE_ENV is required to correctly build Vue application
ARG NODE_ENV=development
RUN npm install

COPY . .
EXPOSE 5000

CMD [ "npm", "start" ]

