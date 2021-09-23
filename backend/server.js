const express = require('express');
const app = express();

const PORT = process.env.PORT || 9000;
app.use(express.static('/Users/warren/Documents/Project/BidsDirect/build'));

app.get('/', function (req, res) {
    // console.log(PORTENV, 'port');
//   res.sendFile(path.join('BidsDirect', 'build', 'index.html'));
  res.sendFile('/Users/warren/Documents/Project/BidsDirect/build');
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
