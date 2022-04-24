import axios from "axios";

export const api = axios.create({
  baseURL: "https://livraria-na-van.herokuapp.com/",
});

// end points para requisição no front end
//get de tudo https://livraria-na-van.herokuapp.com/books
//get por nome https://livraria-na-van.herokuapp.com/books/name/{nome+do+filme}
//post https://livraria-na-van.herokuapp.com/books
//delete por id https://livraria-na-van.herokuapp.com/books/book/{id}
//update por id https://livraria-na-van.herokuapp.com/books/book/{id}
