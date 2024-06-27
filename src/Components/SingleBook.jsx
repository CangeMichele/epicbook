//----- CSS
import "../App.css";
//----- Componenti react-bootstrap
import { Card, Col } from "react-bootstrap";

//----- Componenti react
import { React, useState, useContext } from "react";

//----- Context 

import { Theme } from "../modules/Context";

//----- Componenti app
import CommentArea from "./SingleBookComponents/CommentArea";


//----- SingleBook.jsx
function SingleBook({ bookProp }) {
  const [selected, setSelected] = useState(false);
  const [themeContext, setThemeContext] = useContext(Theme);

  function borderSelected(selected, themeContext) {
    if (selected) {
      if (themeContext === "light") {
        return "8px solid red";
      } else if (themeContext === "dark") {
        return "8px solid grey";
      }
    } else {
      return "none";
    }
  }

  return (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          src={bookProp.img}
          style={{ border: borderSelected(selected, themeContext) }}
          onClick={() => setSelected(!selected)}
        />
        <Card.Body>
          <Card.Title>{bookProp.title}</Card.Title>
          {selected && <CommentArea asin={bookProp.asin} />}
        </Card.Body>
      </Card>
    </Col>
  );
}
export default SingleBook;
