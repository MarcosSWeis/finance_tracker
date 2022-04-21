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
};
