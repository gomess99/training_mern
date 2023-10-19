const route = require('express').Router();
const userController = require('../controllers/user.controller')

const { validId, validUser } = require("../middlewares/global.middlewares")

route.post("/", userController.create) //cria users
route.get("/", userController.findAll) //busca todo users
route.get("/:id", validId, validUser, userController.findById) //busca users id
route.patch("/:id", validId, validUser, userController.update)

module.exports = route;