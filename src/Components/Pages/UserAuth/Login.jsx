import React, { useState } from "react";
import FormInputField from "./FormInputField";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import SkillStream_Backend from "../../../Axios/GlobalInstance";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
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

    // console.log(userData);

    try {
      const response = await SkillStream_Backend.post("/user/signin", userData);

      console.log(response);

      if (response.data.success) {
        toast.success("User Logged In Successfully !!");

        await localStorage.setItem("isLoggedIn", true);

        await localStorage.setItem(
          "userData",
          JSON.stringify(response.data.userData)
        );

        location.reload();
      }
    } catch (error) {
      console.log(error);
      // alert("Unable to Process the Request right Now..");
      toast.success("Unable to Login Right Now, Please Try again later");
    }
  };

  const handleClear = () => {
    setUserData({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <section
        className="login_main_container row d-flex flex-row justify-content-center align-items-center"
        style={{ width: "100vw", height: "100svh" }}
      >
        {/* User Input Section */}
        <article
          className="user_input_container card col-4"
          style={{ height: "60svh", width: "27vw" }}
        >
          <h6 className="ms-5 fs-6 fw-semibold text-light text-center mt-5">
            <span className="fs-1 me-2 fw-bold ">BeWise</span> by RHFL
          </h6>

          <form className="form_Input d-flex flex-column justify-content-center align-items-center w-100 h-100 py-3 px-3">
            <FormInputField
              input_title={"Emp ID"}
              input_suggestion={""}
              handleChange={handleChange}
              name="username"
            />
            <FormInputField
              input_title={"Password"}
              input_suggestion={""}
              handleChange={handleChange}
              name="password"
            />

            <article className="mt-5 d-flex justify-content-evenly w-100">
              <button onClick={handleSubmit} className="btn btn-success px-5">
                Sign In
              </button>
              <button onClick={handleClear} className="btn btn-danger px-5">
                Clear
              </button>
            </article>

            <article
              className="mt-5 text-center"
              style={{ lineHeight: "24px" }}
            >
              If you want to Signup, Please{" "}
              <a href="/signup">
                <span className=" text-info" type="button">
                  {" "}
                  click here
                </span>
              </a>{" "}
              to Register
            </article>
          </form>
        </article>
      </section>
    </>
  );
};

export default Login;
