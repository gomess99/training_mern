
import mongoose from "mongoose"; //importa a biblioteca do mongoose

const connetcDatabase = () => {
    mongoose.connect(
        "mongodb+srv://root:root@cluster0.xkhqpbg.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}
    )
    //exibi no terminal
    .then(() => console.log("MongoDB conect"))
    .catch((error) => console.log(error))
}

export default connetcDatabase;