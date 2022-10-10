const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('The greates gift gift of man is tomorrow, A new day gives birth to new hope. Hope is the fuel for human survival.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
