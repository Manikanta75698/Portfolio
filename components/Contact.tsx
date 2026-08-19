"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSuccess(false), 5000);
      }, (error) => {
        setLoading(false);
        alert("Failed to send message, please try again later.");
        console.error(error.text);
      });
  };

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
            <a href="mailto:kasireddymanikantha@gmail.com" className={styles.emailLink}>
              <Mail size={18} /> kasireddymanikantha@gmail.com <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.formCard}
          >
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Your Name</label>
                <input type="text" name="from_name" placeholder="mani" required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Your Email</label>
                <input type="email" name="from_email" placeholder="mani@example.com" required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <textarea name="message" placeholder="Write your message here..." required className={styles.textarea} />
              </div>
              <button type="submit" disabled={loading} className={styles.submitBtn}>
                {loading ? <span className="flex items-center justify-center gap-2"><Loader2 className="animate-spin" size={16} /> Sending...</span> : "Send Message"}
              </button>
              {success && (
                <p style={{ color: "#10b981", fontSize: "0.8rem", marginTop: "12px", textAlign: "center" }}>
                  Message sent successfully! I will get back to you soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}