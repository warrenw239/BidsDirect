const mongoose = require('mongoose');

const host = process.env.host || 'localhost';

const connection = () => mongoose.connect(`http://${host}:27017/data`, () => console.info(`database connected at ${host}`));

const consumerSchema = new mongoose.Schema({
    username: String,
    email: String,
    projects: Array,
});

const projectSchema = new mongoose.Schema({
    owner: String,
    status: String,
    pictures: Array,
    contractor: String,
    bids: Array,
    type: String,
    location: String,
    exiration: Number,
});

const contractorSchema = new mongoose.Schema({
    Company: String,
    email: String,
    capabilities: Array,
    projects: Array,
});

const Consumer = mongoose.model('Consumer', consumerSchema);
const Project = mongoose.model('Project', projectSchema);
const Contractor = mongoose.model('Contractor', contractorSchema);

module.exports = {
    connection,
    Consumer,
    Project,
    Contractor,
};
