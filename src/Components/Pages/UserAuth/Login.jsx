import React, { useState } from "react";
import FormInputField from "./FormInputField";
import bcrypt from "bcryptjs-react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BeWise_Backend from "../../../Axios/GlobalInstance";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userData.username || !userData.password) {
      toast.warning("Username or Password should not be Empty !");
      return;
    }

    try {
      const response = await BeWise_Backend.post("/user/signin", userData);

      console.log(response.data);

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
      console.log(error.response.data.error);
      // alert("Unable to Process the Request right Now..");

      if (error.response.data.error) {
        return toast.error(error.response.data.error);
      }

      toast.error("Unable to Login Right Now, Please Try again later");
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
        style={{ width: "100vw", height: "100svh", marginLeft: "-3.3%" }}
      >
        {/* User Input Section */}
        <article
          className="user_input_container card col-4"
          style={{ height: "65svh", width: "27vw" }}
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

          <article className=" d-flex justify-content-evenly align-items-center t">
            <a href="/admin/login">
              <p className="text-center text-light mt-4 fw-semibold mb-2 py-2 px-3 ">
                Admin Login
              </p>
            </a>

            <a href="/login">
              <p className="text-center text-light mt-4 fw-semibold mb-2 py-2 px-3 border border-ligh rounded-4">
                User Login
              </p>
            </a>
          </article>

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
              inputType="password"
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
