# Use npm image to install packages
FROM node:9.7.1

# Set working directory to this
WORKDIR /app

# Add contents of current directory into working directory
ADD . /app

# Specify port
EXPOSE 4567

# Install dependencies
RUN npm install

# Run app
CMD [ "npm", "start" ]