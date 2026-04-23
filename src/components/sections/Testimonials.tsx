"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Testimonials.module.css";

const testimonials = [
    {
        name: "Alex Turner",
        role: "Lost 28lbs in 4 months",
        rating: 5,
        text: "I've tried three other gyms in this city. Nothing comes close to Forge. The structure, the coaches, the atmosphere — it's genuinely different. Marcus helped me drop 28 lbs in four months while building actual muscle. I'm a member for life.",
        initials: "AT",
        color: "#e03d00",
    },
    {
        name: "Priya Sharma",
        role: "Ran her first marathon",
        rating: 5,
        text: "Sofia's HIIT sessions broke me and rebuilt me in the best possible way. I went from someone who dreaded cardio to running my first marathon. The progress tracking and genuine accountability here is unreal.",
        initials: "PS",
        color: "#7c3aed",
    },
    {
        name: "Daniel Osei",
        role: "Gained 15lbs of muscle",
        rating: 5,
        text: "As a skinny guy who'd been training without results for years, Forge changed everything. The Elite program is worth every cent. 15 lbs of solid muscle in 6 months, and I finally understand how to train properly.",
        initials: "DO",
        color: "#0891b2",
    },
    {
        name: "Lauren McKenzie",
        role: "Post-surgery rehabilitation",
        rating: 5,
        text: "After my knee surgery, I was terrified to get back in the gym. The team here — especially James — built a recovery protocol that got me back to full athletic performance in record time. The attention and care is unlike anything else.",
        initials: "LM",
        color: "#059669",
    },
    {
        name: "Ravi Patel",
        role: "Corporate athlete",
        rating: 5,
        text: "Balancing a 60-hour work week and training felt impossible until I joined Forge. The nutrition coaching and 24/7 access turned my scattered sessions into a real system. Down 18lbs, sharper mind, better sleep.",
        initials: "RP",
        color: "#d97706",
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);

    const next = () => setActive((a) => (a + 1) % testimonials.length);
    const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

    const t = testimonials[active];

    return (
        <section className={`section-pad ${styles.testimonials}`} id="testimonials">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="heading-eyebrow">Real Results</span>
                    <h2 className="heading-lg">
                        Thousands Transformed.
                        <br />
                        <span className="text-accent">Zero Excuses.</span>
                    </h2>
                </motion.div>

                <div className={styles.testimonialWrap}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            className={styles.testimonialCard}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            {/* Stars */}
                            <div className={styles.stars}>
                                {"★".repeat(t.rating)}
                            </div>

                            {/* Quote */}
                            <blockquote className={styles.quote}>
                                &ldquo;{t.text}&rdquo;
                            </blockquote>

                            {/* Author */}
                            <div className={styles.author}>
                                <div className={styles.avatar} style={{ background: t.color }}>
                                    {t.initials}
                                </div>
                                <div>
                                    <div className={styles.authorName}>{t.name}</div>
                                    <div className={styles.authorRole}>{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className={styles.controls}>
                        <button className={styles.navBtn} onClick={prev} aria-label="Previous">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M19 12H5M12 5l-7 7 7 7" />
                            </svg>
                        </button>

                        <div className={styles.dots}>
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                                    onClick={() => setActive(i)}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button className={styles.navBtn} onClick={next} aria-label="Next">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Side grid of mini testimonials */}
                <div className={styles.miniGrid}>
                    {testimonials.map((t, i) => (
                        <motion.button
                            key={i}
                            className={`${styles.miniCard} ${i === active ? styles.miniActive : ""}`}
                            onClick={() => setActive(i)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                        >
                            <div className={styles.miniAvatar} style={{ background: t.color }}>
                                {t.initials}
                            </div>
                            <div>
                                <div className={styles.miniName}>{t.name}</div>
                                <div className={styles.miniRole}>{t.role}</div>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}
