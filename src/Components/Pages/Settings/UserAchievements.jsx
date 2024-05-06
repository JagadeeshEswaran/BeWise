import React from "react";
import { SiTicktick } from "react-icons/si";
import { CgSandClock } from "react-icons/cg";
import { GrAchievement } from "react-icons/gr";

import { RiTokenSwapFill } from "react-icons/ri";
import { GiStairsGoal } from "react-icons/gi";

import { Flex, Progress, Tooltip } from "antd";

const UserAchievements = () => {
  return (
    <section className="p-2 h-100">
      <article className="">
        <h5 className="fw-bold text-secondary">Achievements</h5>
      </article>

      <article className="mt-3 d-flex flex-column justify-content-evenly align-items-center h-100 w-100">
        <article
          className="bg-light shadow-sm w-100 rounded-4 d-flex mb-2 d-flex justify-content-start align-items-center"
          style={{ height: "7rem" }}
          type="button"
        >
          <article
            className="m-2 border bg-info bg-opacity-50 rounded-4 d-flex  justify-content-center align-items-center"
            style={{ height: "6rem", width: "6.5rem" }}
          >
            <GiStairsGoal className="fs-1 text-primary opacity-100" />
          </article>
          <article className=" d-flex flex-column justify-content-start align-items-center h-100 p-3 w-75">
            <article className=" w-100 d-flex justify-content-between align-items-center">
              <p className=" fw-semibold text-secondary">Award 1</p>
              <p className=" fw-bold text-secondary">1/3</p>
            </article>

            <Progress percent={60} success={{ percent: 30 }} className="my-2" />

            <p className="text-secondary" style={{ fontSize: "14px" }}>
              Tips to Reach 100% & Achieve the Award
            </p>
          </article>
        </article>

        <article
          className="bg-light shadow-sm w-100 rounded-4 d-flex mb-2 d-flex justify-content-start align-items-center"
          style={{ height: "7rem" }}
          type="button"
        >
          <article
            className="m-2 border bg-warning bg-opacity-50 rounded-4 d-flex  justify-content-center align-items-center"
            style={{ height: "6rem", width: "6.5rem" }}
          >
            <RiTokenSwapFill className="fs-1 text-danger opacity-100" />
          </article>
          <article className=" d-flex flex-column justify-content-start align-items-center h-100 p-3 w-75">
            <article className=" w-100 d-flex justify-content-between align-items-center">
              <p className=" fw-semibold text-secondary">Award 2</p>
              <p className=" fw-bold text-secondary">3/3</p>
            </article>

            <Progress percent={99} success={{ percent: 60 }} className="my-2" />

            <p className="text-secondary" style={{ fontSize: "14px" }}>
              Tips to Reach 100% & Achieve the Award
            </p>
          </article>
        </article>
      </article>
    </section>
  );
};

export default UserAchievements;
