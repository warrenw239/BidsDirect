const express = require('express');
const DBimports = require('../database/database');
require('dotenv').config({ path: '/Users/warren/Documents/Project/BidsDirect/.env'});

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static('/Users/warren/Documents/Project/BidsDirect/build'));

//TODO: in process building here.
app.post('/data', (req) => console.info(req.query.user));

app.get('/*', (req, res) => res.sendFile('/Users/warren/Documents/Project/BidsDirect/build/index.html'));

DBimports.connection();

app.listen(PORT, () => console.info(`listening on ${PORT}`));
