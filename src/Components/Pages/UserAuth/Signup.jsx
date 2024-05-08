import React, { useEffect, useState } from "react";
import Puff from "react-loading-icons/dist/esm/components/puff";

import "./FormStyles.css";
import FormInputField from "./FormInputField";
import Recon_CKYC_Backend from "../../../Axios/GlobalInstance";
import BeWise_Backend from "../../../Axios/GlobalInstance";

const Signup = () => {
  const [viewChange, setViewChange] = useState(true);
  const [userData, setUserData] = useState({
    u_id: "",
    email: "",
    username: "",
    password: "",
    cnf_password: "",
    role: "",
    branch: "",
    region: "",
    status: "Application Submitted",
  });

  const handleChange = (name, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(userData);

    try {
      const response = await BeWise_Backend.post("/user/signup", userData);

      if (response.data.success) {
        alert("User Created Successfully, Please wait for Admin Review");

        setUserData({
          u_id: "",
          email: "",
          username: "",
          password: "",
          status: "Application Submitted",
        });
      }
    } catch (error) {
      console.log(error.response.data.msg);
      alert(error?.response?.data?.msg);
    }
  };

  const handleClear = () => {
    setUserData({
      U_id: "",
      email: "",
      emp_id: "",
      username: "",
      password: "",
      name: "",
      emp_role: "",
      emp_branch: "",
      access_privilege: "",
    });
  };

  const handlePasswordCompare = () => {
    if (userData.password !== userData.cnf_password) {
      alert("Password Should match. Please check and type the same password.");
    }
  };

  return (
    <>
      <section
        className="signup_main_container row d-flex flex-row justify-content-center align-items-center"
        style={{ width: "100vw", height: "100svh", marginLeft: "-3.3%" }}
      >
        {viewChange ? (
          <>
            <article
              className="user_input_container card col-3 d-flex justify-content-center align-items-center "
              style={{ height: "80svh", width: "30svw" }}
            >
              <h6 className="ms-5 fs-6 fw-semibold text-light text-center mt-5">
                <img
                  src="/BeWise_icon_no_bg.png"
                  alt="BeWise Icon"
                  height={80}
                  className="position-absolute"
                  style={{ top: "5px", left: "110px", rotate: "-20deg" }}
                />
                <span className="fs-1 me-2 fw-bold ">BeWise</span> by RHFL
              </h6>

              <form
                onSubmit={handleSubmit}
                className="form_Input d-flex flex-column justify-content-center align-items-center w-100 h-100 py-3 text-info-emphasis"
              >
                <FormInputField
                  input_title={"Emp ID"}
                  input_suggestion={""}
                  handleChange={handleChange}
                  name="u_id"
                  textValue={userData.u_id}
                />

                <FormInputField
                  input_title={"Email"}
                  input_suggestion={""}
                  handleChange={handleChange}
                  name="Email"
                  textValue={userData.email}
                />

                <FormInputField
                  input_title={"Full Name"}
                  input_suggestion={""}
                  handleChange={handleChange}
                  name="username"
                  textValue={userData.username}
                />

                <FormInputField
                  input_title={"Password"}
                  input_suggestion={""}
                  handleChange={handleChange}
                  name="password"
                  textValue={userData.password}
                  inputType="password"
                />
                <FormInputField
                  input_title={"Cnf. Password"}
                  input_suggestion={""}
                  name="cnf_password"
                  handleChange={handleChange}
                  textValue={userData.cnf_password}
                  handlePasswordCompare={handlePasswordCompare}
                  inputType="password"
                />

                <article className="my-2 py-2 w-100 d-flex justify-content-between align-items-center">
                  <article>
                    <FormInputField
                      input_title={"Role"}
                      input_suggestion={""}
                      handleChange={handleChange}
                      name="role"
                      value={userData.role}
                    />
                  </article>

                  <article>
                    <FormInputField
                      input_title={"Branch"}
                      input_suggestion={""}
                      handleChange={handleChange}
                      name="branch"
                      value={userData.branch}
                    />
                  </article>
                </article>

                <FormInputField
                  input_title={"Region"}
                  input_suggestion={""}
                  handleChange={handleChange}
                  name="region"
                  value={userData.region}
                />

                <article className="mt-5 d-flex justify-content-evenly w-100">
                  <button type="submit" className="btn btn-success px-5">
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="btn btn-danger px-5"
                  >
                    Clear
                  </button>
                </article>

                <article className="mt-5">
                  If Already Registered, Please{" "}
                  <a href="/statusCheck">
                    <span
                      className=" text-info"
                      type="button"
                      onClick={() => setViewChange(false)}
                    >
                      {" "}
                      click here
                    </span>
                  </a>{" "}
                  to know status
                </article>
              </form>
            </article>
          </>
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default Signup;
