import React from "react";
import { motion } from "framer-motion";
import "./../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        I'm Yazan Alhassanat, a Full Stack Developer skilled in React, MongoDB, and PostgreSQL. 
        I love creating interactive and animated web experiences that captivate users.
      </motion.p>
    </section>
  );
};

export default About;
