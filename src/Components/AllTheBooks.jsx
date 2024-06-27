//----- Componenti react
import { React } from "react";
//----- Componenti react-bootstrap
import { Row } from "react-bootstrap";

//----- Componenti app
import SingleBook from "./SingleBook";

//----- AllTheBooks.jsx
function AllTheBooks({ category, search }) {
  return (
    <>
      <Row>
        {category
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
