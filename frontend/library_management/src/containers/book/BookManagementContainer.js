import React, { useEffect } from "react";
import { connect } from "react-redux";
import BookManagement from "@components/features/book/BookManagement";
import { addBook, modifyBook, readBooks, removeBook } from "@modules/book";

const BooKManagementContainer = ({
  bookList,
  pageCount,
  readBooks,
  addBook,
  modifyBook,
  removeBook,
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
        addBook={addBook}
        modifyBook={modifyBook}
        removeBook={removeBook}
      />
    </>
  );
};

export default connect(
  ({ book }) => ({ bookList: book.bookList, pageCount: book.pageCount }),
  { readBooks, addBook, modifyBook, removeBook }
)(BooKManagementContainer);
