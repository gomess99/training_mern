const create = (req, res) =>{
    const {name, username, email, password, avatar} = req.body;

    if(!name || !username || !email || !password || !avatar){
        res.status(400).send({message: "Algo deu errado"})
    }

    res.status(201).send({
        message: "Perfil criado com sucesso",
        user:{
            name,
            username,
            email,
            avatar,
        },  
    });
};

module.exports = {create}