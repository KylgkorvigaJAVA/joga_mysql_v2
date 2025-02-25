const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articles');

router.get('/', articleController.getAllArticles);
router.get('/add-article', articleController.getArticleForm);
router.get('/article/:slug', articleController.getArticleBySlug);
router.post('/add-article', articleController.postNewArticle);
module.exports = router;