FROM node:15.11.0-alpine3.10

WORKDIR /app

ENV PATH=/app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install
RUN npm install react-scripts@4.0.3 -g

COPY . ./

CMD [ "npm", "start" ]