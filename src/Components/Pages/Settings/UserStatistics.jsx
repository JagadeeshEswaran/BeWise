import React from "react";
import { SiTicktick } from "react-icons/si";
import { CgSandClock } from "react-icons/cg";
import { GrAchievement } from "react-icons/gr";

const UserStatistics = () => {
  return (
    <section className="p-2 h-75">
      <article className="">
        <h5 className="fw-bold text-secondary">Top Statistics</h5>
      </article>

      <article className="mt-3 d-flex justify-content-evenly align-items-center h-100 w-100">
        <article
          className=" bg-light shadow-sm w-25 h-100 rounded-4"
          style={{ width: "3rem", height: "2.5rem" }}
          type="button"
        >
          <article className="h-50 m-2 border bg-info bg-opacity-50 rounded-4 d-flex justify-content-center align-items-center">
            <SiTicktick className="fs-2 text-primary opacity-100" />
          </article>
          <article className="text-center">
            <p className=" fw-semibold text-secondary">Finished Courses</p>
            <h5 className=" fw-semibold fs-5 pt-1 text-info-emphasis opacity-75">
              10
            </h5>
          </article>
        </article>

        <article
          className=" bg-light shadow-sm w-25 h-100 rounded-4"
          style={{ width: "3rem", height: "2.5rem" }}
          type="button"
        >
          <article className="h-50 m-2 border bg-danger bg-opacity-50 rounded-4 d-flex justify-content-center align-items-center">
            <CgSandClock className="fs-1 text-danger opacity-100" />
          </article>
          <article className="text-center">
            <p className=" fw-semibold text-secondary">Hours Learnt</p>
            <h5 className=" fw-semibold fs-5 pt-1 text-info-emphasis opacity-75">
              10
            </h5>
          </article>
        </article>

        <article
          className=" bg-light shadow-sm w-25 h-100 rounded-4"
          style={{ width: "3rem", height: "2.5rem" }}
          type="button"
        >
          <article className="h-50 m-2 border bg-success bg-opacity-50 rounded-4 d-flex justify-content-center align-items-center">
            <GrAchievement className="fs-2 text-success opacity-100" />
          </article>
          <article className="text-center">
            <p className=" fw-semibold text-secondary">Skills Achieved</p>
            <h5 className=" fw-semibold fs-5 pt-1 text-info-emphasis opacity-75">
              10
            </h5>
          </article>
        </article>
      </article>
    </section>
  );
};

export default UserStatistics;
