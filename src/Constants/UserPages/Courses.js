import introToInfoSecurity from "../../../public/CourseImg/IntroTo_InfoSecurity/CIA_Triad.svg";

export const courses = [
  {
    id: 1,
    title: "Introduction to Information Security Policy",
    description:
      "This course provides a comprehensive overview of the fundamental principles and practices involved in developing and implementing information security policies. Designed for both beginners and professionals, it covers key topics such as policy frameworks, risk management, compliance, and best practices for safeguarding organizational data. ",
    duration: "1hr",
    gp: null,
    bg_image: introToInfoSecurity,
    linkTag: "InfoSecurity_Intro",
    courseContent: [
      {
        id: 1,
        sectionTitle: "Overview",
        subSections: [
          {
            id: 1,
            subSectionTitle: "About BeWise Modules",
            isOverview: true,
            content: "Content of this section 1",
          },
          //   {
          //     id: 2,
          //     subSectionTitle: "SubSection 2",
          //     content: "Content of this section 2",
          //   },
          //   {
          //     id: 3,
          //     subSectionTitle: "SubSection 3",
          //     content: "Content of this section 3",
          //   },
          //   {
          //     id: 4,
          //     subSectionTitle: "SubSection 4",
          //     content: "Content of this section 4",
          //   },
        ],
      },
      {
        id: 2,
        sectionTitle: "Introduction to Information Security Policy",
        subSections: [
          {
            id: 1,
            subSectionTitle: "SubSection 1",
            content: "Content of this section 1",
          },
          {
            id: 2,
            subSectionTitle: "SubSection 2",
            content: "Content of this section 2",
          },
          {
            id: 3,
            subSectionTitle: "SubSection 3",
            content: "Content of this section 3",
          },
          {
            id: 4,
            subSectionTitle: "SubSection 4",
            content: "Content of this section 4",
          },
        ],
      },
    ],
  },
];
