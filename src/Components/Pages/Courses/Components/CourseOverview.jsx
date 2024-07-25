import React from "react";

const CourseOverview = ({ content }) => {
  return (
    <section className="w-100 mt-5">
      {/* Overview Table */}
      <article className="w-100 d-flex flex-column justify-content-center align-items-center pb-5">
        <article className="bg-primary w-50 rounded-top mb-1 px-2 py-2 border border-2 border-primary">
          <h5 className="ps-2 py-1 fw-semibold">
            {content?.title || "Introduction"}
          </h5>
        </article>

        <article
          className="bg-primary bg-opacity-50 w-50 rounded-bottom p-3"
          style={{ minHeight: "20vh", height: "auto" }}
        >
          <h6 className=" fs-5">
            {content?.bannerQuestion || "What this course speaks about ?"}
          </h6>

          <p style={{ lineHeight: "1.3" }}>
            {content?.bannerExplained ||
              `This is Course elaborates about ${content.generalTag}`}
          </p>

          <article
            className="mt-3 d-flex"
            style={{ display: "inline-block", flexWrap: "wrap" }}
          >
            {content.tags.map((tag, idx) => (
              <p
                className="m-0 p-0 px-3 py-2 rounded-4 me-2 mb-3 overviewTagCapsules"
                ket={idx}
              >
                {tag}
              </p>
            ))}
          </article>
        </article>

        <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
          <h5>{content.whyIsItQues || "Why is it so Important ?"}</h5>
          {/* <p className="mt-3" style={{ lineHeight: "1.3" }}>
            {content.whyIsItAns
              .split("###")
              .map((item, idx) => `${idx + 1}. ${item} '<br>'`) ||
              "Read through this article to understand the concepts and news it discusses. Be sure to research the ideas presented and consider how to implement the best practices in your day-to-day business activities."}
          </p> */}

          <p
            className="mt-3"
            style={{ lineHeight: "1.3" }}
            dangerouslySetInnerHTML={{ __html: content.whyIsItAns }}
          />
        </article>

        <img src={content.imgCollections.img_01} alt="" />

        <article
          className="mt-5 w-50 rounded-3"
          style={{ border: "3px solid rgb(250 206 195)" }}
        >
          <article
            className="p-3 text-dark fw-bold fs-5 rounded rounded-top-3"
            style={{
              background: "rgb(250 206 195)",
              border: "3px solid rgb(250 206 195)",
            }}
          >
            Primary Goal
          </article>

          <article className="pt-3 px-3">
            <p>In this course we'll focus on, </p>
            <ul className="ps-4 mt-2" style={{ lineHeight: "1.4" }}>
              {content.primaryGoal.map((goal, idx) => (
                <li key={idx}>✔️ {goal}</li>
              ))}
            </ul>
          </article>
        </article>
      </article>
    </section>
  );
};

export default CourseOverview;
