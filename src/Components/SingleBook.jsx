//----- CSS
import "../App.css";
//----- Componenti react-bootstrap
import { Card, Col } from "react-bootstrap";

//----- Componenti react
import { React, useContext } from "react";

//----- Context 

import { Theme } from "../modules/Context";


//----- SingleBook.jsx
function SingleBook({ bookProp, selected, setSelected }) {

  const [themeContext] = useContext(Theme);

  function borderSelected(selected, themeContext) {
    if (selected === bookProp.asin) {
      
      if (themeContext === "light") {
        return "5px solid red";
      } else if (themeContext === "dark") {
        return "5px solid grey";
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
          onClick={() => setSelected(selected === bookProp.asin ? false : bookProp.asin)}
        />
        <Card.Body>
          <Card.Title>{bookProp.title}</Card.Title>
          {/* {selected && <CommentArea asin={bookProp.asin} />} */}
        </Card.Body>
      </Card>
    </Col>
  );
}
export default SingleBook;
