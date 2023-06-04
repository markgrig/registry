const http = require('http');
const express = require('express');

//Для диплоя приложения
const { APP_PORT, APP_IP} = process.env;

//const APP_PORT = 80
//const APP_IP  = 'localhost'


const app = express();

const server = http.createServer(app);

app.use(express.static(`dist`));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(APP_PORT, APP_IP, () => {
    console.log(`Server running at http://${APP_IP}:${APP_PORT}/`);
});

