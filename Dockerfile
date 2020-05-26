# stage 1 - build app
# Build from the node parent image
# Specify WORK directory of docker image as app
# Copy all the files from the current directory (the directory containg the Dockerfile) to WORKDIR (/app)
# Download dependencies in definined in package.json
# Create the dist folders containing all the packages
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build-prod

# stage 2 - run app
# Build from the nginx webserver on alpine linux parent image
# COPY, from the first image, the content of /app/dist/fuse to /usr/share/nginx/html. *Note output directory in angular.json is dist/fuse
FROM nginx:alpine
COPY --from=node /app/dist/fuse /usr/share/nginx/html