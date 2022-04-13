const mongoose = require('mongoose');

const conectToDb = () =>{
    mongoose
        .connect(
        "mongodb+srv://morinishi:12345@nodejs.oazds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(()=> console.log("MongoDB Atlas Conectado"))
    .catch((err)=> console.log(err))
}

module.exports = conectToDb;