const { Router } = require('express');
const routerHome2 = Router();

const clientController = require('../controllers/clientController');

// router.get('/', async (req, res) => {
//   try {
//     const typeis =  await homeController();
//         res.status(200).send(typeis);
//     } catch (error) {
//         res.status(400).send({ error: error.message });
//     }
// })

routerHome2.get('/', clientController.clientOneController);

module.exports = routerHome2;