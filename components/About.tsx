"use client";
import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.subHeading}>Background</h2>
          <h3 className={styles.mainHeading}>About Me</h3>
        </div>

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`${styles.card} ${styles.spanTwo}`}
          >
            <h4 className={styles.cardTitle}>Engineering Digital Solutions</h4>
            <p className={styles.cardText}>
              I am Manikantha Kasireddy, a full-stack developer passionate about building clean, high-performance web applications. With solid foundations in web technologies and modern frameworks like React and Next.js, I bridge the gap between aesthetic user interfaces and robust backend logic.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={styles.card}
          >
            <h4 className={styles.cardTitle}>Focus & Vision</h4>
            <p className={styles.cardText}>
              Focused on crafting production-grade systems, optimizing performance, and building scalable full-stack architectures like social media apps and real-time utilities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}