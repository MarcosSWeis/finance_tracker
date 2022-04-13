export function getConfigTokenLocalStorage() {
  const token = window.localStorage.getItem("accessToken");

  const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };
  return config;
}
