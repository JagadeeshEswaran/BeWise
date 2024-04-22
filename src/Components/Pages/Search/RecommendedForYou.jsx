import React from "react";

const RecommendedForYou = () => {
  return (
    <section
      className="my-3 ms-3 py-3 px-4 border-top border-2 border-dark border-opacity-25 w-75"
      style={{ height: "8rem" }}
    >
      <article>
        <h6 className=" fw-semibold ">Recommended For You</h6>
      </article>

      <article className=" d-flex ">
        <div className="w-25 rounded">
          <img
            src="/collection/banking&Fin.jpg"
            className="rounded mb-2"
            alt=""
            height={120}
            width={220}
          />

          <h6>Title</h6>
          <p>Description</p>
        </div>
        <div className="w-25 rounded">
          <img
            src="/collection/banking&Fin.jpg"
            className="rounded mb-2"
            alt=""
            height={120}
            width={220}
          />

          <h6>Title</h6>
          <p>Description</p>
        </div>
        <div className="w-25 rounded">
          <img
            src="/collection/banking&Fin.jpg"
            className="rounded mb-2"
            alt=""
            height={120}
            width={220}
          />

          <h6>Title</h6>
          <p>Description</p>
        </div>
      </article>
    </section>
  );
};

export default RecommendedForYou;
