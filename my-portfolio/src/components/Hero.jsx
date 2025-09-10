import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./../styles/Hero.css";

const Hero = () => {
  const texts = ["Full Stack Developer", "React Enthusiast", "MongoDB & PostgreSQL"];
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplay(texts[index].slice(0, display.length + 1));
      if(display === texts[index]) {
        setTimeout(() => setIndex((index + 1) % texts.length), 1000);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [display, index]);

  return (
    <section id="hero" className="hero">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Yazan Alhassanat
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {display}
      </motion.h2>
    </section>
  );
};

export default Hero;
