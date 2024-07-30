import React from "react";
import BookList from "../components/BookList";
import FilterPanel from "../components/FilterPanel";

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
