import axios from "axios";

export async function getAuthToken(setErrorToken, navigate, setVerifyToken) {
  const JsonUser = window.localStorage.getItem("user");
  console.log(JsonUser);
  const user = JSON.parse(JsonUser);
  console.log(user, "user getAuthtoken");
  const config = {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  };
  if (!user) {
    setErrorToken("Inicie sesión para poder acceder");
    return navigate("/");
  }

  const ERROR_HANDLER = {
    JsonWebTokenError: (err) => {
      setErrorToken(err.response.data.JsonWebTokenError);
      window.localStorage.removeItem("user");
      navigate("/");
    },
    TokenExpiredError: (err) => {
      setErrorToken(err.response.data.TokenExpiredError);
      navigate("/");
    },
    defaultError: () => {
      setErrorToken("Error inesperado");
      navigate("/");
    },
  };

  await axios
    .post("http://localhost:3001/users/checkingToken", {}, { ...config })
    .then(({ data }) => {
      setVerifyToken(data.meta.ok);
    })
    .catch((err) => {
      if (err.response) {
        const handler =
          ERROR_HANDLER[Object.keys(err.response.data)[0]] ||
          ERROR_HANDLER.defaultError;

        handler(err);
      }
    });

  //otra forma FUNCIONA
  //   fetch("http://localhost:3001/users/checkingToken", {
  //     method: "POST",
  //     ...config,
  //   })
  //     .then((response) => {
  //       console.log(response, "response handlerLogged");
  //       return response;
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
}
