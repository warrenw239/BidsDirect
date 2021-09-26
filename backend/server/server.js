const express = require('express');
const DBImports = require('../database/database');
const helpers = require('../database/HelperFunctions');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static('/Users/warren/Documents/Project/BidsDirect/build'));

app.get('/data', (req, res) => {
    const userData = JSON.parse(req.query.user);
    helpers.readAllConsumers(userData.email).then((user) => {
        // console.log(user);
        !user
            ? helpers.createNewUser({
                  username: userData.nickname,
                  email: userData.email,
                  picture: userData.picture,
              })
            : res.send(user);
    });
});

app.get('/*', (req, res) => res.sendFile('/Users/warren/Documents/Project/BidsDirect/build/index.html'));

DBImports.connection();

app.listen(PORT, () => console.info(`listening on ${PORT}`));
