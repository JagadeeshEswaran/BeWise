import React from "react";
import SearchBar from "./SearchBar";
import TopSearches from "./TopSearches";
import Categories from "./Categories";
import Ratings from "./Ratings";
import RecommendedForYou from "./RecommendedForYou";

import "./Style/SearchPage.css";

const SearchMainContainer = () => {
  return (
    <section className="search_page_main_container">
      {/* Seach Component */}
      <SearchBar />

      {/* Top Searches */}
      <TopSearches />

      {/* Categories */}
      <Categories />

      {/* Ratings */}
      <Ratings />

      {/* Recommended For You */}
      <RecommendedForYou />
    </section>
  );
};

export default SearchMainContainer;
