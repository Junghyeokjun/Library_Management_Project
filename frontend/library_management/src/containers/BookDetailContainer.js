import React, { useEffect } from "react";
import { connect } from "react-redux";
import BookDetail from "../components/features/book/BookDetail";
import BookIntro from "../components/features/book/BookIntro";
import { readBook } from "../modules/book";

const BooKDetailContainer = ({ book, readBook }) => {
  useEffect(() => {
    readBook(1);
  }, []);
  return (
    <>
      <BookDetail book={book} />
      <BookIntro book={book} />
    </>
  );
};

export default connect(({ book }) => ({ book: book.book }), { readBook })(
  BooKDetailContainer
);
