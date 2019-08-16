'use strict'

const express = require('express');
require('dotenv').config();
const app = express();

app.get('/hello', (request, response) => {
    response.status(200).send('Hello');
});

app.use(express.static('./public'))

app.get('/data', (request, response) => {
let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'well trained'
}

response.status(200).json(airplanes);
})


app.get('/',(request,response) => {
    response.status(200).redirect('index.html');
})

app.use('*', (request, response) => {
    response.send('Sorry, that route does not exsist');
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));