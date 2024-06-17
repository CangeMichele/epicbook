//----- Componenti react
import { React, useState, useEffect } from "react";

//----- Componenti app
import CommentList from "./CommentAreaComponents/CommentList";
import AddComment from "./CommentAreaComponents/AddComment";
import Loader from "../Loader";

//----- CommentArea.jsx
function CommentsArea({ asin }) {
  // dichiarazione delle costanti
  const [loader, setLoader] = useState(false); // Stato del loader
  const [handleCommentsBook, setHandleCommentsBook] = useState([]); // Stato dei Commenti
  const [updateListComment, setUpdateListComment] = useState(false); // Stato aggiornamento elenco commenti
  const url = `https://striveschool-api.herokuapp.com/api`;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQwYzlhZDE2N2U1MzAwMTVmYTY4NmIiLCJpYXQiOjE3MTg0MDM4NTAsImV4cCI6MTcxOTYxMzQ1MH0.beJtn7HCq6OvGp8wn37KZBI387diqE4Df8Yvtp8x7gQ";

  useEffect(() => {
    //mostro caricamento
    setLoader(true);

    //Get dei commenti del libro
    fetch(url + `/books/${asin}/comments`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => setHandleCommentsBook(data))

      .catch((error) =>
        console.error("errore nel caricamento dei commenti", error)
      )

      .finally(() => {
        setLoader(false);
      });
  }, [updateListComment]); // useEffect

  return (
    <>
      {loader && <Loader />}

      <AddComment
        bookId={asin}
        updateListComment={updateListComment}
        setUpdateListComment={setUpdateListComment}
      />

      <CommentList
        commentsBook={handleCommentsBook}
        updateListComment={updateListComment}
        setUpdateListComment={setUpdateListComment}
      />
    </>
  );
}
export default CommentsArea;
