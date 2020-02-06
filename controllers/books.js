const express = require('express');
const Book = require('../db/schema');

const router = express.Router();

router.get('/', (req, res) => {
    Book.find({})
    .then(books => {
        res.render('index', { books });
    })
})



module.exports = router;