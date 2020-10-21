#Pull node image
FROM node:12.19.0-alpine3.9
#create working directory
WORKDIR /usr/src/app
#Copy package.json in order to install dependencies
COPY package*.json ./
# install dependencies
RUN npm install
# install bash in order to be able to execute container in it mode
RUN apk add --no-cache bash
#copy source code to workdir
COPY . .
#expose port 3000
EXPOSE 3000
#execute the server file
CMD ["node","server.js"]