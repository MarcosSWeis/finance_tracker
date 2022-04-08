const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const authorization = req.get("authorization");
  let token = null;
  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }
  //verifico el toquen que llega en la cabecera
  let decodedToken = {};
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return next(err);
  }
  //una vez decodificado el toquen , verificamos que los datos que trae el mismo son correctos
  if (!token || !decodedToken.id) {
    //significa que no dicha petición no tiene acceso
    return res
      .status(401)
      .json({ error: "Error el token no existe o es invalido" });
  }
  //como req es un objeto  y esto es un va a ser un middleware de ruta el req le seteo el userId

  const { id } = decodedToken;

  req.userId = id;

  next();
  //una vez decodificado el token y todo , ya tengo el id en el token , no necesito traerlos del del body ni nada
};
