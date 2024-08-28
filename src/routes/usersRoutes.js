const { Router } = require('express');
const routerUser = Router();

const { validateUser } = require('../middlewares/validateUser');
const userController = require('../controllers/userController');

routerUser.get('/', userController.userAllController);

routerUser.post('/', validateUser, userController.userCreateController);

module.exports = routerUser;