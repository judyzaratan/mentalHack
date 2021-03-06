const express = require('express');
const path = require('path');

const app = express()


app.use('/assets', express.static(`${__dirname}/assets`));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname + '/screening.html'))
);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
