import React from "react";
import PersonalInfo from "./PersonalInfo";
import InterestDomain from "./InterestDomain";

const AuthorRequest = () => {
  return (
    <section className="row p-5 h-100">
      {/* Personal Info & Bio */}
      <article className="col-7">
        <PersonalInfo />
      </article>

      {/* Doimain / Category / Interest Areas */}
      <article className="col-4 border-start border-2 border-light h-100">
        <InterestDomain />
      </article>
    </section>
  );
};

export default AuthorRequest;
