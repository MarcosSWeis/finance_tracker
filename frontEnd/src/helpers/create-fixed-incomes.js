import axios from "axios";
import { getConfigTokenLocalStorage } from "./get-config-token-localStorage";

export async function createFixedIncomes(createIncome) {
  const config = getConfigTokenLocalStorage();
  const response = await axios.post(
    `http://localhost:3001/budget/create`,
    createIncome,
    config
  );
  return response;
}
