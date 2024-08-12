FROM node:carbon

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ /app

EXPOSE 8081

CMD [ "node", "app.js" ]