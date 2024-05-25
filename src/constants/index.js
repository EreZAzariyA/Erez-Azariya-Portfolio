import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  docker,
  plasbit,
  ea_store,
  numbers,
  snake
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  }
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "PlasBit",
    icon: plasbit,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Present",
    points: [
      "Developing and maintaining web application using Meteor.js, React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const tags = {
  react: {
    name: "react",
    color: "blue-text-gradient",
  },
  node: {
    name: "node",
    color: "pink-text-gradient",
  },
  mongo: {
    name: "mongodb",
    color: "green-text-gradient",
  },
  redux: {
    name: "redux",
    color: "orange-text-gradient",
  },
  antd: {
    name: "ant-design",
    color: "pink-text-gradient",
  },
  css: {
    name: "css",
    color: "pink-text-gradient",
  }
};

const projects = [
  {
    name: "E-Commerce Store",
    description:
      "Web-based platform that allows users to order and buy electronic products, providing an admin-side for uploading and update products or category, orders and stock management system. Also option to pay with PayPal platform.",
    tags: [
      tags.node,
      tags.react,
      tags.mongo,
      tags.redux,
      tags.antd
    ],
    image: ea_store,
    source_code_link: "https://github.com/EreZAzariyA/E.A-Store",
    preview_link: "https://e-a-store.vercel.app/home"
  },
  {
    name: "Numbers",
    description:
      "Web application that allow users to track their expenses, Connect the bank-account and import the latest transactions, track expenses by category and compare to last month/year to see differences. (On-Work..)",
    tags: [
      tags.node,
      tags.react,
      tags.redux,
      tags.antd
    ],
    image: numbers,
    source_code_link: "https://github.com/EreZAzariyA/Numbers",
    preview_link: "https://ea-numbers.vercel.app/",
  },
  {
    name: "Snake Game",
    description:
      "A small web application to play some old game.",
    tags: [
      tags.react
    ],
    image: snake,
    source_code_link: "https://github.com/EreZAzariyA/Snake-Game",
    preview_link: "https://snake-game-one-ruddy.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };