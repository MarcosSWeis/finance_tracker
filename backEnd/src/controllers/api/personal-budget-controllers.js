const db = require("../../database/models");
const handlerErrors = require("../../middlewares/handlerErrors");
const { transformDay } = require("../../../helpers/lib");
const dayjs = require("dayjs");

module.exports = {
  list: (req, res, next) => {
    //una vez decodificado el token y todo , mande por la req el id req.userId
    const { userId: id, body } = req;

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
  createFixedIncome: async (req, res, next) => {
    const { userId: id, body } = req;
    console.log(id, "id");
    console.log(body, "body");
    try {
      const checkOneFixedIncome = await db.Incomes.findAll({
        where: {
          user_id: id,
        },
        attributes: ["fixed_income"],
      });
      console.log(checkOneFixedIncome, "checkOneFixedIncome");
      // lo dejo asi por seguridad del backEnd , si bien en el front no dejo mostrar la opccion , un pedido a la api con un token valido
      // funcionaria para que un usuario tenga dos ingresos fijos , en cambio asi no
      if (checkOneFixedIncome.length === 0) {
        const newIncome = await db.Incomes.create({
          user_id: id,
          fixed_income: body.fixed_income,
          varied_income: body.varied_income,
          category_inc_id: body.category_inc_id,
          description: body.description,
        });
        let ok;
        let status;
        let statusText;

        if (newIncome) {
          ok = true;
          status = 201;
          statusText = "Created";
        } else {
          ok = false;
          status = 500;
          statusText = "Error interno del servidor";
        }
        const response = {
          meta: {
            ok: ok,
            status: status,
            statusText: statusText,
            url: "",
          },
          data: newIncome,
        };
        res.status(201).json(response);
      } else {
        res.status(405).json({
          meta: {
            ok: false,
            status: 405,
            statusText: "Method no allowed",
            url: "",
          },
          msg: "No puede ingresar otro monto fijo, ya posee uno. Para modificarlo vaya a editar ingreso fijo ",
        });
      }
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  getIncomes: async (req, res, next) => {
    try {
      const { userId: id } = req;
      console.log(id);
      const incomes = await db.Incomes.findAll({
        where: {
          user_id: id,
        },
      });
      let ok;
      let status;
      let statusText;
      if (incomes) {
        ok = true;
        status = 201;
        statusText = "OK";
      } else {
        ok = false;
        status = 500;
        statusText = "Error interno del servidor";
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          length: incomes.length,
          url: "http://localhost:3001/budget/income",
        },
        data: incomes,
      };
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  getCategories: async (req, res) => {
    try {
      const categories = await db.Categories_income.findAll({
        raw: true,
      });
      let ok;
      let status;
      let statusText;
      if (categories) {
        ok = true;
        status = 201;
        statusText = "OK";
      } else {
        ok = false;
        status = 500;
        statusText = "Error interno del servidor";
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          length: categories.length,
          url: "http://localhost:3001/budget/categories_income",
        },
        data: categories,
      };

      categories
        ? res.status(200).json(response)
        : res.status(500).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  updateIncome: (req, res) => {
    const { userId: id, body } = req;
    console.log(id, "id");
    console.log(body, "body");
  },
};
