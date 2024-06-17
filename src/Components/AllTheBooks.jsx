//----- Componenti react
import { React, useState } from "react";
//----- Componenti react-bootstrap
import { Row } from "react-bootstrap";

//----- Componenti app
import SingleBook from "./SingleBook";
import SearchForm from "./SearchForm";

//----- AllTheBooks.jsx
function AllTheBooks(categoryProps) {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value); //metto la funzione nella variabile per passarla come parametro
  return (
    <>
      <SearchForm search={search} handleSearch={handleSearch} />

      <Row>
        {categoryProps.category
          .filter(
            (book) => book.title.toLowerCase().includes(search.toLowerCase()) //filtro pops.book e genero array di corrispondenti
          )

          .map((book) => (
            <SingleBook key={book.asin} bookProp={book} /> //ciclo array e uso map per generare pagina
            //il Map genera un warning. vuole una key univoca
          ))}
      </Row>
    </>
  );
}
export default AllTheBooks;
