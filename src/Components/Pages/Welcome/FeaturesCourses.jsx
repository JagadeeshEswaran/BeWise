import React from "react";
import { courses } from "../../../Constants/UserPages/Courses";
import { colors } from "@mui/material";

const FeaturesCourses = () => {
  return (
    <section
      className="rounded mb-3 pt-2 px-4"
      style={{ height: "30svh", width: "98%" }}
    >
      <article className="">
        <h5 className="fw-semibold">Featured Courses</h5>
      </article>
      <article className="featured_cards_container mt-2 d-flex ms-4">
        <div className="w-25 h-100 me-3 my-2">
          {courses.map((item) => (
            <a
              href={`/courses/${item.linkTag}`}
              key={item.id}
              // style={{ textDecoration: "none",  }}
            >
              <div
                className="card position-relative featured_cards"
                style={{ height: "11rem", width: "100%" }}
                title={item.title}
              >
                <div
                  style={{
                    height: "70%",
                    // border: "2px solid red",
                    width: "40%",
                    background: "rgb(201, 202, 202)",
                    // objectFit: "scale-down",
                  }}
                  className="position-absolute end-0 bottom-0 m-1 rounded"
                >
                  <img
                    src={item.bg_image}
                    className="card-img"
                    alt={item.title}
                    height="110%"
                  />
                </div>

                <div className="card-body d-flex flex-column align-items-start justify-content-start card-img-overlay">
                  <h6 className="mb-2 fs-5">{item.title}</h6>
                  <p className="text-center mb-2">Duration: {item.duration}</p>
                  <p className="text-center mb-2">{item.price}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* <div className="featured_cards card w-25 h-100 me-3" disabled>
          B
        </div>
        <div className="featured_cards card w-25 h-100 me-3" disabled>
          C
        </div>
        <div className="featured_cards card w-25 h-100 me-3" disabled>
          D
        </div> */}
      </article>{" "}
    </section>
  );
};

export default FeaturesCourses;
