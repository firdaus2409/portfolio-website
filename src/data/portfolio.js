// ─────────────────────────────────────────────────────────────────
//  ALL YOUR CONTENT LIVES IN THIS ONE FILE.
//  Edit anything below directly to update the site.
// ─────────────────────────────────────────────────────────────────

export const profile = {
  name: "Muhammad Irsyaduddin Firdaus Bin Jumai",
  initials: "IF",
  // Rotates in the hero, in order, one at a time.
  roles: ["Software Developer", "Full-Stack Developer", "XR Developer"],
  location: "Kuala Lumpur, Malaysia",
  tagline:
    "Software developer with over 3 years of experience building mobile apps in C# and Unity across Android and iOS, and full-stack web apps with React, Next.js, and Node.js, from database design to deployed UI.",
  resumeUrl: "/resume.pdf", // put your resume PDF in the public/ folder
  email: "irsyaduddin2409@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/muhdirsyaduddinfirdaus/",
  },
  availableForWork: true,
  availabilityLabel: "Available immediately",
};

export const about = {
  paragraphs: [
    "I'm a software developer with over 3 years of experience designing, building, and deploying mobile applications (C#, Unity) across Android and iOS, as well as web applications with JavaScript, TypeScript, React, Next.js, and Node.js.",
    "I'm comfortable across the stack: relational databases, Python-based data pipelines, RESTful APIs, and cloud-based solutions. I adapt quickly to new tools within Agile/Scrum teams and enjoy finding ways to improve team productivity.",
    "I also build BI dashboards in Power BI, using DAX to turn raw data into clear, decision-ready insights.",
  ],
  stats: [
    { label: "Years of experience", value: "3+" },
    { label: "Team Efficiency Improvement", value: "30%" },
    { label: "Reputation Increase", value: "20%" },
  ],
};

export const experience = [
  {
    role: "Software Developer (XR)",
    company: "Agmo Tech Sdn Bhd (Agmo Group)",
    location: "Petaling Jaya",
    start: "Feb 2022",
    end: "Dec 2025",
    points: [
      "Developed mobile, AR, and VR applications in C# using Unity across Android, iOS, and headset platforms, as part of a cross-functional team delivering multiple successful commercial projects.",
      "Worked within a dedicated R&D team, rapidly learning new tools and technologies to solve problems under project deadlines.",
      "Applied the full software development lifecycle (SDLC), including UAT, to ensure high-quality, functional deliverables.",
      "Collaborated with cross-functional departments and clients to translate requirements into technical implementation, presenting completed work to both technical and non-technical audiences.",
    ],
  },
  {
    role: "Graduate Trainee AR Developer",
    company: "MIMOS Berhad",
    location: "Bukit Jalil, Kuala Lumpur",
    start: "Feb 2021",
    end: "Nov 2021",
    points: [
      "Researched and developed a mobile AR application for a client, from concept through to a working prototype.",
      "Prepared Technical Specification and High-Level Design documents for project review and handover.",
      "Conducted QA testing to identify defects and improve usability ahead of delivery.",
      "Collaborated with the IoT team, designers, and client stakeholders through storyboarding and requirement discussions.",
    ],
  },
];

// Each project can list any number of named links (GitHub, Live Site,
// Android, iOS, etc). Leave a link's url empty until you have it:
// it just won't render as a button until then.
export const projects = [
  {
    title: "BNM MAG in Your Pocket (MAGnet) Exhibition App",
    image: "/projects/magnet-app.jpg",
    description:
      "A mobile XR exhibition app for Android and iOS, built for Bank Negara Malaysia's museum. Co-developed the app end to end with a small team, setting up asset management workflows and integrating new AR/VR SDKs under tight deadlines.",
    tags: ["Unity", "C#", "AR/VR", "Android", "iOS"],
    impact: "Live on Google Play and the App Store",
    links: [
      { label: "Get it on Google Play", url: "https://play.google.com/store/apps/details?id=my.gov.bnm.museum.app" },
      { label: "Download on the App Store", url: "https://apps.apple.com/my/app/mag-in-your-pocket-magnet/id1671084207" },
    ],
    featured: true,
  },
  {
    title: "Malaysia Fuel Price Tracker",
    image: "/projects/fuel-tracker-overview.jpg",
    description:
      "A dashboard that pulls live weekly RON95/RON97/diesel prices from Malaysia's data.gov.my API through a custom REST route. Includes a BUDI95 subsidy comparison, a regional diesel comparison, and a fill-up cost calculator, built with Recharts and responsive, container-query-based layouts.",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Recharts"],
    impact: "5 dashboard sections · 15 unit tests · light/dark mode",
    links: [
      { label: "Live Site", url: "https://fuel-price-tracker-brown.vercel.app/" },
    ],
    featured: true,
  },
  {
    title: "Perodua Vehicle Registration Analytics",
    image: "/projects/perodua-overview.jpg",
    description:
      "An end-to-end BI pipeline: data.gov.my (JPJ) source data through a Python ETL process into a MySQL warehouse, visualized in Power BI across two dashboard pages plus a drill-through view. Star-schema design with DAX measures for market share and year-over-year growth.",
    tags: ["Python", "ETL", "MySQL", "Power BI", "DAX"],
    impact: "5.4M+ records across 149 manufacturers (2019–2026)",
    links: [
      { label: "Live Dashboard", url: "https://app.powerbi.com/view?r=eyJrIjoiZTI0OTllMDctZTJlZC00ZGIyLTllYWEtNmJlNmNmYTY0MWIyIiwidCI6IjgxZGFhMTE0LWZkYWUtNDRkOS05OGJhLTExMmU1ZjhjOGIwZCJ9" },
    ],
    featured: true,
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["C#", "JavaScript", "TypeScript", "Python"],
  },
  {
    category: "Full-Stack Development",
    items: ["React.js", "Next.js", "Node.js", "RESTful APIs", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "Database Modelling", "Power BI (DAX)"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "GitHub", "Unit Testing", "Agile & Scrum", "SDLC", "UAT & QA Testing", "OOP", "OutSystems"],
  },
];

export const languages = ["Bahasa Melayu: Native", "English: Proficient"];

export const education = [
  {
    degree: "Bachelor of Computer Science (Hons.), Multimedia Computing",
    institution: "Universiti Teknologi MARA (UiTM)",
    year: "2020",
    detail: "CGPA: 3.46",
    coursework: [
      "C++",
      "Java",
      "Object-Oriented Programming",
      "Data Management & SQL",
      "Front-End & Back-End Development",
    ],
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
