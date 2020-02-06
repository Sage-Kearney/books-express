const express = require('express');
const Book = require('../db/schema');

const router = express.Router();

router.get('/', (req, res) => {
    Book.find({})
    .then(books => {
        res.render('index', { books });
    });
});

router.get('/:title', (req, res) => {
    Book.find({ title: req.params.title})
    .then(book => {
        res.render('show', book[0] );
    });
});


module.exports = router;