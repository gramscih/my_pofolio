FROM node

RUN mkdir -p /home/my_porfolio

COPY ./my_porfolio /home/my_porfolio

WORKDIR /home/my_porfolio

RUN npm install

EXPOSE 3000 3306

CMD ["npm", "start"]