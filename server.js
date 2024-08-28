const app = require('./app.js');
// const { conn } = require('./src/db.js');
// require('dotenv').config();
// const { PORT } = process.env;

// Syncing all the models at once.
// conn.sync({ force: true }).then(() => {
  app.listen(3000, () => {
    console.log('%s listening at ' + 3000); // eslint-disable-line no-console
  });
// });