import { techType, contactType, projectsType } from "../Type";

export const contacts: contactType[] = [
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
  {
    id: 4,
    image: "/email.svg",
    title: "Email",
    detail: "raezzurarisa@gmail.com",
    link: "mailto:raezzurarisa@gmail.com",
  }
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
    desc: "Compasstio is a web app aimed at supporting the SDG goal of Zero Hunger by spreading awareness and facilitating donations to fight hunger. As front-end developer, nto a responsive, user-friendly interface, working closely with the back-end team to implement features. As a front-end developer, my responsibility was to translate the design into a responsive and user-friendly interface.",
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
    desc: "Weather App provides real-time weather updates for cities, including temperature, feels-like temperature, wind speed, and humidity, with an option to toggle between Celsius and Kelvin. Users can log in to open the 'My Clocks' menu. However, the login and registration features use a mock API and are not yet connected to a personal database.",
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
    desc: "Rumah Belajar is a business profile website for a tutoring house, offering information on available tutors, a photo gallery of teaching activities, and customer reviews from parents. Though the site is static, users can still navigate through sections and fill out a form for potential students.",
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
    desc: "Bookworms is a space for book enthusiasts to explore and share their love for literature. Inspired by top library websites, it offers various popular book genres, top book recommendations, and movie adaptations. Although it's a static website, users can navigate through its sections, fill out the book club form, and open top book titles linked to Goodreads. The site aims to foster a vibrant book-loving community.",
  },
];
