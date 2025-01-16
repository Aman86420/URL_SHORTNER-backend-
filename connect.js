const mongoose = require('mongoose');
require('dotenv').config();
const { URL } = require('./models/url');
const uri = process.env.MONGO_URI;

async function connectToDatabase() {
    await mongoose.connect(uri)
};

module.exports = { connectToDatabase };
