FROM arm64v8/node:14-alpine
WORKDIR /soft-blue/backend
COPY /soft-blue/backend/package*.json ./

RUN apk update && apk add --update --no-cache \
	python3 \ 
	py3-pip && \
	ln -sf python3 /usr/bin/python 

RUN apk add --no-cache make gcc g++ py3-pip 
RUN apk add npm
RUN npm install 
COPY ./soft-blue/backend .

ARG PORT
ENV PORT=$PORT

ARG MONGODB_URL
ENV MONGODB_URL=$MONGODB_URL

ARG DOMAIN
ENV DOMAIN=$DOMAIN

ARG MONGODB_NAME
ENV MONGODB_NAME=$MONGODB_NAME

EXPOSE $PORT

ENTRYPOINT ["npm"]
CMD ["run", "start:dev"]