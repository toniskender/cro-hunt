const router = require('express').Router();
let Article = require('../models/article.model');

// GET all articles
router.route('/').get((req, res) => {
  Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST new article
router.route('/add').post((req, res) => {
  const { title, content, author } = req.body;

  const newArticle = new Article({ title, content, author });

  newArticle.save()
    .then(() => res.json('Article added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// PUT update article
router.route('/update/:id').put((req, res) => {
  Article.findById(req.params.id)
    .then(article => {
      if (!article) {
        return res.status(404).json('Article not found');
      }

      article.title = req.body.title;
      article.content = req.body.content;
      article.author = req.body.author;

      article.save()
        .then(() => res.json('Article updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE article
router.route('/delete/:id').delete((req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(article => {
      if (!article) {
        return res.status(404).json('Article not found');
      }
      res.json('Article deleted!');
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;