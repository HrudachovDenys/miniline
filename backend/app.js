const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const config = require("./config");

const {
    GlobalMiddleware
 } = require('./middlewares');

console.log(GlobalMiddleware);

GlobalMiddleware.handle(app);

const {
    WebRouter,
    ApiRouter
} = require('./routers');

app.use('/', WebRouter);

server.listen(config.get("port"), () => {
    console.log("Server is running...");
})