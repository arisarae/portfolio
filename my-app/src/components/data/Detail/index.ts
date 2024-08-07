import { techType, contactType, projectsType } from "../Type";

export const contacts: contactType[] = [
  {
    id: 0,
    image: "/email.svg",
    title: "Email",
    detail: "raezzurarisa@gmail.com",
    link: "mailto:raezzurarisa@gmail.com",
  },
  {
    id: 1,
    image: "/whatsapp.svg",
    title: "Phone (WhatsApp)",
    detail: "+62 8122300796",
    link: "https://wa.me/628122300796",
  },
  {
    id: 2,
    image: "/linkedin.svg",
    title: "LinkedIn",
    detail: "Arisa Raezzura Zahra",
    link: "http://www.linkedin.com/in/arisa-raezzura",
  },
  {
    id: 3,
    image: "/github.svg",
    title: "GitHub",
    detail: "arisarae",
    link: "https://github.com/arisarae",
  },
];

export const programmingLanguages: techType[] = [
  {
    id: 0,
    image: "/typescript.svg",
    title: "Typescript",
    detail: "Front-end",
  },
  {
    id: 1,
    image: "/javascript.svg",
    title: "Javascript",
    detail: "Front-end",
  },
  {
    id: 2,
    image: "/css.svg",
    title: "CSS",
    detail: "Front-end",
  },
  {
    id: 3,
    image: "/html.svg",
    title: "HTML",
    detail: "Front-end",
  },
  {
    id: 4,
    image: "/python.svg",
    title: "Python",
    detail: "Back-end",
  },
  {
    id: 5,
    image: "/sql.svg",
    title: "SQL",
    detail: "Back-end",
  },
];

export const frameworkLibrary: techType[] = [
  {
    id: 0,
    image: "/tailwind.svg",
    title: "Tailwind",
    detail: "Front-end",
  },
  {
    id: 1,
    image: "/next.svg",
    title: "Next.Js",
    detail: "Front-end",
  },
  {
    id: 2,
    image: "/react.svg",
    title: "React",
    detail: "Front-end",
  },
  {
    id: 3,
    image: "/flask.svg",
    title: "Flask",
    detail: "Back-end",
  },
];

export const projects: projectsType[] = [
  {
    id: 1,
    image: "/masakin.svg",
    title: "Masakin",
    tech: ["React", "Next.Js", "Tailwind"],
    links: {
      name: "GitHub",
      url: "https://github.com/haikalbintang/MasakinProjectFrontend",
    },
    date: "July 2024",
    desc: "Masakin is developed to simplify the process of searching for new cooking recipes for home cooks or busy professionals who cook their own food. Masakin allows users to search for various recipes based on different criteria such as popularity, rating, and country of origin. Users can search, filter, and view detailed recipe information.",
  },
  {
    id: 2,
    image: "/compasstio.svg",
    title: "Compasstio",
    tech: ["Next.Js", "Tailwind", "Typescript"],
    links: {
      name: "GitHub",
      url: "https://github.com/cjordan239/FinalProjectGroup_E",
    },
    date: "May 2024",
    desc: "Compasstio is a web application inspired by the SDG goal of Zero Hunger, focuses on creating a platform for donations to fight hunger. The name reflects our mission: building a community (Com), navigating to those in need (Compass), driven by empathy (Compassion), and taking action through donations (Tio). The team designed and developed the application to provide an engaging user experience for donors and raise awareness about hunger. Using Figma for design and collaborated closely between front-end and back-end to implement the features and functionalities. As a front-end developer, my responsibility was to translate the design into a responsive and user-friendly interface.",
  },
  {
    id: 3,
    image: "/weatherApp.svg",
    title: "Weather App",
    tech: ["React", "Tailwind", "Typescript"],
    links: {
      name: "GitHub",
      url: "https://github.com/arisarae/weather_app",
    },
    date: "January 2024",
    desc: "Weather App allows users to search for a city and get real-time weather information including temperature, feels like temperature, wind speed, humidity, and an icon representing the current weather condition. Users have the ability toggle between Celsius and Kelvin for the temperature display. Additionally, Registered users can log in to access a personalized 'My Clocks' menu where they can save their favorite cities. However, please note that the login and registration functionalities currently use a mock API and are not connected to a personal database yet.",
  },
  {
    id: 4,
    image: "/rumahBelajar.svg",
    title: "Rumah Belajar",
    tech: ["HTML", "CSS", "Javascript"],
    links: {
      name: "GitHub",
      url: "https://github.com/arisarae/rumah_belajar",
    },
    date: "November 2023",
    desc: "Rumah Belajar is a business profile website designed to provide information about a tutoring house named Rumah Belajar. The website provide list of available tutors, displaying a photo gallery of teaching and learning activities, and showcasing customer reviews from parents. Although this is a static website, users can still navigate through its sections and fill out the form for potential students.",
  },
  {
    id: 5,
    image: "/bookworms.svg",
    title: "Bookworms",
    tech: ["HTML", "CSS", "Javascript"],
    links: {
      name: "GitHub",
      url: "https://github.com/arisarae/bookworms",
    },
    date: "November 2023",
    desc: "Bookworms is a dedicated space for book enthusiasts to explore and share their love for literature. Inspired by top library websites, Bookworms offers various popular book genres, including romance, fantasy, and science fiction, along with top book recommendations and movie adaptations. Although this is a static website, users can navigate through its sections, fill out the book club form, and open titles in the top pick books that link to Goodreads. The site aims to foster a vibrant book-loving community.",
  },
];
