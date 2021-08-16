const express = require('express');
const fetch = require('node-fetch');

const app = express();
const baseUrl = 'https://rickandmortyapi.com/api/';
const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

//Get all characters
app.get('/characters', async (req, res) => {
    const characters = await fetch(`${baseUrl}character`);
    res.json(await characters.json());
});

//Get character by ID
app.get('/character/:id', async (req, res) => {
    const character = await fetch(`${baseUrl}character/${req.params.id}`);
    res.json(await character.json());
});

//Get Location by ID
app.get('/location/:id', async (req, res) => {
    const location = await fetch(`${baseUrl}location/${req.params.id}`);
    res.json(await location.json());
});

//Get Episode by ID
app.get('/episode/:id', async (req, res) => {
    const episode = await fetch(`${baseUrl}episode/${req.params.id}`);
    res.json(await episode.json());
});

app.listen(PORT, () => {
    console.log(`Server listening at PORT: ${PORT}`);
});