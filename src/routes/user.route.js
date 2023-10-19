const route = require('express').Router();
const userController = require('../controllers/user.controller')

route.post("/", userController.create) //cria users
route.get("/", userController.findAll) //busca todo users
route.get("/:id", userController.findById) //busca users id
route.patch("/:id", userController.update)

module.exports = route;