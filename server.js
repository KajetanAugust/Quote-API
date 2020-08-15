const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use('/api', express.static('public'));

app.get('/quotes/random', (req, res, next)  => {

})




app.listen(PORT, () => {
    console.log(`Quote API app listening at http://localhost:${PORT}`)
});