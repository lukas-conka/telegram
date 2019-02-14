var express = require('express');

const server = express();



server.get('https://api.telegram.org/bot798875195:AAHHJUI6eluf1sxwnA1luhhk1vTEIqqWbcs/getUpdates', (_, res) => {

let response = res.json();

console.log(response);
});

server.get('/', (_, res) => {
    res.send("Oi Lucas.")
});

module.exports = server;