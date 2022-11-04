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
      let avatar;
      if (!file) {
        avatar = "default.png";
      } else {
        avatar = file.filename;
      }

      const user = await db.User.create({
        ...body,
        avatar: avatar,
        active: 1,
        admin: 0,
      });

      res.status(200).json({
        status: true,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
      });
      console.log(error);
    }
  },
  login: async (req, res) => {
    const body = req.body;
    //validacion con express-validator
    if (!body.email && !body.password) {
      return res.status(500).json("email and password properties are required");
    }
    const user = await db.User.findOne({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      return res.status(401).json("Unauthorized");
    }

    if (user.password.trim() !== body.password.trim()) {
      return res.status(401).json("Unauthorized");
    }

    const userForToken = {
      id: user.id,
      nickName: user.nickName,
    };
    console.log(process.env.JWT_SECRET);
    const token = jwt.sign(userForToken, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIME_EXPIRY,
    });
    const response = {
      data: {
        accessToken: token,
        username: user.nickName,
        avatar: user.avatar,
      },
    };
    return res.status(200).json(response);
  },

  post: (req, res) => {
    res.status(401).json({ msg: "Post fue creado" });
  },
};
