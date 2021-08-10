FROM node:latest

WORKDIR /wwww/public

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start"]