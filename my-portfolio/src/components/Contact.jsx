import React from "react";
import { motion } from "framer-motion";
import "./../styles/Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "yazanhassanat@gmail.com",
      link: "mailto:yazanhassanat@gmail.com",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/YazanHasanat",
      link: "https://github.com/YazanHasanat",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/yazanalhasanat",
      link: "https://www.linkedin.com/in/yazanalhasanat/",
    },
  ];

  return (
    <section className="contact" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>
      <div className="contact-grid">
        {contacts.map((c, i) => (
          <motion.a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="icon">{c.icon}</span>
            <h3>{c.title}</h3>
            <p>{c.value}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
