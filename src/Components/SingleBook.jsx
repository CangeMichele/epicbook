//----- CSS
import "../App.css";

//----- Componenti react
import { React, useState } from "react";
//----- Componenti react-bootstrap
import { Card, Col } from "react-bootstrap";

//----- Componenti app
import CommentArea from "./SingleBookComponents/CommentArea";

//----- SingleBook.jsx
function SingleBook({ bookProp }) {
  const [selected, setSelected] = useState(false);

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={bookProp.img} 
        style={{ border: selected ? "2px solid red" : "none" }}
        onClick={() => setSelected(!selected)}
      />
        <Card.Body>
          <Card.Title>{bookProp.title}</Card.Title>
          {selected && <CommentArea asin={bookProp.asin}/>}
        </Card.Body>
      </Card>
    </Col>
  );
}
export default SingleBook;
