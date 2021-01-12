const mongoose = require('mongoose');

const uri = 'mongodb://localhost/mean-crud';
mongoose.connect(uri)
.then(db=>console.log('Db is connect'))
.catch(err => console.error(err));

module.exports= mongoose;