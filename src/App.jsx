import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BrowseBooks from './components/BrowseBooks';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';
import { useSelector } from 'react-redux';

const popularBooks = [ /* your popularBooks array here */ ];

function App() {
  const bookList = useSelector((store) => store.book.items);
  
  return (
    <Routes>
      <Route path="/" element={<Home popularBooks={popularBooks} />} />
      <Route
        path="/browseBooks"
        element={<BrowseBooks books={bookList.length ? bookList : popularBooks} />}
      />
      <Route
        path="/browseBooks/:category"
        element={<BrowseBooks books={bookList.length ? bookList : popularBooks} />}
      />
      <Route
        path="/bookDetails/:id"
        element={<BookDetails books={bookList.length ? bookList : popularBooks} />}
      />
        <Route
        path="/bookDetails/:id"
        element={<BookDetails books={bookList.length ? bookList : popularBooks} />}
      />
      <Route path="/addBook" element={<AddBook />} />
      {/* Other routes */}
    </Routes>
  );
}

export default App;
