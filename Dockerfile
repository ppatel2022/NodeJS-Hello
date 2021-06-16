ARG TAG=14.16.1-alpine
FROM node:${TAG}

WORKDIR /usr/local/app
ENV PORT 8080
ENV Node_Env index

COPY package*.json ./
RUN npm install && npm cache clean --force

COPY . .
RUN echo "Node Environment Value is: ${Node_Env}" >> p.txt
CMD ["sh", "-c",  "node ${Node_Env}"]