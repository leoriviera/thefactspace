import path from 'path';

import dotenv from 'dotenv';
import express from 'express';
import favicon from 'serve-favicon';

import facts from './facts';

dotenv.config();

// Get the total number of facts
const factCount = facts.length;

const getFact = (index: number) => {
    // Get fact at index
    const fact = facts[index];

    if (fact) {
        // Return destructred fact with index
        return {
            index,
            ...fact,
        };
    }

    return undefined;
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
        return;
    }

    // Try to get the the fact
    const fact = getFact(indexInt);

    // If the fact is undefined...
    if (fact === undefined) {
        // Send error
        res.status(404).json({
            index: indexInt,
            text: `Fact #${indexInt} hasn't been added, yet!`,
        });
        return;
    }

    // If the fact is not undefined,
    // (and in the array's bounds),
    // send fact
    res.json(fact);
    return;
});

app.get('/facts/:number', (req, res) => {
    // Set pagination multiple
    const multiple = 100;
    const { number } = req.params;

    // Get page number
    const pageNumber = parseInt(number);

    if (isNaN(pageNumber) || pageNumber < 0) {
        res.status(404).json({
            text: "This page doesn't exist!",
        });
        return;
    }

    const startIndex = pageNumber * multiple;
    const endIndex = startIndex + multiple;
    const factPage = facts.slice(startIndex, endIndex);
    res.json(factPage);
});

// Get the port
const port = process.env.PORT || 3000;

// Bind app to port, and print message on successful listening
app.listen(port, () => {
    console.log(`Hello! This server's listening on ${port}.`);
});
