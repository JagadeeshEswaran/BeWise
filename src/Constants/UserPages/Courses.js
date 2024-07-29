import introToInfoSecurity from "../../../public/CourseImg/IntroTo_InfoSecurity/CIA_Triad.svg";
import cyberHygiene_01 from "../../../public/CourseImg/IntroTo_InfoSecurity/CyberHygiene_01.png";
import cyberHygiene_02 from "../../../public/CourseImg/IntroTo_InfoSecurity/CyberHygiene_02.png";
import cyberHygiene_03 from "../../../public/CourseImg/IntroTo_InfoSecurity/CyberHygiene_03.png";
import cyberHygiene_04 from "../../../public/CourseImg/IntroTo_InfoSecurity/CyberHygiene_04.png";
import cyberHygiene_05 from "../../../public/CourseImg/IntroTo_InfoSecurity/CyberHygiene_05.png";
import cyberHygiene_06 from "../../../public/CourseImg/IntroTo_InfoSecurity/CyberHygiene_06.png";
import cyberHygiene_07 from "../../../public/CourseImg/IntroTo_InfoSecurity/CyberHygiene_07.png";
import cyberHygiene_08 from "../../../public/CourseImg/IntroTo_InfoSecurity/CyberHygiene_08.png";
import cyberHygiene_09 from "../../../public/CourseImg/IntroTo_InfoSecurity/CyberHygiene_09.jpeg";

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
        isOverview: true,
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
        sectionTitle: "Cyber Hygene for Cyber Space",
        subSections: [
          {
            id: 1,
            isOverview: true,
            subSectionTitle: "Course Overview",
            content: {
              title: "Course Introduction",
              generalTag: "Cyber Hygene",
              imgCollections: { img_01: cyberHygiene_01 },
              isIntroStroryPresent: false,
              bannerQuestion: "What is Cyber Hygiene ?",
              bannerExplained:
                "Cyber hygiene refers to the practices and steps that individuals and organizations take to maintain the health and security of their digital systems and data. It involves routine measures to protect devices, networks, and information from cyber threats such as malware, phishing, and unauthorized access.",
              tags: [
                "Data Protection",
                "Vulnerability",
                "Phishing",
                "Insider Threats",
              ],
              whyIsItQues: "Why Cyber Hygiene is important?",
              whyIsItAns:
                "<strong>Prevents Cyber Attacks: </strong> Regular updates, strong passwords, and secure configurations reduce vulnerabilities that cybercriminals can exploit.<br><br> <strong>Protects Sensitive Data:</strong>  Ensuring the security of personal and organizational data prevents breaches that can lead to identity theft, financial loss, and reputational damage.<br><br> <strong>Maintains System Performance:</strong> Regular maintenance and updates keep systems running efficiently and prevent disruptions caused by malware or outdated software.<br><br> <strong>Compliance and Legal Protection:</strong> Adhering to cyber hygiene best practices helps organizations comply with legal and regulatory requirements, avoiding penalties and legal issues.<br><br> <strong>Builds Trust:</strong> Demonstrating a commitment to cybersecurity fosters trust among customers, partners, and stakeholders.",
              primaryGoal: [
                "Computer Safety Tips",
                "Password Security Management",
                "E-mail Security Practices",
                "General Internet Safety Precautions",
              ],
            },
          },
          {
            id: 2,
            isOverview: false,
            subSectionTitle: "Computer Safety",
            content: {
              title: "Computer Safety",
              generalTag: "Cyber Hygiene",
              imgCollections: {
                img_01: cyberHygiene_02,
                img_02: cyberHygiene_03,
              },
              bannerQuestion: null,
              bannerExplained: null,
              tags: null,
              isIntroStroryPresent: true,
              introStory: {
                storyTitle:
                  "The Consequences of Complacency: A Bank Employee's Tale",
                storyContent:
                  "In Metroville, Tom Parker worked as a data analyst at Metroville Bank. Known for his skills, he often ignored basic cybersecurity protocols. One Friday, he hurriedly clicked on a phishing email, installing malware on his workstation. Over the weekend, cybercriminals accessed sensitive customer data through his compromised computer.                                                                                                                                                 By Monday, the bank was in chaos. Sensitive customer information, including account numbers and personal details, had been stolen. The IT department traced the breach back to Tom's workstation. The bank faced a massive data breach, leading to customer outrage, a plummeting stock price, and potential lawsuits. Tom was suspended, and his career in banking was over.                                                                                                                         The incident became a cautionary tale within the banking industry, highlighting the importance of vigilance and adherence to cybersecurity practices. It underscored how a single employee's negligence can have devastating consequences, damaging both the institution's reputation and customer trust.",
              },
              whyIsItQues_01: "What is computer security ?",
              whyIsItAns_01:
                "Computer security is the protection of computer systems and information from thet and unauthorized access. It is the process of prevention and detection of unauthorized use of the computer systems.",
              primaryGoal_01: null,
              whyIsItQues_02: "Then, What is computer security threats ?",
              whyIsItAns_02:
                "Computer security threats are possible dangers that can cause impediment to the normal functioning of the computer. Some of the common and harmful computer threats are depicted below:- ",
              primaryGoal_02: null,
              whyIsItAns_03_img: cyberHygiene_02,
              whyIsItQues_03:
                "Why is it so important to be aware of Computer Security ?",
              whyIsItAns_03:
                "Awareness of computer security is essential to protect sensitive information, ensure financial stability, maintain trust and reputation, comply with legal requirements, and safeguard personal safety.",
              primaryGoal_03: null,
              whyIsItQues_04: null,
              whyIsItAns_04: null,
              whyIsItQues_05: null,
              whyIsItAns_05: null,
              whyIsItQues_06: null,
              whyIsItAns_06: null,
              whyIsItQues_07: null,
              whyIsItAns_07: null,
              whyIsItQues_08: null,
              whyIsItAns_08: null,
              whyIsItQues_09: null,
              whyIsItAns_09: null,
              whyIsItQues_10: null,
              whyIsItAns_10: null,
              keyPointHead:
                "Here are some key points about the cost of computer security and data breaches:",
              keyPoints: [
                "Financial Losses",
                "Operational Disruptions",
                "Reputational Damage",
                "Regulatory Fines and Compliance Costs",
              ],
              primaryGoal_04: null,
            },
          },
          {
            id: 3,
            isOverview: false,
            subSectionTitle: "Computer Safety - Do's & Don'ts",
            content: {
              title: "Computer Safety",
              generalTag: "Cyber Hygiene",
              imgCollections: {
                img_01: null,
                img_02: null,
                bannerImg: cyberHygiene_04,
                bannerImg_02: cyberHygiene_05,
              },
              bannerQuestion: null,
              bannerExplained: null,
              tags: null,
              isIntroStroryPresent: false,
              whyIsItQues_01:
                "1. Ensure backup of important data / files / documents at regular intervals",
              whyIsItAns_01: null,
              primaryGoal_01: null,
              whyIsItQues_02: "2. Lock the computer screen when not in use",
              whyIsItAns_02: null,
              primaryGoal_02: null,
              whyIsItQues_03: "3. Always keep the computer firewall “ON”",
              whyIsItAns_03: null,
              primaryGoal_03: null,
              whyIsItQues_04:
                "4. Disable Remote Desktop Connection and network file sharing, when not in use.",
              whyIsItAns_04: null,
              whyIsItQues_05:
                "5. Aware about phishing attacks and how to recognize suspicious emails, links, and attachments.",
              whyIsItAns_05: null,
              whyIsItQues_06:
                "1. Do not install or use pirated copies of software / applications under any circumstances. ",
              whyIsItAns_06: null,
              whyIsItQues_07: `2. Do not use guessable/weak passwords like“password@123", etc.`,
              whyIsItAns_07: null,
              whyIsItQues_08: `3. Do not click on links and Open attachment in Unsolicited Email and Messages.`,
              whyIsItAns_08: null,
              whyIsItQues_09: `4. Do not dispose computer or hard drive without deletion and wiping the data.`,
              whyIsItAns_09: null,
              whyIsItQues_10: `5. Do not use Pendrives or External storage devices in Office environement or System.`,
              whyIsItAns_10: null,
              keyPointHead: null,
              keyPoints: null,
              primaryGoal_04: null,
            },
          },
          {
            id: 4,
            isOverview: false,
            subSectionTitle: "Password Security Management",
            content: {
              title: "Password Security Management",
              generalTag: "Cyber Hygiene",
              imgCollections: {
                img_01: null,
                img_02: null,
                bannerImg: null,
                midBannerImg: null,
                bannerImg_02: null,
              },
              bannerQuestion: null,
              bannerExplained: null,
              tags: null,
              isIntroStroryPresent: false,
              whyIsItQues_01:
                "Why change your password regularly when the one you've been using since high school is working perfectly ? 😕",
              whyIsItAns_01: [
                "=> Using the same password since high school significantly increases the risk of a security breach.",
                "=> Over time, this password may have been exposed in multiple data breaches without your knowledge.",
                "=> Cybercriminals often use compromised credentials to gain unauthorized access to accounts.",
                "=> Regularly changing your password reduces the likelihood of such an incident",
                "=> Additionally, older passwords are more likely to be simpler and easier to crack",
              ],
              primaryGoal_01: null,
              whyIsItQues_02: "Password attack",
              whyIsItAns_02:
                "Cyber criminals use many methods to access accounts, includingdictionary brute-force attack (Attach made to Guess Passwords), as well as comparing various word combinations against a dictionary file.<br><br>  Cyber criminals may also use password capturing tools like “Keyloggers” on victim's computers",
              primaryGoal_02: null,
              whyIsItQues_03:
                "Do's => Always use different passwords for different accounts. Ensure password is strong",
              whyIsItAns_03: null,
              primaryGoal_03: null,
              whyIsItQues_04:
                "Do's => Strong passwords should contain combination of Upper case, lower case, numbers and Special characters(e.g., @#$%^&*()_+|~--=’{}[]: <>/,etc.)",
              whyIsItAns_04: null,
              whyIsItQues_05:
                "Do's => Immediately, change any password which might have been shared or revealed by mistake",
              whyIsItAns_05: null,
              whyIsItQues_06:
                "Don'ts => Birth dates, names, ID proofs and otherpersonal information such as addresses and phone numbers",
              whyIsItAns_06: null,
              whyIsItQues_07:
                "Don'ts => Password should not be less than eight character",
              whyIsItAns_07: null,
              whyIsItQues_08:
                "Don'ts => Do not use public systems to access banking / sensitive sites",
              whyIsItAns_08: null,
              whyIsItQues_09:
                "Don'ts => Do not choose/ select “remember my password” options",
              whyIsItAns_09: null,
              whyIsItQues_10:
                "Don'ts => Never write down your password anywhere, especially as a ‘note s",
              whyIsItAns_10: null,
              keyPointHead: null,
              keyPoints: null,
              primaryGoal_04: null,
            },
          },
          {
            id: 5,
            isOverview: false,
            subSectionTitle: "Inertnet Safety Precautions",
            content: {
              title: "Password Security Management",
              generalTag: "Cyber Hygiene",
              imgCollections: {
                img_01: null,
                img_02: null,
                bannerImg: cyberHygiene_06,
                midBannerImg: null,
                bannerImg_02: cyberHygiene_08,
              },
              bannerQuestion: null,
              bannerExplained: null,
              tags: null,
              isIntroStroryPresent: false,
              whyIsItQues_01: "General Internet Safety Precautions",
              whyIsItAns_01:
                "   Invention of internet has revolutionized the way of communication and information sharing. However, unsecured usage of internet may pose risks to an organization. Internet security includes browser security, website security, network security, software applications, etc. Its objective is to enforce rules and measures against attachs over the Internet",
              primaryGoal_01: null,
              whyIsItQues_02: null,
              whyIsItAns_02_img: cyberHygiene_07,
              whyIsItAns_02:
                "Unsafe internet practices may lead to risks from phishing, online viruses, trojans, worms, ransomware, business email compromise, financial loss, etc.",
              primaryGoal_02: null,
              whyIsItQues_03: null,
              whyIsItAns_03: null,
              primaryGoal_03: null,
              whyIsItQues_04: null,
              whyIsItAns_04: null,
              whyIsItQues_05: "How to be vigilant in Internet Security ?",
              whyIsItAns_05: null,
              whyIsItQues_06: null,
              whyIsItAns_06: null,
              whyIsItQues_07: null,
              whyIsItAns_07: null,
              whyIsItQues_08: null,
              whyIsItAns_08: null,
              whyIsItQues_09: null,
              whyIsItAns_09: null,
              whyIsItQues_10: null,
              whyIsItAns_10: null,
              keyPointHead: null,
              keyPoints: null,
              primaryGoal_04: null,
            },
          },
          {
            id: 6,
            isOverview: false,
            subSectionTitle: "Email Hygiene",
            content: {
              title: "Email Hygiene",
              generalTag: "Email Hygiene",
              imgCollections: {
                img_01: cyberHygiene_09,
                img_02: null,
                bannerImg: null,
                midBannerImg: null,
                bannerImg_02: null,
              },
              bannerQuestion: null,
              bannerExplained: null,
              tags: null,
              isIntroStroryPresent: false,
              whyIsItQues_01: "General Internet Safety Precautions",
              whyIsItAns_01:
                "In the past, email security best practices could be summarized quickly: Don't trust email because email is an unauthenticated, unreliable messaging service. This is still mostly true, and the same best practices for email security for employees from 1989 still hold: Use strong passwords, block spammers, don't trust offers that are too good to be true and verify requests even from trusted entities.",
              primaryGoal_01: null,
              whyIsItQues_02:
                "As email becomes increasingly critical to business success, however, organizations must follow a stronger set of email security best practices. They can be summarized as follows:",
              whyIsItAns_03_img: cyberHygiene_09,
              whyIsItAns_02: [
                "=> Take phishing seriously.",
                "=> Be wary of email attachments.",
                "=> Don't click email links.",
                "=> Don't use business email for personal use and vice versa.",
                "=> Use email security protocols.",
              ],
              primaryGoal_02: null,
              whyIsItQues_03:
                "6 most common signs of a phishing email employees should be aware of",
              whyIsItAns_03: [
                "Phishing emails can be disguised as legitimate messages. Empowering employees to spot signs of phishing is crucial in maintaining email security. Here are some key indicators employees should watch out for: ",
                "Suspicious sender :\n Pay attention to the sender's email address. Phishing emails often use misspelled or slightly altered domain names or rely on free email services instead of official company addresses. ",
                "Prevent data leakage and breaches : The primary objective of email security best practices is to prevent breaches and data leakage and empower the users to prevent attackers from targeting and exploiting vulnerabilities.",
                "Unusual URLs : Take a moment to hover your cursor over hyperlinks in the email. Phishing emails often employ deceptive links that redirect to fraudulent websites or initiate malware downloads. Verify the URL's authenticity before clicking. ",
                "Poor grammar and spelling : Phishing emails frequently contain noticeable spelling mistakes, grammatical errors, or awkward language that deviates from professional communication standards. These inconsistencies can be signs of a phishing attempt. ",
                "Requests for personal information : Exercise caution when an email requests sensitive personal information such as passwords, social security numbers, or credit card details. Legitimate organizations typically have secure systems and do not ask for such information via email. ",
              ],
              primaryGoal_03: null,
              whyIsItQues_04: null,
              whyIsItAns_04: null,
              whyIsItQues_05: null,
              whyIsItAns_05: null,
              whyIsItQues_06: null,
              whyIsItAns_06: null,
              whyIsItQues_07: null,
              whyIsItAns_07: null,
              whyIsItQues_08: null,
              whyIsItAns_08: null,
              whyIsItQues_09: null,
              whyIsItAns_09: null,
              whyIsItQues_10: null,
              whyIsItAns_10: null,
              keyPointHead: null,
              keyPoints: null,
              primaryGoal_04: null,
            },
          },
        ],
      },
    ],
  },
];
