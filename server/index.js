// Create an express server that will serve up your static html file
// Create a get request in your get route to the pokeapi requesting some data
// Return that data to the front end and display it

const express = require('express');
const app = express();
const port = '3000'
const path = require('path');

app.use('/', express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/form-data', (req, res) => {
    res.sendStatus(200).send({});
})

app.listen(port, function () {
    console.log(`Server Listening On Port: ${port}`)
});