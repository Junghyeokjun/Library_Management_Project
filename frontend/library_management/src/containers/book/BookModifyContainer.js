import React, { useEffect } from "react";
import BookForm from "@components/features/book/BookForm";
import { connect } from "react-redux";
import { modifyBook, readBook } from "@modules/book";
import { useParams } from "react-router-dom";

const BookModifyContainer = ({ book, readBook, modifyBook }) => {
  const { id } = useParams();
  useEffect(() => {
    readBook(id);
  }, []);
  return (
    <BookForm book={book} bookId={id} modifyBook={modifyBook} modified={true} />
  );
};

export default connect(({ book }) => ({ book: book.book }), {
  readBook,
  modifyBook,
})(BookModifyContainer);
