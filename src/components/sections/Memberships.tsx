"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Memberships.module.css";

const plans = [
    {
        name: "Starter",
        price: { monthly: 39, annual: 29 },
        tagline: "Perfect for beginners finding their rhythm.",
        features: [
            "Gym Access (Mon–Fri)",
            "Basic Equipment",
            "2 Group Classes/month",
            "Locker Room Access",
            "Fitness App Access",
        ],
        missing: ["Personal Training", "Premium Classes", "Nutrition Coaching"],
        cta: "Get Started",
        highlight: false,
    },
    {
        name: "Elite",
        price: { monthly: 79, annual: 59 },
        tagline: "The all-in experience for serious results.",
        features: [
            "Unlimited Gym Access (24/7)",
            "All Equipment Unlocked",
            "Unlimited Group Classes",
            "4 PT Sessions/month",
            "Nutrition Coaching",
            "Recovery Lounge",
            "Priority Booking",
        ],
        missing: [],
        cta: "Join Elite",
        highlight: true,
    },
    {
        name: "Pro",
        price: { monthly: 129, annual: 99 },
        tagline: "Built for athletes chasing peak performance.",
        features: [
            "Everything in Elite",
            "8 PT Sessions/month",
            "Body Composition Scans",
            "Personalized Meal Plans",
            "Sports Physio Access",
            "Guest Passes (4/month)",
            "Dedicated Locker",
        ],
        missing: [],
        cta: "Go Pro",
        highlight: false,
    },
];

export default function Memberships() {
    const [annual, setAnnual] = useState(false);

    return (
        <section
            className={`section-pad ${styles.memberships}`}
            id="membership"
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
                    <span className="heading-eyebrow">Membership Plans</span>
                    <h2 className="heading-lg">
                        Invest in Your
                        <br />
                        <span className="text-accent">Best Self</span>
                    </h2>
                    <p className="text-muted" style={{ maxWidth: 440, marginTop: 12 }}>
                        No hidden fees. Cancel anytime. Just results.
                    </p>

                    {/* Toggle */}
                    <div className={styles.toggle}>
                        <span className={!annual ? styles.toggleActive : ""}>Monthly</span>
                        <button
                            className={`${styles.toggleBtn} ${annual ? styles.toggleBtnOn : ""}`}
                            onClick={() => setAnnual(!annual)}
                            aria-label="Toggle billing period"
                        >
                            <span className={styles.toggleKnob} />
                        </button>
                        <span className={annual ? styles.toggleActive : ""}>
                            Annual <em className={styles.saveBadge}>Save 25%</em>
                        </span>
                    </div>
                </motion.div>

                <div className={styles.grid}>
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            className={`${styles.card} ${plan.highlight ? styles.highlighted : ""}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            whileHover={!plan.highlight ? { y: -4 } : {}}
                        >
                            {plan.highlight && (
                                <div className={styles.popularBadge}>Most Popular</div>
                            )}
                            <div className={styles.planTop}>
                                <h3 className={styles.planName}>{plan.name}</h3>
                                <p className={styles.planTagline}>{plan.tagline}</p>
                            </div>

                            <div className={styles.priceRow}>
                                <span className={styles.currency}>$</span>
                                <span className={styles.price}>
                                    {annual ? plan.price.annual : plan.price.monthly}
                                </span>
                                <span className={styles.period}>/mo</span>
                            </div>

                            <ul className={styles.features}>
                                {plan.features.map((f, fi) => (
                                    <li key={fi} className={styles.featureItem}>
                                        <span className={styles.check}>✓</span> {f}
                                    </li>
                                ))}
                                {plan.missing.map((f, fi) => (
                                    <li key={fi} className={`${styles.featureItem} ${styles.featureMissing}`}>
                                        <span className={styles.cross}>✕</span> {f}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="#contact"
                                className={`btn ${plan.highlight ? "btn-primary" : "btn-outline"} ${styles.planCta}`}
                            >
                                {plan.cta}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
