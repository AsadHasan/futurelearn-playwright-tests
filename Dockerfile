FROM mcr.microsoft.com/playwright:v1.22.0-focal
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm ci && mv node_modules ../
COPY . .
RUN useradd playwright && chown -R playwright /usr/src/app
USER playwright
EXPOSE 9323
CMD ["npm", "test"]
