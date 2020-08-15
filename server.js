const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use( express.static('public'));


app.get('/api/quotes/', (req,res,next) => {
    if(!req.query.person) {
        res.send({quotes});
    } else {
       const person = req.query.person.toLowerCase();
        let newQuotes = quotes.filter(quote => {
            return quote.person.toLowerCase() == person;
        });
            res.send({newQuotes});
    }

});

app.get('/api/quotes/random/', (req, res, next)  => {
    let randomQuote = getRandomElement(quotes);
    res.send(randomQuote);
});


app.listen(PORT, () => {
    console.log(`Quote API app listening at http://localhost:${PORT}`)
});