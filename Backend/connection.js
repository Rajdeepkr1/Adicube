const mongoose = require('mongoose')

const DB = process.env.DATABASE;

//const DB = 'mongodb+srv://adicube:adicube@cluster0.1ndxv.mongodb.net/Brand?retryWrites=true&w=majority';

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Data Connected"))
  .catch(() => console.log("Not connected"));
