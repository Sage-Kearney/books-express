const mongoose = require('./connection');

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    image: String,
    summary: String,
    category: String,
    read: Boolean,
    review: String
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;