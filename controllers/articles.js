const db = require('../utils/db');

const getAllArticles = (req, res) => {
    let sql = 'SELECT * FROM article';
    db.query(sql, (error, result) => {
        res.render('index', {
            articles: result
        });
    })
}

const getArticleBySlug = (req, res) => {
    let sql = `SELECT * FROM article WHERE slug="${req.params.slug}"`
    db.query(sql, (error, result) => {
        const article = result[0];
        const author_id = result[0].author_id;
        const sql = `SELECT * FROM author WHERE id="${author_id}"`;
        db.query(sql, (error, result) => {
            const author = result[0];
            article['author_name'] = author.name;
            res.render('article', {
                article: article,
            })
        })
    })
}

const postNewArticle = (req, res) => {

    console.log("Received request body:", req.body);
    let sql = `INSERT INTO article (name, slug, image, body, published, author_id) VALUES
                (?,?,?,?,?,?)`;

    const values = [
        req.body.name,
        req.body.slug,
        req.body.image,
        req.body.body,
        req.body.published,
        req.body.author_id
    ]

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        };
        res.status(201).json({ message: "1 record inserted", result })
        console.log("1 record inserted");
    })
}

module.exports = {
    getAllArticles,
    getArticleBySlug,
    postNewArticle
}