const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const stories = require('./data/stories.json')

app.get('/', (req, res) => {
    res.send('storis api running');
})

app.get('/stories', (req, res) => {
    res.send(stories)
})

app.listen(port, () => {
    console.log('stories server is running o port', port);
})