FROM node:14-alpine

WORKDIR /rick-n-morty

ENV PATH /rick-n-morty/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]



