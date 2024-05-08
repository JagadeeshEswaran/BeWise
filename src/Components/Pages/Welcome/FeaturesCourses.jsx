import React from "react";

const FeaturesCourses = () => {
  return (
    <section
      className="rounded mt-2 mb-2 pt-2 px-4"
      style={{ height: "30svh", width: "98%" }}
    >
      <article className="">
        <h5 className="fw-semibold">Featured Courses</h5>
      </article>

      <article className="featured_cards_container mt-2 d-flex ms-3">
        <div className="featured_cards card w-25 h-100 me-3">A</div>
        <div className="featured_cards card w-25 h-100 me-3">B</div>
        <div className="featured_cards card w-25 h-100 me-3">C</div>
        <div className="featured_cards card w-25 h-100 me-3">D</div>
      </article>
    </section>
  );
};

export default FeaturesCourses;
