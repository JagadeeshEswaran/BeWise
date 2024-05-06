import React from "react";
import { RiPinDistanceFill } from "react-icons/ri";
import { ImOffice } from "react-icons/im";

const PersonalInfo = () => {
  return (
    <section className="h-100">
      <article className="h-100 d-flex">
        <article className="h-25">
          <img
            src="/user_Pic_Placeholder.png"
            alt=""
            height={300}
            width={300}
            className="bg-secondary rounded rounded-circle border border-light shadow"
          />
        </article>

        <article className="ps-4 text-wrap">
          <h3 className=" fw-semibold text-dark">Name_of_User</h3>
          <p className="mt-3">
            <ImOffice />
            Branch or Dept
          </p>
          <p className="mt-2">
            {" "}
            <RiPinDistanceFill className="fs-3" /> User_location
          </p>
        </article>
      </article>
    </section>
  );
};

export default PersonalInfo;

// Profile Pic
// Name & Branch / Role
// Biography (Mandaroty)
// Contact Ingo -> Email Id, Contact Info & Branch Reachout
