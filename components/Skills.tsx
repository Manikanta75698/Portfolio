"use client";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code", "Vercel", "Postman"],
    },
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.subHeading}>Expertise</h2>
          <h3 className={styles.mainHeading}>Skills & Technologies</h3>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={styles.card}
            >
              <h4 className={styles.cardTitle}>{category.title}</h4>
              <div className={styles.badgeList}>
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className={styles.badge}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}