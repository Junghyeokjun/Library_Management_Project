import React from "react";
import { connect } from "react-redux";
import FilterPanel from "../components/features/book/FilterPanel";
import { readBooks } from "../modules/book";

const FilterPanelContainer = (readBooks, pageCount) => {
  return <FilterPanel onReadBooks={readBooks} pageCount={pageCount} />;
};

export default connect(({ book }) => ({ pageCount: book.pageCount }), {
  readBooks,
})(FilterPanelContainer);
