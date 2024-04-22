import React from "react";
import { useAppAuth } from "../../../AppContext/AuthContext";
import FeaturesCourses from "./FeaturesCourses";
import Categories from "./Categories";
import MyCourses from "./MyCourses";

import "./Styles/Welcome.css";

const Welcome = () => {
  const { userData } = useAppAuth();

  return (
    <>
      <section className="welcom_main_Container flex-column d-flex justify-content-center align-items-center">
        {/* Featured Courses */}
        <FeaturesCourses />

        {/* Filter Section */}
        <Categories />

        {/* My Learnings */}
        <MyCourses />

        <footer className="mt-5 fw-semibold" style={{ fontSize: "12px" }}>
          {new Date().getFullYear()} @ RHFL IT Dept.
        </footer>
      </section>
    </>
  );
};

export default Welcome;
