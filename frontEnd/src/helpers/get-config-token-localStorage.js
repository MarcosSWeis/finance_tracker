export function getConfigTokenLocalStorage() {
  const JsonUser = window.localStorage.getItem("user");
  const user = JSON.parse(JsonUser);
  const config = {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  };
  return config;
}
