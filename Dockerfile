# Use npm image to install packages
FROM node:latest

ARG build_dir=default
ARG port=4567
ENV DIR $build_dir
# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD ./package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/${DIR} && cp -a /tmp/node_modules /opt/${DIR}

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /opt/${DIR}
ADD ${DIR}/. /opt/${DIR}
ADD ./index.js /opt/${DIR}
ADD ./package.json /opt/$DIR

# Specify port
EXPOSE $port

# Run app
CMD npm start