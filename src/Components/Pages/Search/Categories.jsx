import React from "react";

const categ_list = [
  {
    id: 1,
    title: "Sales",
  },
  {
    id: 2,
    title: "Credit",
  },
  {
    id: 3,
    title: "Legal",
  },
  {
    id: 4,
    title: "HR",
  },
  {
    id: 5,
    title: "Admin",
  },
  {
    id: 6,
    title: "Operations",
  },
];

const Categories = () => {
  return (
    <section
      className="my-3 ms-3 py-3 px-4 border-top border-2 border-dark border-opacity-25 w-75 "
      style={{ height: "7rem" }}
    >
      <article className="">
        <h6 className=" fw-semibold ">Catgories</h6>
      </article>

      <article className="w-75 ms-3 d-flex py-2">
        {categ_list.map((item) => (
          <article
            key={item.id}
            className=" d-flex justify-content-center align-items-center "
          >
            {/* <article
              className="border border-dark"
              style={{ height: "1rem", width: "1rem" }}
            ></article> */}

            <input type="checkbox" />

            <p className="px-2 py-2" style={{ width: "12rem" }}>
              {item.title}
            </p>
          </article>
        ))}
      </article>
    </section>
  );
};

export default Categories;
