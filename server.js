const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use( express.static('public'));


app.get('/api/quotes/', (req,res,next) => {
    if(!req.query.person) {
        const packedQuotes = {quotes:quotes};
        res.send(packedQuotes);
    } else {
       const person = req.query.person.toLowerCase();
        let newQuotes = quotes.filter(quote => {
            return quote.person.toLowerCase() === person;
        });
        newQuotes = {quotes:newQuotes};
            res.send(newQuotes);
    }

});

app.get('/api/quotes/random/', (req, res, next)  => {
    let randomQuote = {quote:getRandomElement(quotes)};
    res.send(randomQuote);
});

app.post('/api/quotes/', (req,res,next) => {
    const requestData = req.query;
    if(requestData.person && requestData.quote) {
        quotes.push({quote:requestData.quote, person:requestData.person})
        res.status(201).send(`Your quote was added!`);
    } else {
        res.status(400).send(`Provide more information!`);
    }
})



app.listen(PORT, () => {
    console.log(`Quote API app listening at http://localhost:${PORT}`)
});