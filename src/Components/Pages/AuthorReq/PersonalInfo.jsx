import React from "react";
import { RiPinDistanceFill } from "react-icons/ri";
import { ImOffice } from "react-icons/im";

import { Flex, Input } from "antd";
const { TextArea } = Input;

const PersonalInfo = ({ userData, setUserData, handleChange }) => {
  return (
    <section className="h-100">
      <article className="d-flex ">
        <article className="h-25">
          <img
            src="/userProfilePic_2.png"
            alt={userData.username}
            height={300}
            width={300}
            className="bg-secondary rounded rounded-circle border border-light shadow"
          />
        </article>

        <article className="ps-4 text-wrap d-flex flex-column justify-content-center align-items-start">
          <h3 className=" fw-semibold text-dark text-opacity-75">
            {userData.username}
          </h3>

          <p className="mt-3">
            <ImOffice className="me-2 fs-4" />
            {userData.branch_or_dept}
          </p>

          <p className="mt-3">
            {" "}
            <RiPinDistanceFill className="fs-3" />{" "}
            {userData.location_or_hometown || "User_Location"}
          </p>

          <TextArea
            showCount
            maxLength={200}
            placeholder={!userData.bio ? "Please type your Bio" : null}
            defaultValue={userData.bio || ""}
            className="mt-4"
            style={{ width: "27rem", height: "5rem" }}
            name="bio"
            onChange={(e) => handleChange("bio", e)}
          />
        </article>
      </article>

      <article className="my-3">
        <h5 className=" fw-semibold text-dark text-opacity-75 py-2">
          Qualification
        </h5>

        <article className=" d-flex flex-column">
          <article>
            <Input
              addonBefore="Highest Qualification"
              className="py-1"
              placeholder="Please enter your Highest Qualification"
              style={{ width: "45%" }}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  edu_qual: {
                    ...userData.edu_qual,
                    high_qual: e.target.value,
                  },
                })
              }
            />

            <Input
              addonBefore="University : "
              className=" w-50 py-1 ms-2"
              placeholder="Please enter your Highest Qualification"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  edu_qual: {
                    ...userData.edu_qual,
                    univ: e.target.value,
                  },
                })
              }
            />
          </article>

          <Input
            addonBefore="Ph.D / Dr. (if Any) :"
            className=" w-50 py-2"
            placeholder="Please type If you've honoured with Ph.D / Dr."
            onChange={(e) =>
              setUserData({
                ...userData,
                edu_qual: {
                  ...userData.edu_qual,
                  phd_dr: e.target.value,
                },
              })
            }
          />

          <Input
            addonBefore="Awards / Certifications :"
            className=" w-50 py-2"
            placeholder="Please enter your Email Id"
            onChange={(e) =>
              setUserData({
                ...userData,
                edu_qual: {
                  ...userData.edu_qual,
                  certifications: e.target.value,
                },
              })
            }
          />
        </article>
      </article>

      <article className="my-3">
        <h5 className=" fw-semibold text-dark text-opacity-75 py-2">
          Contact Info
        </h5>

        <article className=" d-flex flex-column">
          <Input
            addonBefore="Email :"
            className=" w-50 py-1"
            placeholder={!userData.email ? "Please type your Bio" : null}
            defaultValue={userData.email || ""}
            value={userData?.email ? userData.email : ""}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />

          <Input
            addonBefore="Phone :"
            className=" w-50 py-2"
            placeholder="Please enter your Email Id"
            onChange={(e) =>
              setUserData({ ...userData, contact_ph: e.target.value })
            }
          />

          <Input
            addonBefore="Office CUG :"
            className=" w-50 py-2"
            placeholder="Please enter your Email Id"
            onChange={(e) =>
              setUserData({ ...userData, contact_cug: e.target.value })
            }
          />
        </article>
      </article>
    </section>
  );
};

export default PersonalInfo;
