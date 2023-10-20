import express from "express";
import connetcDatabase from "./database/db.js"
import userRoute from "./routes/user.route.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

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