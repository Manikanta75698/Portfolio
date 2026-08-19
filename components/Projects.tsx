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
      liveUrl: "https://ping-me-lyart.vercel.app",
      githubUrl: "https://github.com",
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
      liveUrl: "https://portfolio-amber-phi-24.vercel.app",
      githubUrl: "https://github.com",
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
      liveUrl: "https://weather-app-ten-lime-88.vercel.app",
      githubUrl: "https://github.com",
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

              <div className={styles.cardContentArea}>
                <div className={styles.iconBox}>{project.icon}</div>
                <span className={styles.category}>{project.category}</span>
                <h4 className={styles.title}>{project.title}</h4>
                <p className={styles.description}>{project.description}</p>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.cardFooterLeft}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg> Code
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg> Live Demo
                  </a>
                </div>
                <span>Production Grade</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}