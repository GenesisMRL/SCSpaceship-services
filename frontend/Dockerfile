FROM node:16.13.2 AS fe-build

COPY . /app
WORKDIR /app
RUN yarn
RUN yarn build

FROM nginx:1.15
COPY --from=fe-build ./app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]