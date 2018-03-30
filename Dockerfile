# Use npm image to install packages
FROM node:latest

ARG build_dir=default
ARG port=4567

# use nodemon for development
RUN npm install --global nodemon

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /opt/app
ADD index.js /opt/app
RUN cp -a /tmp/package.json /opt/app/
RUN mkdir -p /opt/app/bin/
ADD $build_dir/. /opt/app

# Specify port
EXPOSE $port

# Run app
CMD ["nodemon", "-L", "/opt/app/index.js"]