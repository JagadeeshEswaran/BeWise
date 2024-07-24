import React from "react";

import "./Styles/AuthorStyles.css";
import PageIcon from "../../Page_Comp/PageIcon";

const AuthorDashboard = ({ userName }) => {
  const author = userName || "UserAuthor";
  return (
    <>
      <section className="dashboadHeader d-flex justify-content-between align-items-start m-3 ms-5">
        <div className="d-flex flex-column" style={{ width: "80%" }}>
          <h2 className="mb-2 fw-semibold">Welcome, {author}!</h2>
          <p>
            Here you can manage your course list, add new course, update course
            details, and even delete courses.
          </p>
        </div>

        <div className="">
          <PageIcon />
        </div>
      </section>
    </>
  );
};

export default AuthorDashboard;
