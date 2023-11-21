const express = require('express');

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('It works - I was made by Zubair');
});

app.listen(PORT);
