import React from "react";
import FilterPanelContainer from "@containers/book/FilterPanelContainer";
import BookListContainer from "@containers/book/BookListContainer";
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
