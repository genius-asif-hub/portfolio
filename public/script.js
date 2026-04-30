/* ============================================================
   PORTFOLIO — script.js  (v2 — 2025 Trends Edition)
   ============================================================ */

(function () {
    'use strict';

    /* ========================================================
       LENIS SMOOTH SCROLL INITIALIZATION
    ======================================================== */
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    /* ========================================================
       THEME TOGGLE
    ======================================================== */
    const html = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const THEME_KEY = 'portfolio-theme';

    const savedTheme = localStorage.getItem(THEME_KEY) ||
        (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

    applyTheme(savedTheme);

    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
        localStorage.setItem(THEME_KEY, theme);
    }

    themeToggle.addEventListener('click', () => {
        applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });

    /* ========================================================
       SCROLL PROGRESS BAR
    ======================================================== */
    const scrollProgress = document.getElementById('scrollProgress');

    function updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollProgress.style.width = progress + '%';
    }

    /* ========================================================
       NAV SCROLL EFFECT + ACTIVE LINK
    ======================================================== */
    const nav = document.getElementById('nav');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function updateNav() {
        nav.classList.toggle('scrolled', window.scrollY > 40);
        updateScrollProgress();
        updateActiveNavLink();
        updateDotNav();
        updateScrollTopBtn();
    }

    function updateActiveNavLink() {
        let currentId = '';
        const pos = window.scrollY + 100;
        sections.forEach(s => { if (pos >= s.offsetTop) currentId = s.id; });
        navLinks.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + currentId);
        });
    }

    window.addEventListener('scroll', updateNav, { passive: true });

    /* ========================================================
       SCROLL-TO-TOP BUTTON
    ======================================================== */
    const scrollTopBtn = document.getElementById('scrollTop');

    function updateScrollTopBtn() {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 600);
    }

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ========================================================
       DOT NAVIGATION
    ======================================================== */
    const dotItems = document.querySelectorAll('.dot-nav-item');

    function updateDotNav() {
        let currentId = '';
        const pos = window.scrollY + window.innerHeight / 2;
        sections.forEach(s => { if (pos >= s.offsetTop) currentId = s.id; });
        dotItems.forEach(d => {
            d.classList.toggle('active',
                d.getAttribute('data-target') === '#' + currentId);
        });
    }

    dotItems.forEach(dot => {
        dot.addEventListener('click', () => {
            const target = document.querySelector(dot.getAttribute('data-target'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    /* ========================================================
       MOBILE NAVIGATION
    ======================================================== */
    const hamburger = document.getElementById('navHamburger');
    const mobileNav = document.getElementById('navMobile');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => mobileNav.classList.remove('open'));
    });

    /* ========================================================
       HERO: MOUSE SPOTLIGHT EFFECT
    ======================================================== */
    const heroSection = document.getElementById('hero');
    const heroSpotlight = document.getElementById('heroSpotlight');

    if (heroSection && heroSpotlight) {
        const orbs = document.querySelectorAll('.hero-orb');
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1) + '%';
            const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1) + '%';
            heroSpotlight.style.setProperty('--mx', x);
            heroSpotlight.style.setProperty('--my', y);

            // Move orbs with parallax
            const moveX = (e.clientX - window.innerWidth / 2) * 0.05;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.05;
            orbs.forEach((orb, i) => {
                const factor = (i + 1) * 0.4;
                orb.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
            });
        }, { passive: true });
    }

    /* ========================================================
       CURSOR GLOW FOLLOWER (Reactive)
    ======================================================== */
    const cursorGlow = document.getElementById('cursorGlow');
    let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }, { passive: true });

    (function animateCursor() {
        // Snappier interpolation (0.2 instead of 0.15)
        glowX += (mouseX - glowX) * 0.2;
        glowY += (mouseY - glowY) * 0.2;

        if (cursorGlow) {
            cursorGlow.style.left = glowX + 'px';
            cursorGlow.style.top = glowY + 'px';
        }
        requestAnimationFrame(animateCursor);
    })();

    // Cursor interactions
    const interactables = 'a, button, .project-card, .lab-card, .tech-chip, .cmd-item, .social-link, .fc-icon';

    function refreshInteractables() {
        document.querySelectorAll(interactables).forEach(el => {
            // Remove existing to avoid duplicates if called again
            el.removeEventListener('mouseenter', onMouseEnter);
            el.removeEventListener('mouseleave', onMouseLeave);

            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });
    }

    function onMouseEnter() {
        cursorGlow?.classList.add('cursor-active');
    }

    function onMouseLeave() {
        cursorGlow?.classList.remove('cursor-active');
    }

    refreshInteractables();

    /* ========================================================
       MAGNETIC INTERACTION SYSTEM
    ======================================================== */
    class MagneticSystem {
        constructor(selector, options = {}) {
            this.elements = document.querySelectorAll(selector);
            this.strength = options.strength || 0.35;
            this.init();
        }

        init() {
            // Disable on touch devices
            if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

            this.elements.forEach(el => {
                el.classList.add('btn-magnetic');
                el.addEventListener('mousemove', (e) => this.move(e, el));
                el.addEventListener('mouseleave', (e) => this.reset(e, el));
            });
        }

        move(e, el) {
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) * this.strength;
            const dy = (e.clientY - cy) * this.strength;
            el.style.transform = `translate(${dx}px, ${dy}px)`;
        }

        reset(e, el) {
            el.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            el.style.transform = '';
            setTimeout(() => { el.style.transition = ''; }, 600);
        }
    }

    new MagneticSystem('.btn, .slider-arrow, .node, .cmd-item', { strength: 0.3 });

    /* ========================================================
       TYPING EFFECT (Hero)
    ======================================================== */
    const typingEl = document.getElementById('typingText');

    if (typingEl) {
        const phrases = [
            'scale under pressure.',
            'handle millions of events.',
            'integrate anything.',
            'power intelligent apps.',
            'ship without anxiety.',
        ];

        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        typingEl.parentNode.insertBefore(cursor, typingEl.nextSibling);

        let phraseIdx = 0, charIdx = 0, isDeleting = false, isPaused = false;

        function typeLoop() {
            if (isPaused) return;
            const phrase = phrases[phraseIdx];

            if (!isDeleting) {
                charIdx++;
                typingEl.textContent = phrase.slice(0, charIdx);
                if (charIdx === phrase.length) {
                    isPaused = true;
                    setTimeout(() => { isPaused = false; isDeleting = true; typeLoop(); }, 2200);
                    return;
                }
                setTimeout(typeLoop, 55);
            } else {
                charIdx--;
                typingEl.textContent = phrase.slice(0, charIdx);
                if (charIdx === 0) {
                    isDeleting = false;
                    phraseIdx = (phraseIdx + 1) % phrases.length;
                    setTimeout(typeLoop, 350);
                    return;
                }
                setTimeout(typeLoop, 30);
            }
        }

        setTimeout(typeLoop, 1200);
    }

    /* ========================================================
       SCROLL REVEAL
    ======================================================== */
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Add staggered delay based on index if multiple intersect at once
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                revealObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => revealObs.observe(el));

    /* ========================================================
       STAT COUNTER ANIMATION
    ======================================================== */
    const statNumbers = document.querySelectorAll('.stat-number');

    const statObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStat(entry.target);
                statObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => statObs.observe(el));

    function animateStat(el) {
        const raw = el.textContent;
        const match = raw.match(/^(\d+)/);
        if (!match) return;
        const target = parseInt(match[1]);
        const suffix = raw.replace(match[0], '');
        const duration = 1400;
        const start = performance.now();

        function tick(now) {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    /* ========================================================
       COMMAND PALETTE  (Cmd+K / Ctrl+K)
    ======================================================== */
    const cmdOverlay = document.getElementById('cmdOverlay');
    const cmdInput = document.getElementById('cmdInput');
    const cmdItems = document.querySelectorAll('.cmd-item');
    const cmdHintBtn = document.getElementById('cmdHintBtn');

    let cmdActiveIdx = -1;

    function openCmd() {
        cmdOverlay.classList.add('open');
        cmdInput.value = '';
        cmdInput.focus();
        cmdActiveIdx = -1;
        filterCmdItems('');
    }

    function closeCmd() {
        cmdOverlay.classList.remove('open');
        cmdActiveIdx = -1;
    }

    function filterCmdItems(query) {
        const q = query.toLowerCase().trim();
        let visibleCount = 0;
        cmdItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            const sub = item.querySelector('.cmd-item-sub')?.textContent.toLowerCase() || '';
            const matches = !q || text.includes(q) || sub.includes(q);
            item.style.display = matches ? 'flex' : 'none';
            if (matches) visibleCount++;
        });

        // Hide empty sections
        document.querySelectorAll('.cmd-section-title').forEach(title => {
            let next = title.nextElementSibling;
            let hasVisible = false;
            while (next && next.classList.contains('cmd-item')) {
                if (next.style.display !== 'none') hasVisible = true;
                next = next.nextElementSibling;
            }
            title.style.display = hasVisible ? 'block' : 'none';
        });
    }

    function execCmdItem(item) {
        const target = item.getAttribute('data-target');
        const action = item.getAttribute('data-action');

        if (target) {
            const el = document.querySelector(target);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }

        if (action === 'theme') {
            applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        }

        if (action === 'email') {
            window.location.href = 'mailto:alex@alexcarter.dev';
        }

        closeCmd();
    }

    // Keyboard shortcut
    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            cmdOverlay.classList.contains('open') ? closeCmd() : openCmd();
        }

        if (!cmdOverlay.classList.contains('open')) return;

        if (e.key === 'Escape') { closeCmd(); return; }

        const visible = [...cmdItems].filter(i => i.style.display !== 'none');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            cmdActiveIdx = Math.min(cmdActiveIdx + 1, visible.length - 1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            cmdActiveIdx = Math.max(cmdActiveIdx - 1, 0);
        } else if (e.key === 'Enter' && cmdActiveIdx >= 0) {
            execCmdItem(visible[cmdActiveIdx]);
            return;
        }

        visible.forEach((item, i) => item.classList.toggle('active', i === cmdActiveIdx));
    });

    cmdInput.addEventListener('input', () => filterCmdItems(cmdInput.value));

    cmdItems.forEach(item => {
        item.addEventListener('click', () => execCmdItem(item));
    });

    // Close on backdrop click
    cmdOverlay.addEventListener('click', (e) => {
        if (e.target === cmdOverlay) closeCmd();
    });

    // Cmd hint button in nav
    if (cmdHintBtn) cmdHintBtn.addEventListener('click', openCmd);

    /* ========================================================
       TILT EFFECT ON PROJECT CARDS
    ======================================================== */
    const tiltCards = document.querySelectorAll('.project-card, .exp-card');

    tiltCards.forEach(card => {
        card.classList.add('tilt-card');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const rx = -((e.clientY - cy) / (rect.height / 2)) * 4;
            const ry = ((e.clientX - cx) / (rect.width / 2)) * 4;
            card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
            card.style.transform = '';
            setTimeout(() => { card.style.transition = ''; }, 500);
        });
    });

    /* ========================================================
       CONTACT FORM SUBMISSION
    ======================================================== */
    window.handleFormSubmit = function (e) {
        e.preventDefault();
        const btn = document.getElementById('submitBtn');
        const text = document.getElementById('submitText');
        const icon = document.getElementById('submitIcon');
        const success = document.getElementById('formSuccess');

        btn.disabled = true;
        text.textContent = 'Sending...';
        icon.textContent = '⏳';
        btn.style.opacity = '0.75';

        setTimeout(() => {
            btn.disabled = false;
            text.textContent = 'Send Message';
            icon.textContent = '→';
            btn.style.opacity = '1';
            success.style.display = 'block';
            document.getElementById('contactForm').reset();
            setTimeout(() => { success.style.display = 'none'; }, 5000);
        }, 1800);
    };

    /* ========================================================
       SMOOTH SCROLL FOR ANCHOR LINKS
    ======================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });

    /* ========================================================
       PREFERS REDUCED MOTION
    ======================================================== */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.hero-orb, .floating-card').forEach(el => {
            el.style.animation = 'none';
        });
        const track = document.getElementById('marqueeTrack');
        if (track) track.style.animation = 'none';
        if (cursorGlow) cursorGlow.style.display = 'none';
    }

    /* ========================================================
       PERFORMANCE: Passive wheel
    ======================================================== */
    /* ========================================================
       SPOTLIGHT / MOUSE TRACKING
    ======================================================== */
    const spotlightCards = document.querySelectorAll('.bento-card, .poc-card, .exp-card, .stack-card');
    spotlightCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    /* ========================================================
       BLUEPRINT & TERMINAL SCROLL TRIGGERS
    ======================================================== */
    const blueprintObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const lines = card.querySelectorAll('.line');
                const nodes = card.querySelectorAll('.node');

                // Animate lines and nodes
                lines.forEach((line, i) => {
                    setTimeout(() => line.classList.add('active'), i * 150);
                });
                nodes.forEach((node, i) => {
                    setTimeout(() => node.classList.add('active'), 400 + (i * 100));
                });

                // Log to terminal
                if (window.LiveSystem) {
                    const title = card.closest('.project-card')?.querySelector('h3')?.textContent || 'Component';
                    window.LiveSystem.log('INFO', `Initializing Blueprint: [${title}]`);
                    window.LiveSystem.log('CACHE', `Pre-rendering layout nodes... DONE`);
                }

                blueprintObs.unobserve(card);
            }
        });
    }, { threshold: 0.4 });

    document.querySelectorAll('.blueprint-graphic').forEach(bg => blueprintObs.observe(bg));

    // Experience Section Trigger
    const expSection = document.getElementById('experience');
    if (expSection) {
        const expObs = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                window.LiveSystem?.log('SYSTEM', 'Experience Module loaded into buffer.');
                expObs.unobserve(expSection);
            }
        }, { threshold: 0.2 });
        expObs.observe(expSection);
    }

    /* ========================================================
       SITE-WIDE INTERACTION LOGS (FOR TERMINAL)
    ======================================================== */
    function initInteractionLogs() {
        if (!window.LiveSystem) return;

        // POC Card Hovers
        document.querySelectorAll('.poc-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                const title = card.querySelector('.poc-title')?.textContent;
                const tech = card.querySelector('.poc-badge')?.textContent;
                window.LiveSystem.log('GET', `/api/v1/poc/${tech.toLowerCase()}?project=${title.replace(/\s+/g, '_')}`);
            });
        });

        // Contact Button
        const submitBtn = document.getElementById('contactForm');
        if (submitBtn) {
            submitBtn.addEventListener('submit', () => {
                window.LiveSystem.log('POST', '/api/v1/messages/send [PENDING]');
            });
        }

        // Project CTA Clicks
        document.querySelectorAll('.poc-link, .btn').forEach(btn => {
            btn.addEventListener('click', () => {
                window.LiveSystem.log('AUTH', 'User permission granted for outbound request.');
            });
        });

        // Stack Card Hovers
        document.querySelectorAll('.stack-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                const tech = card.querySelector('h3')?.textContent;
                const logs = [
                    `Service: [${tech}] status check... OK`,
                    `GET /metrics/v1/${tech.toLowerCase()} 200 OK`,
                    `Initializing ${tech} adapter... SUCCESS`,
                    `Memory profile for [${tech}] optimal.`
                ];
                const log = logs[Math.floor(Math.random() * logs.length)];
                window.LiveSystem.log('INFO', log);
            });
        });
    }

    // Initialize with polling to handle race conditions
    function ensureLiveSystemInited() {
        if (window.LiveSystem) {
            initInteractionLogs();
            console.log('Terminal System Interlink: OK');
        } else {
            setTimeout(ensureLiveSystemInited, 100);
        }
    }
    ensureLiveSystemInited();

    /* ========================================================
       LABS: VIDEO HOVER PLAY/PAUSE
    ======================================================== */
    const labCards = document.querySelectorAll('.lab-card');
    labCards.forEach(card => {
        const video = card.querySelector('.lab-video');
        if (!video) return;

        card.addEventListener('mouseenter', () => {
            video.play().catch(err => {
                console.log("Auto-play blocked or no source:", err);
            });
        });

        card.addEventListener('mouseleave', () => {
            video.pause();
        });
    });

    /* ========================================================
       TERMINAL DASHBOARD: INTERACTIVE LOGIC
    ======================================================== */
    const terminalBody = document.getElementById('terminalBody');
    const terminalInput = document.getElementById('terminalInput');
    const terminalTyped = document.getElementById('terminalTyped');
    const terminalPromptLine = document.getElementById('terminalPromptLine');

    if (terminalBody && terminalInput) {
        const commands = {
            'whoami': 'Senior Backend Engineer specializing in scalable architectures, AI/RAG pipelines, and high-performance APIs.',
            'ls': 'core-competencies/  projects/  labs/  experience/  status.sys',
            'ls core-competencies/': 'distributed-systems/  high-performance-apis/  ai-rag-orchestration/  event-driven-design/',
            'cat experience.txt': '6+ years designing and shipping production-grade systems — from microservices meshes to AI-augmented pipelines.',
            'stats': 'Uptime: 99.9% | P99 Latency: <45ms | Requests: 1.2M/day | Status: All Systems Operational',
            'status': 'CPU: 12% | MEM: 4.2GB/16GB | NET: 450Mbps | WS: Connected | ACTIVE_SESSION: True',
            'logs': '[INFO] Initializing handshake...\n[NET] Establishing WebSocket...\n[OK] Production metrics mirrored successfully.',
            'help': 'Available commands: whoami, ls, cat, stats, status, logs, clear, help',
            'clear': 'CLEAR_CMD'
        };

        // Focus input on terminal click
        terminalBody.addEventListener('click', () => terminalInput.focus());

        // Update displayed text as user types
        terminalInput.addEventListener('input', () => {
            terminalTyped.textContent = terminalInput.value;
        });

        // Handle command submission
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const cmd = terminalInput.value.trim().toLowerCase();
                if (cmd) {
                    processCommand(cmd);
                }
            }
        });

        function addTerminalLine(text, isCmd = false) {
            const line = document.createElement('div');
            if (isCmd) {
                line.className = 'terminal-line';
                line.innerHTML = `<span class="t-user">asif@portfolio</span>:<span class="t-path">~</span>$ <span class="t-cmd">${text}</span>`;
            } else {
                line.className = 'terminal-output';
                line.style.whiteSpace = 'pre-wrap'; // Allow multi-line logs
                line.textContent = text;
            }
            terminalBody.insertBefore(line, terminalPromptLine);
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }

        function processCommand(cmd) {
            // Add the command line first
            addTerminalLine(cmd, true);

            // Clear input
            terminalInput.value = '';
            terminalTyped.textContent = '';

            // Get response
            const response = commands[cmd] || `command not found: ${cmd}. Type 'help' for available commands.`;

            if (response === 'CLEAR_CMD') {
                // Clear all previous lines
                const lines = terminalBody.querySelectorAll('.terminal-line:not(.interactive), .terminal-output');
                lines.forEach(l => l.remove());
            } else {
                // Add response
                setTimeout(() => {
                    addTerminalLine(response);
                }, 100);
            }
        }
    }

    /* ========================================================
       HORIZONTAL SLIDERS: Full Featured (drag, arrows, dots, counter)
    ======================================================== */
    function initSlider(slider, opts) {
        if (!slider) return;
        const { navEl, prevBtn, nextBtn, counterEl, total } = opts;
        const dots = navEl ? navEl.querySelectorAll('.nav-dot') : [];
        let currentIndex = 0;

        function getCardWidth() {
            return slider.offsetWidth;
        }

        function goTo(index) {
            const count = total || dots.length || 1;
            index = Math.max(0, Math.min(count - 1, index));
            currentIndex = index;
            slider.scrollTo({ left: getCardWidth() * index, behavior: 'smooth' });
            syncUI(index);
        }

        function syncUI(index) {
            dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
            if (counterEl) {
                const count = total || dots.length;
                counterEl.textContent = String(index + 1).padStart(2, '0') + ' / ' + String(count).padStart(2, '0');
            }
            if (prevBtn) prevBtn.style.opacity = index === 0 ? '0.35' : '1';
            if (nextBtn) {
                const count = total || dots.length;
                nextBtn.style.opacity = index === count - 1 ? '0.35' : '1';
            }
        }

        // Scroll → sync dots/counter
        slider.addEventListener('scroll', () => {
            const index = Math.round(slider.scrollLeft / getCardWidth());
            if (index !== currentIndex) {
                currentIndex = index;
                syncUI(index);
            }
        }, { passive: true });

        // Dot clicks
        if (navEl) {
            navEl.querySelectorAll('.nav-dot').forEach(dot => {
                dot.addEventListener('click', () => goTo(parseInt(dot.dataset.index)));
            });
        }

        // Arrow clicks
        if (prevBtn) prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

        // Drag-to-scroll (mouse)
        let isDragging = false, startX = 0, startScroll = 0;

        slider.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX;
            startScroll = slider.scrollLeft;
            slider.classList.add('dragging');
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            slider.scrollLeft = startScroll - (e.pageX - startX);
        });

        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            slider.classList.remove('dragging');
            // Snap to nearest card
            const index = Math.round(slider.scrollLeft / getCardWidth());
            goTo(index);
        });

        // Keyboard arrow support
        slider.setAttribute('tabindex', '0');
        slider.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') { e.preventDefault(); goTo(currentIndex + 1); }
            if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(currentIndex - 1); }
        });

        // Init state
        syncUI(0);
    }

    // Init Projects Slider
    initSlider(document.querySelector('.projects-slider'), {
        navEl: document.querySelector('.slider-nav[data-slider="projects"]'),
        prevBtn: document.getElementById('projPrev'),
        nextBtn: document.getElementById('projNext'),
        counterEl: document.getElementById('projCounter'),
        total: 4,
    });

    // Init Labs Slider
    initSlider(document.querySelector('.labs-slider'), {
        navEl: document.querySelector('.slider-nav[data-slider="labs"]'),
        prevBtn: document.getElementById('labsPrev'),
        nextBtn: document.getElementById('labsNext'),
        counterEl: document.getElementById('labsCounter'),
        total: 5,
    });

})();
