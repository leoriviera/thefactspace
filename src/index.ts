import express from 'express';

import facts from './facts';

const getRandomFact = () => {
    // Generate random number between 0 and facts.length - 1
    const index = Math.floor(Math.random() * facts.length);
    // Get random fact
    const fact = facts[index];
    return { index, fact };
};

const app = express();
app.set('view engine', 'pug');

app.get('/', (_, res) => {
    const { index, fact } = getRandomFact();
    const factCount = facts.length;

    res.render('index', {
        index,
        ...fact,
        factCount,
    });
});

app.get('/fact/:index?', (req, res) => {
    const { index } = req.params;
    const indexInt = parseInt(index);

    console.log(index, indexInt, indexInt == NaN);

    if (isNaN(indexInt)) {
        res.redirect('/random');
    }

    const fact = facts[indexInt];

    res.json(fact);
});

app.get('/random', (_, res) => {
    const fact = getRandomFact();

    res.json(fact);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Hello! This server's listening on ${port}.`);
});
