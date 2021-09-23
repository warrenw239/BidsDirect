const express = require('express');
const app = express();

const PORT = process.env.PORT || 9000;
app.use(express.static('/Users/warren/Documents/Project/BidsDirect/build'));

app.get('/*', function (req, res) {
  res.sendFile('/Users/warren/Documents/Project/BidsDirect/build/index.html');
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
