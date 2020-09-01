var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.connection.on('connected', function(){
  console.log(`Connected to MongoDB at ${process.env.DATABASE_URL}`);
});

module.exports = mongoose;