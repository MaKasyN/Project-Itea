FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./

# $NODE_ENV is required to correctly build Vue application
ARG NODE_ENV=development
RUN npm install
COPY . .
RUN npm run buildDev

FROM nginx:stable-alpine as development-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
