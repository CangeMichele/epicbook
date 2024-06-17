//----- Componenti react
import { React } from "react";

//----- Componenti react-bootstrap
import { ListGroup, Button, ButtonGroup } from "react-bootstrap";

// dichiarazione delle costanti
const url = `https://striveschool-api.herokuapp.com/api/comments/`;
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQwYzlhZDE2N2U1MzAwMTVmYTY4NmIiLCJpYXQiOjE3MTg0MDM4NTAsImV4cCI6MTcxOTYxMzQ1MH0.beJtn7HCq6OvGp8wn37KZBI387diqE4Df8Yvtp8x7gQ";

//---- SingleComment.jsx
function SingleComment({
  commentProp,
  updateListComment,
  setUpdateListComment,
}) {
  
  //DELETE del commento
  const deleteComment = (commentId) => {
    fetch(url + commentId, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then(() => {
        setUpdateListComment(!updateListComment); //modifico stato per aggiornare lista comment
      })
      .catch((error) => console.log("eliminazione non riuscita: " + error));
  };


  return (
    <>
      <ListGroup.Item>
        <p>
          ({commentProp.rate}★) {commentProp.comment}
        </p>

        <ButtonGroup className="d-flex justify-content-between">
          {/* <Button
            variant="warning"
            className="btn-sm"
            onClick={() => putComment()}
          >
            modifica
          </Button> */}

          <Button
            variant="danger"
            className="btn-sm"
            onClick={() => deleteComment(commentProp._id)}
          >
            elimina
          </Button>
        </ButtonGroup>
      </ListGroup.Item>

      {/* {toPutComment && alert("vero")} */}
    </>
  );
}

export default SingleComment;
