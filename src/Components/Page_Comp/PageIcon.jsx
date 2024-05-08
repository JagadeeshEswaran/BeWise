import React from "react";

const PageIcon = () => {
  return (
    <article className="d-flex justify-content-end align-items-end w-100">
      <h6
        className="ms-5 fw-semibold text-center mt-4 text-info-emphasis"
        style={{ fontSize: "12px" }}
      >
        <img
          src="/BeWise_icon_no_bg.png"
          alt="BeWise Icon"
          height={45}
          className="position-absolute"
          style={{ top: "2px", right: "178px", rotate: "-20deg" }}
        />
        <span className="fs-3 me-1 fw-bold text-info">BeWise</span> by RHFL
      </h6>
    </article>
  );
};

export default PageIcon;
