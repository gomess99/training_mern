const userService = require('../services/user.service')

//sempre que for consultar algo no bd, é preciso a espera e por isso usa-se async

const create = async (req, res) =>{
    const {name, username, email, password, avatar} = req.body;

    if(!name || !username || !email || !password || !avatar){
        res.status(400).send({message: "Nem todos os componentes estão preenchidos"})
    }

    const user = await userService.createService(req.body); //cria o usuário no BD

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

    const user = req.user;

    res.send(user);
}

const update = async (req, res) => {
    const {name, username, email, password, avatar} = req.body;

    if(!name && !username && !email && !password && !avatar){
        res.status(400).send({message: "Necessário pelo menos um campo para realizar o update"})
    }

    const {id, user} = req;

    await userService.updateService(
        id,
        name,
        username,
        email,
        password,
        avatar
    )

    res.send({menssage: "Usuário atualizado com sucesso"})
}

module.exports = {
    create,
    findAll,
    findById,
    update
}