import React from "react";
import BookList from "../components/features/book/BookList";
import FilterPanel from "../components/features/book/FilterPanel";
import FilterPanelContainer from "../containers/FilterPanelContainer";
import BookListContainer from "../containers/BookListContainer";
const MainPage = () => {
  return (
    <>
      <FilterPanelContainer>
        <BookListContainer />
      </FilterPanelContainer>
    </>
  );
};

export default MainPage;
