FROM node:10 as build

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY ./ ./

RUN npm run build -- --prod

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=build /usr/src/app/dist/colorGrid ./
