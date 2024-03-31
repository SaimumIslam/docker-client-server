FROM nginx:stable-alpine
# COPY ./nginx.conf.template /nginx.conf.template

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]