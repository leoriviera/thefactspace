import express from 'express';

import facts from './facts';

const getRandomFact = () => {
    // Generate random number between 0 and facts.length - 1
    const index = Math.floor(Math.random() * facts.length);

    // Get random fact
    const fact = facts[index];
    return {
        index,
        ...fact,
    };
};

// Get the total number of facts
const factCount = facts.length;

// Create an Express app, and specify pug as the view engine
const app = express();
app.set('view engine', 'pug');

// On request to '/'...
app.get('/', (_, res) => {
    // Get a random fact
    const fact = getRandomFact();

    // Render index.pug with fact data and number of facts
    res.render('index', {
        ...fact,
        factCount,
    });
});

// Fetch a random fact
app.get('/random', (req, res) => {
    const { type } = req.query;

    // Get a fact
    const fact = getRandomFact();

    // If the text type is specified...
    if (type === 'text') {
        // Return the fact's text
        const { text } = fact;
        res.send(text);
    } else {
        // Return the fact object
        res.json(fact);
    }
});

// When fetching a fact by index...
app.get('/fact/:index?', (req, res) => {
    // Extract index paramater and convert to integer
    const { index } = req.params;
    const indexInt = parseInt(index);

    // If the index is not an integer
    // (so, undefined, or has text)...
    if (isNaN(indexInt)) {
        // Redirect to a random fact instead
        res.redirect('/random');
    } else {
        // Try to get the the fact
        const fact = facts[indexInt];

        // If the fact is not undefined,
        // (and in the array's bounds)
        if (fact !== undefined) {
            // Send the fact
            res.json(fact);
        } else {
            // Send error
            res.status(404).send(`Fact #${index} not found.`);
        }
    }
});

// Get the port
const port = process.env.PORT || 3000;

// Bind app to port, and print message on successful listening
app.listen(port, () => {
    console.log(`Hello! This server's listening on ${port}.`);
});
