const mongoose = require('mongoose');

const host = process.env.host || 'localhost';

const connection = () =>
  mongoose.connect(`http://${host}:27017/data`, () => {
    console.log(`database connected at ${host}`);
  });

const userSchema = new mongoose.Schema({
  username: String,
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
});

const contractorSchema = new mongoose.Schema({
  Company: String,
  capabilities: Array,
  projects: Array,
});

module.exports = connection;
