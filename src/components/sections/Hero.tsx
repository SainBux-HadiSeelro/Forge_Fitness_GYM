"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const stats = [
    { value: "15K+", label: "Members Trained" },
    { value: "98%", label: "Success Rate" },
    { value: "50+", label: "Elite Coaches" },
    { value: "12yr", label: "Of Excellence" },
];

export default function Hero() {
    const videoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (videoRef.current) {
                const scrolled = window.scrollY;
                videoRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={styles.hero} id="home">
            {/* Background */}
            <div className={styles.bgWrap} ref={videoRef}>
                <Image
                    src="/hero_bg.png"
                    alt="Premium gym interior"
                    fill
                    priority
                    quality={90}
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className={styles.overlay} />
            <div className={styles.overlayGrad} />

            {/* Content */}
            <div className={`container ${styles.content}`}>
                <motion.span
                    className="heading-eyebrow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    The Premier Fitness Experience
                </motion.span>

                <motion.h1
                    className={`heading-xl ${styles.headline}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                >
                    Don&#39;t Just
                    <br />
                    <span className={styles.accentLine}>Dream It.</span>
                    <br />
                    <span className={styles.outlineText}>Forge It.</span>
                </motion.h1>

                <motion.p
                    className={`text-muted ${styles.subtext}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    Elite coaching, world-class equipment, and a community that pushes
                    you beyond your limits. Your transformation starts today.
                </motion.p>

                <motion.div
                    className={styles.ctas}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.65 }}
                >
                    <Link href="#membership" className={`btn btn-primary ${styles.ctaPrimary}`}>
                        <span>Start Training</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                    <Link href="#programs" className={`btn btn-outline`}>
                        Explore Programs
                    </Link>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    className={styles.stats}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.85 }}
                >
                    {stats.map((stat, i) => (
                        <div key={i} className={styles.stat}>
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Cue */}
            <motion.div
                className={styles.scrollCue}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <div className={styles.scrollLine} />
                <span>Scroll</span>
            </motion.div>
        </section>
    );
}
