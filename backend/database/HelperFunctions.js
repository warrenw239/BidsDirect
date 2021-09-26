// import mongoose from 'mongoose';
const DBImports = require('./database');

const readAllConsumers = (email) => DBImports.Consumer.findOne({ email: email });

const createNewUser = (info) => DBImports.Consumer.create(info);

const deleteUser = (info) => DBImports.Consumer.deleteOne({ email: info });

module.exports = {
    readAllConsumers,
    createNewUser,
    deleteUser,
};
