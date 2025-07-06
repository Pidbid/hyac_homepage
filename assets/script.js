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
            hero_title: "The Next-Generation Full-Stack <span class='highlight'>Function-as-a-Service</span> Platform",
            hero_subtitle: "An open-source, highly scalable FaaS solution built on FastAPI & Vue 3, powered by Docker, and designed for developers.",
            hero_cta: "Try Now",
            features_title: "Core Advantages",
            feature1_title: "Dynamic Executor",
            feature1_desc: "Dynamically load and execute function code in isolated Docker containers, with support for on-the-fly dependency installation and hot-reloading.",
            feature2_title: "Containerized Architecture",
            feature2_desc: "Based on Docker and Docker Compose for rapid deployment, management, and horizontal scaling, ensuring consistent environments.",
            feature3_title: "Modern Tech Stack",
            feature3_desc: "FastAPI & Beanie on the backend, Vue 3 & Naive UI on the frontend, delivering a superior development experience and high performance.",
            feature4_title: "Developer-Friendly",
            feature4_desc: "Integrated Monaco Editor for a rich online coding experience. Powerful object storage capabilities via MinIO.",
            feature5_title: "Comprehensive Monitoring",
            feature5_desc: "Real-time log viewing, runtime status monitoring, and application statistics give you a clear overview of your function's health.",
            feature6_title: "Secure & Reliable",
            feature6_desc: "JWT-based user authentication and Nginx reverse proxy ensure service security, providing a stable and reliable computing environment.",
            footer_text: "&copy; 2024 Hyac. All Rights Reserved. Built by the <a href='https://github.com/Pidbid/Hyac' target='_blank'>Hyac Team</a>."
        },
        zh: {
            nav_features: "特性",
            nav_docs: "文档",
            hero_title: "下一代全栈 <span class='highlight'>函数即服务</span> 平台",
            hero_subtitle: "一个基于 FastAPI & Vue 3 构建，由 Docker 驱动的、高度可扩展的开源 FaaS 解决方案，专为开发者设计。",
            hero_cta: "立即尝试",
            features_title: "核心优势",
            feature1_title: "动态执行器",
            feature1_desc: "在隔离的 Docker 容器中动态加载、执行函数代码，并支持依赖项的动态安装与代码热更新。",
            feature2_title: "容器化架构",
            feature2_desc: "基于 Docker 和 Docker Compose，实现服务的快速部署、管理和水平扩展，保证环境一致性。",
            feature3_title: "现代技术栈",
            feature3_desc: "后端采用 FastAPI & Beanie，前端基于 Vue 3 & Naive UI，提供极致的开发体验和高性能。",
            feature4_title: "开发者友好",
            feature4_desc: "内置 Monaco Editor，提供丰富的在线代码编辑体验。通过 MinIO 管理文件，提供强大的对象存储能力。",
            feature5_title: "全方位监控",
            feature5_desc: "实时日志查看、运行时状态监控和应用统计，让您对函数应用的运行状况了如指掌。",
            feature6_title: "安全可靠",
            feature6_desc: "使用 JWT 进行用户认证，并通过 Nginx 反向代理保障服务安全，提供稳定可靠的函数计算环境。",
            footer_text: "&copy; 2024 Hyac. All Rights Reserved. 由 <a href='https://github.com/Pidbid/Hyac' target='_blank'>Hyac Team</a> 构建."
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
