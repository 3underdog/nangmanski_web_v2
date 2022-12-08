FROM node:16.14.2

# ENV PORT 3000
EXPOSE 3000
# ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build

# CMD ["npm", "run", "start-eco-container"]

# CMD npm run start-eco-container && pm2 logs
CMD ["npm", "run", "start"]