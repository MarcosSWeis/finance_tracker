const ERROR_HANDLER = {
  JsonWebTokenError: (res, err) =>
    res.status(401).json({ JsonWebTokenError: "Token invalido" }),
  TokenExpiredError: (res) =>
    res.status(401).json({ TokenExpiredError: "Token expirado" }),
  defaultError: (res) => res.status(500).end(),
};
module.exports = (err, req, res, next) => {
  console.log(err.name, 999999999);
  //si hay un error ejecuto el nombre de ese error con el ERROR_HANDLER y
  // si es un error que no conozco va a cae en el default error
  const handler = ERROR_HANDLER[err.name] || ERROR_HANDLER.defaultError;
  handler(res, err);
};
