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

const app = express();
app.set('view engine', 'pug');

app.get('/', (_, res) => {
    const fact = getRandomFact();
    const factCount = facts.length;

    res.render('index', {
        ...fact,
        factCount,
    });
});

app.get('/fact/:index?', (req, res) => {
    const { index } = req.params;
    const indexInt = parseInt(index);

    if (isNaN(indexInt)) {
        res.redirect('/random');
    } else {
        const fact = facts[indexInt];

        if (fact !== undefined) {
            res.json({
                index,
                ...fact,
            });
        } else {
            res.status(404).send(`Fact #${index} not found.`);
        }
    }
});

app.get('/random', (_, res) => {
    const fact = getRandomFact();

    res.json(fact);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Hello! This server's listening on ${port}.`);
});
