import React, { useEffect } from "react";
import { connect } from "react-redux";
import BookManagement from "@components/features/book/BookManagement";
import { readBooks, removeBook } from "@modules/book";

const BooKManagementContainer = ({
  bookList,
  pageCount,
  readBooks,
  removeBook,
  token,
  isAuthenticated,
}) => {
  useEffect(() => {
    readBooks({});
  }, []);
  return (
    <>
      <BookManagement
        bookList={bookList}
        pageCount={pageCount}
        readBooks={readBooks}
        removeBook={removeBook}
        token={token}
        isAuthenticated={isAuthenticated}
      />
    </>
  );
};

export default connect(
  ({ book, auth }) => ({
    bookList: book.bookList,
    pageCount: book.pageCount,
    token: auth.token,
    isAuthenticated: auth.isAuthenticated,
  }),
  { readBooks, removeBook }
)(BooKManagementContainer);
