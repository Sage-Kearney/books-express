const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/books', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});


module.exports = mongoose;
