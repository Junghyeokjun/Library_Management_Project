import React from "react";
import BookForm from "@components/features/book/BookForm";
import { addBook } from "@modules/book";
import { connect } from "react-redux";

const BookAddContainer = ({ addBook }) => {
  return <BookForm addBook={addBook} modified={false} />;
};

export default connect(({ book }) => ({}), {
  addBook,
})(BookAddContainer);
