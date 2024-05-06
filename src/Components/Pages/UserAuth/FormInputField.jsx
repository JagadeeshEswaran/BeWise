import React, { useState } from "react";

const FormInputField = ({
  input_title,
  handlePasswordCompare,
  name,
  handleChange,
  textValue,
  inputType,
}) => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleSelection = (name, val) => {
    setSelectedRole(val);
    handleChange(name, val);

    console.log(name, val);
  };

  return (
    <section className="input-group bg-dark-subtle rounded-0">
      {name === "role" ? (
        <>
          <select
            name="role"
            onChange={(e) => handleSelection("role", e.target.value)}
            value={selectedRole || "Select"}
            className="py-1 rounded-1 fw-semibold d-flex justify-content-center align-items-center"
            style={{ width: "14rem", color: "#103970" }}
          >
            <option
              value="Select"
              default
              className="text-info-emphasis rounded-1"
            >
              Select your role
            </option>
            <option value="Trainee" className="text-info-emphasis rounded-1">
              Trainee
            </option>
            <option
              value="Executive / Sr.Executive"
              className="text-info-emphasis rounded-1"
            >
              Executive / Sr.Exe
            </option>
            <option value="AM / M" className="text-info-emphasis rounded-1">
              AM / M
            </option>
            <option value="SM / CM" className="text-info-emphasis rounded-1">
              SM / CM
            </option>
          </select>
        </>
      ) : name === "branch" ? (
        <>
          <select
            name="branch"
            onChange={(e) => handleSelection("branch", e.target.value)}
            value={selectedRole || "Select"}
            className="py-1 rounded-1 fw-semibold d-flex justify-content-center align-items-center"
            style={{ width: "14rem", color: "#103970" }}
          >
            <option
              value="Select"
              default
              className="text-info-emphasis rounded-1"
            >
              Select your Branch
            </option>
            <option value="Branch 01" className="text-info-emphasis rounded-1">
              Branch 01
            </option>
            <option value="Branch 02" className="text-info-emphasis rounded-1">
              Branch 02
            </option>
            <option value="Branch 03" className="text-info-emphasis rounded-1">
              Branch 03
            </option>
            <option value="Branch 04" className="text-info-emphasis rounded-1">
              Branch 04
            </option>
          </select>
        </>
      ) : name === "region" ? (
        <>
          <select
            name="region"
            onChange={(e) => handleSelection("region", e.target.value)}
            value={selectedRole || "Select"}
            className="py-1 rounded-1 fw-semibold d-flex justify-content-center align-items-center"
            style={{ width: "14rem", color: "#103970" }}
          >
            <option
              value="Select"
              default
              className="text-info-emphasis rounded-1"
            >
              Select your Region
            </option>
            <option value="Region 01" className="text-info-emphasis rounded-1">
              Region 01
            </option>
            <option value="Region 02" className="text-info-emphasis rounded-1">
              Region 02
            </option>
            <option value="Region 03" className="text-info-emphasis rounded-1">
              Region 03
            </option>
            <option value="Region 04" className="text-info-emphasis rounded-1">
              Region 04
            </option>
          </select>
        </>
      ) : (
        <article className="d-flex mb-2 w-100">
          <span
            className="input-group-text bg-light fw-semibold w-50"
            style={{
              width: "8.5rem",
              borderRadius: "5px 0 0 5px",
              color: "#103970",
            }}
            id="basic-addon3"
          >
            {input_title}
          </span>
          <input
            type={inputType ? inputType : "text"}
            onInput={(e) => {
              if (inputType === "password") {
                e.target.value = e.target.value.slice(0, 10);
              } else {
                e.target.value = e.target.value.slice(0, 50);
              }
            }}
            style={{ borderRadius: "0 5px 5px 0" }}
            name={name}
            className="form-control bg-transparent text-light "
            id="basic-url"
            aria-describedby="basic-addon3 basic-addon4"
            onChange={(e) => handleChange(name.toLowerCase(), e.target.value)}
            value={textValue}
            onKeyDown={(e) => {
              if (e.key === "Tab") {
                handlePasswordCompare();
              }
            }}
          />
        </article>
      )}
    </section>
  );
};

export default FormInputField;
