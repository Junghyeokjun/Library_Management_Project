import React, { useEffect } from "react";
import { connect } from "react-redux";
import FilterPanel from "../components/features/book/FilterPanel";
import { readBooks } from "../modules/book";

const FilterPanelContainer = ({ readBooks, pageCount, children }) => {
  useEffect(() => {
    readBooks({});
  }, []);
  return (
    <FilterPanel
      onReadBooks={readBooks}
      pageCount={pageCount}
      children={children}
    />
  );
};

export default connect(({ book }) => ({ pageCount: book.pageCount }), {
  readBooks,
})(FilterPanelContainer);
