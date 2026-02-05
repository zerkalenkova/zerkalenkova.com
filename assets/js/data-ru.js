/**
 * SITE CONTENT DATA (Russian Version)
 */

const SITE_DATA = {
    profile: {
        name: "Лиза Зеркаленкова",
        role: "Дизайнер презентаций для бизнеса и исследований",
        subtitle: "Более 6 лет опыта оформления социологических исследований, крупных отчетов и стратегических презентаций для топ-менеджмента.",
        cta: {
            text: "Ваши смыслы заслуживают сильного воплощения",
            email: "hello@zerkalenkova.com",
            telegram: "@zzerkaliza",
            telegramUrl: "https://t.me/zzerkaliza"
        }
    },

    // Navigation Links (Russian)
    nav: [
        { label: "Главная", url: "index.html" },
        { label: "Проекты", url: "#work" },
        { label: "Экспертиза", url: "services.html" },
        { label: "Обо мне", url: "about.html" },
        { label: "Контакты", url: "#contact" }
    ],

    // Projects List (Russian)
    projects: [
        {
            id: "rosatom-report",
            layoutType: "split",
            title: "Экологический отчет Росатома",
            shortDescription: "Дизайн и верстка 120-страничного экологического отчета для руководства и государственных стейкхолдеров.",
            thumbnail: "assets/images/rosatom-thumb.png",
            type: "Экологический отчет / Верстка",
            fields: ["Устойчивое развитие", "Корпоративный дизайн", "Визуализация данных"],
            audience: "Государственные стейкхолдеры и руководство Росатома",
            date: "2024",

            // Full Case Study Content
            heroImage: "assets/images/rosatom-hero.png",
            about: "Масштабный 120-страничный документ, преобразованный в понятный и визуально выверенный актив.",
            challenge: "Основное внимание уделялось упаковке информации в повествование, подходящее для лиц, принимающих решения высокого уровня. В рамках корпоративного стиля заказчика была разработана цветовая система, использован сдержанный визуальный язык.",

            // Gallery images
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
            title: "Обзор развития науки ИИ",
            shortDescription: "Стратегическая аналитическая презентация, обобщающая достижения ведущих исследовательских центров ИИ.",
            thumbnail: "assets/images/ai-thumb-ru.png",
            type: "Аналитическая коммуникация",
            format: "Стратегическая презентация",
            fields: ["Искусственный интеллект и научная политика"],
            audience: "Руководство и стейкхолдеры",
            date: "2026",

            // Full Case Study Content
            heroImage: "assets/images/ai-hero-ru.png",
            about: "Обзор развития науки ИИ — это стратегическая аналитическая презентация, обобщающая достижения исследовательских центров в сфере ИИ.",
            challenge: "Трансформация сложных научных данных в визуальный инструментарий для высшего руководства страны с целью принятия стратегических решений",

            // Gallery images
            gallery: [
                "assets/images/ai-1-ru.png",
                "assets/images/ai-2-ru.png",
                "assets/images/ai-3-ru.png",
                "assets/images/ai-4-ru.png"
            ]
        },
        {
            id: "transport-comms",
            layoutType: "split",
            title: "Стратегические выступления для первых лиц ведомства",
            shortDescription: "Коллекция презентаций для Федеральной транспортной службы.",
            thumbnail: "assets/images/transport-thumb.png", // Reverted (no RU ver)
            type: "Коллекция презентаций",
            format: "Коллекция презентаций",
            fields: ["Транспорт и инфраструктура"],
            audience: "Федеральное министерство",
            date: "2024–2025",

            // Content
            heroImage: "assets/images/transport-hero.png", // Reverted (no RU ver)
            about: "Комплексный набор презентаций для руководства и аналитических отчетов, разработанный для Федеральной транспортной службы. Проект утвердил единый визуальный язык для коммуникаций государственного уровня.",
            challenge: "Ключевая задача состояла в стандартизации разнообразных входных данных в единое повествование при строгом соблюдении пожеланий руководства. Были разработаны система визуализации данных и гибкие шаблоны",

            // Gallery images
            gallery: [
                "assets/images/transport-1-ru.png", // Exists
                "assets/images/transport-2-ru.png", // Exists
                "assets/images/transport-4-ru.png", // Exists
                "assets/images/transport-3-ru.png", // Exists
                "assets/images/transport-5.jpg", // Existed in list but user said fix "broken", let's keep what works. 
                "assets/images/transport-6.jpg",  // I saw these in list_dir, so safe to keep.
                "assets/images/transport-7.png",
                "assets/images/transport-8.png",
                "assets/images/transport-9.png",
                "assets/images/transport-10.png"
            ]
        },
        {
            id: "values-research",
            layoutType: "split",
            title: "Исследование ценностей",
            shortDescription: "Информационный дизайн для федерального исследования социальных ценностей.",
            thumbnail: "assets/images/values-thumb.png",
            type: "Стратегия общественных коммуникаций",
            format: "Исследовательский отчет",
            fields: ["Социальные исследования и молодежная политика"],
            audience: "Федеральные агентства",
            date: "2024",

            // Full Case Study Content
            heroImage: "assets/images/values-hero.png",
            about: "Информационный дизайн для федерального исследования социальных ценностей.",
            challenge: "Работа с абстрактными ценностями требует баланса между метафорой и точностью. Визуальное повествование упростило сложные идеи, не теряя их глубины. Универсальная структура была бесшовно адаптирована для презентаций, публичных публикаций и даже настольной игры.",

            // Gallery images
            gallery: [
                "assets/images/values-1-ru.png",
                // Pairs
                ["assets/images/values-2-ru.png", "assets/images/values-3-ru.png"],
                ["assets/images/values-4-ru.png", "assets/images/values-5-ru.png"],
                ["assets/images/values-6-ru.png", "assets/images/values-7-ru.png"],
                ["assets/images/values-8.png", "assets/images/values-9.png"]
            ]
        },
        {
            id: "spirituality-values",
            layoutType: "split",
            title: "Молодежь и духовность",
            shortDescription: "Визуальная интерпретация масштабного социологического исследования восприятия духовности молодым поколением.",
            thumbnail: "assets/images/Spirituality-thumb.png",
            type: "Общественная коммуникация",
            format: "Исследовательский отчет",
            fields: ["Социология ценностей и молодежная политика"],
            audience: "Исследовательские институты",
            date: "2025",

            // Full Case Study Content
            heroImage: "assets/images/Spirituality-hero.png",
            about: "Презентация «Молодёжь и духовность» — массивы научных данных и сложная тема духовности. Результат: абстрактные смыслы упакованы в форму, делающую восприятие информации понятным и осознанным",
            challenge: "Главная цель — донести итоги исследования, сохранив его особую внутреннюю атмосферу. Для передачи темы спользованы синие акварельные текстуры и мягкие формы. Система абстрактных фонов служит каркасом для организации данных: она позволяет структурировать сложную информацию, не теряя визуальной глубины и тематической целостности",

            // Video after About
            aboutVideo: "assets/images/spirituality-about-video.mp4.mov",

            // Gallery images
            gallery: [
                "assets/images/Spirituality-2-ru.png",
                "assets/images/Spirituality-3-ru.png",
                "assets/images/Spirituality-4-ru.png",
                "assets/images/Spirituality-5-ru.png"
            ]
        },

    ],

    services: [
        "Презентации для руководителей",
        "Исследовательские и аналитические отчеты",
        "Материалы общественных коммуникаций",
        "Стратегические презентации для институтов и консалтинга"
    ],

    aboutShort: "Я — дизайнер презентаций, специализирующийся на исследовательских коммуникациях и материалах для руководителей. Моя работа направлена на структурирование сложных тем в понятные визуальные повествования для принятия решений, публикаций и масштабных общественных проектов."
};

window.SITE_DATA = SITE_DATA;
