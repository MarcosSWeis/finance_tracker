module.exports = {
  list: (req, res, next) => {
    //una vez decodificado el token y todo , mande por la req el id req.userId
    const { userId: id } = req;
    //usar el id para todo
    const dbz = {
      title: "dragon ball z",
      pjs: {
        prota: "goku",
        dragon: "shenglon",
      },
      fecha: "15-03-2000",
    };

    res.json(dbz);
  },
};
