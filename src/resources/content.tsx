import { About, Research, Home, Person, Social, Projects } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Laura",
  lastName: "Nuñez",
  name: `Laura Nuñez`,
  role: "Computer Systems Engineer",
  avatar: "/images/avatar.png",
  email: "lau.nunez@outlook.es",
  phone: "+591 75992287",
  location: "Bolivia - Cochabamba",
  languages: ["English", "Spanish"],
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Laura-Nu",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/maria-laura-nu%C3%B1ez-jaillita-8a3b87311/",
  },
  {
    name: "Credly",
    icon: "credly",
    link: `https://www.credly.com/users/maria-laura-nunez-jaillita`,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between imagination and code</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "",
  },
  subline: (
    <Text
      variant="body-default-l"
      onBackground="neutral-weak"
      align="center"
    >
      I'm Laura, a Computer Systems Engineer at <strong>BruliTech</strong>,
      where I bring ideas to life by crafting intuitive and meaningful
      user experiences.
      <br />
      Beyond work, I dedicate my time to building personal projects that
      challenge me, inspire creativity, and push me to keep growing as a developer.
    </Text>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Get to know ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  document: {
    display: true,
    link: "/docs/CV_Laura_Nuñez.pdf",
    label: "Download CV (PDF version)",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a proactive and organized Computer Systems Engineering student at
        Universidad del Valle. I stand out for teamwork, quick decision-making,
        and the ability to perform under pressure. My focus is on building scalable
        mobile and web applications, working as a Full-Stack Developer, and applying
        agile methodologies such as Scrum and XP.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "DocIA",
        timeframe: "Apr 2025 – Present",
        role: "Software Engineer",
        achievements: [
          <>Led development of backend services in Node.js + Supabase.</>,
          <>Integrated Flutter mobile client with Firestore and Huawei Cloud.</>,
        ],
      },
      {
        company: "UMA",
        timeframe: "Feb 2024 – Present",
        role: "Full-Stack Developer",
        achievements: [
          <>Maintenance of mobile and web projects deployed to production (Play Store).</>,
          <>Debugging and implementing new functionalities.</>,
        ],
      },
      {
        company: "Universidad del Valle",
        timeframe: "Mar 2024 – Jun 2025",
        role: "Teaching Assistant – Computer Science Fundamentals",
        achievements: [
          <>Prepared weekly reports and classes for the subject.</>,
          <>Guided students in consultations and exercises on derivatives, integrals, and function analysis.</>,
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Universidad del Valle – Cochabamba, Bolivia",
        description: (
          <div style={{ margin: 0, paddingLeft: "20px" }}>
            <p style={{ margin: "4px 0", fontWeight: "bold", fontSize: "15px", color: "#2c3e50" }}>
              Bachelor’s in Computer Systems Engineering
            </p>
            <ul style={{ margin: "6px 0", paddingLeft: "20px", lineHeight: "1.6" }}>
              <li>Currently in 8th semester</li>
              <li>GPA: 85.7</li>
              <li>2022 – Present</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Methodologies & Architecture",
    skills: [
      {
        title: "Programming Languages",
        description: (
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            <li>C#</li>
            <li>Java</li>
            <li>JavaScript / TypeScript</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>Dart</li>
            <li>Python</li>
          </ul>
        ),
      },
      {
        title: "Frameworks & Tools",
        description: (
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            <li>ReactJS</li>
            <li>ASP.NET Core</li>
            <li>Bootstrap</li>
            <li>Flutter</li>
            <li>Node.js</li>
            <li>Android Studio</li>
            <li>Unity</li>
          </ul>
        ),
      },
      {
        title: "Databases",
        description: (
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            <li>SQL Server</li>
            <li>MySQL</li>
            <li>Firebase</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Oracle DB</li>
          </ul>
        ),
      },
      {
        title: "Methodologies & Practices",
        description: (
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            <li>Agile (Scrum, XP)</li>
            <li>Architecture patterns: Client-Server, MVC</li>
          </ul>
        ),
      },
      {
        title: "Other Tools",
        description: (
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            <li>Git</li>
            <li>Trello</li>
            <li>Linear</li>
            <li>Figma</li>
          </ul>
        ),
      },
      {
        title: "Languages",
        description: (
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            <li>Spanish (native)</li>
            <li>English (intermediate)</li>
          </ul>
        ),
      },
      {
        title: "Certifications",
        description: (
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            <li>NDG Linux Unhatched – Cisco Networking Academy (2022)</li>
            <li>Database Foundations – Oracle Academy (2022)</li>
            <li>CCNAv7: Introduction to Networks – Cisco Networking Academy (2024)</li>
            <li>Introduction to Data Science – Cisco Networking Academy (2024)</li>
            <li>
              More certifications available on{" "}
              <a
                href="https://www.credly.com/users/maria-laura-nunez-jaillita"
                target="_blank"
                style={{ color: "#2980b9" }}
              >
                Credly Profile
              </a>
            </li>
          </ul>
        ),
      },
    ],
  }
};

const research: Research = {
  path: "/research",
  label: "Research",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new research posts by adding a new .mdx file to app/research/posts
  // All posts will be listed on the /research route
};

const work: Projects = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/research/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, research, work };
