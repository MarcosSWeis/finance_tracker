import axios from "axios";

export const controllerUser = {
  list: async () => {
    const data = await axios.get(`http://localhost:3001/users/list`);
    return data;
  },
  register: async (formData) => {
    console.log(formData, "data array");
    const data = await axios.post(
      `http://localhost:3001/users/register`,
      formData
    );
    return data;
  },
  login: async (login) => {
    return axios
      .post(`http://localhost:3001/users/login`, login)
      .then((response) => {
        console.log(response, "response login");
        if (response.data.accessToken) {
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.accessToken)
          );
        }
        return response.data;
      });
  },
};
