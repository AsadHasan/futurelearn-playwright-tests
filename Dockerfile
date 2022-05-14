FROM mcr.microsoft.com/playwright:v1.22.0-focal
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm ci && mv node_modules ../
COPY . .
RUN chown -R pwuser /usr/src/app
USER pwuser
EXPOSE 9323
CMD ["npm", "test"]
