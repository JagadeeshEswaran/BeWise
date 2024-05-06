import React from "react";
import UserDetails from "./UserDetails";
import UserStatistics from "./UserStatistics";
import UserAchievements from "./UserAchievements";
import UserFollow from "./UserFollow";

const Settings = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  // console.log(userData);

  return (
    <section className="row p-4 h-100 d-flex justify-content-evenly align-items-center">
      <article className="col-6 h-100 rounded bg-light-subtle">
        <article className=" h-25 my-2">
          <UserDetails userData={userData} />
        </article>

        <article className=" h-25 my-2">
          <UserStatistics />
        </article>

        <article
          className="my-2"
          style={{ height: "auto", minHeight: "20rem" }}
        >
          <UserAchievements />
        </article>
      </article>

      <article className="col-5 h-100 ps-4 border-start border-2 border-light">
        <UserFollow userData={userData} />
      </article>
    </section>
  );
};

export default Settings;
