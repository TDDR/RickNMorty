const express = require('express');
const fetch = require('node-fetch');

const app = express();
const baseUrl = 'https://rickandmortyapi.com/api/';
const fetchConfig = { method: 'GET'};
const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/characters', async (req, res) => {
    const characters = await fetch(baseUrl + 'character');
    res.json(await characters.json());
})

app.listen(PORT, () => {
    console.log(`Server listening at PORT: ${PORT}`);
})