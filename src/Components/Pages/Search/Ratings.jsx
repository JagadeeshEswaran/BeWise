import React from "react";

import Rating from "@mui/material/Rating";

const level_list = [
  {
    id: 1,
    title: "Trainee",
  },
  {
    id: 2,
    title: "Executive",
  },
  {
    id: 3,
    title: "AM & M",
  },
  {
    id: 4,
    title: "Sr. M",
  },
  {
    id: 5,
    title: "Chief",
  },
];

const Ratings = () => {
  const [value, setValue] = React.useState(2);

  return (
    <section
      className="my-3 ms-3 py-4 px-4 border-top border-2 border-dark border-opacity-25 w-75 d-flex justify-content-between "
      style={{ height: "6rem" }}
    >
      <article>
        <h6 className=" fw-semibold ">Ratings</h6>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </article>

      <article>
        <h6>Level</h6>

        <article className=" d-flex ">
          {level_list.map((item) => (
            <article
              key={item.id}
              className=" d-flex justify-content-evenly align-items-center "
            >
              <input type="checkbox" />

              <p className="py-2 px-2" style={{ width: "6rem" }}>
                {item.title}
              </p>
            </article>
          ))}
        </article>
      </article>
    </section>
  );
};

export default Ratings;
