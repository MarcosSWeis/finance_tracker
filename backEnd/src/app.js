const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
dotenv.config(); //seteamos las variables de entorno
const indexRouter = require("./router/apiIndexRouter");
const handlerErrors = require("./middlewares/handlerErrors");

const PORT = 3001;
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
app.use(methodOverride("__method")); //PARA PODER USAR LOS MÉTODOS PUT, DELETE, ETC
app.use(
  express.urlencoded({ extended: false }) //NECESARIO PARA PODER CAPTURAR TODO AQUELLO QUE VENGA DE UN FORMULARIO
);
app.use(express.json()); // LO CAPTURADO DEL FORMULARIO QUE ME LO GUARDE EN FORMATO JSON (SI ASI LO QUISIERAMOS)

app.use("/", indexRouter);
app.use(handlerErrors);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.code || 500);
  res.json(Object.keys(err).length == 0 ? err.message : err);
});

module.exports = app;

module.exports = app;
