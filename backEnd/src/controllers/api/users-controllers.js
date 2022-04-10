const db = require("../../database/models");
const jwt = require("jsonwebtoken");
module.exports = {
  list: async (req, res) => {
    const users = await db.User.findAll();
    res.send(users);
  },
  register: async (req, res) => {
    try {
      const body = req.body;
      const file = req.file; //si req.file viene undefined es porque no subieron foro , ahi le asigno la default.png
      //hay que hacer lo de bcryp
      //el login lo hacemos con query pasrams y hacer lo del token
      console.log(file, 555555555555);
      //const password = req.body.password;
      console.log(body, 121121212);
      let avatar;

      if (!file) {
        avatar = "default.png";
      }
      avatar = file.filename;

      const user = await db.User.create({
        ...body,
        avatar: avatar,
        active: 1,
        admin: 0,
      });

      res.json({
        status: true,
      });
    } catch (error) {
      console.log(error);
    }
  },
  login: async (req, res) => {
    const body = req.body;
    // console.log(body.email);
    // console.log(body.password);
    console.log(body);

    //validacion con express-validator
    const user = await db.User.findOne({
      where: {
        email: body.email,
      },
    });
    let ok;
    let status;
    let statusText;
    if (user) {
      ok = true;
      status = 200;
      statusText = "OK";
    } else {
      ok = false;
      status = 401;
      statusText = "Unauthorized";
    }

    const response = {
      meta: {
        ok: ok,
        status: status,
        statusText: statusText,
        url: "http://localhost:3001/users/login",
      },
      data: {
        accessToken: null,
      },
    };

    if (user && user.password == body.password) {
      const userForToken = {
        id: user.id,
        nickName: user.nickName,
      };
      //cuando el usuario ingrese a su cuenta y todo ande bien validaciones etc
      const token = jwt.sign(userForToken, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_TIME_EXPIRY,
      });
      response.data.accessToken = token;
      res.status(200).json(response);
    } else {
      res.status(401).json(response);
    }
  },
  post: (req, res) => {
    res.status(401).json({ msg: "Post fue creado" });
  },
};
