import React, { useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import InterestDomain from "./InterestDomain";

const AuthorRequest = () => {
  const [userData, setUserData] = useState({});

  const handleChange = (name, e) => {
    setUserData({ ...userData, [name]: e.target.value });
  };

  useEffect(() => {
    const userData = localStorage.getItem("userData");

    setUserData(JSON.parse(userData));
    console.log(JSON.parse(userData));
  }, []);

  useEffect(() => {
    const handlePageUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";

      const confMessage = "Are you sure, you want to Leave this page ?";
      e.returnValue(confMessage);
      return confMessage;
    };

    window.addEventListener("beforeunload", handlePageUnload);

    return () => {
      window.addEventListener("beforeunload", handlePageUnload);
    };
  }, []);

  return (
    <section className="row p-4 h-100 ms-4">
      {/* Personal Info & Bio */}
      <article className="col-7">
        <PersonalInfo
          userData={userData}
          setUserData={setUserData}
          handleChange={handleChange}
        />
      </article>

      {/* Doimain / Category / Interest Areas */}
      <article className="col-4 border-start border-2 border-light h-100">
        <InterestDomain
          userData={userData}
          setUserData={setUserData}
          handleChange={handleChange}
        />
      </article>
    </section>
  );
};

export default AuthorRequest;
