"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import styles from "./Projects.module.css";

export default function Projects() {
  const projects = [
    {
      title: "PingMe — Social Media Application",
      category: "Full-Stack / React / Node / MongoDB",
      description: "A real-time social platform featuring user authentication, post feeds, likes, comments, and seamless connections.",
      span: styles.spanTwo,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      title: "Interactive Portfolio",
      category: "Next.js / CSS Modules",
      description: "Sleek, fluid transitions, and high-performance developer portfolio built with modern design principles.",
      span: "",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      )
    },
    {
      title: "Weather Forecast Web App",
      category: "JavaScript / API Integration",
      description: "Live weather tracking application fetching real-time meteorological data with dynamic UI updates based on climate.",
      span: styles.spanTwo,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      )
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectsContainer}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.subHeading}>Selected Work</h2>
            <h3 className={styles.mainHeading}>Featured Projects</h3>
          </div>
          <p className={styles.headerDescription}>
            A curation of systems, apps, and interfaces crafted with attention to technical detail.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`${styles.card} ${project.span}`}
            >
              <div className={styles.cardTopIcon}>
                <ArrowUpRight size={20} />
              </div>

              <div>
                <div className={styles.iconBox}>{project.icon}</div>
                <span className={styles.category}>{project.category}</span>
                <h4 className={styles.title}>{project.title}</h4>
                <p className={styles.description}>{project.description}</p>
              </div>

              <div className={styles.cardFooter}>
                <span>Production Grade</span>
                <span>View details &rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}