import React, { useState } from "react";
import { Input } from "antd";
import PageIcon from "../../Page_Comp/PageIcon";

const UserProfileMain = () => {
  const [selectedId, setId] = useState(1);

  const handleSectionSelection = (e) => {
    setId(parseInt(e.target.id));
  };

  return (
    <section className="ps-4 d-flex flex-column justify-content-center align-items-start ms-4">
      <PageIcon />

      <article>
        <h4 className=" fw-semibold opacity-75">Settings</h4>
      </article>

      <article className="mt-4 w-50 border-bottom border-secondary w-100">
        <article
          className="d-flex ms-3 fw-semibold"
          onClick={(e) => handleSectionSelection(e)}
        >
          <p
            className={`px-2 py-3 me-4 border-bottom border-4 ${
              selectedId === 1 ? "border-primary" : ""
            }`}
            type="button"
            id="1"
          >
            Personal Info
          </p>
          <p
            className={`px-2 py-3 me-4 border-bottom border-4 ${
              selectedId === 2 ? "border-primary" : ""
            }`}
            type="button"
            id="2"
          >
            Appearance
          </p>
          <p
            className={`px-2 py-3 me-4 border-bottom border-4 ${
              selectedId === 3 ? "border-primary" : ""
            }`}
            type="button"
            id="3"
          >
            Passwords
          </p>
        </article>
      </article>

      <article>
        {selectedId === 1 ? (
          <section className="">
            <article className="d-flex p-5 justify-content-evenly">
              <article className="w-50 h-50 mt-4">
                <h5 className="mb-4 fw-bold text-dark opacity-75">User_Name</h5>

                <Input size="large" placeholder="First Name" className="mb-2" />
                <Input size="large" placeholder="Last Name" className="mb-2" />
                <Input
                  size="large"
                  placeholder="Date of Birth"
                  className="mb-2"
                />
                <Input size="large" placeholder="Address" className="mb-2" />
              </article>

              <article>
                <img
                  src="/userProfilePic_2.png"
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-circle"
                />
              </article>
            </article>

            <article className="w-75 d-flex justify-content-center align-items-center">
              <button className="btn w-50 py-2">Update Details</button>
            </article>
          </section>
        ) : selectedId === 2 ? (
          <>
            <article className="d-flex p-5 justify-content-evenly">
              <h6>Theme Selection is Under Development</h6>
            </article>
          </>
        ) : selectedId === 3 ? (
          <>
            <article
              className="d-flex flex-column p-5 justify-content-evenly"
              style={{ width: "25rem" }}
            >
              <h5 className="mb-4 fw-bold text-dark opacity-75">
                Password Update
              </h5>

              <article>
                <Input
                  size="large"
                  placeholder="Old Password"
                  className="mb-2 w-100"
                />
                <Input
                  size="large"
                  placeholder="New Password"
                  className="mb-2 w-100"
                />
                <Input
                  size="large"
                  placeholder="Confirm New Password"
                  className="mb-2 w-100"
                />

                <button className="btn mt-3 w-50">Update</button>
              </article>
            </article>
          </>
        ) : (
          <></>
        )}
      </article>
    </section>
  );
};

export default UserProfileMain;
