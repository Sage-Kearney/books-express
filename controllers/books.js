const express = require('express');
const Book = require('../db/schema');

const router = express.Router();

router.get('/', (req, res) => {
  Book.find({}).then(books => {
    res.render('index', { books });
  });
});

router.get('/:title/edit', (req, res) => {
  Book.findOne({ title: req.params.title }).then(book => {
    res.render('edit', book);
  });
});

router.put('/:title', (req, res) => {
  const read = req.body.read === 'on' ? true : false;
  const book = {
    review: req.body.review,
    read
  };
  Book.findOneAndUpdate({ title: req.params.title }, book, { new: true }).then(
    book => {
      res.redirect('/books');
    }
  );
});

router.get('/:title', (req, res) => {
  Book.find({ title: req.params.title }).then(book => {
    res.render('show', book[0]);
  });
});

module.exports = router;
