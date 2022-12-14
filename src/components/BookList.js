import React from "react";
import ListGroup from "react-bootstrap/ListGroup";


function BookList({ book, onHandleDelete }) {
  const Books = book.map((bookObj, index) => {

    function handleDeleteClick() {
      fetch(`http://localhost:9292/books/${bookObj.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => onHandleDelete(bookObj));
    }
    return (
      <div key={index}>
        <ListGroup variant="flush">
          <ListGroup.Item> Title: {bookObj.title}</ListGroup.Item>
          <ListGroup.Item>Author: {bookObj.author}</ListGroup.Item>
          <ListGroup.Item>Publisher: {bookObj.publisher}</ListGroup.Item>
          <ListGroup.Item>Genre: {bookObj.genre}</ListGroup.Item>
        </ListGroup>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    );
  });

  return <div>{Books}</div>;
}

export default BookList;
