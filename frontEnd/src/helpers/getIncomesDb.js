import axios from "axios";
import { getConfigTokenLocalStorage } from "./get-config-token-localStorage";
export async function getIncomesDb() {
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
}