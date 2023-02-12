FROM arm64v8/node:16-alpine AS builder
WORKDIR /soft-blue/frontend
COPY /soft-blue/frontend/package*.json ./

RUN apk add npm

RUN npm install 

COPY ./soft-blue/frontend .

ARG BROWSER
ENV BROWSER=$BROWSER

ARG PORT
ENV PORT=$PORT

ARG REACT_APP_IP
ENV REACT_APP_IP=$REACT_APP_IP

RUN npm run build

FROM arm64v8/nginx:alpine
WORKDIR /usr/share/nginx/html

ARG PORT
ENV PORT=$PORT

RUN rm -rf ./*

COPY --from=builder /soft-blue/frontend/build .
COPY --from=builder /soft-blue/frontend/nginx.conf /etc/nginx/

EXPOSE $PORT
ENTRYPOINT ["nginx", "-g", "daemon off;"]