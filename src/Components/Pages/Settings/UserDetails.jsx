import React from "react";

const UserDetails = ({ userData }) => {
  const { username, branch_or_dept, bio } = userData;

  return (
    <section className=" d-flex justify-content-center align-items-centerh h-100">
      <article className="w-25 d-flex justify-content-center align-items-center">
        <img
          src="/userProfilePic_2.png"
          alt=""
          height={150}
          className=" border border-light rounded rounded-circle shadow"
        />
      </article>

      <article className="w-75 my-3 px-3 d-flex flex-column justify-content-evenly">
        <article>
          <h6 className=" fw-semibold fs-5 ">{username}</h6>
          <p>{branch_or_dept}</p>
        </article>

        <article>
          {bio
            ? bio
            : "Write a Short Biography about your Learning and Interest"}
        </article>
      </article>
    </section>
  );
};

export default UserDetails;
