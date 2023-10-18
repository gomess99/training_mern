const userService = require('../services/user.service')

const create = async (req, res) =>{
    const {name, username, email, password, avatar} = req.body;

    if(!name || !username || !email || !password || !avatar){
        res.status(400).send({message: "Algo deu errado"})
    }

    const user = await userService.create(req.body);

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

module.exports = {create}