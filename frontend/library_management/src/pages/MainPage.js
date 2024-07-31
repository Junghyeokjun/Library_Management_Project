import React from "react";
import BookList from "../components/features/book/BookList";
import FilterPanel from "../components/features/book/FilterPanel";
const MainPage = () => {
  return (
    <>
      <FilterPanel>
        <BookList />
      </FilterPanel>
    </>
  );
};

export default MainPage;
