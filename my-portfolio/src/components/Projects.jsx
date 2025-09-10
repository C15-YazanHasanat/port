import React from "react";
import { motion } from "framer-motion";
import "./../styles/Projects.css";

const projects = [
  { id: 1, title: "E-commerce App", desc: "Full stack app using React & MongoDB", link: "https://technest-website.netlify.app/" }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(p => (
          <motion.div 
            key={p.id}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="project-card"
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
