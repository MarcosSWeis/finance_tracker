export function getUserLocalStorage() {
  const JsonUser = window.localStorage.getItem("user");
  const user = JSON.parse(JsonUser);
  return user;
}
