"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Trainers.module.css";

const trainers = [
    {
        name: "Marcus Cole",
        role: "Head Strength Coach",
        experience: "10 Years",
        specialty: "Powerlifting · Hypertrophy",
        bio: "Former national-level powerlifter with a passion for transforming everyday athletes. Known for his systematic approach and relentless energy.",
        image: "/trainer_marcus.png",
        certs: ["CSCS", "NSCA", "CPT"],
    },
    {
        name: "Sofia Reyes",
        role: "Cardio & HIIT Specialist",
        experience: "8 Years",
        specialty: "HIIT · Functional Training",
        bio: "Ex-professional sprinter turned coach. Sofia's sessions are legendary for their intensity, precision, and unbeatable results.",
        image: "/trainer_sofia.png",
        certs: ["NASM-CPT", "CrossFit L2", "SFN"],
    },
    {
        name: "James Okafor",
        role: "Athletic Performance Coach",
        experience: "12 Years",
        specialty: "Speed · Agility · Sports",
        bio: "Trained Olympic and professional athletes across 3 continents. James brings an elite sports science background to every session.",
        image: "/trainer_james.png",
        certs: ["NSCA-CSCS", "USA Track", "FMS L2"],
    },
];

export default function Trainers() {
    return (
        <section className={`section-pad ${styles.trainers}`} id="trainers">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="heading-eyebrow">The Team</span>
                    <h2 className="heading-lg">
                        Coached by the
                        <br />
                        <span className="text-accent">Best in the Game</span>
                    </h2>
                    <p className="text-muted" style={{ maxWidth: 460, marginTop: 16 }}>
                        Our trainers are more than coaches — they're partners in your
                        transformation journey.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {trainers.map((trainer, i) => (
                        <motion.div
                            key={i}
                            className={styles.card}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            {/* Image */}
                            <div className={styles.imageWrap}>
                                <Image
                                    src={trainer.image}
                                    alt={trainer.name}
                                    fill
                                    style={{ objectFit: "cover", objectPosition: "top center" }}
                                    sizes="(max-width: 768px) 90vw, 380px"
                                />
                                <div className={styles.imageOverlay} />
                                <div className={styles.experience}>
                                    <span>{trainer.experience}</span>
                                    <small>Experience</small>
                                </div>
                            </div>

                            {/* Info */}
                            <div className={styles.info}>
                                <div className={styles.specialty}>{trainer.specialty}</div>
                                <h3 className={styles.name}>{trainer.name}</h3>
                                <span className={styles.role}>{trainer.role}</span>
                                <p className={`text-muted ${styles.bio}`}>{trainer.bio}</p>
                                <div className={styles.certs}>
                                    {trainer.certs.map((c, ci) => (
                                        <span key={ci} className={styles.cert}>{c}</span>
                                    ))}
                                </div>
                                <button className={`btn btn-outline ${styles.bookBtn}`}>
                                    Book a Session
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
