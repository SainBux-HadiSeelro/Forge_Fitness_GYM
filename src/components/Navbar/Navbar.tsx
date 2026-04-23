"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#programs", label: "Programs" },
    { href: "#trainers", label: "Trainers" },
    { href: "#membership", label: "Membership" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <nav className={styles.nav}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoMark}>F</span>
                    <span className={styles.logoText}>FORGE <span>FITNESS</span></span>
                </Link>

                {/* Desktop Links */}
                <ul className={styles.links}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={styles.link}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <Link href="#membership" className={`btn btn-primary ${styles.cta}`}>
                    Join Now
                </Link>

                {/* Hamburger */}
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </nav>

            {/* Mobile Drawer */}
            <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}>
                <ul className={styles.drawerLinks}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={styles.drawerLink} onClick={closeMenu}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="#membership" className={`btn btn-primary ${styles.drawerCta}`} onClick={closeMenu}>
                            Join Now
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
