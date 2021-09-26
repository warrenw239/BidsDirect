// import mongoose from 'mongoose';
const DBImports = require('./database');

const readAllConsumers = (email) => DBImports.Consumer.findOne({ email: email});

const createNewUser = (info) => DBImports.Consumer.create(info).then((result) => console.log(result));

const deleteUser = (info) => DBImports.Consumer.deleteOne({email: info}).then((result) => console.log(result));

const createTest = () => DBImports.Consumer.create({
    email: 'warrenw239@gmail.com',
    username: 'warrenw239',
    projects: {}
}).then((result) => console.log(result)); 

// createTest();


module.exports = {
    readAllConsumers,
    createNewUser,
    createTest,
    deleteUser
};