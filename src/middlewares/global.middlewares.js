const mongoose = require("mongoose")
const userService = require('../services/user.service')

const validId = (req, res, next) => {
    try
        {const id = req.params.id;

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send({ menssage: "Id não encontrado"});
        }

    next();}catch(err){
        res.status(500).send({menssage: err.menssage})
    }
};

const validUser = async (req, res, next) => {
    const id = req.params.id;

    const user = await userService.findByIdService(id);

    if (!user) {
        return res.status(400).send({ menssage: "Usuário não encontrado"})
    }
    req.id = id;
    req.user = user;

    next();
};

module.exports = {
    validId,
    validUser
}