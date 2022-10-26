const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const stories = require('./data/stories.json')
const storieDetails = require('./data/storieDetails.json')

app.get('/', (req, res) => {
    res.send('storis api running');
})

app.get('/stories', (req, res) => {
    res.send(stories)
})

app.get('/storie/:id', (req, res) => {
    const id = req.params.id;
    const storieDetail = storieDetails.find(s => s.id === id);
    res.send(storieDetail)
})

app.listen(port, () => {
    console.log('stories server is running o port', port);
})