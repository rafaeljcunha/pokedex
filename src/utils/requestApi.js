import axios from "axios";

export const apiUrl = (params) => `https://pokeapi.co/api/v2/pokemon/${params}`;

export const pokeInfo = (name) => `https://pokeapi.co/api/v2/pokemon/${name}`;

export const pokeImage = (id) =>
  `https://pokeres.bastionbot.org/images/pokemon/${id}`;

export const ApiRequest = axios.create({
  headers: {
    Accept: "application/json",
  },
});
