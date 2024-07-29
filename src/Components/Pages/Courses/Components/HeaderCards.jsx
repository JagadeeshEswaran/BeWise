import React from "react";

const HeaderCards = ({
  handleSubSectionSelection,
  item,
  selectedSubSection,
  isOverview,
}) => {
  console.log("isSubSectionOverview: ", isOverview);

  return (
    <>
      <button
        className={`course-subsection-btn bg-opacity-25 m-2 rounded btn d-flex justify-content-center align-items-center position-relative ${
          selectedSubSection.id === item.id
            ? "bg-info text-dark border border-3 border-info"
            : "bg-dark text-dark border border-3 border-dark border-opacity-25"
        } ${isOverview ? "" : " "}`}
        key={item.id}
        onClick={() => handleSubSectionSelection(item)}
      >
        {isOverview ? (
          <>
            <span
              className=" position-absolute"
              //   style={{ width: "5rem", height: "3rem" }}
            >
              <iframe
                src="https://lottie.host/embed/88ababf8-5c16-4d10-b87b-69d0b24f7947/Omkfey7QEw.json"
                width="100"
              ></iframe>
            </span>
            <h6>{item.subSectionTitle}</h6>
          </>
        ) : (
          <>
            <h6>{item.subSectionTitle}</h6>
          </>
        )}
      </button>
    </>
  );
};

export default HeaderCards;
