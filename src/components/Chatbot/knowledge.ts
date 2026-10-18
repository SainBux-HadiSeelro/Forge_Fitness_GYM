export interface KnowledgeTopic {
    category: string;
    keywords: string[];
    title: string;
    answer: string;
    actionButtons?: { label: string; href: string }[];
}

export const GYM_INFO = {
    name: "Forge Fitness",
    tagline: "Don't Just Dream It. Forge It.",
    founded: 2012,
    location: {
        address: "1250 Iron Ave, Floor 2, Downtown NY 10001",
        phone: "+1 (212) 555-0184",
        email: "hello@forgefitness.com",
        website: "https://forge-fitness-gym-seven.vercel.app/",
    },
    hours: {
        weekday: "Monday – Friday: 5:00 AM – 11:00 PM",
        weekend: "Saturday – Sunday: 6:00 AM – 10:00 PM",
        access247: "24/7 unlimited access is available for Elite and Pro members.",
    },
    stats: {
        members: "15,000+ members transformed",
        successRate: "98% client success rate",
        coaches: "50+ certified elite coaches",
        experience: "12+ years of industry leadership",
        facilitySize: "Over 15,000 sq ft state-of-the-art space",
    },
    programs: [
        {
            title: "Strength & Conditioning",
            tag: "Most Popular",
            desc: "Build real-world power and dense muscle with progressive overload protocols guided by powerlifting-certified coaches.",
            features: ["Progressive Overload Protocol", "1-on-1 Form Assessment", "Nutrition Blueprint"],
        },
        {
            title: "Cardio & HIIT",
            tag: "Fat Loss",
            desc: "High-intensity interval sessions scientifically designed to maximize caloric expenditure and VO2 max.",
            features: ["Heart Rate Zone Training", "VO2 Max Testing", "Recovery Tracking"],
        },
        {
            title: "Personal Training",
            tag: "Elite 1-on-1",
            desc: "Fully customized, private sessions with a dedicated mentor coach for rapid and sustainable progress.",
            features: ["Personalized Program Design", "Weekly Check-ins", "24/7 Coach WhatsApp/App Access"],
        },
        {
            title: "Group Fitness",
            tag: "Community",
            desc: "Energy-packed classes from boxing and functional circuits to kettlebell bootcamps.",
            features: ["30+ Weekly Classes", "All Fitness Levels", "High-Energy Coaches"],
        },
        {
            title: "Mobility & Yoga",
            tag: "Recovery",
            desc: "Active recovery and injury prevention to restore joint flexibility and mental clarity.",
            features: ["Impingement Assessment", "Deep Stretch Classes", "Myofascial Release Techniques"],
        },
        {
            title: "Athletic Performance",
            tag: "Pro Sport",
            desc: "Speed, agility, and sport-specific training engineered for competitive athletes and weekend warriors.",
            features: ["Speed & Agility Drills", "Sport-Specific Protocols", "Game Day Preparation"],
        },
    ],
    memberships: [
        {
            name: "Starter",
            monthly: 39,
            annual: 29,
            tagline: "Perfect for beginners finding their rhythm.",
            features: [
                "Gym Access (Mon–Fri)",
                "Full Basic Equipment Area",
                "2 Group Classes/month",
                "Locker Room & Shower Access",
                "Forge Fitness App Access",
            ],
            missing: ["Personal Training", "Premium Classes", "Nutrition Coaching"],
        },
        {
            name: "Elite (Most Popular)",
            monthly: 79,
            annual: 59,
            tagline: "The all-in experience for serious, accelerated results.",
            features: [
                "Unlimited Gym Access (24/7 Keycard)",
                "All Equipment Unlocked (Olympic Platforms, Turf, Cardio)",
                "Unlimited Group Classes",
                "4 Personal Training Sessions/month",
                "Personalized Nutrition Blueprint",
                "Recovery Lounge & Infrared Sauna Access",
                "Priority Booking",
            ],
            missing: [],
        },
        {
            name: "Pro",
            monthly: 129,
            annual: 99,
            tagline: "Built for athletes chasing peak human performance.",
            features: [
                "Everything in Elite included",
                "8 Personal Training Sessions/month",
                "Monthly 3D Body Composition Scans",
                "Custom Chef-Crafted Meal Plans",
                "Sports Physiotherapist Access",
                "Guest Passes (4 per month)",
                "Dedicated Private Locker with Towel Service",
            ],
            missing: [],
        },
    ],
    trainers: [
        {
            name: "Marcus Cole",
            role: "Head Strength Coach",
            experience: "10 Years",
            specialty: "Powerlifting & Hypertrophy",
            bio: "Former national-level powerlifter with CSCS, NSCA, and CPT credentials.",
        },
        {
            name: "Sofia Reyes",
            role: "Cardio & HIIT Specialist",
            experience: "8 Years",
            specialty: "HIIT, Sprint Mechanics & Functional Training",
            bio: "Ex-professional sprinter and CrossFit L2 / NASM-CPT coach.",
        },
        {
            name: "James Okafor",
            role: "Athletic Performance Coach",
            experience: "12 Years",
            specialty: "Speed, Agility & Sports Science",
            bio: "NSCA-CSCS, USA Track, FMS L2 certified. Trained international pros and Olympians.",
        },
    ],
};

