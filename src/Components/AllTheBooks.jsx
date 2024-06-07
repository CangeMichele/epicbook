import React from "react";
import { Row, Col,Card } from "react-bootstrap";

function AllTheBooks(props) {
  console.log(props.books);
  return (
    <Row>
      {props.books.map(
        book => (
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title> 
            </Card.Body>
          </Card>
        </Col>
      )
      )}
    </Row>
  );
}
export default AllTheBooks;
