import React from "react";

import "./styles.css";

const overviewTags = [
  "Tech Talk",
  "Banking Innovation",
  "Stay Safe",
  "Revolution",
  "Fintech",
  "Digital Banking",
  "Next-Gen",
];

const ModulesOverview = () => {
  return (
    <>
      <section className="w-100 mt-5">
        {/* Overview Table */}
        <article className="w-100 d-flex flex-column justify-content-center align-items-center">
          <article className="bg-primary w-50 rounded-top mb-2 px-2 py-2 border border-2 border-primary">
            <h5 className="ps-2 py-1 fw-semibold">Overview</h5>
          </article>

          <article
            className="bg-primary bg-opacity-50 w-50 rounded-bottom p-3"
            style={{ minHeight: "20vh", height: "auto" }}
          >
            <h6 className=" fs-5">What are BeWise Modules ?</h6>

            <p style={{ lineHeight: "1.3" }}>
              BeWise modules are like Articles which talks about a specific
              topic in deep with adequate Explanations, Infomatics, Use cases,
              Scenarios and comes with an Assessment.
            </p>

            <article
              className="mt-3 d-flex"
              style={{ display: "inline-block", flexWrap: "wrap" }}
            >
              {overviewTags.map((tag, idx) => (
                <p
                  className="m-0 p-0 px-3 py-2 rounded-4 me-2 mb-3 overviewTagCapsules"
                  ket={idx}
                >
                  {tag}
                </p>
              ))}
            </article>
          </article>

          <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4">
            <h5>What You Should Do</h5>
            <p className="mt-3" style={{ lineHeight: "1.3" }}>
              Read through this article to understand the concepts and news it
              discusses. Be sure to research the ideas presented and consider
              how to implement the best practices in your day-to-day business
              activities.
            </p>
          </article>

          <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4">
            <h5>Key Takeaways</h5>
            <ul className="mt-3" style={{ lineHeight: "1.3" }}>
              <li>
                =&gt; Overiew of current trends and new policies released by
                Regulatory bodies
              </li>
              <li>
                =&gt; Company's policies & guideline updations and Circulars
              </li>
              <li>
                =&gt; Case studies which could enhance the understanding and
                development
              </li>
            </ul>
          </article>

          <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4">
            <h5>Call to Action</h5>
            <p className="mt-3" style={{ lineHeight: "1.3" }}>
              Take the insights from BeWise Modules and apply them to your
              team's learning strategies. Experiment and track the impact on
              employee performance and engagement.
            </p>
          </article>
        </article>

        {/* What you will do ? */}
        <article></article>
      </section>
    </>
  );
};

export default ModulesOverview;
