"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Gallery.module.css";

// Gallery items — use our generated images and fill remainder with CSS gradient placeholders
const items = [
    { src: "/gym_gallery1.png", alt: "Free weights area", span: "wide" },
    { src: "/hero_bg.png", alt: "Training floor", span: "tall" },
    { src: null, label: "Recovery Zone", icon: "🛁", color: "#1a0500" },
    { src: null, label: "Boxing Studio", icon: "🥊", color: "#12001a" },
    { src: "/trainer_marcus.png", alt: "Training session", span: "normal" },
    { src: null, label: "Cardio Deck", icon: "🏃", color: "#001a12" },
];

export default function Gallery() {
    return (
        <section
            className={`section-pad ${styles.gallery}`}
            id="gallery"
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
                    <span className="heading-eyebrow">The Space</span>
                    <h2 className="heading-lg">
                        Where Champions
                        <br />
                        <span className="text-accent">Are Made</span>
                    </h2>
                    <p className="text-muted" style={{ maxWidth: 420, marginTop: 12 }}>
                        Over 15,000 sq ft of world-class equipment, studios, and recovery
                        spaces — all designed to help you perform your best.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            className={`${styles.item} ${item.span === "wide" ? styles.wide : ""} ${item.span === "tall" ? styles.tall : ""}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.07 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {item.src ? (
                                <>
                                    <Image
                                        src={item.src}
                                        alt={item.alt || ""}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        sizes="(max-width: 768px) 90vw, 400px"
                                    />
                                    <div className={styles.imgOverlay} />
                                    {item.alt && (
                                        <span className={styles.imgLabel}>{item.alt}</span>
                                    )}
                                </>
                            ) : (
                                <div
                                    className={styles.placeholder}
                                    style={{ background: item.color }}
                                >
                                    <span className={styles.placeholderIcon}>{item.icon}</span>
                                    <span className={styles.placeholderLabel}>{item.label}</span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* CTA Banner */}
                <motion.div
                    className={styles.ctaBanner}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <h3 className="heading-md">Ready to See it in Person?</h3>
                        <p className="text-muted">Book a free tour and trial session today.</p>
                    </div>
                    <a href="#contact" className="btn btn-primary">
                        Book Free Tour
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
