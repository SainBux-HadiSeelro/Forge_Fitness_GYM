"use client";

import { useState, useRef, useEffect } from "react";
import { findBotResponse } from "./knowledge";
import styles from "./Chatbot.module.css";

interface Message {
    id: string;
    sender: "bot" | "user";
    text: string;
    time: string;
    actionButtons?: { label: string; href: string }[];
}

const INITIAL_MESSAGE: Message = {
    id: "welcome-1",
    sender: "bot",
    text: "Welcome to **Forge Fitness**! 🔥 I am your 24/7 AI Concierge.\n\nAsk me anything about our membership plans, training programs, personal coaches, or facility hours. How can I help you forge your greatness today?",
    time: "Just now",
    actionButtons: [
        { label: "💳 Memberships", href: "#membership" },
        { label: "🏋️ Programs", href: "#programs" },
        { label: "👥 Coaches", href: "#trainers" },
        { label: "🎁 Free Pass", href: "#contact" },
    ],
};

const QUICK_PROMPTS = [
    { label: "💳 Membership Plans", query: "What are your membership plans and pricing?" },
    { label: "🏋️ Programs Offered", query: "What training programs do you offer?" },
    { label: "👥 Elite Coaches", query: "Who are the trainers and what are their specialties?" },
    { label: "🕒 Timings & Hours", query: "What are your opening hours and 24/7 access?" },
    { label: "📍 Location & Parking", query: "Where is the gym located and is there parking?" },
    { label: "🎁 Free Consultation", query: "How can I book a free consultation or trial pass?" },
];

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const idCounter = useRef(1);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
            setTimeout(() => inputRef.current?.focus(), 200);
        }
    }, [isOpen, messages, isTyping]);

    const handleSend = (textToSend?: string) => {
        const query = (textToSend || input).trim();
        if (!query) return;

        idCounter.current += 1;
        const currentUserId = `usr-${idCounter.current}`;

        const userMsg: Message = {
            id: currentUserId,
            sender: "user",
            text: query,
            time: "Just now",
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate intelligent response delay
        setTimeout(() => {
            idCounter.current += 1;
            const currentBotId = `bot-${idCounter.current}`;
            const botResult = findBotResponse(query);
            const botMsg: Message = {
                id: currentBotId,
                sender: "bot",
                text: botResult.answer,
                time: "Just now",
                actionButtons: botResult.actionButtons,
            };

            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 550);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleActionClick = (href: string) => {
        if (href.startsWith("#")) {
            const el = document.querySelector(href);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const clearChat = () => {
        setMessages([INITIAL_MESSAGE]);
    };

    // Helper to format text with bold and line breaks safely
    const formatMessageText = (text: string) => {
        const lines = text.split("\n");
        return lines.map((line, lIndex) => {
            const parts = line.split(/(\*\*.*?\*\*)/g);
            return (
                <span key={lIndex} style={{ display: "block", minHeight: line === "" ? "8px" : undefined }}>
                    {parts.map((part, pIndex) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                            return (
                                <strong key={pIndex} style={{ color: "#ffffff", fontWeight: 700 }}>
                                    {part.slice(2, -2)}
                                </strong>
                            );
                        }
                        return part;
                    })}
                </span>
            );
        });
    };

    return (
        <div className={styles.chatbotContainer}>
            {/* Trigger Button */}
            {!isOpen && (
                <button
                    className={styles.triggerBtn}
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Forge AI Chat Assistant"
                >
                    <div className={styles.triggerIconWrap}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        <span className={styles.triggerPulse} />
                    </div>
                    <span className={styles.triggerLabel}>Ask Forge AI</span>
                </button>
            )}

            {/* Chat Window Modal */}
            {isOpen && (
                <div className={styles.chatWindow} role="dialog" aria-modal="true" aria-label="Forge AI Chat Window">
                    {/* Header */}
                    <div className={styles.chatHeader}>
                        <div className={styles.headerInfo}>
                            <div className={styles.botAvatar}>
                                🤖
                                <span className={styles.statusDot} />
                            </div>
                            <div className={styles.titleArea}>
                                <h4>
                                    Forge AI Agent <span className={styles.badgeLive}>Live</span>
                                </h4>
                                <div className={styles.statusText}>Gym Concierge • 24/7 Available</div>
                            </div>
                        </div>

                        <div className={styles.headerActions}>
                            <button
                                className={styles.iconBtn}
                                onClick={clearChat}
                                title="Reset conversation"
                                aria-label="Reset conversation"
                            >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                                    <path d="M21 3v5h-5" />
                                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                                    <path d="M3 21v-5h5" />
                                </svg>
                            </button>
                            <button
                                className={styles.iconBtn}
                                onClick={() => setIsOpen(false)}
                                title="Minimize chat"
                                aria-label="Close chat"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Messages Body */}
                    <div className={styles.messagesBody}>
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`${styles.msgRow} ${
                                    msg.sender === "bot" ? styles.msgBot : styles.msgRowUser + " " + styles.msgUser
                                }`}
                            >
                                {msg.sender === "bot" && (
                                    <div className={styles.msgAvatar}>⚡</div>
                                )}
                                <div className={styles.msgBubble}>
                                    <div>{formatMessageText(msg.text)}</div>

                                    {msg.actionButtons && msg.actionButtons.length > 0 && (
                                        <div className={styles.msgActions}>
                                            {msg.actionButtons.map((btn, idx) => (
                                                <a
                                                    key={idx}
                                                    href={btn.href}
                                                    className={styles.actionChip}
                                                    onClick={(e) => {
                                                        if (btn.href.startsWith("#")) {
                                                            e.preventDefault();
                                                            handleActionClick(btn.href);
                                                        }
                                                    }}
                                                >
                                                    {btn.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                    <div className={styles.msgTime}>{msg.time}</div>
                                </div>
                            </div>
                        ))}

                        {/* Typing Animation */}
                        {isTyping && (
                            <div className={`${styles.msgRow} ${styles.msgBot}`}>
                                <div className={styles.msgAvatar}>⚡</div>
                                <div className={styles.typingDots}>
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Suggestion Chips */}
                    <div className={styles.quickPrompts}>
                        {QUICK_PROMPTS.map((p, i) => (
                            <button
                                key={i}
                                className={styles.promptChip}
                                onClick={() => handleSend(p.query)}
                            >
                                {p.label}
                            </button>
                        ))}
                    </div>

                    {/* Input Bar */}
                    <form
                        className={styles.inputForm}
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSend();
                        }}
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            className={styles.inputField}
                            placeholder="Ask about memberships, coaches, hours..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button
                            type="submit"
                            className={styles.sendBtn}
                            disabled={!input.trim()}
                            aria-label="Send message"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
