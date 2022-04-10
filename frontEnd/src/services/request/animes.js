import axios from "axios";

export const controllerAnime = {
  metodo: () => {
    return alert("hola ");
  },
  getAnime: async () => {
    try {
      const token = window.localStorage.getItem("accessToken");
      console.log(token, "token ");
      const config = {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      };
      const response = await axios.get(`http://localhost:3001/animes`, config);
      console.log(response, "response service");
      return response;
    } catch (err) {
      console.log(err);
    }
  },
};
