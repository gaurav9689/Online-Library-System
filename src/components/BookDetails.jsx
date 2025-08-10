import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";

function BookDetails({ books }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Book not found</h2>
        <button className="btn-back" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="book-details-container fade-in">
      <button className="btn-back" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <div className="book-details">
        <h1>{book.title}</h1>
        <h3>by {book.author}</h3>
        <img
          src={book.image}
          alt={`Cover of ${book.title}`}
          style={{ width: "250px", height: "auto", marginBottom: "20px" }}
        />
        <p><strong>Rating:</strong> {book.rating} / 5</p>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Description:</strong> {book.description}</p>
      </div>
    </div>
  );
}

export default BookDetails;
