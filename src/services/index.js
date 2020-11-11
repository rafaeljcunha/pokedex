import { apiUrl, pokeInfo } from "../utils/requestApi";
import axios from "axios";

export async function getListData({ offset, limit }) {
  return axios.get(apiUrl(`?offset=${offset}&limit=${limit}`));
}
export async function getPokeInfo(name) {
  return axios.get(pokeInfo(name));
}
