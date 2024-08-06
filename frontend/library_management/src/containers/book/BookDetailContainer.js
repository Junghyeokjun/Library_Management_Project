import React, { useEffect } from "react";
import { connect } from "react-redux";
import BookDetail from "@components/features/book/BookDetail";
import BookIntro from "@components/features/book/BookIntro";
import { readBook } from "@modules/book";
import { useParams } from "react-router-dom";

const BooKDetailContainer = ({ book, readBook }) => {
  const { id } = useParams();

  useEffect(() => {
    readBook(id);
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
