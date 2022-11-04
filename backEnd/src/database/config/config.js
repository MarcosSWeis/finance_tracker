module.exports = {
  development: {
    username: "root",
    password: null,
    database: "challenge_full_stack",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "challenge_full_stack", //tendria que poner una base de datos para test, por falta de tiempo no lo hago
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
