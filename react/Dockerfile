FROM node:16-alpine

WORKDIR /app/frontend/

COPY react_project /app/frontend/
COPY react_project/package.json .

RUN npm install

COPY . /app/frontend/

CMD ["npm", "run", "start"]