// src/App.jsx

import { BookList } from './BookList';
import {favouriteBooks } from './FavouriteBooks';

export const App = () => {
  return (
    <>
			<h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
    </>
  );
};

