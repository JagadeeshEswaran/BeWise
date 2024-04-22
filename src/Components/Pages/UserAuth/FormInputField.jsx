import React from "react";

const FormInputField = ({
  input_title,
  input_suggestion,
  name,
  handleChange,
}) => {
  return (
    <>
      <div className="input-group mb-2 bg-dark-subtle rounded-0">
        {name === "emp_role" ? (
          <>
            <select
              name="emp_role"
              id=""
              onChange={handleChange}
              className="px-3 py-1 rounded-1 fw-semibold"
              style={{ width: "10rem" }}
            >
              <option value="Maker" className="text-info-emphasis rounded-1">
                Maker
              </option>
              <option value="Checker" className="text-info-emphasis rounded-1">
                Checker
              </option>
            </select>
          </>
        ) : name === "access_privilege" ? (
          <>
            <select
              name="access_privilege"
              id=""
              onChange={handleChange}
              className="px-3 py-1 rounded-1 fw-semibold "
              style={{ width: "10rem" }}
            >
              <option value="DE_Maker" className="text-info-emphasis rounded-1">
                DE_Maker
              </option>
              <option
                value="DE_Checker"
                className="text-info-emphasis rounded-1"
              >
                DE_Checker
              </option>
              <option value="Viewer" className="text-info-emphasis rounded-1">
                View Only
              </option>
            </select>
          </>
        ) : (
          <>
            <span
              className="input-group-text text-info-emphasis fw-semibold"
              style={{ width: "8.5rem" }}
              id="basic-addon3"
            >
              {input_title}
            </span>
            <input
              type="text"
              name={name}
              className="form-control bg-transparent text-light"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
              onChange={handleChange}
            />
          </>
        )}
      </div>
    </>
  );
};

export default FormInputField;
