import React, { useState } from "react";
import { Flex, Input } from "antd";
import { Button, notification, Space } from "antd";
import BeWise_Backend from "../../../Axios/GlobalInstance";
import ResultSuccess from "../../../Utils/AntUI/ResutSuccess";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;

const InterestDomain = ({ userData, setUserData, handleChange }) => {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const handleClear = () => {
    api.destroy();
  };

  const handleSubmit = async () => {
    const key = `open${Date.now()}`;
    // api.destroy(key);
    api.destroy();

    console.log(userData);

    try {
      let response = await BeWise_Backend.post("/admin/newAuthorReq", userData);

      if (response.status === 201) {
        navigate("/author_mentor_req/success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button type="link" size="small" onClick={() => handleClear()}>
          Clear All
        </Button>
        <Button type="primary" size="small" onClick={() => handleSubmit()}>
          Confirm
        </Button>
      </Space>
    );

    api.open({
      message: "Confirm Submission",
      description: "Are you sure, you want to confirm the Submission ?",
      btn,
      key,
      onClose: close,
    });
  };

  return (
    <>
      <section className=" w-100 ms-5">
        <article className="w-100">
          <h5 className=" fw-semibold text-dark text-opacity-75 py-2">
            Professional Experience
          </h5>

          <TextArea
            showCount
            maxLength={1200}
            placeholder="Please Type about your Experience"
            className="mt-2"
            style={{
              width: "100%",
              height: 120,
              resize: "none",
            }}
            onChange={(e) => handleChange("prof_experience", e)}
          />

          <article>
            <TextArea
              placeholder="Please type your Subject of Interest"
              autoSize={{
                minRows: 2,
                maxRows: 6,
              }}
              className="mt-5"
              onChange={(e) => handleChange("sub_of_interest", e)}
            />
            <p className="mt-1 ps-2" style={{ fontSize: "12px" }}>
              Please use comma ( , ) to mention different Interest Areas
            </p>
          </article>

          <article>
            <TextArea
              placeholder="Please type the Skills you are Good at"
              autoSize={{
                minRows: 2,
                maxRows: 6,
              }}
              className="mt-3"
              onChange={(e) => handleChange("skills", e)}
            />
            <p className="mt-1 ps-2" style={{ fontSize: "12px" }}>
              Please use comma ( , ) to mention different Skills
            </p>
          </article>
        </article>

        {contextHolder}

        <article className="mt-5 w-100">
          <button className="btn w-100 btn-info" onClick={openNotification}>
            Submit Request
          </button>
        </article>
      </section>
    </>
  );
};

export default InterestDomain;
