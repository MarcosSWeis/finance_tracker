const db = require("../../database/models");
const handlerErrors = require("../../middlewares/handlerErrors");
const { transformDay } = require("../../../helpers/lib");
const dayjs = require("dayjs");
const { Sequelize, sequelize } = require("../../database/models");
const Op = Sequelize.Op;

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

    try {
      const checkOneFixedIncome = await db.Incomes.findAll({
        where: {
          user_id: id,
        },
        attributes: ["fixed_income"],
      });

      // lo dejo asi por seguridad del backEnd , si bien en el front no dejo mostrar la opccion , un pedido a la api con un token valido
      // funcionaria para que un usuario tenga dos ingresos fijos , en cambio asi no
      if (checkOneFixedIncome.length === 0) {
        const newIncome = await db.Incomes.create({
          ...body,
          user_id: id,
          varied_income: 0,
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
  createVarIncome: async (req, res, next) => {
    const { userId: id, body } = req;
    try {
      const newVarIncome = await db.Income_expenses.create({
        ...body,
        user_id: id,
      });

      let ok;
      let status;
      let statusText;

      if (newVarIncome) {
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
        data: newVarIncome,
      };
      newVarIncome ? res.status(201).json(response) : res.status(500).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  getIncomes: async (req, res, next) => {
    try {
      const { userId: id } = req;

      const incomes = await db.Fixed_income.findAll({
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
  getCategoriesIncome: async (req, res) => {
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
          total: categories.length,
          url: "http://localhost:3001/budget/categories_income",
        },
        data: categories,
      };

      categories ? res.status(200).json(response) : res.status(500).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },

  getCategoriesExpenses: async (req, res, next) => {
    try {
      const categoriesExpenses = await db.Categories_expenses.findAll({
        raw: true,
      });
      let ok;
      let status;
      let statusText;
      let total;

      if (categoriesExpenses) {
        ok = true;
        status = 201;
        statusText = "OK";
        total = categoriesExpenses.length;
      } else {
        ok = false;
        status = 500;
        statusText = "Error interno del servidor";
        total = categoriesExpenses.length;
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          url: "http://localhost:3001/budget/categories_expenses",
        },
        data: categoriesExpenses,
      };
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  getExpenseType: async (req, res, next) => {
    try {
      const expenseType = await db.Expense_type.findAll({
        raw: true,
      });
      let ok;
      let status;
      let statusText;
      let total;

      if (expenseType) {
        ok = true;
        status = 201;
        statusText = "OK";
        total = expenseType.length;
      } else {
        ok = false;
        status = 500;
        statusText = "Error interno del servidor";
        total = expenseType.length;
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          total: total,
          url: "http://localhost:3001/budget/expense_type",
        },
        data: expenseType,
      };
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  updateIncome: async (req, res, next) => {
    try {
      const { userId: id, body } = req;
      const updateIncome = await db.Fixed_income.findOne({
        where: {
          user_id: id,
        },
      });
      await updateIncome.set("fixed_income", body.fixed_income);
      await updateIncome.set("category_inc_id", body.category_inc_id);
      await updateIncome.set("description", body.description);
      await updateIncome.save();
      let ok;
      let status;
      let statusText;
      if (updateIncome) {
        ok = true;
        status = 201;
        statusText = "OK";
      } else {
        ok = false;
        status = 304;
        statusText = "Error interno del servidor";
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          url: "http://localhost:3001/budget/update_income",
        },
        data: updateIncome,
      };
      updateIncome ? res.status(200).json(response) : res.status(304).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  createExpense: async (req, res, next) => {
    try {
      const { userId: id, body } = req;

      const newIncomeExpenses = await db.Income_expenses.create({
        user_id: id,
        ...body,
      });
      let ok;
      let status;
      let statusText;
      if (newIncomeExpenses) {
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
          url: "http://localhost:3001/budget/create_expense",
        },
        data: newIncomeExpenses,
      };
      newIncomeExpenses ? res.status(200).json(response) : res.status(500).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  getExpenses: async (req, res, next) => {
    try {
      const { userId: id, query } = req;
      //   console.log(query);
      //   console.log(id);
      /// la fecha tendria que venir por la query asi el usuario puede ir pidiendo las fechas que quiera
      //si no tendria que hacer un funcion por cada fecha, como la de abajo => getAllExpenses
      const limit = 10;
      let page;

      //  console.log(query.page, "query.page");
      const date = new Date();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      let initialDate, endDate;
      initialDate = `${year}-${month < 10 ? "0" + month : month}-01`;
      endDate = `${year}-${month < 10 ? "0" + (month + 1) : month + 1}-01`;

      //si viene sin fechas especificas le pongo las del mes actual
      if (!(query.initialDate == undefined || query.initialDate == "undefined") && !(query.endDate == undefined || query.endDate == "undefined")) {
        initialDate = query.initialDate;
        endDate = query.endDate;
      }

      const queryDb = {
        attributes: ["id", "amountExpense", "description", "createdAt"],
        where: {
          user_id: id,
          createdAt: {
            [Op.between]: [initialDate, endDate],
          },
          amountExpense: {
            [Op.ne]: null,
          },
        },
        include: [
          {
            model: db.Categories_expenses,
            as: "categoryExpense",
            attributes: ["category", "id"],
          },
          {
            model: db.Expense_type,
            as: "expenseType",
            attributes: ["type", "id"],
          },
        ],
        order: [["createdAt", "ASC"]],
        raw: true,
        limit: limit,
      };

      if (!(query.page !== "undefined") || !(query.page !== undefined)) {
        delete queryDb.offset;
      } else {
        page = query.page - 1;
        queryDb.offset = page * limit;
      }
      // si los 3 vienen undefined es que viene el pedido del home
      if (query.page == "undefined" && query.initialDate == "undefined" && query.endDate == "undefined") {
        delete queryDb.where.createdAt;
        queryDb.order = [["createdAt", "DESC"]];
        delete queryDb.offset;
      }

      const { count, rows } = await db.Income_expenses.findAndCountAll({
        ...queryDb,
      });

      let ok;
      let status;
      let statusText;
      if (rows.length !== 0) {
        ok = true;
        status = 201;
        statusText = "OK";
      } else {
        ok = false;
        status = 404;
        statusText = "No se encontro nada para esa fecha";
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          total: count,
          url: "http://localhost:3001/budget/income_expenses",
        },
        data: rows,
      };

      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  getAllExpenses: async (req, res, next) => {
    try {
      const { userId: id, query } = req;
      console.log(id);
      let col, alias;
      //   console.log(query);
      if (query.amountExpense == "true") {
        col = "amountExpense";
        alias = "totalExpenses";
      }
      if (query.amountIncome == "true") {
        col = "amountIncome";
        alias = "totalIncomes";
      }
      const totalExpensesORIncome = await db.Income_expenses.findOne({
        attributes: [[Sequelize.fn("sum", Sequelize.col(col)), alias]],
        where: {
          user_id: id,
          [col]: {
            [Op.ne]: null,
          },
        },
        raw: true,
      });
      let ok;
      let status;
      let statusText;
      if (totalExpensesORIncome.length !== 0) {
        ok = true;
        status = 201;
        statusText = "OK";
      } else {
        ok = false;
        status = 404;
        statusText = "No encontramos gastos";
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          url: "http://localhost:3001/budget/all_expenses",
        },
        data: totalExpensesORIncome,
      };

      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  getLineGraphicExpenses: async (req, res, next) => {
    try {
      const { userId: id, query } = req;
      //  console.log(query);
      //  console.log(id);
      const date = new Date();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      let initialDate = `${year}-${month < 10 ? "0" + month : month}-01`;
      let endDate = `${year}-${month < 10 ? "0" + (month + 1) : month + 1}-01`;

      if (!(query.initialDate == "undefined") && !(query.endDate == "undefined")) {
        initialDate = query.initialDate;
        endDate = query.endDate;
      }

      let where = {
        user_id: id,
        createdAt: {
          [Op.between]: [initialDate, endDate],
        },
        amountExpense: {
          [Op.ne]: null,
        },
      };
      if (query.fixedExpenses == "1") {
        where.type_id = 1;
      }
      if (query.flexibleExpenses == "2") {
        where.type_id = 2;
      }
      if (query.savingExpenses == "3") {
        where.type_id = 3;
      }

      const expenses = await db.Income_expenses.findAll({
        attributes: [
          "createdAt",
          [Sequelize.fn("sum", sequelize.col("amountExpense")), "totalForDay"],
          [Sequelize.fn("DATE_FORMAT", sequelize.col("createdAt"), "%d"), "day"],
        ],
        where: where,
        group: [Sequelize.fn("DATE_FORMAT", sequelize.col("createdAt"), "%Y-%m-%d")],
        order: [["createdAt", "ASC"]],
        raw: true,
      });

      let ok;
      let status;
      let statusText;
      if (expenses.length !== 0) {
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
          total: expenses.length,
          url: "http://localhost:3001/budget/expenses_line_graphic",
        },
        data: expenses,
      };

      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  getTop10IncomeExpense: async (req, res, next) => {
    try {
      const { userId: id, query } = req;
      const limit = 10;

      // pedido para pa sección de gastos con paginado
      const queryDb = {
        attributes: ["id", "amountExpense", "description", "createdAt", "amountIncome"],
        where: {
          user_id: id,
        },
        include: [
          {
            model: db.Categories_expenses,
            as: "categoryExpense",
            attributes: ["category", "id"],
          },
          {
            model: db.Categories_income,
            as: "categoryIncome",
            attributes: ["category", "id"],
          },
          {
            model: db.Expense_type,
            as: "expenseType",
            attributes: ["type", "id"],
          },
        ],
        order: [["createdAt", "DESC"]],
        raw: true,
      };

      const top10IncomeExpenses = await db.Income_expenses.findAll({
        ...queryDb,
      });

      let ok, status, statusText, total;

      if (top10IncomeExpenses) {
        ok = true;
        status = 201;
        statusText = "OK";
        total = top10IncomeExpenses.length;
      } else {
        ok = false;
        status = 404;
        statusText = "No se encontraron ingresos ni egresos";
        total = 0;
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          total: total,
          url: "http://localhost:3001/budget/top10_income_expenses",
        },
        data: top10IncomeExpenses,
      };
      console.log(top10IncomeExpenses);
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  editIncomeExpense: async (req, res, next) => {
    try {
      const { body } = req;

      const parseDate = transformDay(body.createdAt);
      console.log(parseDate);
      const id = body.id;
      delete body.id;
      //   if (!body.amountIncome) {
      //     delete body.amountIncome;
      //     delete body.category_inc_id;
      //   }

      const editIncExp = await db.Income_expenses.update(
        {
          ...body,
        },
        {
          where: {
            id: id,
          },
          raw: true,
        }
      );
      //esto es si necesitaria los datos actulizados uso esta forma, como no lo necesito lo actualizo como update
      //   if (body.amountIncome) {
      //     await editIncExp.set("amountIncome", body.amountIncome);
      //   }
      //await editIncExp.save();

      console.log(editIncExp);
      let ok, status, statusText, total;

      if (editIncExp[0] === 1) {
        ok = true;
        status = 201;
        statusText = "OK";
        total = 1;
      } else {
        ok = false;
        status = 304;
        statusText = "No modificado";
        total = 0;
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          total: total,
          url: "http://localhost:3001/budget/top10_income_expenses",
        },
        data: editIncExp,
      };

      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
  deleteIncomeExpenses: async (req, res, next) => {
    const { userId: id, body } = req;
    console.log(id);
    console.log(body.expenseIncome_id);
    const objNull = {
      user_id: null,
      amountExpense: null,
      type_id: null,
      category_exp_id: null,
      amountIncome: null,
      category_inc_id: null,
      description: null,
      createdAt: null,
      updatedAt: null,
    };
    try {
      //   const deleteIncomeExpense = await db.Income_expenses.update(
      //     {
      //       ...objNull,
      //     },
      //     {
      //       where: {
      //         id: 501,
      //       },
      //     }
      //   );
      const deleteIncomeExpense = await db.Income_expenses.findOne({
        where: {
          id: body.expenseIncome_id,
        },
      });
      await deleteIncomeExpense.set("user_id", objNull.user_id);
      await deleteIncomeExpense.set("amountExpense", objNull.amountExpense);
      await deleteIncomeExpense.set("type_id", objNull.type_id);
      await deleteIncomeExpense.set("category_exp_id", objNull.category_exp_id);
      await deleteIncomeExpense.set("amountIncome", objNull.amountIncome);
      await deleteIncomeExpense.set("category_inc_id", objNull.category_inc_id);
      await deleteIncomeExpense.set("description", objNull.description);
      await deleteIncomeExpense.set("createdAt", objNull.createdAt);
      await deleteIncomeExpense.set("updatedAt", objNull.updatedAt);
      await deleteIncomeExpense.save();
      await db.Income_expenses.destroy({
        where: {
          id: body.expenseIncome_id,
        },
      });

      const searchDelete = await db.Income_expenses.findOne({
        where: {
          id: body.expenseIncome_id,
        },
      });

      let ok, status, statusText, totalDelete;

      if (!searchDelete) {
        ok = true;
        status = 201;
        statusText = "OK";
        totalDelete = 1;
      } else {
        ok = false;
        status = 304;
        statusText = "No eliminado";
        totalDelete = 0;
      }
      const response = {
        meta: {
          ok: ok,
          status: status,
          statusText: statusText,
          totalDelete: totalDelete,
          url: "http://localhost:3001/budget/delete_income_expense",
        },
        data: deleteIncomeExpense,
      };
      !searchDelete ? res.status(200).json(response) : res.status(500).json(response);
    } catch (err) {
      console.log(err);
      handlerErrors(err, req, res, next);
    }
  },
};
