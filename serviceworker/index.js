const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(4567, () => console.log('Service Worker Test App listening on port 4567!'));