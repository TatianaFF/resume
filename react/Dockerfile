FROM node:16-alpine

WORKDIR /app/frontend/

COPY react_project /app/frontend/

RUN npm install

COPY . /app/frontend/

CMD ["npm", "run", "start"]