// Los servicios se encargan de manejar una funcion completa de la aplicacion y tareas mas especificas

// En el caso de la empresa los modelos remplazarían a los servicios porque en los servicios se maneja una funcion mas completa para los tokens y los modelos irian a base de datos

let users = [
  {
    name: 'User 1',
    id: 1,
  }, {
    name: 'User 2',
    id: 2,
  }, {
    name: 'User 3',
    id: 3,
  }
];
let id = 4;

module.exports = {
  userAllService: async () => {
    return users;
  },

  createUser: async (name) => {
    const newUser = {
      name,
      id,
    };
    id++;
    users.push(newUser);
    console.log("Nuevo usuario añadido:", newUser); // Verifica que el usuario se añade
    console.log("Estado actual del array de usuarios:", users); // Verifica el estado del array
  },
};

