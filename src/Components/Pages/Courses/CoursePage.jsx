import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../../Constants/UserPages/Courses";
import "./styles.css";
import ModulesOverview from "./Components/ModulesOverview";
import HeaderCards from "./Components/HeaderCards";
import CourseOverview from "./Components/CourseOverview";
import CourseSection from "./Components/CourseSection";

const CoursePage = () => {
  const { courseName } = useParams();
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSubSection, setSelectedSubSection] = useState(null);

  useEffect(() => {
    if (courses.length > 0) {
      const initialSection = courses[0].courseContent[1];
      setSelectedSection(initialSection);
      setSelectedSubSection(initialSection?.subSections[5]);
    }
  }, []);

  const handleSectionSelection = (section) => {
    setSelectedSection(section);
    setSelectedSubSection(section?.subSections[0]);
  };

  const handleSubSectionSelection = (subSection) => {
    setSelectedSubSection(subSection);
  };

  if (!selectedSection) {
    return <div>Loading...</div>;
  }

  return (
    <section className="course-page-container d-flex flex-column justify-content-between align-items-center">
      <article className="dashboard-header d-flex justify-content-start align-items-center">
        <article className="ms-5">
          <h5 className="fw-semibold">{courses[0]?.title}</h5>
        </article>
      </article>

      <article className="course-content-container ms-5 d-flex justify-content-start align-items-start w-100 my-2">
        {/* Course Section Side Bar */}
        <aside className="course-section-sidebar text-light bg-dark me-2 rounded">
          {courses[0]?.courseContent.map((item) => (
            <button
              className={`course-section-btn text-light m-2 rounded btn d-flex justify-content-center align-items-center border border-2 ${
                selectedSection.id === item.id
                  ? "bg-light text-dark border-dark"
                  : "border-light"
              }`}
              key={item.id}
              onClick={() => handleSectionSelection(item)}
            >
              <h6 className="">{item.sectionTitle}</h6>
            </button>
          ))}
        </aside>

        <main className="course-main-content text-light bg-dark me-2 rounded">
          {selectedSection.sectionTitle !== "Overview" && (
            <div className="course-subsections-container bg-light mx-2 my-2 rounded text-dark d-flex mb-4">
              {selectedSection?.subSections.map((item) =>
                item.isOverview ? (
                  <HeaderCards
                    handleSubSectionSelection={handleSubSectionSelection}
                    item={item}
                    selectedSubSection={selectedSubSection}
                    isOverview={selectedSubSection.isOverview}
                  />
                ) : (
                  <HeaderCards
                    handleSubSectionSelection={handleSubSectionSelection}
                    item={item}
                    selectedSubSection={selectedSubSection}
                    isOverview={item.isOverview}
                  />
                )
              )}
            </div>
          )}

          <div className="course-content d-flex flex-column justify-content-start align-items-center w-100">
            {selectedSection.isOverview ? (
              <ModulesOverview />
            ) : selectedSubSection.isOverview ? (
              <CourseOverview content={selectedSubSection.content} />
            ) : (
              <CourseSection content={selectedSubSection.content} />
            )}
          </div>
        </main>
      </article>
    </section>
  );
};

export default CoursePage;
