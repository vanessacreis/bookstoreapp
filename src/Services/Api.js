import axios from "axios";

export const api = axios.create({
  baseURL: "https://livraria-na-van.herokuapp.com/",
});
