import React from "react";
import { Button, Result } from "antd";
const ResultSuccess = ({ title, subTitle, link1, link2 }) => {
  return (
    <Result
      status="success"
      title="Success, Author Registration Request Submitted."
      subTitle="You can Sit back, Our System Admin will take care of the rest..."
      extra={[
        <a href="/">
          <Button type="primary" key="console">
            Go to Dashboard
          </Button>
        </a>,
        <a href="#">
          <Button key="buy">Explore Courses</Button>
        </a>,
      ]}
    />
  );
};
export default ResultSuccess;
