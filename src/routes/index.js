const { Router } = require('express');
const cors = require('cors');

// Se definen las rutas de la API con la cual nos podemos comunicar

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const users = require('./usersRoutes');
const clients = require('./clientsRoutes');

const router = Router();
router.use(cors());
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/users', users);
router.use('/clients', clients);



module.exports = router;