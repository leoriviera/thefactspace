import express from 'express';

import facts from './facts';

const getRandomFact = () => {
    // Generate random number between 0 and facts.length - 1
    const randomIndex = Math.floor(Math.random() * facts.length);
    // Get random fact
    const randomFact = facts[randomIndex];
    // Serve (with correct mime type)
    // See https://expressjs.com/en/api.html#express.json
    return randomFact;
};

const app = express();
app.set('view engine', 'pug');

app.get('/', (_, res) => {
    const randomFact = getRandomFact();
    res.render('index', {
        ...randomFact,
    });
});

app.get('/random', (_, res) => {
    const randomFact = getRandomFact();
    res.json(randomFact);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Hello! This server's listening on ${port}.`);
});
