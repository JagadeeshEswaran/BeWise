import React from "react";
import SearchBar from "./SearchBar";
import TopSearches from "./TopSearches";
import Categories from "./Categories";
import Ratings from "./Ratings";
import RecommendedForYou from "./RecommendedForYou";

import "./Style/SearchPage.css";
import PageIcon from "../../Page_Comp/PageIcon";

const SearchMainContainer = () => {
  return (
    <section className="search_page_main_container">
      <PageIcon />

      <article className="ms-5">
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
      </article>
    </section>
  );
};

export default SearchMainContainer;