export const KNOWLEDGE_BASE: KnowledgeTopic[] = [
    {
        category: "pricing",
        keywords: [
            "price",
            "pricing",
            "cost",
            "membership",
            "plan",
            "plans",
            "fee",
            "fees",
            "rate",
            "how much",
            "subscription",
            "package",
            "monthly",
            "annual",
            "cheap",
            "starter",
            "elite",
            "pro",
        ],
        title: "Membership Tiers & Pricing",
        answer: `Here are our flexible membership plans (save 25% on annual billing!):\n\n` +
            `• **Starter Plan**: $39/mo (or $29/mo billed annually)\n  - Weekday gym access, basic equipment, 2 group classes/mo, locker room, and Forge mobile app.\n\n` +
            `• **Elite Plan (Most Popular ⭐)**: $79/mo (or $59/mo billed annually)\n  - Unlimited 24/7 gym access, unlimited group classes, 4 PT sessions/mo, nutrition blueprint, and recovery lounge.\n\n` +
            `• **Pro Plan**: $129/mo (or $99/mo billed annually)\n  - Everything in Elite + 8 PT sessions/mo, monthly 3D body scans, custom meal plans, sports physio, 4 guest passes, and dedicated locker.\n\n` +
            `💡 No lock-in contracts or hidden fees. You can cancel or upgrade anytime!`,
        actionButtons: [
            { label: "💳 View Pricing Section", href: "#membership" },
            { label: "🎁 Book Free Consultation", href: "#contact" },
        ],
    },
    {
        category: "programs",
        keywords: [
            "program",
            "programs",
            "workout",
            "workouts",
            "class",
            "classes",
            "training",
            "strength",
            "powerlifting",
            "hiit",
            "cardio",
            "weight",
            "muscle",
            "lose weight",
            "fat loss",
            "yoga",
            "mobility",
            "boxing",
            "athletic",
        ],
        title: "Training Programs",
        answer: `At Forge Fitness, we offer 6 scientifically backed training programs:\n\n` +
            `1. **🏋️ Strength & Conditioning**: Progressive overload, powerlifting platforms, barbell technique, and hypertrophy.\n` +
            `2. **🔥 Cardio & HIIT**: High-intensity interval burns, heart rate tracking, and VO2 max improvement.\n` +
            `3. **🎯 Personal Training**: 1-on-1 dedicated coach, custom roadmap, and 24/7 coaching app support.\n` +
            `4. **🤸 Group Fitness**: 30+ weekly classes (Boxing, functional circuits, kettlebell bootcamps).\n` +
            `5. **🧘 Mobility & Yoga**: Active recovery, deep stretch, spine decompression, and injury rehabilitation.\n` +
            `6. **⚡ Athletic Performance**: Agility drills, sprint mechanics, and power training for competitive sports.`,
        actionButtons: [
            { label: "🏋️ Explore All Programs", href: "#programs" },
            { label: "📅 Schedule Free Trial", href: "#contact" },
        ],
    },
    {
        category: "trainers",
        keywords: [
            "trainer",
            "trainers",
            "coach",
            "coaches",
            "instructor",
            "marcus",
            "sofia",
            "james",
            "staff",
            "personal trainer",
            "who coaches",
        ],
        title: "Meet Our Elite Coaches",
        answer: `Our certified coaches hold top industry accreditations (CSCS, NSCA, NASM, CrossFit L2):\n\n` +
            `• **Marcus Cole** (Head Strength Coach, 10 yrs exp)\n  - Specialty: Powerlifting & Hypertrophy\n  - Credentials: CSCS, NSCA, CPT\n\n` +
            `• **Sofia Reyes** (Cardio & HIIT Specialist, 8 yrs exp)\n  - Specialty: High-Intensity Interval & Sprint Conditioning\n  - Credentials: NASM-CPT, CrossFit L2, SFN\n\n` +
            `• **James Okafor** (Athletic Performance Coach, 12 yrs exp)\n  - Specialty: Speed, Agility & Olympic Sport Science\n  - Credentials: NSCA-CSCS, USA Track, FMS L2`,
        actionButtons: [
            { label: "👥 Meet The Coaches", href: "#trainers" },
            { label: "🥊 Book 1-on-1 Session", href: "#contact" },
        ],
    },
    {
        category: "hours",
        keywords: [
            "hour",
            "hours",
            "time",
            "timings",
            "open",
            "close",
            "closing",
            "opening",
            "when",
            "schedule",
            "weekend",
            "sunday",
            "24/7",
            "night",
        ],
        title: "Opening Hours & Timings",
        answer: `🕒 **Forge Fitness Operating Hours**:\n\n` +
            `• **Monday – Friday**: 5:00 AM – 11:00 PM\n` +
            `• **Saturday – Sunday**: 6:00 AM – 10:00 PM\n\n` +
            `🔑 **24/7 Access**: Elite and Pro members receive a digital keycard fob granting uninterrupted 24-hour access 365 days a year!`,
        actionButtons: [
            { label: "📍 View Contact & Hours", href: "#contact" },
        ],
    },
    {
        category: "location",
        keywords: [
            "location",
            "where",
            "address",
            "map",
            "directions",
            "find",
            "city",
            "new york",
            "downtown",
            "parking",
        ],
        title: "Location & Parking",
        answer: `📍 **Gym Location**:\n` +
            `1250 Iron Ave, Floor 2, Downtown NY 10001\n\n` +
            `📞 Phone: +1 (212) 555-0184\n` +
            `✉️ Email: hello@forgefitness.com\n\n` +
            `🚗 **Parking & Transit**: We have a dedicated underground member parking garage with free 2-hour validation, and we are just a 3-minute walk from Central Station.`,
        actionButtons: [
            { label: "🗺️ Get Directions & Map", href: "#contact" },
        ],
    },
    {
        category: "trial",
        keywords: [
            "trial",
            "free",
            "consultation",
            "guest",
            "tour",
            "try",
            "test",
            "first time",
            "sign up",
            "register",
            "join",
            "book",
        ],
        title: "Free Trial & Consultation",
        answer: `🎉 **Yes! We offer a 100% Free Consultation and Facility Day Pass!**\n\n` +
            `During your free visit, you will receive:\n` +
            `1. A full tour of our 15,000 sq ft facility\n` +
            `2. A complimentary 1-on-1 movement & goal assessment with a coach\n` +
            `3. A trial training workout session\n\n` +
            `Simply fill out the quick contact form on this page or let us know your details!`,
        actionButtons: [
            { label: "⚡ Claim Free Consultation", href: "#contact" },
        ],
    },
    {
        category: "facilities",
        keywords: [
            "facility",
            "facilities",
            "equipment",
            "space",
            "square feet",
            "shower",
            "showers",
            "locker",
            "lockers",
            "sauna",
            "recovery",
            "turf",
            "dumbbells",
            "weights",
        ],
        title: "Facilities & Equipment",
        answer: `🏢 **Over 15,000 sq ft of world-class fitness equipment:**\n\n` +
            `• **Strength Zone**: Eleiko Olympic barbells, calibrated steel plates, 12 squat racks, dumbbells up to 150 lbs.\n` +
            `• **Cardio Deck**: Assault air bikes, Concept2 rowers, SkiErgs, curved Woodway treadmills.\n` +
            `• **Turf & Functional Track**: 40-yard sprint turf, sleds, plyometric boxes, battle ropes.\n` +
            `• **Combat & Boxing Studio**: Heavy bags, speed bags, and ring conditioning.\n` +
            `• **Recovery Lounge**: Infrared sauna, cold plunge tubs, and Theragun massage guns.\n` +
            `• **Amenities**: Luxury private showers, complimentary towel service, blow-dry stations, and secure digital lockers.`,
        actionButtons: [
            { label: "🖼️ View Gym Gallery", href: "#gallery" },
        ],
    },
    {
        category: "story",
        keywords: [
            "about",
            "story",
            "who are you",
            "forge",
            "founder",
            "history",
            "mission",
            "why forge",
        ],
        title: "About Forge Fitness",
        answer: `Forged in 2012, Forge Fitness was built on a single belief: **Ordinary gyms produce ordinary results.**\n\n` +
            `Over the past 12 years, we have grown into the region's benchmark for elite athletic conditioning and lifestyle transformation:\n` +
            `• 15,000+ members transformed\n` +
            `• 50+ world-class certified coaches\n` +
            `• 98% client satisfaction & goal completion rate\n\n` +
            `Whether you are stepping into a gym for the first time or training for national competition, our community and coaches have your back.`,
        actionButtons: [
            { label: "📖 Read Full Story", href: "#about" },
        ],
    },
];

