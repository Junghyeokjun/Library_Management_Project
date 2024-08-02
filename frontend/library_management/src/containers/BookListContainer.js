import React from "react";
import BookList from "../components/features/book/BookList";
import { connect } from "react-redux";

const BookListContainer = (bookList) => {
  return <BookList bookList={bookList} />;
};

export default connect(
  ({ book }) => ({ bookList: book.bookList }),
  {}
)(BookListContainer);
