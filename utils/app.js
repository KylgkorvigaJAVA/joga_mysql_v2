const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const app = express();

app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/../views/layouts/'
}));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/articles/new', (req, res) => {
    res.render('articles/new');
});

app.post('/articles', (req, res) => {
    const { name, published, author_name, body, image } = req.body;

    const article = {
        name,
        published,
        author_name,
        image,
        body
    };

    res.render('article', { article });
});

app.use(express.json());

module.exports = app;