"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        goal: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className={`section-pad ${styles.contact}`} id="contact">
            <div className="container">
                <div className={styles.grid}>
                    {/* Left Info */}
                    <div className={styles.infoCol}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="heading-eyebrow">Get In Touch</span>
                            <h2 className="heading-lg">
                                Start Your
                                <br />
                                <span className="text-accent">Journey Today</span>
                            </h2>
                            <div className="divider" />
                            <p className="text-muted" style={{ marginBottom: 36 }}>
                                Ready to transform? Book a free consultation and we&#39;ll design
                                a personalized plan for your goals.
                            </p>
                        </motion.div>

                        <div className={styles.infoCards}>
                            {[
                                { icon: "📍", label: "Find Us", value: "1250 Iron Ave, Floor 2\nDowntown, NY 10001" },
                                { icon: "📞", label: "Call Us", value: "+1 (212) 555-0184" },
                                { icon: "✉️", label: "Email", value: "hello@forgefitness.com" },
                                { icon: "🕐", label: "Hours", value: "Mon–Fri: 5am–11pm\nSat–Sun: 6am–10pm" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className={styles.infoCard}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <span className={styles.infoIcon}>{item.icon}</span>
                                    <div>
                                        <span className={styles.infoLabel}>{item.label}</span>
                                        <p className={styles.infoValue}>{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Form */}
                    <motion.div
                        className={styles.formCol}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {submitted ? (
                            <div className={styles.successMsg}>
                                <span className={styles.successIcon}>✓</span>
                                <h3>Message Received!</h3>
                                <p className="text-muted">
                                    A Forge Fitness advisor will reach out within 24 hours to
                                    schedule your free consultation.
                                </p>
                                <button
                                    className="btn btn-outline"
                                    onClick={() => setSubmitted(false)}
                                    style={{ marginTop: 16 }}
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                                <h3 className={styles.formTitle}>Book a Free Consultation</h3>

                                <div className={styles.formRow}>
                                    <div className={styles.field}>
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Alex Turner"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="alex@example.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.field}>
                                        <label htmlFor="phone">Phone (optional)</label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+1 (212) 000-0000"
                                            value={form.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="goal">Primary Goal</label>
                                        <select
                                            id="goal"
                                            name="goal"
                                            value={form.goal}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select a goal...</option>
                                            <option>Lose Weight</option>
                                            <option>Build Muscle</option>
                                            <option>Athletic Performance</option>
                                            <option>Improve Cardio</option>
                                            <option>General Fitness</option>
                                            <option>Injury Recovery</option>
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="message">Tell us about yourself</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="Current fitness level, experience, any injuries or limitations..."
                                        value={form.message}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                                    Book Free Consultation
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>

                {/* Map placeholder */}
                <motion.div
                    className={styles.mapPlaceholder}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className={styles.mapOverlay}>
                        <div className={styles.pin}>📍</div>
                        <span>Forge Fitness HQ — 1250 Iron Ave, Downtown NY</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
