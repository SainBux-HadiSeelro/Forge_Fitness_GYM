import Link from "next/link";
import styles from "./Footer.module.css";

const links = {
    Company: [
        { label: "About Us", href: "#about" },
        { label: "Our Team", href: "#trainers" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
    ],
    Programs: [
        { label: "Strength Training", href: "#programs" },
        { label: "Cardio & HIIT", href: "#programs" },
        { label: "Personal Training", href: "#programs" },
        { label: "Group Classes", href: "#programs" },
    ],
    Support: [
        { label: "Membership FAQ", href: "#" },
        { label: "Contact Us", href: "#contact" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Privacy Policy", href: "#" },
    ],
};

const socials = [
    { label: "Instagram", icon: "IG", href: "#" },
    { label: "Twitter / X", icon: "X", href: "#" },
    { label: "YouTube", icon: "YT", href: "#" },
    { label: "TikTok", icon: "TK", href: "#" },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                {/* Brand */}
                <div className={styles.brand}>
                    <div className={styles.logo}>
                        <span className={styles.logoMark}>F</span>
                        <span className={styles.logoText}>
                            FORGE <span>FITNESS</span>
                        </span>
                    </div>
                    <p className={styles.tagline}>
                        Not just a gym. A lifestyle. A community. A forge for your best self.
                    </p>
                    <div className={styles.socials}>
                        {socials.map((s) => (
                            <Link key={s.label} href={s.href} className={styles.social} aria-label={s.label}>
                                {s.icon}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Links */}
                {Object.entries(links).map(([category, items]) => (
                    <div key={category} className={styles.linkCol}>
                        <h4 className={styles.colTitle}>{category}</h4>
                        <ul className={styles.linkList}>
                            {items.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className={styles.footerLink}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom bar */}
            <div className={styles.bottom}>
                <div className="container">
                    <div className={styles.bottomInner}>
                        <p>© {new Date().getFullYear()} Forge Fitness. All rights reserved.</p>
                        <p className={styles.credit}>
                            Built with 💪 by dedicated athletes, for dedicated athletes.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
