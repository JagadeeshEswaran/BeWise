import React from "react";
import HoverDropDown from "../../../Utils/AntUI/HoverDD";
import { useNavigate } from "react-router-dom";

const UserFollow = ({ userData }) => {
  const navigate = useNavigate();

  const handleBecomeAuthor = () => {
    if (
      userData.userType === "Trainee" ||
      userData.userType === "Executive / Sr.Executive" ||
      userData.userType === "AM / M"
    ) {
      return alert("Minimum CM / SM Cadre Required");
    } else {
      navigate("/author_mentor_req");
    }
  };

  return (
    <section className="pt-3 px-2 h-100 w-100 d-flex flex-column justify-content-between">
      <article className=" d-flex flex-column">
        <article>
          <h5 className="fw-bold text-secondary">Mentors you Like</h5>
        </article>

        <article className="mt-3 d-flex justify-content-evenly align-items-center w-100 position-relative">
          <article
            className="bg-light shadow-sm w-100 rounded-4 d-flex flex-column justify-content-start align-items-center p-3"
            style={{ height: "auto", minHeight: "15rem" }}
          >
            <article className="d-flex justify-content-between align-items-center w-100 px-4 mt-1 py-2 mb-3 border-bottom border-1 border-secondary-subtle rounded shadow-sm">
              <article className=" d-flex justify-content-center align-items-center">
                <img
                  src="/author_1.png"
                  alt=""
                  height={25}
                  className="bg-secondary rounded rounded-circle shadow-sm"
                />
                <p className="ms-3 fw-semibold fs-6 text-secondary">
                  Author_01
                </p>
              </article>

              <article>
                <HoverDropDown />
              </article>
            </article>

            <article className="d-flex justify-content-between align-items-center w-100 px-4 mt-1 py-2 mb-3 border-bottom border-1 border-secondary-subtle rounded shadow-sm">
              <article className=" d-flex justify-content-center align-items-center">
                <img
                  src="/author_2.png"
                  alt=""
                  height={25}
                  className="bg-secondary rounded rounded-circle shadow-sm"
                />
                <p className="ms-3 fw-semibold fs-6 text-secondary">
                  Author_02
                </p>
              </article>

              <article>
                <HoverDropDown />
              </article>
            </article>

            <article
              className="position-absolute bottom-0 mb-3 px-3 py-2 border border-success rounded bg-success bg-opacity-25 text-success fw-semibold"
              type="button"
            >
              View More
            </article>
          </article>
        </article>
      </article>

      <article
        className="mb-3 px-5 py-3 rounded bg-primary text-light text-center fw-semibold"
        type="button"
        onClick={() => handleBecomeAuthor(userData)}
      >
        Become an Author / Mentor
      </article>
    </section>
  );
};

export default UserFollow;
