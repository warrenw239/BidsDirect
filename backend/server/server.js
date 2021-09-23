const express = require('express');
const DBimports = require('../database/database');

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static('/Users/warren/Documents/Project/BidsDirect/build'));

app.get('/*', function (req, res) {
  res.sendFile('/Users/warren/Documents/Project/BidsDirect/build/index.html');
});

DBimports.connection();

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
