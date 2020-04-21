const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fenil23lad:fenil23lad@cluster0-fazqe.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');
require('./course.model');