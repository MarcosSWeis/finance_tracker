`Para crear la base de datos hay que correr el archivo create-data-base.js que esta en la raíz`
`para ejecutar el archivo :`

node create_db.js

ctl + c para matar el proceso

`para ejecutar las migraciones :`

npx sequelize-cli db:migrate

`para ejecutar las seeders (semillas):`

npx sequelize-cli db:seed:all
