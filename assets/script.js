document.addEventListener('DOMContentLoaded', () => {
    // Background particle animation
    const container = document.querySelector('.background-animation');
    const particlesCount = 30;
    for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 5 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        container.appendChild(particle);
    }

    // Language switcher logic
    const translations = {
        en: {
            nav_features: "Features",
            nav_docs: "Docs",
            hero_title: "Lightweight Python <span class='highlight'>Function Computing</span> & Application Platform",
            hero_subtitle: "A powerful full-stack Function as a Service (FaaS) platform, designed to provide an efficient, scalable, and easy-to-use cloud-native development environment.",
            hero_cta: "Try Now",
            warning_title: "This project is in an early stage of development",
            warning_item1: "Features and APIs are subject to significant changes.",
            warning_item2: "Direct deployment in a production environment may carry unknown risks and issues.",
            warning_item3: "The project architecture may be adjusted and refactored in the future.",
            warning_footer: "Feedback and contributions are welcome, but please use with caution in production environments.",
            preview_title: "🖼️ Preview",
            features_title: "✨ Core Features",
            feature1_title: "Dynamic Function Execution",
            feature1_desc: "Dynamically load and execute function code in isolated Docker containers.",
            feature2_title: "Hot Code Updates",
            feature2_desc: "Update function code in real-time without restarting the service.",
            feature3_title: "Multi-language Support",
            feature3_desc: "Extensible runtime allows for future support of multiple programming languages.",
            feature4_title: "Modern Frontend",
            feature4_desc: "Built with Vue 3 and Naive UI, providing a responsive, user-friendly management interface.",
            feature5_title: "Unified Object Storage",
            feature5_desc: "Integrated with MinIO to provide unified file storage for functions and applications.",
            feature6_title: "Comprehensive API",
            feature6_desc: "Provides a rich API for managing applications, functions, databases, logs, and more.",
            footer_text: "&copy; 2025 Hyac. Licensed under the <a href='https://github.com/Pidbid/hyac/blob/main/LICENSE' target='_blank'>MIT License</a>."
        },
        zh: {
            nav_features: "主要功能",
            nav_docs: "文档",
            hero_title: "轻量级Python <span class='highlight'>函数计算</span> 与应用平台",
            hero_subtitle: "一个功能强大的全栈函数即服务 (FaaS) 平台，旨在提供一个高效、可扩展且易于使用的云原生开发环境。",
            hero_cta: "立即尝试",
            warning_title: "当前项目处于早期开发阶段",
            warning_item1: "功能和 API 可能会发生较大变化。",
            warning_item2: "直接部署用于生产环境可能会存在未知的风险和问题。",
            warning_item3: "项目架构在后期可能会进行调整和重构。",
            warning_footer: "欢迎提供反馈和贡献，但请谨慎用于生产环境。",
            preview_title: "🖼️ 预览",
            features_title: "✨ 主要功能",
            feature1_title: "动态函数执行",
            feature1_desc: "在隔离的 Docker 容器中动态加载和执行函数代码。",
            feature2_title: "代码热更新",
            feature2_desc: "无需重启服务即可实现函数代码的实时更新。",
            feature3_title: "多语言支持",
            feature3_desc: "基于运行时的可扩展性，未来可以支持多种编程语言。",
            feature4_title: "现代化前端",
            feature4_desc: "基于 Vue 3 和 Naive UI 构建，提供响应式、用户友好的管理界面。",
            feature5_title: "统一对象存储",
            feature5_desc: "集成 MinIO，为函数和应用提供统一的文件存储服务。",
            feature6_title: "全面的 API",
            feature6_desc: "提供丰富的 API，用于管理应用、函数、数据库、日志等。",
            footer_text: "&copy; 2025 Hyac. 基于 <a href='https://github.com/Pidbid/hyac/blob/main/LICENSE' target='_blank'>MIT License</a> 开源。"
        }
    };

    let currentLang = localStorage.getItem('lang') || 'zh';

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        localStorage.setItem('lang', lang);
        currentLang = lang;
    };
    
    const langSwitcher = document.getElementById('lang-switcher');
    langSwitcher.addEventListener('click', () => {
        const newLang = currentLang === 'zh' ? 'en' : 'zh';
        setLanguage(newLang);
    });

    // Set initial language
    setLanguage(currentLang);
});
