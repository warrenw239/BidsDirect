const DBimports = require('./database');

const createConsumer = (user) => {
  DBimports.Consumer.create(user).then((info) => {
    console.log(info);
  });
};

const readConsumer = () => {
  DBimports.Consumer.find().then((users) => {
    console.log(users);
  });
};
