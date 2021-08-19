const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const baseUrl = 'https://rickandmortyapi.com/api/';
const PORT = process.env.PORT || 5050;
const corsConfig = {origin: 'http://localhost:3000'}

app.use(cors());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

//Get all characters
app.get('/characters', cors(corsConfig), async (req, res) => {
    try{
        const characters = await fetch(`${baseUrl}character`);
        res.json(await characters.json());
    } catch(e){
        console.log(`ERROR: ${e}`)
    }
});

//Get character by ID
app.get('/character/:id', cors(corsConfig), async (req, res) => {
    try{
        const character = await fetch(`${baseUrl}character/${req.params.id}`);
        res.json(await character.json());
    } catch(e){
        console.log(`ERROR: ${e}`)
    }
});

//Get Location by ID
app.get('/location/:id', cors(corsConfig), async (req, res) => {
    try{
        const location = await fetch(`${baseUrl}location/${req.params.id}`);
        res.json(await location.json());
    } catch(e){
        console.log(`ERROR: ${e}`)
    }
});

//Get Episode by ID
app.get('/episode/:id', cors(corsConfig), async (req, res) => {
    try{
        const episode = await fetch(`${baseUrl}episode/${req.params.id}`);
        res.json(await episode.json());
    } catch(e){
        console.log(`ERROR: ${e}`)
    }
});

app.listen(PORT, () => {
    console.log(`Server listening at PORT: ${PORT}`);
});