"use client";

import { motion } from "framer-motion";
import styles from "./Programs.module.css";

const programs = [
    {
        tag: "Most Popular",
        icon: "🏋️",
        title: "Strength & Conditioning",
        desc: "Build real-world strength with progressive overload programs guided by powerlifting-certified coaches.",
        features: ["Progressive Overload Protocol", "1-on-1 Form Assessment", "Nutrition Blueprint"],
        accent: true,
    },
    {
        tag: "Fat Loss",
        icon: "🔥",
        title: "Cardio & HIIT",
        desc: "High-intensity interval sessions scientifically designed to maximize calorie burn and cardiovascular health.",
        features: ["Heart Rate Zone Training", "VO2 Max Testing", "Recovery Tracking"],
        accent: false,
    },
    {
        tag: "Elite",
        icon: "🎯",
        title: "Personal Training",
        desc: "Fully customized, one-to-one sessions with a dedicated coach. The fastest path to your goal.",
        features: ["Personalized Program Design", "Weekly Check-ins", "24/7 Coach Access"],
        accent: false,
    },
    {
        tag: "Community",
        icon: "🤸",
        title: "Group Fitness",
        desc: "Energy-packed group classes — from yoga to boxing — that make every workout something to look forward to.",
        features: ["30+ Weekly Classes", "All Fitness Levels", "Expert Instructors"],
        accent: false,
    },
    {
        tag: "Recovery",
        icon: "🧘",
        title: "Mobility & Yoga",
        desc: "Active recovery isn't optional — it's strategic. Improve flexibility, reduce injury, and move better.",
        features: ["Impingement Assessment", "Injury Prevention", "Deep Stretch Classes"],
        accent: false,
    },
    {
        tag: "Sport",
        icon: "⚡",
        title: "Athletic Performance",
        desc: "Train like a pro. Speed, agility, and sport-specific conditioning programs for competitive athletes.",
        features: ["Speed & Agility Drills", "Sport-Specific Protocols", "Game Day Prep"],
        accent: false,
    },
];

export default function Programs() {
    return (
        <section
            className={`section-pad ${styles.programs}`}
            id="programs"
            style={{ background: "var(--bg-secondary)" }}
        >
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="heading-eyebrow">What We Offer</span>
                    <h2 className="heading-lg">
                        Programs Built to
                        <br />
                        <span className="text-accent">Deliver Results</span>
                    </h2>
                    <p className="text-muted" style={{ maxWidth: 460, marginTop: 16 }}>
                        Six performance-driven programs. Designed around science, delivered by experts.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {programs.map((prog, i) => (
                        <motion.div
                            key={i}
                            className={`${styles.card} ${prog.accent ? styles.cardAccent : ""}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: (i % 3) * 0.12 }}
                            whileHover={{ y: -6 }}
                        >
                            <div className={styles.cardTop}>
                                <span className={styles.tag}>{prog.tag}</span>
                                <span className={styles.icon}>{prog.icon}</span>
                            </div>
                            <h3 className="heading-md" style={{ margin: "12px 0 8px" }}>{prog.title}</h3>
                            <p className="text-muted" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>{prog.desc}</p>
                            <ul className={styles.features}>
                                {prog.features.map((f, fi) => (
                                    <li key={fi} className={styles.feature}>
                                        <span className={styles.checkmark}>✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <button className={`btn ${prog.accent ? "btn-primary" : "btn-outline"} ${styles.cardBtn}`}>
                                Learn More
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
