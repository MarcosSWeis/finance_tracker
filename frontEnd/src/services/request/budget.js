import axios from "axios";
import { getConfigTokenLocalStorage } from "../../helpers/get-config-token-localStorage";

export const controllerBudget = {
  metodo: () => {
    return alert("hola ");
  },
  getAnime: async () => {
    try {
      const config = getConfigTokenLocalStorage();
      const response = await axios.get(`http://localhost:3001/budget`, config);
      console.log(response, "response service");
      return response;
    } catch (err) {
      console.log(err);
    }
  },
  createFixedIncomes: async (createIncome) => {
    const config = getConfigTokenLocalStorage();
    const response = await axios.post(
      `http://localhost:3001/budget/create_income`,
      createIncome,
      config
    );
    return response;
  },
  updateIncome: async (updateIncome) => {
    try {
      const config = getConfigTokenLocalStorage();
      const response = await axios.post(
        `http://localhost:3001/budget/update_income`,
        updateIncome,
        config
      );
      console.log(response, "response service");
      return response;
    } catch (err) {
      console.log(err);
    }
  },

  getIncomesDb: async () => {
    try {
      const config = getConfigTokenLocalStorage();
      const response = await axios.get(
        `http://localhost:3001/budget/income`,
        config
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  },
  getCategoriesExpenses: async () => {
    try {
      const config = getConfigTokenLocalStorage();
      const response = await axios.get(
        `http://localhost:3001/budget/categories_expenses`,
        config
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  },
  getCategoriesIncome: async () => {
    try {
      const config = getConfigTokenLocalStorage();
      const response = await axios.get(
        `http://localhost:3001/budget/categories_income`,
        config
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  },
  getExpenseTypes: async () => {
    try {
      const config = getConfigTokenLocalStorage();
      const response = await axios.get(
        `http://localhost:3001/budget/expense_type`,
        config
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  },
};
