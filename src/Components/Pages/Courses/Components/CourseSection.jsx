import React from "react";

const CourseSection = ({ content }) => {
  return (
    <section className="w-100">
      <article className="w-100 d-flex flex-column justify-content-center align-items-center pb-5">
        {content.imgCollections.bannerImg && (
          <img
            src={content.imgCollections.bannerImg}
            className=" rounded border border-2 border-info p-1"
          />
        )}

        <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
          <h5 style={{ lineHeight: "1.3" }}>
            {content?.whyIsItQues_01 || "Why is it so Important ?"}
          </h5>

          {content.whyIsItAns_01 &&
          typeof content.whyIsItAns_01 === "string" ? (
            <p
              className="mt-3"
              style={{ lineHeight: "1.3" }}
              dangerouslySetInnerHTML={{ __html: content.whyIsItAns_01 }}
            />
          ) : (
            <ul style={{ lineHeight: "1.4", margin: "1.5rem" }}>
              {content?.whyIsItAns_01?.map((item) => (
                <li className="mb-3">{item}</li>
              ))}
            </ul>
          )}
        </article>

        <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
          <h5 style={{ lineHeight: "1.3" }}>
            {content.whyIsItQues_02 || "Why is it so Important ?"}
          </h5>

          <img
            src={content.whyIsItAns_02_img}
            alt=""
            className="mt-4 align-self-center rounded"
          />

          {content.whyIsItAns_02 && (
            <p
              className="mt-3"
              style={{ lineHeight: "1.3" }}
              dangerouslySetInnerHTML={{ __html: content.whyIsItAns_02 }}
            />
          )}
        </article>

        <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
          <h5 style={{ lineHeight: "1.3" }}>
            {content.whyIsItQues_03 === null || "Why is it so Important ?"}
          </h5>
          {content.whyIsItAns_03 && (
            <p
              className="mt-3"
              style={{ lineHeight: "1.3" }}
              dangerouslySetInnerHTML={{ __html: content.whyIsItAns_03 }}
            />
          )}

          <img
            src={content.imgCollections.img_02}
            alt=""
            width={600}
            className="mt-4 align-self-center rounded"
          />
        </article>

        <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
          <h5 style={{ lineHeight: "1.3" }}>
            {content.whyIsItQues_04 === null || "Why is it so Important ?"}
          </h5>

          {content.whyIsItAns_04 && (
            <p
              className="mt-3"
              style={{ lineHeight: "1.3" }}
              dangerouslySetInnerHTML={{ __html: content.whyIsItAns_04 }}
            />
          )}

          <img
            src={content.imgCollections.img_02}
            alt=""
            width={600}
            className="mt-4 align-self-center rounded"
          />
        </article>

        <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
          <h5 style={{ lineHeight: "1.3" }}>
            {typeof content.whyIsItQues_05 === "string" ||
              "Why is it so Important ?"}
          </h5>

          {content.whyIsItAns_05 && (
            <p
              className="mt-3"
              style={{ lineHeight: "1.3" }}
              dangerouslySetInnerHTML={{ __html: content.whyIsItAns_05 }}
            />
          )}

          <img
            src={content.imgCollections.img_02}
            alt=""
            width={600}
            className="mt-4 align-self-center rounded"
          />
        </article>

        {content.imgCollections.bannerImg_02 && (
          <img
            src={content.imgCollections.bannerImg_02}
            className=" rounded border border-2 border-info p-1"
          />
        )}

        <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
          <h5 style={{ lineHeight: "1.3" }}>
            {typeof content.whyIsItQues_06 === "string" ||
              "Why is it so Important ?"}
          </h5>

          {content.whyIsItAns_06 && (
            <p
              className="mt-3"
              style={{ lineHeight: "1.3" }}
              dangerouslySetInnerHTML={{ __html: content.whyIsItAns_06 }}
            />
          )}

          <img
            src={content.imgCollections.img_02}
            alt=""
            width={600}
            className="mt-4 align-self-center rounded"
          />
        </article>

        <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
          <h5 style={{ lineHeight: "1.3" }}>
            {typeof content.whyIsItQues_07 === "string" ||
              "Why is it so Important ?"}
          </h5>

          {content.whyIsItAns_07 && (
            <p
              className="mt-3"
              style={{ lineHeight: "1.3" }}
              dangerouslySetInnerHTML={{ __html: content.whyIsItAns_05 }}
            />
          )}

          <img
            src={content.imgCollections.img_02}
            alt=""
            width={600}
            className="mt-4 align-self-center rounded"
          />
        </article>

        <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
          <h5 style={{ lineHeight: "1.3" }}>
            {typeof content.whyIsItQues_08 === "string" ||
              "Why is it so Important ?"}
          </h5>

          {content.whyIsItAns_08 && (
            <p
              className="mt-3"
              style={{ lineHeight: "1.3" }}
              dangerouslySetInnerHTML={{ __html: content.whyIsItAns_05 }}
            />
          )}

          <img
            src={content.imgCollections.img_02}
            alt=""
            width={600}
            className="mt-4 align-self-center rounded"
          />
        </article>

        <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
          <h5 style={{ lineHeight: "1.3" }}>
            {typeof content.whyIsItQues_09 === "string" ||
              "Why is it so Important ?"}
          </h5>

          {content.whyIsItAns_09 && (
            <p
              className="mt-3"
              style={{ lineHeight: "1.3" }}
              dangerouslySetInnerHTML={{ __html: content.whyIsItAns_05 }}
            />
          )}

          <img
            src={content.imgCollections.img_02}
            alt=""
            width={600}
            className="mt-4 align-self-center rounded"
          />
        </article>

        <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
          <h5 style={{ lineHeight: "1.3" }}>
            {typeof content.whyIsItQues_10 === "string" ||
              "Why is it so Important ?"}
          </h5>

          {content.whyIsItAns_10 && (
            <p
              className="mt-3"
              style={{ lineHeight: "1.3" }}
              dangerouslySetInnerHTML={{ __html: content.whyIsItAns_05 }}
            />
          )}

          <img
            src={content.imgCollections.img_02}
            alt=""
            width={600}
            className="mt-4 align-self-center rounded"
          />
        </article>

        {content.keyPointHead && content.keyPoints ? (
          <article
            className="mt-5 w-50 rounded-3"
            style={{ border: "3px solid #3ABEF9" }}
          >
            <article
              className="p-3 text-dark fw-semibold fs-5 rounded rounded-top-3"
              style={{
                background: "#3ABEF9",
                border: "3px solid #3ABEF9",
              }}
            >
              {content?.keyPointHead}
            </article>

            <article className="pt-3 px-3">
              <p>In this course we'll focus on, </p>
              <ul className="ps-4 mt-2" style={{ lineHeight: "1.4" }}>
                {content?.keyPoints?.map((goal, idx) => (
                  <li key={idx}>✔️ {goal}</li>
                ))}
              </ul>
            </article>
          </article>
        ) : (
          <></>
        )}
      </article>
    </section>
  );
};

export default CourseSection;
