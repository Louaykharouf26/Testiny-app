FROM node:16-alpine
WORKDIR /back
COPY package.json ./
RUN npm install 
Copy . . 
EXPOSE 5000
CMD ["npm", "run", "start:dev"]