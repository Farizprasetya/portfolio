<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fariz Prasetya - Product Manager Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .bg-grid {
            background-image:
                linear-gradient(to right, rgba(200, 200, 200, 0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(200, 200, 200, 0.15) 1px, transparent 1px);
            background-size: 40px 40px;
        }
        .dark .bg-grid {
             background-image:
                linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 40px 40px;
        }
        .card {
            transform-style: preserve-3d;
            transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .card.is-flipped {
            transform: rotateY(180deg);
        }
        .card-face {
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
        }
        .card-face-back {
            transform: rotateY(180deg);
        }
        .typing-cursor {
            animation: blink 1s step-end infinite;
        }
        @keyframes blink {
            from, to { border-color: transparent }
            50% { border-color: orange; }
        }
    </style>
</head>
<body class="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 antialiased transition-colors duration-500">

    <!-- Theme Switcher -->
    <button id="theme-switcher" class="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        <svg id="theme-icon-light" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        <svg id="theme-icon-dark" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
    </button>
    
    <!-- Header & Navigation -->
    <header class="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm opacity-0 -translate-y-full">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#home" class="text-2xl font-bold text-gray-900 dark:text-white">FP.</a>
            <nav class="hidden md:flex space-x-8">
                <a href="#about" class="hover:text-orange-500 transition-colors">About</a>
                <a href="#experience" class="hover:text-orange-500 transition-colors">Experience</a>
                <a href="#projects" class="hover:text-orange-500 transition-colors">Projects</a>
                <a href="#contact" class="hover:text-orange-500 transition-colors">Contact</a>
            </nav>
            <a href="#contact" class="hidden md:block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">Hire Me</a>
        </div>
    </header>

    <main class="container mx-auto px-6">

        <!-- Hero Section -->
        <section id="home" class="min-h-screen flex items-center bg-grid">
            <div class="w-full text-center md:text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div class="order-2 md:order-1 hero-content">
                        <h1 class="text-4xl md:text-6xl font-black leading-tight mb-4 opacity-0">
                            Hi, I'm Fariz Prasetya
                        </h1>
                        <h2 class="text-2xl md:text-3xl text-orange-500 font-bold mb-6 opacity-0">
                           <span id="typing-text"></span><span class="typing-cursor border-r-2 border-orange-500"></span>
                        </h2>
                        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto md:mx-0 opacity-0">
                           A Product Manager with a psychology background and 8+ years of experience building impactful tech products—from ad platforms to custom CRM tools.
                        </p>
                        <div class="flex justify-center md:justify-start space-x-4 mb-8 opacity-0 hero-socials">
                           <a href="https://www.linkedin.com/in/mfarizprasetya/" target="_blank" class="text-gray-500 hover:text-orange-500"><i data-lucide="linkedin" class="w-8 h-8"></i></a>
                           <a href="https://github.com/your-github" target="_blank" class="text-gray-500 hover:text-orange-500"><i data-lucide="github" class="w-8 h-8"></i></a>
                           <a href="mailto:Farizprasetya1509@gmail.com" class="text-gray-500 hover:text-orange-500"><i data-lucide="mail" class="w-8 h-8"></i></a>
                        </div>
                        <div class="flex justify-center md:justify-start space-x-4 opacity-0 hero-buttons">
                            <a href="#projects" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">View My Work</a>
                            <a href="Curriculum Vitae_Product Manager_M Fariz Prasetya.pdf" download="Curriculum Vitae_Product Manager_M Fariz Prasetya.pdf" class="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 flex items-center">
                                Download CV <i data-lucide="download" class="w-5 h-5 ml-2"></i>
                            </a>
                        </div>
                    </div>
                    <div class="order-1 md:order-2 flex justify-center hero-image">
                        <div class="relative w-72 h-72 md:w-96 md:h-96 opacity-0">
                             <div class="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-2xl opacity-50"></div>
                            <img src="CV Fariz.jpg" alt="Fariz Prasetya" class="relative rounded-3xl w-full h-full object-cover shadow-2xl">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-20">
            <div class="text-center mb-12 section-title">
                <h2 class="text-4xl font-black">About Me</h2>
                <p class="text-lg text-orange-500">My professional journey</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                <div class="md:col-span-2 about-image">
                    <img src="https://placehold.co/600x600/333/fff?text=Code" alt="About Fariz" class="rounded-2xl shadow-xl w-full">
                </div>
                <div class="md:col-span-3 about-content">
                    <h3 class="text-2xl font-bold mb-4">Product Manager & Strategic Thinker</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        With a foundation in Psychology and over 8 years navigating diverse fields like customer service, HR, and business development, I'vefound my passion at the intersection of human behavior and technology. I specialize in transforming complex problems into scalable, user-centric tech products.
                    </p>
                    <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        I lead cross-functional teams to identify market gaps, drive product strategy, and deliver solutions that resonate with users. From dynamic pricing engines to self-service advertising platforms, my goal is always to build products that are not just functional, but impactful.
                    </p>
                    <div class="flex flex-wrap gap-4 stats-container">
                        <div class="stat-card bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex-grow text-center">
                            <div class="text-3xl font-bold text-orange-500">8+</div>
                            <div class="text-gray-600 dark:text-gray-400">Years of Experience</div>
                        </div>
                        <div class="stat-card bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex-grow text-center">
                            <div class="text-3xl font-bold text-orange-500">10+</div>
                            <div class="text-gray-600 dark:text-gray-400">Major Projects</div>
                        </div>
                        <div class="stat-card bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex-grow text-center">
                            <div class="text-3xl font-bold text-orange-500">5</div>
                            <div class="text-gray-600 dark:text-gray-400">Industries</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Experience Section -->
        <section id="experience" class="py-20">
            <div class="text-center mb-12 section-title">
                <h2 class="text-4xl font-black">My Experience</h2>
                <p class="text-lg text-orange-500">A timeline of my career</p>
            </div>
            <div class="relative border-l-2 border-orange-500/30 ml-6 timeline">
                <!-- Experience Item 1 -->
                <div class="mb-10 ml-10 timeline-item">
                    <div class="absolute w-6 h-6 bg-orange-500 rounded-full -left-3 border-4 border-white dark:border-gray-900"></div>
                    <p class="text-sm font-semibold text-orange-500">Nov 2021 - Present</p>
                    <h3 class="text-xl font-bold mb-1">Product Manager at SiCepat Ekspres</h3>
                    <p class="text-gray-600 dark:text-gray-400">Spearheading end-to-end product development. Leading research, design, and implementation of innovative solutions in a fast-paced logistics environment.</p>
                </div>
                <!-- Experience Item 2 -->
                <div class="mb-10 ml-10 timeline-item">
                    <div class="absolute w-6 h-6 bg-orange-500 rounded-full -left-3 border-4 border-white dark:border-gray-900"></div>
                    <p class="text-sm font-semibold text-orange-500">Dec 2020 - Nov 2021</p>
                    <h3 class="text-xl font-bold mb-1">Digital Product & Campaign Specialist at ADA Asia</h3>
                    <p class="text-gray-600 dark:text-gray-400">Managed project execution for digital products, including partnership development and creating deliverables like a self-service advertising platform and CRM tools.</p>
                </div>
                <!-- Experience Item 3 -->
                <div class="mb-10 ml-10 timeline-item">
                     <div class="absolute w-6 h-6 bg-orange-500 rounded-full -left-3 border-4 border-white dark:border-gray-900"></div>
                    <p class="text-sm font-semibold text-orange-500">Dec 2019 - Dec 2020</p>
                    <h3 class="text-xl font-bold mb-1">Product Specialist & Program Manager at Xampr Software</h3>
                    <p class="text-gray-600 dark:text-gray-400">Analyzed user experience and delivered custom solutions for clients like Astraworld and BlueBird using a low-code/no-code platform.</p>
                </div>
                 <!-- Experience Item 4 -->
                 <div class="ml-10 timeline-item">
                     <div class="absolute w-6 h-6 bg-orange-500 rounded-full -left-3 border-4 border-white dark:border-gray-900"></div>
                    <p class="text-sm font-semibold text-orange-500">Jul 2018 - Dec 2019</p>
                    <h3 class="text-xl font-bold mb-1">Customer Support Engagement at RedDoorz</h3>
                    <p class="text-gray-600 dark:text-gray-400">Improved service quality by analyzing user experiences and managed property onboarding processes.</p>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="py-20">
            <div class="text-center mb-12 section-title">
                <h2 class="text-4xl font-black">My Projects</h2>
                <p class="text-lg text-orange-500">A selection of my key achievements</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project Card 1 -->
                <div class="project-card-container cursor-pointer">
                    <div class="card relative w-full h-80">
                        <div class="card-face absolute w-full h-full rounded-2xl shadow-xl overflow-hidden bg-cover bg-center" style="background-image: url('https://placehold.co/600x400/orange/white?text=SiCepat');">
                           <div class="absolute inset-0 bg-black/60 flex items-end p-6">
                               <h3 class="text-white text-2xl font-bold">Internal Pricing & Webhook Systems</h3>
                           </div>
                        </div>
                        <div class="card-face card-face-back absolute w-full h-full rounded-2xl shadow-xl bg-gray-800 text-white p-6 flex flex-col justify-center">
                            <h4 class="text-xl font-bold mb-2">Pricelist & Webhook Systems</h4>
                            <p class="text-sm mb-4">Developed a dynamic pricing system and a partner webhook management tool to improve integration and operational efficiency at SiCepat Ekspres.</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="bg-orange-500/50 text-white text-xs font-semibold px-2 py-1 rounded-full">Product Management</span>
                                <span class="bg-orange-500/50 text-white text-xs font-semibold px-2 py-1 rounded-full">System Architecture</span>
                            </div>
                        </div>
                    </div>
                </div>
                 <!-- Project Card 2 -->
                 <div class="project-card-container cursor-pointer">
                    <div class="card relative w-full h-80">
                        <div class="card-face absolute w-full h-full rounded-2xl shadow-xl overflow-hidden bg-cover bg-center" style="background-image: url('https://placehold.co/600x400/pink/white?text=ADA+Asia');">
                           <div class="absolute inset-0 bg-black/60 flex items-end p-6">
                               <h3 class="text-white text-2xl font-bold">Self-Service Ad Platform</h3>
                           </div>
                        </div>
                        <div class="card-face card-face-back absolute w-full h-full rounded-2xl shadow-xl bg-gray-800 text-white p-6 flex flex-col justify-center">
                            <h4 class="text-xl font-bold mb-2">ReachMe.id</h4>
                            <p class="text-sm mb-4">Built a self-service advertising platform for businesses, alongside other CRM tools to enhance customer interaction and retention at ADA Asia.</p>
                             <div class="flex flex-wrap gap-2 mb-4">
                                <span class="bg-pink-500/50 text-white text-xs font-semibold px-2 py-1 rounded-full">Digital Products</span>
                                <span class="bg-pink-500/50 text-white text-xs font-semibold px-2 py-1 rounded-full">CRM Tools</span>
                            </div>
                        </div>
                    </div>
                </div>
                 <!-- Project Card 3 -->
                 <div class="project-card-container cursor-pointer">
                    <div class="card relative w-full h-80">
                        <div class="card-face absolute w-full h-full rounded-2xl shadow-xl overflow-hidden bg-cover bg-center" style="background-image: url('https://placehold.co/600x400/teal/white?text=Xampr');">
                           <div class="absolute inset-0 bg-black/60 flex items-end p-6">
                               <h3 class="text-white text-2xl font-bold">Low-Code Platform Solutions</h3>
                           </div>
                        </div>
                        <div class="card-face card-face-back absolute w-full h-full rounded-2xl shadow-xl bg-gray-800 text-white p-6 flex flex-col justify-center">
                            <h4 class="text-xl font-bold mb-2">Client-Specific Solutions</h4>
                            <p class="text-sm mb-4">Implemented scalable solutions for high-profile clients like Astraworld and BlueBird using Xampr's low-code/no-code platform.</p>
                           <div class="flex flex-wrap gap-2 mb-4">
                                <span class="bg-teal-500/50 text-white text-xs font-semibold px-2 py-1 rounded-full">Low-Code</span>
                                <span class="bg-teal-500/50 text-white text-xs font-semibold px-2 py-1 rounded-full">Client Management</span>
                           </div>
                           <a href="https://www.youtube.com/@xampr3978" target="_blank" class="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
                             <i data-lucide="youtube" class="w-5 h-5 mr-2"></i>
                             View Demos
                           </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-20">
            <div class="text-center mb-12 section-title">
                <h2 class="text-4xl font-black">Get In Touch</h2>
                <p class="text-lg text-orange-500">Let's build something amazing together</p>
            </div>
            <div class="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl contact-box">
                <p class="text-center text-lg mb-8 text-gray-600 dark:text-gray-400">
                    I'm currently open to discussing new product challenges and opportunities. Feel free to reach out.
                </p>
                <div class="text-center">
                    <a href="mailto:Farizprasetya1509@gmail.com" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl py-4 px-8 rounded-lg transition-transform hover:scale-105">
                        Farizprasetya1509@gmail.com
                    </a>
                </div>
            </div>
        </section>

    </main>
    
    <!-- Footer -->
    <footer class="py-8 bg-gray-100 dark:bg-gray-800 mt-20">
        <div class="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 Fariz Prasetya. All Rights Reserved.</p>
        </div>
    </footer>

    <!-- GSAP Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"></script>

    <script>
        lucide.createIcons();

        // --- Theme Switcher ---
        const themeSwitcher = document.getElementById('theme-switcher');
        const lightIcon = document.getElementById('theme-icon-light');
        const darkIcon = document.getElementById('theme-icon-dark');
        const html = document.documentElement;

        // Set initial theme based on localStorage or system preference
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
            lightIcon.classList.remove('hidden');
            darkIcon.classList.add('hidden');
        } else {
            html.classList.remove('dark');
            lightIcon.classList.add('hidden');
            darkIcon.classList.remove('hidden');
        }

        themeSwitcher.addEventListener('click', () => {
            html.classList.toggle('dark');
            const isDark = html.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            lightIcon.classList.toggle('hidden', !isDark);
            darkIcon.classList.toggle('hidden', isDark);
        });

        // --- Typing Animation ---
        const typingText = document.getElementById('typing-text');
        const roles = ["Product Manager", "Digital Product Specialist", "Program Manager", "Creative Thinker"];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentRole = roles[roleIndex];
            if (isDeleting) {
                typingText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                setTimeout(() => isDeleting = true, 3000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }

            const typeSpeed = isDeleting ? 75 : 150;
            setTimeout(type, typeSpeed);
        }
        
        // --- Project Card Flip ---
        const projectCards = document.querySelectorAll('.project-card-container');
        projectCards.forEach(container => {
            const card = container.querySelector('.card');
            container.addEventListener('click', () => card.classList.toggle('is-flipped'));
        });

        // --- GSAP Animations ---
        document.addEventListener('DOMContentLoaded', () => {
            type(); // Start typing animation
            gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); // Register plugins

            // --- Header Animation ---
            gsap.to('header', { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: 'power3.out',
                delay: 0.5
            });

            // --- Hero Section Animation ---
            const heroTl = gsap.timeline({delay: 0.2});
            heroTl.to('.hero-content h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
                  .to('.hero-content h2', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, "-=0.6")
                  .to('.hero-content p', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, "-=0.6")
                  .to('.hero-socials', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, "-=0.6")
                  .to('.hero-buttons', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, "-=0.6")
                  .to('.hero-image > div', { opacity: 1, scale: 1, duration: 1, ease: 'elastic.out(1, 0.75)' }, 0.5);

            // --- Hero Image Parallax ---
            gsap.to('.hero-image', {
                y: "-30%",
                ease: "none",
                scrollTrigger: {
                    trigger: "#home",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });


            // --- Section Title Animation ---
            gsap.utils.toArray('.section-title').forEach(title => {
                gsap.from(title, {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: title,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            });

            // --- About Section Animation ---
            gsap.from('.about-image', {
                opacity: 0, x: -100, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: '#about', start: 'top 70%' }
            });
            gsap.from('.about-content', {
                opacity: 0, x: 100, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: '#about', start: 'top 70%' }
            });
            gsap.from('.stat-card', {
                opacity: 0, y: 50, scale: 0.9, duration: 0.5, stagger: 0.2,
                scrollTrigger: { trigger: '.stats-container', start: 'top 80%' }
            });
            
            // --- Experience Timeline Animation ---
            gsap.utils.toArray('.timeline-item').forEach(item => {
                gsap.from(item, {
                    opacity: 0,
                    x: -50,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            });

            // --- Project Cards Animation ---
            gsap.utils.toArray('.project-card-container').forEach((card, i) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 100,
                    scale: 0.9,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            });
            
            // --- Contact Box Animation ---
            gsap.from('.contact-box', {
                opacity: 0, scale: 0.8, duration: 1, ease: 'elastic.out(1, 0.75)',
                scrollTrigger: { trigger: '.contact-box', start: 'top 80%' }
            });

            // --- Smooth scrolling for nav links ---
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    // Check if the href is not just a hash, to prevent errors with querySelector.
                    // Also prevents default behavior only when we are animating the scroll.
                    if (href && href.length > 1) {
                         e.preventDefault();
                         gsap.to(window, {
                            duration: 1.5, 
                            scrollTo: { 
                                y: href, 
                                offsetY: 70 
                            }, 
                            ease: 'power2.inOut'
                        });
                    }
                });
            });
        });

    </script>
</body>
</html>
