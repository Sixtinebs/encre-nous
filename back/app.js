const express = require('express');
const app = express();
const path = require("path");
const sequelize  = require('./config/config');
const author = require('./routes/author');
const bl = require('./routes/beta_reader');
const book = require('./routes/book');
//const service = require('./routes/service');
const user = require('./routes/user');
const message = require('./routes/message');
const cors = require('cors');


const corsOptions = {
   origin: '*',
   optionsSuccessStatus: 200,
   allowedHeaders: 'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization',
   methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS'
 }
 app.use(cors(corsOptions));
 app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//    res.setHeader('Access-Control-Allow-Origin', '*');
//    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//    next();
//  });
 
//test connect database
//  try {
//    sequelize.authenticate();
//    console.log('Connection has been established successfully.');
// } catch (error) {
//    console.error('Unable to connect to the database:', error);
// }

app.set('views', path.resolve(__dirname, 'views'));

app.get('/', function (req, res) {
   res.send('Encre-nous');
});

app.use('/images', express.static(path.join(__dirname, 'images')));

//Routes
app.use(author);
app.use(bl);
app.use(book);
//app.use(service);
app.use(user);
app.use(message)

module.exports = app;
