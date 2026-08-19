"use client";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.subHeading}>Get In Touch</h2>
            <h3 className={styles.mainHeading}>Let&apos;s build something exceptional together.</h3>
            <p className={styles.description}>
              Have a project in mind, an opportunity, or just want to connect? Drop a message or reach out directly via email.
            </p>
            <a href="mailto:manikantha@example.com" className={styles.emailLink}>
              <Mail size={18} /> manikantha@example.com <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.formCard}
          >
            <form onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Your Name</label>
                <input type="text" placeholder="John Doe" required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Your Email</label>
                <input type="email" placeholder="john@example.com" required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <textarea placeholder="Write your message here..." required className={styles.textarea} />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}