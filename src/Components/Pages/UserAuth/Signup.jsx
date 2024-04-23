import React, { useState } from "react";
import Puff from "react-loading-icons/dist/esm/components/puff";

import "./FormStyles.css";
import FormInputField from "./FormInputField";
import Recon_CKYC_Backend from "../../../Axios/GlobalInstance";

const Signup = () => {
  const [userData, setUserData] = useState({
    U_id: "",
    emp_id: "",
    username: "",
    password: "",
    name: "",
    emp_role: "",
    emp_branch: "",
    access_privilege: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await setUserData({
      ...userData,
      emp_id: userData.U_id,
      username: userData.emp_branch + "_" + userData.U_id,
    });

    console.log(userData);

    try {
      const response = await Recon_CKYC_Backend.post("/admin/signup", userData);

      console.log(response);
    } catch (error) {
      console.log(error);
      // alert("Unable to Process the Request right Now..");
    }
  };

  const handleClear = () => {
    setUserData({
      U_id: "",
      emp_id: "",
      username: "",
      password: "",
      name: "",
      emp_role: "",
      emp_branch: "",
      access_privilege: "",
    });
  };

  return (
    <>
      <section
        className="signup_main_container row d-flex flex-row justify-content-center align-items-center"
        style={{ width: "100vw", height: "100svh" }}
      >
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
              style={{ top: "10px", left: "110px", rotate: "-20deg" }}
            />
            <span className="fs-1 me-2 fw-bold ">BeWise</span> by RHFL
          </h6>

          <form
            onSubmit={handleSubmit}
            className="form_Input d-flex flex-column justify-content-center align-items-center w-100 h-100  py-3"
          >
            <FormInputField
              input_title={"Emp ID"}
              input_suggestion={""}
              handleChange={handleChange}
              name="U_id"
            />

            <FormInputField
              input_title={"Password"}
              input_suggestion={""}
              handleChange={handleChange}
              name="password"
            />
            <FormInputField
              input_title={"Cnf. Password"}
              input_suggestion={""}
              name="cnf_password"
            />
            <FormInputField
              input_title={"Full Name"}
              input_suggestion={""}
              handleChange={handleChange}
              name="name"
            />

            <article className="my-2 ms-5 w-100 d-flex justify-content-center align-items-center">
              <FormInputField
                input_title={"Role"}
                input_suggestion={""}
                handleChange={handleChange}
                name="emp_role"
              />

              <FormInputField
                input_title={"Access"}
                input_suggestion={""}
                handleChange={handleChange}
                name="access_privilege"
              />
            </article>

            <FormInputField
              input_title={"Branch"}
              input_suggestion={""}
              handleChange={handleChange}
              name="emp_branch"
            />

            <article className="mt-5 d-flex justify-content-evenly w-100">
              <button type="submit" className="btn btn-success px-5">
                Submit
              </button>
              <button onClick={handleClear} className="btn btn-danger px-5">
                Clear
              </button>
            </article>

            <article className="mt-5">
              If you have an Account, Please{" "}
              <a href="/login">
                <span className=" text-info" type="button">
                  {" "}
                  click here
                </span>
              </a>{" "}
              to Login
            </article>
          </form>
        </article>

        {/*         
        <article
          className="user_guide_container card col-5 ms-3 d-flex justify-content-center align-items-center "
          style={{ height: "80svh" }}
        >
          <h4>User Guide</h4>
        </article> */}
      </section>
    </>
  );
};

export default Signup;
