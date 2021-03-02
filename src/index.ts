import path from 'path';

import express from 'express';
import favicon from 'serve-favicon';

import facts from './facts';

// Get the total number of facts
const factCount = facts.length;

const getFact = (index: number) => {
    // Get fact at index
    const fact = facts[index];

    // Return destructred fact with index
    return {
        index,
        ...fact,
    };
};

// Get a random fact
const getRandomFact = () => {
    // Generate random number between 0 and facts.length - 1
    const index = Math.floor(Math.random() * factCount);

    // Get fact at index
    const fact = getFact(index);

    // Return fact
    return fact;
};

// Create an Express app, and specify pug as the view engine
const app = express();
app.set('view engine', 'pug');
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

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
    // Get a fact
    const fact = getRandomFact();

    // Return the fact object
    res.json(fact);
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
        const fact = getFact(indexInt);

        // If the fact is not undefined,
        // (and in the array's bounds)
        if (fact !== undefined) {
            // Send the fact
            res.json(fact);
        } else {
            // Send error
            res.status(404).send({
                index: indexInt,
                text: `Fact #${indexInt} hasn't been added, yet!`,
            });
        }
    }
});

// Get the port
const port = process.env.PORT || 3000;

// Bind app to port, and print message on successful listening
app.listen(port, () => {
    console.log(`Hello! This server's listening on ${port}.`);
});
