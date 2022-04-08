const mySql = require("mysql2");

const config = {
  host: "localhost",
  user: "root",
  password: null,
};

//Abrimos la coneccion al servidor

const connection = mySql.createConnection(config);

connection.query(`CREATE DATABASE IF NOT EXISTS anime`, function (err, result) {
  console.log(err);
  console.log(result);
});
