import React from "react";
import Alert from "react-bootstrap/Alert";

function Welcome() {
  // alert('Benvenuto su EpicBook !');
  return (
    <>
      <Alert variant="success" className="text-center">
        <h1>Benvenuto su EpicBook</h1>
      </Alert>
    </>
  );
}

export default Welcome;
