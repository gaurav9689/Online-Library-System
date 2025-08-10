import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../App.css";
import { Link, useNavigate, useParams } from "react-router-dom";

function BrowseBooks({ books: bookList, setViewedBook }) {
  const [books, setBooks] = useState(bookList);

  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!category) {
      setBooks(bookList);
      return;
    }

    if (category === "fiction") {
      const fiction = bookList.filter((book) => book.category === "Fiction");
      setBooks(fiction);
    } else if (category === "non-fiction") {
      const nonFiction = bookList.filter((book) => book.category === "Non-Fiction");
      setBooks(nonFiction);
    } else if (category === "sci-fi") {
      const sciFi = bookList.filter((book) => book.category === "Sci-Fi");
      setBooks(sciFi);
    } else {
      // Unknown category, show all
      setBooks(bookList);
    }
  }, [category, bookList]);

  function handleAll() {
    setBooks(bookList);
    navigate("/browseBooks");
  }

  function handleFiction() {
    const fiction = bookList.filter((book) => book.category === "Fiction");
    setBooks(fiction);
    navigate("/browseBooks/fiction");
  }

  function handleNonFiction() {
    const nonFiction = bookList.filter((book) => book.category === "Non-Fiction");
    setBooks(nonFiction);
    navigate("/browseBooks/non-fiction");
  }

  function handleSciFi() {
    const sciFi = bookList.filter((book) => book.category === "Sci-Fi");
    setBooks(sciFi);
    navigate("/browseBooks/sci-fi");
  }

  function handleChange(e) {
    const query = e.target.value.trim();
    if (query === "") {
      setBooks(bookList);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();

    const newList = bookList.filter(
      (book) =>
        book.title.toLowerCase().includes(lowerCaseQuery) ||
        book.author.toLowerCase().includes(lowerCaseQuery)
    );

    setBooks(newList);
  }

  return (
    <div>
      <Navbar />
      <h1 className="heading">Browse Books</h1>

      <div className="buttons-div">
        <input
          onChange={handleChange}
          type="text"
          className="search-input"
          placeholder="Search for book"
        />
        <button onClick={handleAll}>All</button>
        <button onClick={handleFiction}>Fiction</button>
        <button onClick={handleNonFiction}>Non-Fiction</button>
        <button onClick={handleSciFi}>Sci-Fi</button>
      </div>

      <div className="books-container">
        {books.length === 0 ? (
          <p>No books found.</p>
        ) : (
          books.map((book) => (
            <div className="book" key={book.id}>
              <p>{book.title}</p>
              <img className="img" src={book.image} alt={`Cover of ${book.title}`} />
              {/* Use absolute path for Link */}
              <Link
                className="link"
                onClick={() => setViewedBook && setViewedBook(book)}
                to={`/bookDetails/${book.id}`}
              >
                View Details...
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;
