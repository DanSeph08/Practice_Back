// Funciones que realizan la logica de negocio de la aplicacion

// La rutas recibi la peticion, pasa al controlador que dice que se va a hacer y va a los modelos a pedir la informacion que necesita de la base de datos y responder al cliente con la informacion que obtenida

// Nosotros vamos a tener  router y un controlador por cada modelo que tengamos en la base de datos

// En la empresa en el controlador llama al modelo que realiza la consulta a base de datos y se organiza la informacion que se va a enviar al cliente

// En la empresa se maneja un router y un controlador por lo que se manejan con microservicios especificos

// Otra forma de hacerlo es que el controlador llame a un servicio para pedir la informacion a la base de datos

// Los controllers tambien se pueden modularizar

module.exports = {
  
 clientOneController: (req, res) => { 
    res?.status(200)?.send("Hello World Client");
  },

  clientAllController: (req, res) => { 
    res?.status(200)?.send("Hello World Clients");
  }
}