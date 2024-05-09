# docker-client-server

## React (client)
- pull node image
- create app directory
- copy package.json to app
- project to app
- build app
- install npm package of project
- pull nginx image
- copy build files to nginx

## Django (server)
- pull python image
- set python environment path
- create app directory
- create virtual enviroment if not exist
- activate virtual environment
- install required packages
- run django migration if needed

## Nginx
- pull nginx image
- copy nginx config to /etc/nginx/conf.d/default.conf

Docker compose
- map react 3000 to 80
- map django 8000 to 8000
- map nginx 80 to 80
- all in nextwork mynetwork
- nginx depend on react and django
