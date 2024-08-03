import BookModifyContainer from "@containers/book/BookModifyContainer";
import React from "react";

const BookModifyPage = () => {
  // const { id } = useParams();
  //차후 라우터 사용시 링크 반영

  const id = 3;
  return <BookModifyContainer bookId={id} />;
};

export default BookModifyPage;
