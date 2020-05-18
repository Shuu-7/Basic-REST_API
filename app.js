const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//ROUTES
const post = require('./routes/posts');

//Middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/posts',post);
app.get('/', (req, res) => {
    res.send('We are Home');
});

//connection
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true
}, () => {
    console.log('Connection opened');
});


//listen on 3000
app.listen(3000);

