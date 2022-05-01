const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');





const dotenv = require('dotenv')


dotenv.config();

app.use(cors({ origin: "*" }));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3000);