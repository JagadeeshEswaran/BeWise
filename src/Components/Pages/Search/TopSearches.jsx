import React from "react";

const TopSearches = () => {
  return (
    <section
      className="my-3 ms-3 py-3 px-4 border-top border-2 border-dark border-opacity-25 w-75 "
      style={{ height: "6rem" }}
    >
      <article className="">
        <h6 className=" fw-semibold ">Top Searches</h6>
      </article>

      <article className="w-75 ms-3 d-flex ">
        <p
          className="category_btn rounded-5 border-opacity-50  mx-4 px-2 py-2"
          style={{ width: "12rem" }}
          type="button"
        >
          Category 1
        </p>
        <p
          className="category_btn rounded-5 border-opacity-50  mx-4 px-2 py-2"
          style={{ width: "12rem" }}
          type="button"
        >
          Category 2
        </p>
        <p
          className="category_btn rounded-5 border-opacity-50  mx-4 px-2 py-2"
          style={{ width: "12rem" }}
          type="button"
        >
          Category 3
        </p>
        <p
          className="category_btn rounded-5 border-opacity-50  mx-4 px-2 py-2"
          style={{ width: "12rem" }}
          type="button"
        >
          Category 4
        </p>
        <p
          className="category_btn rounded-5 border-opacity-50  mx-4 px-2 py-2"
          style={{ width: "12rem" }}
          type="button"
        >
          Category 5
        </p>
      </article>
    </section>
  );
};

export default TopSearches;
