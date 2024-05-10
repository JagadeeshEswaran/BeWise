import React, { useRef, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./FormStyles.css";
import BeWise_Backend from "../../../Axios/GlobalInstance";

const StatusCheck = () => {
  const [showWarningMsg, setShowWarningMsg] = useState(false);
  const u_idRef = useRef();

  const handleStatusCheck = async () => {
    const u_id = u_idRef.current.value;

    try {
      const response = await BeWise_Backend.get(`/user/checkStatus/${u_id}`);
      console.log(response);

      if (response.data.success) {
        if (response.data.application_status === "Approved") {
          setShowWarningMsg(true);
        } else {
          alert(response.data.application_status);
        }
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      console.log(error.response.data.error);
      alert("Error: " + error.response.data.error);
    }
  };

  return (
    <section
      className="signup_main_container row d-flex flex-row justify-content-center align-items-center"
      style={{ width: "100svw", height: "100svh", marginLeft: "-3rem" }}
    >
      <article
        className="user_input_container card col-3 d-flex justify-content-center align-items-center position-relative"
        style={{ height: "40svh", width: "30svw" }}
      >
        <article className="d-flex mb-2 w-75">
          <span
            className="input-group-text bg-light fw-semibold w-50"
            style={{
              width: "8.5rem",
              borderRadius: "5px 0 0 5px",
              color: "#103970",
            }}
            id="basic-addon3"
          >
            Enter Emp ID
          </span>
          <input
            type="text"
            ref={u_idRef}
            style={{ borderRadius: "0 5px 5px 0" }}
            // name={name}
            className="form-control bg-transparent text-light "
            id="basic-url"
            aria-describedby="basic-addon3 basic-addon4"
            // onChange={(e) => handleSelection(name, e.target.value)}
          />
        </article>

        <article className="my-3">
          <button
            className="btn btn-info fw-semibold text-info-emphasis "
            onClick={() => handleStatusCheck()}
          >
            Check Status
          </button>
        </article>

        {showWarningMsg ? (
          <>
            <article className="mb-5 position-absolute bottom-0">
              <h6 className="text-light fw-semibold ">
                Approved !! Please proceed to{" "}
                <a href="/login">
                  <span className=" text-info">Login</span>
                </a>
              </h6>
            </article>
          </>
        ) : (
          <></>
        )}

        <a href="/signup">
          <article
            className="position-absolute end-0 top-0 mt-3 me-3"
            title="Back to SignUp Page"
          >
            <button className="back_to_login_btn border-0 ">
              <IoMdArrowRoundBack className="fs-4" />
            </button>
          </article>
        </a>
      </article>
    </section>
  );
};

export default StatusCheck;
