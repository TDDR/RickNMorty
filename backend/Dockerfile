FROM node:14

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5050

CMD [ "node", "server.js"]