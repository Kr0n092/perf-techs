const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(4568, () => console.log('Service Worker Test App listening on port 4568!'));