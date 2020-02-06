const Book = require('./schema');
const seedData = require('./seeds.json');

Book.remove({}).then(() => Book.collection.insert(seedData))
.then(() => { process.exit();
});