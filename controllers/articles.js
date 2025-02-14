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
   let testSql = `INSERT INTO article (id, name, slug, image, body, published, author_id) VALUES
(1, 'Introduction to Ashtanga', 'introduction-to-ashtanga', 'ashtanga.jpg', '<p>Body test</p>', '2020-01-08 15:02:30', 3)`;

db.query(testSql, (error, result) => {
    if (err) throw err;
    console.log("1 record inserted");
    })
} 

module.exports = {
    getAllArticles,
    getArticleBySlug,
    postNewArticle
}