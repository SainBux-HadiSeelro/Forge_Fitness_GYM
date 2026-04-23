"use client";

import { motion, Variants } from "framer-motion";
import styles from "./About.module.css";

const pillars = [
    {
        icon: "⚡",
        title: "Relentless Drive",
        desc: "We believe every session matters. Our culture pushes you to exceed what you thought possible.",
    },
    {
        icon: "🏆",
        title: "Expert Guidance",
        desc: "World-class certified trainers tailoring every rep, every set, every meal to your goals.",
    },
    {
        icon: "🔥",
        title: "Community Fire",
        desc: "A tribe of high-performers lifting each other. Accountability built into the experience.",
    },
];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
};

export default function About() {
    return (
        <section className={`section-pad ${styles.about}`} id="about">
            <div className="container">
                <div className={styles.grid}>
                    {/* Left: Text */}
                    <div className={styles.textCol}>
                        <motion.span
                            className="heading-eyebrow"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Our Story
                        </motion.span>

                        <motion.h2
                            className="heading-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Built Different.
                            <br />
                            <span className="text-accent">Trained Different.</span>
                        </motion.h2>

                        <div className="divider" />

                        <motion.p
                            className="text-muted"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Founded in 2012, Forge Fitness was born from a single conviction:{" "}
                            <strong style={{ color: "var(--text-primary)" }}>
                                ordinary gyms produce ordinary results.
                            </strong>{" "}
                            We set out to create something categorically different — a training
                            environment where elite athletes and beginners alike find the
                            structure, science, and sweat to transform their lives.
                        </motion.p>

                        <motion.p
                            className="text-muted"
                            style={{ marginTop: 16 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Today, with over 15,000 members and a growing team of 50+ certified
                            coaches, Forge Fitness is the benchmark for premium fitness in the
                            region. We don&#39;t just train bodies. We build habits, mindsets,
                            and legacies.
                        </motion.p>

                        <motion.div
                            className={styles.mission}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className={styles.missionLine} />
                            <p>
                                <em>
                                    &ldquo;Our mission is to make you the best version of yourself —
                                    one session at a time.&rdquo;
                                </em>
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: Pillars */}
                    <div className={styles.pillarsCol}>
                        {pillars.map((p, i) => (
                            <motion.div
                                key={i}
                                className={styles.pillar}
                                custom={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ x: 6, borderColor: "var(--accent)" }}
                            >
                                <span className={styles.pillarIcon}>{p.icon}</span>
                                <div>
                                    <h3 className={styles.pillarTitle}>{p.title}</h3>
                                    <p className={`text-muted ${styles.pillarDesc}`}>{p.desc}</p>
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            className={styles.badge}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <span className={styles.badgeNum}>12</span>
                            <span className={styles.badgeLabel}>Years Forging Champions</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
