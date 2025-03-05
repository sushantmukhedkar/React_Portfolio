import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = 'I am a dedicated Frontend Developer and Machine Learning Enthusiast with expertise in SQL and Java programming.I specialize in building responsive web applications, developing intelligent AI-driven solutions, and optimizing database performance. With a strong foundation in software development, I aim to create efficient, scalable, and user-friendly applications.';

export const ABOUT_TEXT = `I am a passionate and detail-oriented software developer with expertise in frontend and backend technologies, including HTML, CSS, JavaScript, Java, and Python. With a strong foundation in machine learning algorithms, I have successfully developed projects such as a college prediction and recommendation system and a signature recognition model using Python. My experience also includes building interactive and responsive websites. As a fresher, I am eager to apply my knowledge, learn new technologies, and contribute to innovative solutions in a dynamic environment.`;

// export const EXPERIENCES = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
// ];

export const PROJECTS = [
  {
    title: "Food Delivery System",
    image: project1, // Replace with actual image path
    description:
      "A food delivery system enabling user signup, login, and ordering from multiple hotels with menu options, ensuring a smooth and secure ordering experience.",
    technologies: ["C", "Data Structures", "File Handling"],
    githubLink:"https://github.com/sushantmukhedkar/C-programming-Projects",
  },
  {
    title: "College Way (College Recommendation System)",
    image: project2, // Replace with actual image path
    description:
      "A content-based recommendation system suggesting colleges based on user inputs like exam scores, seat types, and branches, using machine learning techniques.",
    technologies: ["Python", "Machine Learning", "Pandas", "Flask"],
    githubLink:"https://github.com/sushantmukhedkar/COLLEGEWAY",
  },
  {
    title: "Signature Recognition System",
    image: project3, // Replace with actual image path
    description:
      "A deep learning-based system that compares and verifies handwritten signatures from images or a live camera feed, improving accuracy by 30%.",
    technologies: ["Python", "OpenCV", "Deep Learning", "MySQL"],
    githubLink:"https://github.com/sushantmukhedkar/Python-Projects",
  },
  {
    title: "Restaurant Website",
    image: project4, // Replace with actual image path
    description:
      "A fully responsive restaurant website designed with HTML, CSS, and JavaScript, featuring an interactive UI and easy navigation for customers.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink:"https://github.com/sushantmukhedkar/Restaurant-Website",
  },
  {
    title: "Portfolio Website",
    image: project5, // Replace with actual image path
    description:
      "A personal portfolio website showcasing my projects, skills, and contact information with a clean and modern design.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    githubLink:"https://github.com/sushantmukhedkar/React_Portfolio",
  },
];

export const CONTACT = {
  address: "Nanded ",
  phoneNo: "+917350550526 ",
  email: "sushantvmukhedkar@gmail.com",
};
