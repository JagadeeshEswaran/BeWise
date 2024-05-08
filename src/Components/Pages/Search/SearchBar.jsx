import React from "react";

const SearchBar = () => {
  return (
    <section className="mb-3 ms-3 py-3 px-4" style={{ height: "8rem" }}>
      <article className="">
        <h5 className=" fw-semibold ">Find Your Favourites</h5>
      </article>

      <article className="w-75 ms-3">
        <input
          type="text"
          name=""
          id=""
          className="w-50 mt-4 rounded me-3 border"
          style={{ height: "2.75rem" }}
        />
        <button
          className="btn btn-primary mb-1"
          style={{ width: "10rem", height: "2.75rem" }}
        >
          Search
        </button>
      </article>
    </section>
  );
};

export default SearchBar;
