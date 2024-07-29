import React, { useState } from "react";
import scenarioIcon from "../../../../../public/collection/ScenarioPNG.png";
import { Modal } from "antd";

const CourseSection = ({ content }) => {
  const [openStoryModal, setStoryModal] = useState(false);

  return (
    <section className="w-100">
      <article className="w-100 d-flex flex-column justify-content-center align-items-center pb-5">
        {content.imgCollections.bannerImg && (
          <img
            src={content.imgCollections.bannerImg}
            className=" rounded border border-2 border-info p-1"
          />
        )}

        {content.whyIsItQues_01 !== null && (
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
        )}

        {content.isIntroStroryPresent && (
          <>
            <article
              className="border border-2 border-info w-50 rounded-4 bg-info d-flex justify-content-center align-items-center btn"
              style={{ height: "5rem" }}
              onClick={() => setStoryModal(true)}
            >
              <h4 className=" fw-semibold">Click Read about a Scenario </h4>
              <object
                data={scenarioIcon}
                type=""
                width={50}
                height={50}
                className="ms-3"
              ></object>
            </article>

            <Modal
              title={""}
              centered
              open={openStoryModal}
              onOk={() => setStoryModal(false)}
              onCancel={() => setStoryModal(false)}
              width={800}
              height={800}
              style={{ overflowX: "hidden" }}
            >
              <article className=" d-flex flex-wrap">
                <pre style={{ textWrap: "wrap", fontSize: "1.2rem" }}>
                  <h5 className=" text-center my-3 mt-5 fw-semibold">
                    {content.introStory.storyTitle}
                  </h5>
                  <hr />
                  <p>{content.introStory.storyContent}</p>
                </pre>
              </article>
            </Modal>
          </>
        )}

        {content.whyIsItQues_02 !== null && (
          <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
            <h5 style={{ lineHeight: "1.3" }}>
              {content.whyIsItQues_02 || "Why is it so Important ?"}
            </h5>

            {content.whyIsItAns_03_img && (
              <img
                src={content.whyIsItAns_03_img}
                alt=""
                className="mt-4 align-self-center rounded"
                width={500}
                height={500}
              />
            )}

            {Array.isArray(content.whyIsItAns_02) ? (
              content.whyIsItAns_02.map((item) => (
                <p className="py-2 fs-5">{item}</p>
              ))
            ) : (
              <p
                className="mt-3"
                style={{ lineHeight: "1.3" }}
                dangerouslySetInnerHTML={{
                  __html: content.whyIsItAns_02,
                }}
              />
            )}
          </article>
        )}

        {content.whyIsItQues_03 !== null && (
          <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
            <h5 style={{ lineHeight: "1.3" }}>
              {content.whyIsItQues_03 || "Why is it so Important ?"}
            </h5>

            {Array.isArray(content.whyIsItAns_03) ? (
              content.whyIsItAns_03.map((item) =>
                item.includes(":") ? (
                  <>
                    <strong className="mt-3 mb-2">
                      {item.split(":")[0]} :
                    </strong>{" "}
                    <p>{item.split(":")[1]}</p>
                  </>
                ) : (
                  <p className="py-2 fs-5">{item}</p>
                )
              )
            ) : (
              <p
                className="mt-3"
                style={{ lineHeight: "1.3" }}
                dangerouslySetInnerHTML={{
                  __html: content.whyIsItAns_02,
                }}
              />
            )}

            {/* <img
              // src={content.imgCollections.img_02}
              alt=""
              // width={200}
              // height={250}
              className="mt-4 align-self-center rounded"
            /> */}
          </article>
        )}

        {content.whyIsItQues_04 !== null && (
          <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
            <h5 style={{ lineHeight: "1.3" }}>
              {content.whyIsItQues_04 || "Why is it so Important ?"}
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
        )}

        {content.whyIsItQues_05 !== null && (
          <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
            <h5 style={{ lineHeight: "1.3" }}>
              {content.whyIsItQues_05 || "Why is it so Important ?"}
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
        )}

        {content.imgCollections.bannerImg_02 && (
          <img
            src={content.imgCollections.bannerImg_02}
            className=" rounded border border-2 border-info p-1"
          />
        )}

        {content.whyIsItQues_06 !== null && (
          <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
            <h5 style={{ lineHeight: "1.3" }}>
              {content.whyIsItQues_06 || "Why is it so Important ?"}
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
        )}

        {content.whyIsItQues_07 !== null && (
          <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
            <h5 style={{ lineHeight: "1.3" }}>
              {content.whyIsItQues_07 || "Why is it so Important ?"}
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
        )}

        {content.whyIsItQues_08 !== null && (
          <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
            <h5 style={{ lineHeight: "1.3" }}>
              {content.whyIsItQues_08 || "Why is it so Important ?"}
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
        )}

        {content.whyIsItQues_09 !== null && (
          <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
            <h5 style={{ lineHeight: "1.3" }}>
              {content.whyIsItQues_09 || "Why is it so Important ?"}
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
        )}

        {content.whyIsItQues_10 !== null && (
          <article className=" d-flex flex-column justify-content-start align-items-start w-50 mt-4 pb-4">
            <h5 style={{ lineHeight: "1.3" }}>
              {content.whyIsItQues_10 || "Why is it so Important ?"}
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
        )}

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
