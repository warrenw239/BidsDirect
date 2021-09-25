const express = require('express');
const DBimports = require('../database/database');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 9000;
app.use(express.static('/Users/warren/Documents/Project/BidsDirect/build'));

app.get('/*', (req, res) => res.sendFile('/Users/warren/Documents/Project/BidsDirect/build/index.html'));

DBimports.connection();

app.listen(PORT, () => console.info(`listening on ${PORT}`));
