const express = require('express');
const bodyParser = require('body-parser');
const category = require('./routes/category.routes');
const app = express();

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://admin:eazylog1234@ds123465.mlab.com:23465/eazylog_db';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/category', category);

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});