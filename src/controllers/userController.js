// Funciones que realizan la logica de negocio de la aplicacion

// La rutas recibi la peticion, pasa al controlador que dice que se va a hacer y va a los modelos a pedir la informacion que necesita de la base de datos y responder al cliente con la informacion que obtenida

// Nosotros vamos a tener  router y un controlador por cada modelo que tengamos en la base de datos

// En la empresa en el controlador llama al modelo que realiza la consulta a base de datos y se organiza la informacion que se va a enviar al cliente

// En la empresa se maneja un router y un controlador por lo que se manejan con microservicios especificos

// Otra forma de hacerlo es que el controlador llame a un servicio para pedir la informacion a la base de datos

// Los controllers tambien se pueden modularizar

const userServices = require('../services/userServices');

const userCreateController = async (req, res) => {
  const { name } = req.body;
  console.log("Datos de entrada:", req.body); // Verifica los datos de entrada
  try {
    await userServices.createUser(name);
    res.status(201).json({ message: "User created" });
  } catch (error) {
    console.error("Error en userCreateController:", error); // Imprime el error
    res.status(500).json({ error: "Error del servidor" });
  }
}

const userAllController = async (req, res) => {
  try {
    const users = await userServices.userAllService();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error en userAllController:", error); // Imprime el error
    res.status(500).json({ error: "Error del servidor" });
  }
}

module.exports = {
  userCreateController,
  userAllController,
};