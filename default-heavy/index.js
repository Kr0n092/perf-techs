const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(4569, () => console.log('Default-Heavy web app listening on port 4569!'));