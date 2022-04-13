import axios from "axios";
import { getConfigTokenLocalStorage } from "../../helpers/get-config-token-localStorage";

export const controllerAnime = {
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
};
