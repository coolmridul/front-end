# npm builder image
FROM node:12.18.4 AS builder

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable && apt-get install build-essential

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm cache clean --force
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.10.3

# Expose port 80
EXPOSE 80

# Remove default files in nginx deployment folder
RUN rm -rf /usr/share/nginx/html/*

# Copy custom nginx conf into image
COPY ./docker-conf/nginx.conf /etc/nginx/nginx.conf

# Copy built app into nginx folder
COPY --from=builder /app/dist/front-end/. /usr/share/nginx/html/.