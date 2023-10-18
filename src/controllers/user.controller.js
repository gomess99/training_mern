const userService = require('../services/user.service')
const mongoose = require("mongoose")

//sempre que for consultar algo no bd, é preciso a espera e por isso usa-se async

const create = async (req, res) =>{
    const {name, username, email, password, avatar} = req.body;

    if(!name || !username || !email || !password || !avatar){
        res.status(400).send({message: "Algo deu errado"})
    }

    const user = await userService.createService(req.body);

    if(!user){
        return res.status(400).send({ menssage: "Erro creating User"});
    }

    res.status(201).send({
        message: "Perfil criado com sucesso",
        user:{
            id: user._id,
            name,
            username,
            email,
            avatar,
        },  
    });
};

//relação assincrona usa-se async

const findAll = async(req, res) =>{
    const users = await userService.findAllService();

    if(users.length ===0){
        return res.status(400).send({ message: "Nenhum usuário cadastrado"});
    }

    res.send(users)
}

const findById = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({ menssage: "Id não encontrado"});
    }

    const user = await userService.findByIdService(id);

    if(!user){
        return res.status(400).send({ menssage: "Usuário não encontrado"});
    }

    res.send(user);
}

module.exports = {
    create,
    findAll,
    findById
}