const mongoose = require('mongoose');

const connetcDatabase = () => {
    mongoose.connect(
        "mongodb+srv://root:root@cluster0.xkhqpbg.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() => console.log("MongoDB conect"))
    .catch((error) => console.log(error))
}

module.exports = connetcDatabase;