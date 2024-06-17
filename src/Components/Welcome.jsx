//----- Componenti react
import React from "react";

//----- Componenti react-bootstrap
import {Alert} from "react-bootstrap";



//----- Welcome.jsx -----
function Welcome() {
  return (
    <>
      <Alert variant="success" className="text-center">
        <h1>Benvenuto su EpicBook</h1>
      </Alert>
    </>
  );
}

export default Welcome;
