import React, { useEffect } from "react";
import { connect } from "react-redux";
import BookDetail from "@components/features/book/BookDetail";
import BookIntro from "@components/features/book/BookIntro";
import { readBook } from "@modules/book";
import { addLoan, modifyLoan, readLoan } from "@modules/loan";
import { jwtDecode } from "jwt-decode";
import { useParams } from "react-router-dom";

const BooKDetailContainer = ({
  book,
  isAuthenticated,
  token,
  loan,
  readBook,
  readLoan,
  addLoan,
  modifyLoan,
}) => {
  const { id } = useParams();

  const userId = token ? jwtDecode(token).id : 0;

  useEffect(() => {
    readBook(id);
    readLoan({ userid: userId, bookid: id });
  }, [token]);
  return (
    <>
      <BookDetail
        userId={userId}
        book={book}
        isAuthenticated={isAuthenticated}
        loan={loan}
        readBook={readBook}
        readLoan={readLoan}
        addLoan={addLoan}
        modifyLoan={modifyLoan}
      />
      <BookIntro book={book} />
    </>
  );
};

export default connect(
  ({ book, auth, loan }) => ({
    book: book.book,
    isAuthenticated: auth.isAuthenticated,
    token: auth.token,
    loan: loan.loan,
  }),
  { readBook, readLoan, addLoan, modifyLoan }
)(BooKDetailContainer);
