/**
 * SITE CONTENT DATA
 * Edit this file to change the text and images on your website.
 */

const SITE_DATA = {
    profile: {
        name: "Liza Zerkalenkova",
        role: "Executive & Research Presentation Designer",
        subtitle: "6+ years of experience designing sociological studies, large-scale reports, and strategic presentations for senior stakeholders.",
        cta: {
            text: "Have a complex project?\nLet’s work together.",
            email: "hello@zerkalenkova.com",
            telegram: "@zzerkaliza",
            telegramUrl: "https://t.me/zzerkaliza"
        }
    },

    // Navigation Links
    nav: [
        { label: "Home", url: "index.html" },
        { label: "Work", url: "#work" },
        { label: "Services", url: "services.html" },
        { label: "About", url: "about.html" },
        { label: "Contact", url: "#contact" }
    ],

    // Projects List
    projects: [
        {
            id: "rosatom-report",
            layoutType: "split",
            title: "Environmental Impact Report for Rosatom",
            shortDescription: "Design and layout of an 120-page environmental report for executive-level government stakeholders.",
            thumbnail: "assets/images/rosatom-thumb.png",
            type: "Environmental Report / Layout Design",
            fields: ["Sustainability", "Corporate Design", "Data Visualization"],
            audience: "Executive-level Government Stakeholders & Rosatom Leadership",
            date: "2024",

            // Full Case Study Content
            heroImage: "assets/images/rosatom-hero.png",
            about: "A massive 120-page document transformed into a clear, engaging, and visually refined asset. The focus was on packaging high-density information into a structured narrative suitable for high-level decision-makers.",
            challenge: "The goal was to present complex environmental data without overwhelming the reader. We developed a custom color system and a restrained visual language to improve navigation while strictly following Rosatom's corporate standards.",

            // Gallery images for this specific project
            gallery: [
                "assets/images/rosatom-1.png",
                "assets/images/rosatom-2.png",
                "assets/images/rosatom-3.jpg",
                "assets/images/rosatom-4.jpg",
                "assets/images/rosatom-5.jpg",
                "assets/images/rosatom-6.jpg",
                "assets/images/rosatom-7.jpg",
                "assets/images/rosatom-8.jpg",
                "assets/images/rosatom-9.jpg",
                "assets/images/rosatom-10.jpg",
                "assets/images/rosatom-11.jpg"
            ]
        },
        {
            id: "ai-science-review",
            layoutType: "split",
            title: "AI Science Development Review",
            shortDescription: "Strategic analytical presentation summarizing milestones of leading AI research centers.",
            thumbnail: "assets/images/ai-thumb.png",
            type: "Executive Analytical Communication",
            format: "Strategic Research Presentation",
            fields: ["Artificial Intelligence & Science Policy"],
            audience: "Executive Stakeholders",
            date: "2026",

            // Full Case Study Content
            heroImage: "assets/images/ai-hero.png",
            about: "AI Science Development Review is a strategic analytical presentation summarizing milestones of leading AI research centers. The project focused on translating complex scientific outcomes into a clear, decision-oriented visual language for executive audiences.",
            challenge: "The primary challenge was managing high information density for senior stakeholders. The task was to consolidate extensive datasets and performance metrics while maintaining narrative clarity, visual hierarchy, and analytical precision.",

            // Gallery images: ai-1 after About, ai-2,3,4 after Challenge
            gallery: [
                "assets/images/ai-1.jpg",
                "assets/images/ai-2.jpg",
                "assets/images/ai-3.jpg",
                "assets/images/ai-4.jpg"
            ]
        },
        {
            id: "transport-comms",
            layoutType: "split",
            title: "Strategic Transport Communications",
            shortDescription: "Executive Presentation Collection for Federal Transport Authority.",
            thumbnail: "assets/images/transport-thumb.png",
            type: "Executive Presentation Collection",
            format: "Presentation Collection",
            fields: ["Transport & Infrastructure"],
            audience: "Federal Ministry",
            date: "2024–2025",

            // Content
            heroImage: "assets/images/transport-hero.png",
            about: "A comprehensive suite of executive presentations and analytical reports designed for the Federal Transport Authority. The project established a unified visual language for high-stakes governmental communications.",
            challenge: "The key challenge was to standardize diverse data inputs into a cohesive narrative while strictly adhering to federal brand guidelines. We developed flexible templates and data visualization systems for rapid deployment.",

            // Gallery images
            gallery: [
                "assets/images/transport-1.png",
                "assets/images/transport-2.png",
                "assets/images/transport-4.png", // Swapped 4
                "assets/images/transport-3.png", // Swapped 3
                "assets/images/transport-5.jpg",
                "assets/images/transport-6.jpg",
                "assets/images/transport-7.png",
                "assets/images/transport-8.png",
                "assets/images/transport-9.png",
                "assets/images/transport-10.png"
            ]
        },
        {
            id: "values-research",
            layoutType: "split",
            title: "Social Values Research Report for Federal Program",
            shortDescription: "Information design for a federal-level study of social values.",
            thumbnail: "assets/images/values-thumb.png",
            type: "Public Communication Strategy",
            format: "Research Report", // Custom field for this project
            fields: ["Social Research & Youth Policy"],
            audience: "Federal Agencies",
            date: "2024",

            // Full Case Study Content
            heroImage: "assets/images/values-hero.png",
            about: "Information design for a federal-level study of social values. We developed a versatile framework that was seamlessly adapted for presentations, public publications, and a board game.",
            challenge: "Working with abstract values requires a balance between metaphor and precision. We focused on creating a visual narrative that simplifies complex ideas without losing their depth, ensuring the data can be easily adapted to any format.",

            // Gallery images: 1 full, then pairs
            gallery: [
                "assets/images/values-1.png",
                // Pairs
                ["assets/images/values-2.png", "assets/images/values-3.png"],
                ["assets/images/values-4.png", "assets/images/values-5.png"],
                ["assets/images/values-6.png", "assets/images/values-7.png"],
                ["assets/images/values-8.png", "assets/images/values-9.png"]
            ]
        },
        /*
        {
            id: "spirituality-values",
            layoutType: "split",
            title: "Youth Spirituality & Values",
            shortDescription: "Visual interpretation of a large-scale sociological study examining how younger generations perceive spirituality.",
            thumbnail: "assets/images/Spirituality-thumb.png",
            type: "Public Research Communication",
            format: "Research Report",
            fields: ["Sociology of Values & Youth Policy"],
            audience: "Research Institutions",
            date: "2025",

            // Full Case Study Content
            heroImage: "assets/images/Spirituality-hero.png",
            about: "Youth Spirituality & Values is a visual interpretation of a large-scale sociological study examining how younger generations perceive spirituality. The project focuses on translating complex analytical findings into a structured and meaningful visual system.",
            challenge: "The goal was to move beyond rigid, conventional charts toward a more reflective visual language. The concept relied on deep blue watercolor textures and soft-edged forms. A custom set of abstract backgrounds was developed to organize data while preserving visual depth, clarity, and thematic alignment.",

            // Video after About
            aboutVideo: "assets/images/spirituality-about-video.mp4.mov",

            // Gallery images after Challenge
            gallery: [
                "assets/images/Spirituality-2.png",
                "assets/images/Spirituality-3.png",
                "assets/images/Spirituality-4.png",
                "assets/images/Spirituality-5.png",
                "assets/images/Spirituality-6.png"
            ]
        },
        */
    ],

    services: [
        "Executive Presentations",
        "Research & Analytical Reports",
        "Public Communication Materials",
        "Strategic Decks for Institutions & Consulting Teams"
    ],

    aboutShort: "I am a presentation designer specializing in research-driven communication and executive-level materials. My work focuses on structuring complex topics into clear visual narratives for decision-making, publications, and large-scale public projects."
};

// Export for usage if we were using modules, but for plain JS we'll just attach to window or load it first.
window.SITE_DATA = SITE_DATA;
