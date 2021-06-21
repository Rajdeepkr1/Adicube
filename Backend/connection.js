const mongoose = require('mongoose')

const DB = process.env.DATABASE;

// const DB = 'mongodb+srv://rajdeep:raj1234@cluster0.xhpka.mongodb.net/adicubedata?retryWrites=true&w=majority';

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Data Connected"))
  .catch(() => console.log("Not connected"));
