FROM node:buster-slim
WORKDIR /app
COPY . .
ENV MODEL_URL=https://storage.googleapis.com/bucket-22052024/model.json

RUN apt-get update
RUN npm install

EXPOSE 8080
CMD ["npm","run","start"]