export function findBotResponse(input: string): {
    answer: string;
    actionButtons?: { label: string; href: string }[];
} {
    const clean = input.toLowerCase().trim();

    // Check greeting
    if (
        /^(hi|hello|hey|salam|assalam|yo|hola|greetings|morning|evening|afternoon|sup)\b/i.test(
            clean
        )
    ) {
        return {
            answer: `Hey there! Welcome to **Forge Fitness** 🔥 I am your 24/7 AI Concierge.\n\n` +
                `How can I help you today? Ask me anything about:\n` +
                `• 💳 **Membership plans & pricing**\n` +
                `• 🏋️ **Training programs & HIIT**\n` +
                `• 👥 **Our coaches & 1-on-1 training**\n` +
                `• 🕒 **Gym timings & 24/7 access**\n` +
                `• 🎁 **Booking a free consultation or tour**`,
            actionButtons: [
                { label: "💳 Membership Plans", href: "#membership" },
                { label: "🏋️ Programs", href: "#programs" },
                { label: "🎁 Free Consultation", href: "#contact" },
            ],
        };
    }

    // Direct thank you / goodbye
    if (/^(thanks|thank you|shukriya|bye|goodbye|cya)\b/i.test(clean)) {
        return {
            answer: `You're very welcome! If you're ready to start your transformation, come visit us or book a session. Keep forging forward! 💪⚡`,
            actionButtons: [
                { label: "🚀 Get Started", href: "#membership" },
            ],
        };
    }

    // Match keywords against knowledge base
    let bestMatch: KnowledgeTopic | null = null;
    let maxScore = 0;

    for (const topic of KNOWLEDGE_BASE) {
        let score = 0;
        for (const kw of topic.keywords) {
            if (clean.includes(kw)) {
                score += kw.length > 5 ? 2 : 1;
            }
        }
        if (score > maxScore) {
            maxScore = score;
            bestMatch = topic;
        }
    }

    if (bestMatch && maxScore > 0) {
        return {
            answer: bestMatch.answer,
            actionButtons: bestMatch.actionButtons,
        };
    }

    // Fallback response with helpful navigation options
    return {
        answer: `I'd love to help you with that! At **Forge Fitness**, we specialize in strength training, HIIT, athletic conditioning, and personalized 1-on-1 coaching.\n\n` +
            `Could you clarify if you're looking for:\n` +
            `• **Membership pricing** (Starter $39/mo, Elite $79/mo, Pro $129/mo)\n` +
            `• **Training programs** or classes\n` +
            `• **Trainer profiles** or 1-on-1 booking\n` +
            `• **Gym hours & location** (Downtown NY, open 5am–11pm / 24/7)\n\n` +
            `You can also speak directly with our team at **+1 (212) 555-0184** or book a free consultation below!`,
        actionButtons: [
            { label: "💳 View Memberships", href: "#membership" },
            { label: "🏋️ View Programs", href: "#programs" },
            { label: "📞 Contact Team", href: "#contact" },
        ],
    };
}
