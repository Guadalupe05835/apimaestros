FROM node:16
WORKDIR ./user/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["node","./src/app.js"]