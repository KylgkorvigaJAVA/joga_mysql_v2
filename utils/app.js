const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const app = express();
const routes = require('../routes/articles')

app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/../views/layouts/'
}));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/form', routes)


module.exports = app;