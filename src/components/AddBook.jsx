import React, { useState } from "react";
import Navbar from "./Navbar";
import "../App.css";
import { addOneBook } from "../utils/bookSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const newBookFrame = {
  id: "",
  title: "",
  author: "",
  description: "",
  rating: "",
  category: "",
  image: "https://i.pinimg.com/564x/6c/b0/12/6cb012478fd05f4ee96f81c6762be824.jpg",
};

function AddBook() {
  const [newBook, setNewBook] = useState(newBookFrame);
  const [successMessage, setSuccessMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!newBook.title.trim()) {
      alert("Title can't be empty");
      return;
    }
    if (!newBook.author.trim()) {
      alert("Author can't be empty");
      return;
    }
    if (!newBook.description.trim()) {
      alert("Description can't be empty");
      return;
    }
    const ratingNum = parseFloat(newBook.rating);
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      alert("Rating should be a number between 1 to 5");
      return;
    }
    if (!newBook.category) {
      alert("Category can't be empty");
      return;
    }

    const bookToAdd = { ...newBook, id: Date.now() };
    dispatch(addOneBook(bookToAdd));

    setSuccessMessage("Book added successfully!");

    setNewBook(newBookFrame);

    // Hide message after 3 seconds and navigate back
    setTimeout(() => {
      setSuccessMessage("");
      navigate("/browseBooks");
    }, 3000);
  }

  function changeHandler(e) {
    const { name, value } = e.target;
    setNewBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className="form-heading">Add Book</h2>

          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}

          <label htmlFor="title">Title:</label>
          <input
            required
            type="text"
            name="title"
            id="title"
            value={newBook.title}
            onChange={changeHandler}
          />

          <label htmlFor="author">Author:</label>
          <input
            required
            type="text"
            name="author"
            id="author"
            value={newBook.author}
            onChange={changeHandler}
          />

          <label htmlFor="description">Description:</label>
          <input
            required
            type="text"
            name="description"
            id="description"
            value={newBook.description}
            onChange={changeHandler}
          />

          <label htmlFor="rating">Rating:</label>
          <input
            required
            type="text"
            name="rating"
            id="rating"
            value={newBook.rating}
            onChange={changeHandler}
          />

          <label htmlFor="category">Choose a category: </label>
          <select
            required
            id="category"
            name="category"
            value={newBook.category}
            onChange={changeHandler}
          >
            <option value="">--Select a Category--</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Sci-fi">Sci-fi</option>
          </select>

          <button className="add-btn" type="submit">
            Save Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
