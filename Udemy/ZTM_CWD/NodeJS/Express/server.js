const express = require('express');
const bp = require('body-parser');

const app = express();

app.use(bp.urlencoded({extended: false}));
app.use(bp.json());
app.get('/', (req, res) => {
   res.send('gooo gooo new job');
});

app.listen(3001);