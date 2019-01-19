const express = require('express');
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./server/router');

const app = express();

//bodyParser 등록
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/src', express.static(__dirname + '/src'));
app.use('/tmp', express.static(__dirname + '/tmp'));

//라우터 등록
app.use('/', router);

app.listen(8080, () => {
    console.log('Example app listening on port 8080!');
});