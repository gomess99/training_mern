const express = require('express')
const app = express();
const userRoute = require("./src/routes/user.route")
const connetcDatabase = require("./src/database/db")

const port = 3000;

connetcDatabase()
app.use(express.json());
app.use("/user", userRoute);

//ROTA
  //Method HTTP
    //GET - Pega um info
    //POST - Cria uma info
    //PUT - Altera toda info
    //Path - Altera a parte da info
    //Delete - Apaga uma info

  //NAME - um idendtificador da rota

  //Function (Callback) - Responsável por executar algum comando

  app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));