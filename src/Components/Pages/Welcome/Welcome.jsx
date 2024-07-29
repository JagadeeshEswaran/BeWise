import React from "react";
import { useAppAuth } from "../../../AppContext/AuthContext";
import FeaturesCourses from "./FeaturesCourses";
import Categories from "./Categories";
import MyCourses from "./MyCourses";

import "./Styles/Welcome.css";
import PageIcon from "../../Page_Comp/PageIcon";

const Welcome = () => {
  const { userData } = useAppAuth();

  return (
    <>
      <section className="welcom_main_Container flex-column d-flex justify-content-start align-items-center ms-2">
        <PageIcon />

        {/* Featured Courses */}
        <FeaturesCourses />

        {/* Filter Section */}
        {/* <Categories /> */}

        {/* My Learnings */}
        {/* <MyCourses /> */}
      </section>

      {/* <footer
        className="mt-5 fw-semibold d-flex justify-content-center align-items-center"
        style={{ fontSize: "12px", position: "fixed", bottom: 20, left: "50%" }}
      >
        {new Date().getFullYear()} @ RHFL IT Dept.
      </footer> */}
    </>
  );
};

export default Welcome;
