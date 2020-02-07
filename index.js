const booksController = require('./controllers/books');
const express = require('express');
const methodOverride = require('method-override');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs');

app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use('/books', booksController);

app.listen(4000, () => {
  console.log('app listening on port 4000');
});
