const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(4567, () => console.log('Service Worker Test App listening on port 3000!'));