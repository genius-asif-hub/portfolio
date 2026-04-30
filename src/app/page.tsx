
import Script from "next/script";
import GitHubActivityCalendar from "./components/GitHubCalendar";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <div>
        {/* Scroll Progress Bar */}
        <div className="scroll-progress" id="scrollProgress" />
        {/* Command Palette */}
        <div className="cmd-overlay" id="cmdOverlay">
          <div className="cmd-palette">
            <div className="cmd-input-wrap">
              <span className="cmd-search-icon">⌕</span>
              <input className="cmd-input" id="cmdInput" placeholder="Navigate or search..." autoComplete="off" />
              <span className="cmd-kbd">ESC</span>
            </div>
            <div className="cmd-results" id="cmdResults">
              <div className="cmd-section-title">Navigation</div>
              <div className="cmd-item" data-target="#hero">
                <div className="cmd-item-icon">🏠</div>Home<span className="cmd-item-sub">hero</span>
              </div>
              <div className="cmd-item" data-target="#about">
                <div className="cmd-item-icon">👤</div>About Me<span className="cmd-item-sub">about</span>
              </div>
              <div className="cmd-item" data-target="#techstack">
                <div className="cmd-item-icon">⚙️</div>Tech Stack<span className="cmd-item-sub">stack</span>
              </div>
              <div className="cmd-item" data-target="#projects">
                <div className="cmd-item-icon">🚀</div>Projects<span className="cmd-item-sub">work</span>
              </div>
              <div className="cmd-item" data-target="#labs">
                <div className="cmd-item-icon">🧪</div>Labs / POCs<span className="cmd-item-sub">video</span>
              </div>
              <div className="cmd-item" data-target="#experience">
                <div className="cmd-item-icon">💼</div>Experience<span className="cmd-item-sub">exp</span>
              </div>
              <div className="cmd-item" data-target="#contact">
                <div className="cmd-item-icon">✉️</div>Contact<span className="cmd-item-sub">hire</span>
              </div>
              <div className="cmd-section-title">Actions</div>
              <div className="cmd-item" data-action="theme">
                <div className="cmd-item-icon">🎨</div>Toggle Theme<span className="cmd-item-sub">light/dark</span>
              </div>
              <div className="cmd-item" data-action="email">
                <div className="cmd-item-icon">📧</div>Send Email<span className="cmd-item-sub">asif@krishaweb.com</span>
              </div>
            </div>
            <div className="cmd-footer">
              <div className="cmd-footer-item"><span className="cmd-kbd">↵</span> select</div>
              <div className="cmd-footer-item"><span className="cmd-kbd">↑↓</span> navigate</div>
              <div className="cmd-footer-item"><span className="cmd-kbd">ESC</span> close</div>
            </div>
          </div>
        </div>
        {/* Dot Navigation */}
        <nav className="dot-nav" id="dotNav">
          <button className="dot-nav-item active" data-target="#hero" data-label="Home" />
          <button className="dot-nav-item" data-target="#about" data-label="About" />
          <button className="dot-nav-item" data-target="#techstack" data-label="Stack" />
          <button className="dot-nav-item" data-target="#projects" data-label="Projects" />
          <button className="dot-nav-item" data-target="#labs" data-label="Labs" />
          <button className="dot-nav-item" data-target="#experience" data-label="Experience" />
          <button className="dot-nav-item" data-target="#contact" data-label="Contact" />
        </nav>
        {/* Scroll to Top */}
        <button className="scroll-top" id="scrollTop">↑</button>
        {/* Cursor Glow */}
        <div className="cursor-glow" id="cursorGlow" />
        {/* ==================== NAVIGATION ==================== */}
        <nav className="nav" id="nav">
          <div className="container nav-inner">
            <a href="#" className="nav-logo">
              asif<span>.</span>dev
            </a>
            <ul className="nav-links" id="navLinks">
              <li><a href="#about">About</a></li>
              <li><a href="#techstack">Stack</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#labs">Labs</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="nav-actions">
              <button className="cmd-hint" id="cmdHintBtn">⌘ <kbd>K</kbd> search</button>
              <button className="theme-toggle" id="themeToggle" title="Toggle Theme">🌙</button>
              <a href="#contact" className="btn btn-primary nav-cta" style={{ padding: '10px 20px', fontSize: '0.82rem' }}>Let's Talk →</a>
              <button className="nav-hamburger" id="navHamburger" title="Menu">
                <span /><span /><span />
              </button>
            </div>
          </div>
        </nav>
        {/* Mobile Nav */}
        <div className="nav-mobile" id="navMobile">
          <a href="#about" className="mobile-nav-link">About</a>
          <a href="#techstack" className="mobile-nav-link">Tech Stack</a>
          <a href="#projects" className="mobile-nav-link">Projects</a>
          <a href="#labs" className="mobile-nav-link">Labs / POCs</a>
          <a href="#experience" className="mobile-nav-link">Experience</a>
          <a href="#contact" className="mobile-nav-link">Contact</a>
        </div>
        {/* ==================== HERO ==================== */}
        <section className="hero" id="hero">
          <div className="hero-bg">
            <div className="hero-grid" />
            <div className="hero-spotlight" id="heroSpotlight" />
            <div className="hero-orb hero-orb-1" />
            <div className="hero-orb hero-orb-2" />
            <div className="hero-orb hero-orb-3" />
          </div>
          <div className="container hero-container-flex">
            <div className="hero-content">
              <div className="hero-status-bar">
                <span className="status-chip online">Open to Work</span>
                <span className="status-chip location">📍 Remote · Worldwide</span>
                <span className="status-chip">⏱ Responds within 24h</span>
              </div>
              <h1 className="hero-title">
                I build systems that<br />
                <span className="gradient-text" id="typingText">scale under pressure.</span>
              </h1>
              <p className="hero-subtitle">
                Senior Backend Engineer with <strong>6+ years</strong> designing and shipping production-grade systems — from
                microservices architectures to AI-powered applications. I turn complex problems into clean, maintainable
                solutions.
              </p>
              <div className="hero-cta">
                <a href="#projects" className="btn-magnetic btn-magnetic-primary" id="magBtn1">
                  <span>View My Work</span>
                  <span>→</span>
                </a>
                <a href="#contact" className="btn-magnetic btn-magnetic-outline" id="magBtn2">
                  <span>Get In Touch</span>
                </a>
                <a href="/asif-shaikh-cv.pdf" download className="btn-magnetic btn-cv">
                  <span>📄</span>
                  <span>Download CV</span>
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">6+</span>
                  <span className="stat-label">Years of experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Projects shipped</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Enterprise integrations</span>
                </div>
                <div className="stat">
                  <span className="stat-number">99%</span>
                  <span className="stat-label">Uptime target</span>
                </div>
              </div>
            </div>
            {/* Hero Avatar */}
            <div className="hero-avatar-wrap">
              <div className="hero-avatar">
                <div className="hero-avatar-ring" />
                <div className="hero-avatar-inner">
                  <span className="hero-avatar-initials">AS</span>
                </div>
                <div className="hero-avatar-badge">✦ Available</div>
              </div>
            </div>
          </div>
          <div className="hero-scroll">
            <div className="scroll-line" />
            <span>Scroll</span>
          </div>
        </section>
        {/* Marquee ticker */}
        <div className="marquee-section">
          <div className="marquee-track" id="marqueeTrack">
            {/* items duplicated for seamless loop */}
            <div className="marquee-item"><i className="devicon-nodejs-plain colored marquee-icon" /> Node.js <span className="marquee-dot" /></div>
            <div className="marquee-item"><i className="devicon-laravel-original colored marquee-icon" /> Laravel <span className="marquee-dot" /></div>
            <div className="marquee-item"><i className="devicon-nestjs-original colored marquee-icon" /> NestJS <span className="marquee-dot" /></div>
            <div className="marquee-item"><i className="devicon-postgresql-plain colored marquee-icon" /> PostgreSQL <span className="marquee-dot" /></div>
            <div className="marquee-item"><i className="devicon-mongodb-plain colored marquee-icon" /> MongoDB <span className="marquee-dot" /></div>
            <div className="marquee-item"><img src="https://api.iconify.design/simple-icons:stripe.svg" className="si-icon marquee-icon" alt="Stripe" />
              Stripe <span className="marquee-dot" /></div>
            <div className="marquee-item"><img src="https://api.iconify.design/simple-icons:ebay.svg" className="si-icon marquee-icon" alt="eBay" />
              eBay API <span className="marquee-dot" /></div>
            <div className="marquee-item"><img src="https://api.iconify.design/simple-icons:openai.svg" className="si-icon marquee-icon" alt="OpenAI" /> AI / RAG <span className="marquee-dot" /></div>
            <div className="marquee-item"><img src="https://cdn.simpleicons.org/n8n" className="si-icon marquee-icon" alt="n8n" /> n8n
              Automation <span className="marquee-dot" /></div>
            <div className="marquee-item"><i className="devicon-docker-plain colored marquee-icon" /> Docker <span className="marquee-dot" /></div>
            <div className="marquee-item"><i className="devicon-amazonwebservices-plain colored marquee-icon" /> AWS <span className="marquee-dot" /></div>
            <div className="marquee-item"><img src="https://api.iconify.design/simple-icons:googleanalytics.svg" className="si-icon marquee-icon" alt="GA4" /> GA4 <span className="marquee-dot" /></div>
            <div className="marquee-item"><img src="https://cdn.simpleicons.org/rabbitmq" className="si-icon marquee-icon" alt="Microservices" /> Microservices <span className="marquee-dot" /></div>
            <div className="marquee-item"><i className="devicon-symfony-original colored marquee-icon" /> Symfony <span className="marquee-dot" /></div>
            {/* duplicate for seamless loop */}
            <div className="marquee-item"><i className="devicon-nodejs-plain colored marquee-icon" /> Node.js <span className="marquee-dot" /></div>
            <div className="marquee-item"><i className="devicon-laravel-original colored marquee-icon" /> Laravel <span className="marquee-dot" /></div>
            <div className="marquee-item"><i className="devicon-nestjs-original colored marquee-icon" /> NestJS <span className="marquee-dot" /></div>
            <div className="marquee-item"><i className="devicon-postgresql-plain colored marquee-icon" /> PostgreSQL <span className="marquee-dot" /></div>
            <div className="marquee-item"><i className="devicon-mongodb-plain colored marquee-icon" /> MongoDB <span className="marquee-dot" /></div>
            <div className="marquee-item"><img src="https://api.iconify.design/simple-icons:stripe.svg" className="si-icon marquee-icon" alt="Stripe" />
              Stripe <span className="marquee-dot" /></div>
            <div className="marquee-item"><img src="https://api.iconify.design/simple-icons:ebay.svg" className="si-icon marquee-icon" alt="eBay" />
              eBay API <span className="marquee-dot" /></div>
            <div className="marquee-item"><img src="https://api.iconify.design/simple-icons:openai.svg" className="si-icon marquee-icon" alt="OpenAI" /> AI / RAG <span className="marquee-dot" /></div>
            <div className="marquee-item"><img src="https://cdn.simpleicons.org/n8n" className="si-icon marquee-icon" alt="n8n" /> n8n
              Automation <span className="marquee-dot" /></div>
            <div className="marquee-item"><i className="devicon-docker-plain colored marquee-icon" /> Docker <span className="marquee-dot" /></div>
            <div className="marquee-item"><i className="devicon-amazonwebservices-plain colored marquee-icon" /> AWS <span className="marquee-dot" /></div>
            <div className="marquee-item"><img src="https://api.iconify.design/simple-icons:googleanalytics.svg" className="si-icon marquee-icon" alt="GA4" /> GA4 <span className="marquee-dot" /></div>
            <div className="marquee-item"><img src="https://cdn.simpleicons.org/rabbitmq" className="si-icon marquee-icon" alt="Microservices" /> Microservices <span className="marquee-dot" /></div>
            <div className="marquee-item"><i className="devicon-symfony-original colored marquee-icon" /> Symfony <span className="marquee-dot" /></div>
          </div>
        </div>
        {/* ==================== ABOUT ==================== */}
        <section className="about" id="about">
          <div className="container">
            <div className="terminal-dashboard reveal" id="terminalDashboard">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="t-dot red" />
                  <span className="t-dot yellow" />
                  <span className="t-dot green" />
                </div>
                <div className="terminal-title">asif@backend-prod: ~</div>
                <div className="terminal-status">● Connected</div>
              </div>
              <div className="terminal-body" id="terminalBody">
                <div className="terminal-line"><span className="t-user">asif@portfolio</span>:<span className="t-path">~</span>$ <span className="t-cmd">whoami</span></div>
                <div className="terminal-output">Senior Backend Engineer specializing in scalable architectures and AI pipelines.
                </div>
                <div className="terminal-line"><span className="t-user">asif@portfolio</span>:<span className="t-path">~</span>$ <span className="t-cmd">ls core-competencies/</span></div>
                <div className="terminal-output">distributed-systems/ high-performance-apis/ ai-rag-orchestration/
                  event-driven-design/</div>
                <div className="terminal-line interactive" id="terminalPromptLine">
                  <span className="t-user">asif@portfolio</span>:<span className="t-path">~</span>$ <span className="t-cmd" id="terminalTyped" /><span className="terminal-cursor">_</span>
                  <input type="text" id="terminalInput" className="terminal-hidden-input" aria-label="Terminal Input" />
                </div>
              </div>
            </div>
            <div className="about-grid">
              <div className="about-content reveal-left">
                <div className="section-label">About Me</div>
                <h2 className="section-title">Engineering at the intersection of scale and simplicity</h2>
                <p className="about-text">
                  I'm a <strong>Senior Backend Engineer</strong> who obsesses over the things users never see — architecture
                  decisions, database query plans, API contracts, and deployment pipelines. Because that's where real
                  reliability is built.
                </p>
                <p className="about-text">
                  Over the past 6+ years, I've worked across <strong>startups and product teams</strong>, delivering systems
                  that handle real workloads — from RESTful APIs and multi-tenant SaaS platforms to microservices meshes and
                  AI-augmented pipelines.
                </p>
                <p className="about-text">
                  I care deeply about developer experience, clean code, and building things that the next engineer on the team
                  can confidently extend.
                </p>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <div className="highlight-icon">⚙️</div>
                    <div className="highlight-text">
                      <strong>Systems Thinker</strong>
                      <span>I design for the edge cases, not just the happy path</span>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🔗</div>
                    <div className="highlight-text">
                      <strong>Integration Specialist</strong>
                      <span>Stripe, eBay, Mailchimp, GA4, Dialogflow — I speak API</span>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🤖</div>
                    <div className="highlight-text">
                      <strong>AI/RAG Applications</strong>
                      <span>Building intelligent pipelines with LLMs and vector search</span>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">📐</div>
                    <div className="highlight-text">
                      <strong>Architecture-Minded</strong>
                      <span>Microservices, event-driven systems, and clean API boundaries</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-visual reveal-right">
                <div className="about-card">
                  <div className="code-block">
                    <pre><span className="code-comment">// engineer.profile.ts</span>{"\n"}{"\n"}<span className="code-keyword">const</span> <span className="code-variable">engineer</span> = {"{"}{"\n"}{"  "}<span className="code-property">name</span>: <span className="code-string">"Asif Shaikh"</span>,{"\n"}{"  "}<span className="code-property">role</span>: <span className="code-string">"Senior Backend Engineer"</span>,{"\n"}{"  "}<span className="code-property">experience</span>: <span className="code-number">6</span>, <span className="code-comment">// years</span>{"\n"}{"  "}<span className="code-property">focus</span>: [{"\n"}{"    "}<span className="code-string">"Scalable APIs"</span>,{"\n"}{"    "}<span className="code-string">"Microservices"</span>,{"\n"}{"    "}<span className="code-string">"AI / RAG Pipelines"</span>,{"\n"}{"  "}],{"\n"}{"  "}<span className="code-property">currentlyExploring</span>: <span className="code-string">"n8n Automation"</span>,{"\n"}{"  "}<span className="code-property">available</span>: <span className="code-value">true</span>,{"\n"}{"}"};{"\n"}{"\n"}<span className="code-keyword">export default</span> <span className="code-variable">engineer</span>;</pre>
                  </div>
                </div>
                <div className="floating-card floating-card-1">
                  <div className="fc-icon green">✅</div>
                  <div>
                    <div className="fc-label">System Uptime</div>
                    <div className="fc-sub">99.97% last 12 months</div>
                  </div>
                </div>
                <div className="floating-card floating-card-2">
                  <div className="fc-icon blue">🚀</div>
                  <div>
                    <div className="fc-label">APIs Integrated</div>
                    <div className="fc-sub">10+ production APIs</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Bento Grid Stats */}
            <div className="bento-grid reveal">
              {/* <div class="bento-card bento-available">
    <div class="bento-number">✓</div>
    <div class="bento-label">Open to Work</div>
    <div class="bento-desc">Remote roles &amp; contracts worldwide</div>
  </div> */}
              <div className="bento-card">
                <div className="bento-number">6+</div>
                <div className="bento-label">Years Experience</div>
              </div>
              <div className="bento-card">
                <div className="bento-number">20+</div>
                <div className="bento-label">Projects Shipped</div>
              </div>
              <div className="bento-card">
                <div className="bento-number">10+</div>
                <div className="bento-label">APIs Integrated</div>
              </div>
              <div className="bento-card bento-health">
                <div className="bento-health-header">
                  <span className="health-dot pulse" />
                  <span className="health-label">System Health</span>
                </div>
                <div className="health-metrics">
                  <div className="h-metric">
                    <span className="h-val">99.9%</span>
                    <span className="h-lab">Uptime</span>
                  </div>
                  <div className="h-metric">
                    <span className="h-val">&lt;45ms</span>
                    <span className="h-lab">P99 Latency</span>
                  </div>
                </div>
                <div className="health-chart">
                  <svg viewBox="0 0 100 20" className="sparkline">
                    <path d="M0 15 L10 12 L20 18 L30 10 L40 14 L50 5 L60 8 L70 2 L80 10 L90 5 L100 8" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="bento-card bento-wide">
                <span className="bento-icon-lg">🤖</span>
                <div className="bento-label">AI &amp; RAG Specialist</div>
                <div className="bento-desc">LLMs, vector search, intelligent pipelines</div>
                <div className="bento-tag-group">
                  <span className="bento-tag">OpenAI</span>
                  <span className="bento-tag">LangChain</span>
                  <span className="bento-tag">Qdrant</span>
                </div>
              </div>
              <div className="bento-card bento-wide">
                <span className="bento-icon-lg">🔀</span>
                <div className="bento-label">Microservices Architect</div>
                <div className="bento-desc">Event-driven, independently deployable services</div>
                <div className="bento-tag-group">
                  <span className="bento-tag">RabbitMQ</span>
                  <span className="bento-tag">Docker</span>
                  <span className="bento-tag">NestJS</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== TECH STACK ==================== */}
        <section className="techstack" id="techstack">
          <div className="container">
            <div className="techstack-header reveal">
              <div className="section-label">Tech Stack</div>
              <h2 className="section-title">Tools I build with</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                A curated set of technologies I use to ship reliable, production-ready software — chosen for the right
                reasons, not the trendy ones.
              </p>
            </div>
            <div className="tech-categories">
              <div className="tech-category reveal" data-delay={0}>
                <h3>Backend Frameworks</h3>
                <div className="tech-grid">
                  <div className="tech-chip"><i className="devicon-laravel-original colored chip-icon" /> Laravel</div>
                  <div className="tech-chip"><i className="devicon-symfony-original colored chip-icon" /> Symfony</div>
                  <div className="tech-chip"><img src="https://cdn.simpleicons.org/codeigniter" className="si-icon chip-icon" alt="CodeIgniter" /> CodeIgniter</div>
                  <div className="tech-chip"><i className="devicon-nodejs-plain colored chip-icon" /> Node.js</div>
                  <div className="tech-chip"><i className="devicon-express-original chip-icon" /> Express.js</div>
                  <div className="tech-chip"><i className="devicon-nestjs-original colored chip-icon" /> NestJS</div>
                  <div className="tech-chip"><img src="https://cdn.simpleicons.org/fastify/888888" className="si-icon chip-icon" alt="Fastify" /> Fastify</div>
                </div>
              </div>
              <div className="tech-category reveal" data-delay={150}>
                <h3>Databases &amp; Cache</h3>
                <div className="tech-grid">
                  <div className="tech-chip"><i className="devicon-mongodb-plain colored chip-icon" /> MongoDB</div>
                  <div className="tech-chip"><i className="devicon-postgresql-plain colored chip-icon" /> PostgreSQL</div>
                  <div className="tech-chip"><i className="devicon-mysql-original colored chip-icon" /> MySQL</div>
                  <div className="tech-chip"><i className="devicon-redis-plain colored chip-icon" /> Redis</div>
                  <div className="tech-chip"><img src="https://cdn.simpleicons.org/qdrant" className="si-icon chip-icon" alt="Qdrant" />
                    Qdrant (Vector DB)</div>
                </div>
              </div>
              <div className="tech-category reveal" data-delay={300}>
                <h3>Architecture &amp; Infrastructure</h3>
                <div className="tech-grid">
                  <div className="tech-chip"><img src="https://cdn.simpleicons.org/rabbitmq" className="si-icon chip-icon" alt="RabbitMQ" /> Message Queues (RabbitMQ)</div>
                  <div className="tech-chip"><i className="devicon-docker-plain colored chip-icon" /> Docker</div>
                  <div className="tech-chip"><i className="devicon-amazonwebservices-plain-wordmark colored chip-icon" style={{ fontSize: '1.5rem' }} /> AWS / Cloud</div>
                  <div className="tech-chip"><i className="devicon-githubactions-plain colored chip-icon" /> CI/CD Pipelines</div>
                  <div className="tech-chip"><i className="devicon-graphql-plain colored chip-icon" /> GraphQL / REST</div>
                  <div className="tech-chip"><i className="devicon-nginx-original colored chip-icon" /> Nginx</div>
                </div>
              </div>
              <div className="tech-category reveal delay-3">
                <h3>AI &amp; Automation</h3>
                <div className="tech-grid">
                  <div className="tech-chip"><img src="https://api.iconify.design/simple-icons:openai.svg" className="si-icon chip-icon" alt="OpenAI" /> OpenAI / LLMs</div>
                  <div className="tech-chip"><img src="https://api.iconify.design/simple-icons:langchain.svg" className="si-icon chip-icon" alt="LangChain" /> LangChain</div>
                  <div className="tech-chip"><img src="https://cdn.simpleicons.org/n8n" className="si-icon chip-icon" alt="n8n" /> n8n
                    Automation</div>
                  <div className="tech-chip"><img src="https://api.iconify.design/simple-icons:dialogflow.svg" className="si-icon chip-icon" alt="Dialogflow" /> Dialogflow</div>
                  <div className="tech-chip"><i className="devicon-python-plain colored chip-icon" /> Python (AI Scripts)</div>
                  <div className="tech-chip"><img src="https://cdn.simpleicons.org/huggingface/FFD21E" className="si-icon chip-icon" alt="HuggingFace" /> HuggingFace / RAG</div>
                </div>
              </div>
              <div className="tech-category reveal delay-4">
                <h3>Integrations &amp; APIs</h3>
                <div className="tech-grid">
                  <div className="tech-chip"><img src="https://api.iconify.design/simple-icons:stripe.svg" className="si-icon chip-icon" alt="Stripe" /> Stripe</div>
                  <div className="tech-chip"><img src="https://api.iconify.design/simple-icons:ebay.svg" className="si-icon chip-icon" alt="eBay" /> eBay Trading API</div>
                  <div className="tech-chip"><img src="https://api.iconify.design/simple-icons:mailchimp.svg" className="si-icon chip-icon" alt="Mailchimp" /> Mailchimp</div>
                  <div className="tech-chip"><img src="https://api.iconify.design/simple-icons:googleanalytics.svg" className="si-icon chip-icon" alt="Google Analytics" /> Google Analytics 4</div>
                  <div className="tech-chip"><img src="https://api.iconify.design/simple-icons:twilio.svg" className="si-icon chip-icon" alt="Twilio" /> Webhooks / Events</div>
                  <div className="tech-chip"><img src="https://api.iconify.design/simple-icons:auth0.svg" className="si-icon chip-icon" alt="Auth0" />
                    OAuth 2.0 / JWT</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== PROJECTS ==================== */}
        <section className="projects" id="projects">
          <div className="container">
            <div className="projects-header reveal">
              <div className="section-label">Projects</div>
              <h2 className="section-title">Work that ships to production</h2>
              <p className="section-subtitle">
                Each project represents a real-world challenge solved with deliberate architectural decisions.
              </p>
            </div>
            <div className="slider-wrapper reveal">
              <div className="projects-slider">
                {/* Project 1 */}
                <div className="project-card">
                  <div className="project-info">
                    <span className="project-number">01 / 04</span>
                    <h3 className="project-title">Asset Management System</h3>
                    <p className="project-tags">MERN Stack • Marketplace • Role-based Access</p>
                    <p className="project-desc">
                      A full-featured asset management platform enabling organizations to catalog, track, and trade physical
                      and digital assets. Built with a marketplace layer that allows peer-to-peer asset transfers with
                      approval workflows, notifications, and audit trails.
                    </p>
                    <div className="impact-card">
                      <h4>KEY IMPACT</h4>
                      <ul>
                        <li>Multi-tenant architecture supporting independent organizations on a single deployment</li>
                        <li>Marketplace with real-time bid/ask system and transaction history</li>
                        <li>Role-based access control covering 5 distinct permission levels</li>
                        <li>Bulk import/export with CSV validation and async processing</li>
                      </ul>
                    </div>
                    <div className="project-links">
                      <span className="tech-chip">MongoDB</span>
                      <span className="tech-chip">Express.js</span>
                      <span className="tech-chip">React</span>
                      <span className="tech-chip">Node.js</span>
                      <span className="tech-chip">JWT Auth</span>
                      <span className="tech-chip">Socket.io</span>
                    </div>
                  </div>
                  <div className="project-visual">
                    <div className="blueprint-container">
                      <div className="blueprint-label">ARCHITECTURAL BLUEPRINT</div>
                      <div className="blueprint-graphic">
                        <div className="node" style={{ top: '70%', left: '15%' }}>Client App</div>
                        <div className="node" style={{ top: '60%', left: '45%', borderStyle: 'dashed' }}>API Gateway</div>
                        <div className="node" style={{ top: '50%', left: '75%', borderColor: 'var(--accent-secondary)' }}>MongoDB</div>
                        <div className="node" style={{ top: '70%', left: '75%', borderColor: 'var(--accent-tertiary)' }}>Redis</div>
                        <div className="node" style={{ top: '65%', left: '60%' }}>Asset Service</div>
                        <div className="line" style={{ top: '65%', left: '25%', width: '20%', transform: 'rotate(-10deg)' }} />
                        <div className="line" style={{ top: '65%', left: '55%', width: '20%', transform: 'rotate(10deg)' }} />
                        <div className="annotation" style={{ top: '50%', left: '15%' }}>Event-driven communication</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Project 2 */}
                <div className="project-card">
                  <div className="project-info">
                    <span className="project-number">02 / 04</span>
                    <h3 className="project-title">Real-time Trading Ledger</h3>
                    <p className="project-tags">Go • gRPC • PostgreSQL • Redis</p>
                    <p className="project-desc">
                      A high-performance distributed ledger system designed for low-latency financial transactions. Implements
                      the Raft consensus algorithm for consistency and uses gRPC for inter-service communication, achieving
                      sub-5ms latency for internal routing.
                    </p>
                    <div className="impact-card">
                      <h4>KEY IMPACT</h4>
                      <ul>
                        <li>Processed 10k+ transactions per second in stress testing</li>
                        <li>Zero data loss architecture with write-ahead logging and snapshots</li>
                        <li>Reduced database load by 60% through aggressive multi-layer caching</li>
                        <li>Automated failover with health-check monitoring via Prometheus</li>
                      </ul>
                    </div>
                    <div className="project-links">
                      <span className="tech-chip">GoLang</span>
                      <span className="tech-chip">gRPC</span>
                      <span className="tech-chip">PostgreSQL</span>
                      <span className="tech-chip">Redis</span>
                      <span className="tech-chip">Docker</span>
                      <span className="tech-chip">Kubernetes</span>
                    </div>
                  </div>
                  <div className="project-visual">
                    <div className="blueprint-container">
                      <div className="blueprint-label">ARCHITECTURAL BLUEPRINT</div>
                      <div className="blueprint-graphic">
                        <div className="node" style={{ top: '60%', left: '10%' }}>LB</div>
                        <div className="node" style={{ top: '60%', left: '30%' }}>Node A</div>
                        <div className="node" style={{ top: '40%', left: '30%' }}>Node B</div>
                        <div className="node" style={{ top: '80%', left: '30%' }}>Node C</div>
                        <div className="node" style={{ top: '60%', left: '60%', borderStyle: 'dotted' }}>Raft Consensus</div>
                        <div className="node" style={{ top: '60%', left: '85%', borderColor: 'var(--accent-secondary)' }}>State DB</div>
                        <div className="line" style={{ top: '65%', left: '15%', width: '15%' }} />
                        <div className="line" style={{ top: '65%', left: '40%', width: '20%' }} />
                        <div className="line" style={{ top: '65%', left: '70%', width: '15%' }} />
                        <div className="annotation" style={{ top: '30%', left: '40%' }}>Distributed Consensus Log</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Project 3 */}
                <div className="project-card">
                  <div className="project-info">
                    <span className="project-number">03 / 04</span>
                    <h3 className="project-title">AI Knowledge Graph</h3>
                    <p className="project-tags">Python • Neo4j • LangChain • FastAPI</p>
                    <p className="project-desc">
                      An automated knowledge extraction engine that transforms unstructured documentation into a queryable
                      graph database. Uses LLMs for entity relationship extraction and vector embeddings for semantic search
                      across the graph.
                    </p>
                    <div className="impact-card">
                      <h4>KEY IMPACT</h4>
                      <ul>
                        <li>Mapped 50,000+ relationships from 1,000+ technical docs</li>
                        <li>35% improvement in RAG response accuracy over flat vector search</li>
                        <li>Real-time graph visualization for interactive data exploration</li>
                        <li>Scalable pipeline processing via RabbitMQ task queues</li>
                      </ul>
                    </div>
                    <div className="project-links">
                      <span className="tech-chip">Python</span>
                      <span className="tech-chip">Neo4j</span>
                      <span className="tech-chip">LangChain</span>
                      <span className="tech-chip">OpenAI</span>
                      <span className="tech-chip">FastAPI</span>
                      <span className="tech-chip">RabbitMQ</span>
                    </div>
                  </div>
                  <div className="project-visual">
                    <div className="blueprint-container">
                      <div className="blueprint-label">ARCHITECTURAL BLUEPRINT</div>
                      <div className="blueprint-graphic">
                        <div className="node" style={{ top: '50%', left: '10%' }}>PDF/Doc</div>
                        <div className="node" style={{ top: '50%', left: '35%', borderStyle: 'dashed' }}>Extractor</div>
                        <div className="node" style={{ top: '30%', left: '60%', borderColor: 'var(--accent-tertiary)' }}>LLM Proxy</div>
                        <div className="node" style={{ top: '70%', left: '60%', borderColor: 'var(--accent-secondary)' }}>Neo4j</div>
                        <div className="node" style={{ top: '50%', left: '85%' }}>Query API</div>
                        <div className="line" style={{ top: '55%', left: '20%', width: '15%' }} />
                        <div className="line" style={{ top: '55%', left: '45%', width: '15%', transform: 'rotate(-30deg)' }} />
                        <div className="line" style={{ top: '55%', left: '45%', width: '15%', transform: 'rotate(30deg)' }} />
                        <div className="line" style={{ top: '40%', left: '70%', width: '15%', transform: 'rotate(45deg)' }} />
                        <div className="annotation" style={{ top: '75%', left: '20%' }}>Asynchronous Extraction Pipeline</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Project 4 */}
                <div className="project-card">
                  <div className="project-info">
                    <span className="project-number">04 / 04</span>
                    <h3 className="project-title">PostPilot AI Automator</h3>
                    <p className="project-tags">Node.js • Qdrant • Redis • AI Agents</p>
                    <p className="project-desc">
                      An autonomous social media orchestration engine that scrapes high-performing content, processes it via
                      LLMs,
                      and schedules multi-platform distribution. Features a RAG-based intelligence layer using Qdrant for
                      style-consistent generation.
                    </p>
                    <div className="impact-card">
                      <h4>KEY IMPACT</h4>
                      <ul>
                        <li>Fully autonomous pipeline from ingestion to multi-platform publishing</li>
                        <li>Vector-driven style mimicry achieving 90% brand voice alignment</li>
                        <li>Distributed task processing using BullMQ and Redis</li>
                        <li>Zero-intervention social media management for 5+ accounts</li>
                      </ul>
                    </div>
                    <div className="project-links">
                      <span className="tech-chip">Node.js</span>
                      <span className="tech-chip">Qdrant</span>
                      <span className="tech-chip">Redis</span>
                      <span className="tech-chip">OpenAI</span>
                      <span className="tech-chip">Puppeteer</span>
                    </div>
                  </div>
                  <div className="project-visual">
                    <div className="blueprint-container">
                      <div className="blueprint-label">ARCHITECTURAL BLUEPRINT</div>
                      <div className="blueprint-graphic">
                        <div className="node" style={{ top: '40%', left: '10%' }}>Scraper</div>
                        <div className="node" style={{ top: '20%', left: '40%', borderColor: 'var(--accent-tertiary)' }}>Qdrant DB</div>
                        <div className="node" style={{ top: '60%', left: '40%', borderStyle: 'dashed' }}>Agent Core</div>
                        <div className="node" style={{ top: '40%', left: '70%', borderColor: 'var(--accent-secondary)' }}>Scheduler</div>
                        <div className="node" style={{ top: '40%', left: '90%' }}>Social APIS</div>
                        <div className="line" style={{ top: '35%', left: '20%', width: '15%', transform: 'rotate(-25deg)' }} />
                        <div className="line" style={{ top: '55%', left: '20%', width: '15%', transform: 'rotate(25deg)' }} />
                        <div className="line" style={{ top: '40%', left: '55%', width: '12%' }} />
                        <div className="annotation" style={{ top: '75%', left: '35%' }}>RAG-Enhanced Content Loops</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-controls">
                <button className="slider-arrow" id="projPrev" aria-label="Previous project">←</button>
                <div className="slider-nav" data-slider="projects">
                  <button className="nav-dot active" data-index={0} />
                  <button className="nav-dot" data-index={1} />
                  <button className="nav-dot" data-index={2} />
                  <button className="nav-dot" data-index={3} />
                </div>
                <span className="slide-counter" id="projCounter">01 / 04</span>
                <button className="slider-arrow" id="projNext" aria-label="Next project">→</button>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== LABS / SHOWCASE ==================== */}
        <section className="labs" id="labs">
          <div className="container">
            <div className="labs-header reveal">
              <div className="section-label">Engineering Labs</div>
              <h2 className="section-title">Interactive POCs &amp; Automations</h2>
              <p className="section-subtitle">
                A deep dive into AI-driven workflows and experimental backend builds — from zero to production.
              </p>
            </div>
            <div className="poc-grid reveal">
              {/* POC 1 */}
              <div className="poc-card">
                <div className="poc-card-header" style={{ '--poc-color': '#6366f1', '--poc-glow': 'rgba(99,102,241,0.15)' } as React.CSSProperties}>
                  <div className="poc-icon">🔗</div>
                  <span className="poc-badge">LangChain</span>
                </div>
                <div className="poc-card-body">
                  <h3 className="poc-title">LangChain RAG Pipeline</h3>
                  <p className="poc-desc">Intelligent document Q&amp;A system using LangChain, OpenAI, and Qdrant vector store
                    with semantic chunking.</p>
                  <div className="poc-metrics">
                    <div className="poc-metric"><span className="poc-metric-val">50K+</span><span className="poc-metric-lab">Docs
                      indexed</span></div>
                    <div className="poc-metric"><span className="poc-metric-val">92%</span><span className="poc-metric-lab">Answer
                      accuracy</span></div>
                  </div>
                  <div className="poc-tags">
                    <span className="poc-tag">Python</span>
                    <span className="poc-tag">OpenAI</span>
                    <span className="poc-tag">Qdrant</span>
                    <span className="poc-tag">LangChain</span>
                  </div>
                </div>
                <div className="poc-card-footer">
                  <a href="poc.html#rag-pipeline" className="poc-link poc-link-primary">Explore POC →</a>
                  <a href="#" className="poc-link poc-link-ghost">Source 🐙</a>
                </div>
              </div>
              {/* POC 2 */}
              <div className="poc-card">
                <div className="poc-card-header" style={{ '--poc-color': '#06b6d4', '--poc-glow': 'rgba(6,182,212,0.15)' } as React.CSSProperties}>
                  <div className="poc-icon">⚡</div>
                  <span className="poc-badge">n8n</span>
                </div>
                <div className="poc-card-body">
                  <h3 className="poc-title">Autonomous Outreach Flow</h3>
                  <p className="poc-desc">Scalable n8n workflow for automated lead generation, CRM sync, and personalized email
                    outreach at scale.</p>
                  <div className="poc-metrics">
                    <div className="poc-metric"><span className="poc-metric-val">3x</span><span className="poc-metric-lab">Lead
                      throughput</span></div>
                    <div className="poc-metric"><span className="poc-metric-val">0</span><span className="poc-metric-lab">Manual
                      steps</span></div>
                  </div>
                  <div className="poc-tags">
                    <span className="poc-tag">n8n</span>
                    <span className="poc-tag">Stripe</span>
                    <span className="poc-tag">Webhooks</span>
                    <span className="poc-tag">REST</span>
                  </div>
                </div>
                <div className="poc-card-footer">
                  <a href="poc.html#outreach-flow" className="poc-link poc-link-primary">View Workflow →</a>
                  <a href="#" className="poc-link poc-link-ghost">Config 📜</a>
                </div>
              </div>
              {/* POC 3 */}
              <div className="poc-card">
                <div className="poc-card-header" style={{ '--poc-color': '#a855f7', '--poc-glow': 'rgba(168,85,247,0.15)' } as React.CSSProperties}>
                  <div className="poc-icon">🤖</div>
                  <span className="poc-badge">AI Agents</span>
                </div>
                <div className="poc-card-body">
                  <h3 className="poc-title">Multi-Agent Researcher</h3>
                  <p className="poc-desc">A crew of autonomous agents coordinating via CrewAI to research, summarize, and
                    synthesize complex topics.</p>
                  <div className="poc-metrics">
                    <div className="poc-metric"><span className="poc-metric-val">5</span><span className="poc-metric-lab">Agent
                      roles</span></div>
                    <div className="poc-metric"><span className="poc-metric-val">GPT-4o</span><span className="poc-metric-lab">Backbone
                      LLM</span></div>
                  </div>
                  <div className="poc-tags">
                    <span className="poc-tag">CrewAI</span>
                    <span className="poc-tag">GPT-4o</span>
                    <span className="poc-tag">LlamaIndex</span>
                  </div>
                </div>
                <div className="poc-card-footer">
                  <a href="poc.html#multi-agent" className="poc-link poc-link-primary">Agent Log →</a>
                  <a href="#" className="poc-link poc-link-ghost">GitHub 🐙</a>
                </div>
              </div>
              {/* POC 4 */}
              <div className="poc-card">
                <div className="poc-card-header" style={{ '--poc-color': '#f59e0b', '--poc-glow': 'rgba(245,158,11,0.15)' } as React.CSSProperties}>
                  <div className="poc-icon">🛠️</div>
                  <span className="poc-badge">Custom MCP</span>
                </div>
                <div className="poc-card-body">
                  <h3 className="poc-title">Redis MCP Server</h3>
                  <p className="poc-desc">A custom Model Context Protocol server enabling AI models to directly interact with
                    Redis clusters via tool calls.</p>
                  <div className="poc-metrics">
                    <div className="poc-metric"><span className="poc-metric-val">12</span><span className="poc-metric-lab">Tool
                      actions</span></div>
                    <div className="poc-metric"><span className="poc-metric-val">&lt;2ms</span><span className="poc-metric-lab">Avg
                      latency</span></div>
                  </div>
                  <div className="poc-tags">
                    <span className="poc-tag">TypeScript</span>
                    <span className="poc-tag">Node.js</span>
                    <span className="poc-tag">Redis</span>
                  </div>
                </div>
                <div className="poc-card-footer">
                  <a href="poc.html#redis-mcp" className="poc-link poc-link-primary">Docs →</a>
                  <a href="#" className="poc-link poc-link-ghost">NPM 📦</a>
                </div>
              </div>
              {/* POC 5 */}
              <div className="poc-card">
                <div className="poc-card-header" style={{ '--poc-color': '#10b981', '--poc-glow': 'rgba(16,185,129,0.15)' } as React.CSSProperties}>
                  <div className="poc-icon">☁️</div>
                  <span className="poc-badge">Infrastructure</span>
                </div>
                <div className="poc-card-body">
                  <h3 className="poc-title">Dynamic CloudFront Injector</h3>
                  <p className="poc-desc">Non-destructive on-the-fly S3→CloudFront URL swapping using Eloquent model traits and
                    Laravel accessors.</p>
                  <div className="poc-metrics">
                    <div className="poc-metric"><span className="poc-metric-val">0</span><span className="poc-metric-lab">DB
                      migrations</span></div>
                    <div className="poc-metric"><span className="poc-metric-val">CDN</span><span className="poc-metric-lab">Instant
                      rollout</span></div>
                  </div>
                  <div className="poc-tags">
                    <span className="poc-tag">PHP</span>
                    <span className="poc-tag">Laravel</span>
                    <span className="poc-tag">AWS S3</span>
                    <span className="poc-tag">CloudFront</span>
                  </div>
                </div>
                <div className="poc-card-footer">
                  <a href="poc.html#cloudfront" className="poc-link poc-link-primary">Review Trait →</a>
                  <a href="#" className="poc-link poc-link-ghost">Docs 📄</a>
                </div>
              </div>
              {/* POC 6 — PostPilot */}
              <div className="poc-card">
                <div className="poc-card-header" style={{ '--poc-color': '#ec4899', '--poc-glow': 'rgba(236,72,153,0.15)' } as React.CSSProperties}>
                  <div className="poc-icon">📡</div>
                  <span className="poc-badge">AI Automation</span>
                </div>
                <div className="poc-card-body">
                  <h3 className="poc-title">PostPilot AI Automator</h3>
                  <p className="poc-desc">Autonomous social media orchestration — scrapes, LLM-generates, and schedules posts
                    across 5+ platforms with RAG style mimicry.</p>
                  <div className="poc-metrics">
                    <div className="poc-metric"><span className="poc-metric-val">90%</span><span className="poc-metric-lab">Brand
                      alignment</span></div>
                    <div className="poc-metric"><span className="poc-metric-val">5+</span><span className="poc-metric-lab">Platforms</span></div>
                  </div>
                  <div className="poc-tags">
                    <span className="poc-tag">Node.js</span>
                    <span className="poc-tag">Qdrant</span>
                    <span className="poc-tag">BullMQ</span>
                    <span className="poc-tag">OpenAI</span>
                  </div>
                </div>
                <div className="poc-card-footer">
                  <a href="poc.html#postpilot" className="poc-link poc-link-primary">Explore →</a>
                  <a href="#" className="poc-link poc-link-ghost">GitHub 🐙</a>
                </div>
              </div>
            </div>{/* end .poc-grid */}
            {/* View All POC CTA */}
            <div className="labs-cta reveal">
              <a href="poc.html" className="btn-poc-all">
                <span>View All POCs &amp; Labs</span>
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <p className="labs-cta-sub">8 experimental builds · AI, infrastructure, integrations</p>
            </div>
          </div>
        </section>
        {/* ==================== GITHUB ACTIVITY ==================== */}
        <section className="github-section" id="github">
          <div className="container">
            <div className="github-header reveal">
              <div className="section-label">Open Source Activity</div>
              <h2 className="section-title">Shipping code, daily.</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                My public GitHub contribution graph — evidence that this isn't just a portfolio.
              </p>
            </div>
            <div className="github-calendar-wrap reveal">
              <div className="github-calendar-card">
                <div className="github-calendar-header">
                  <span className="github-user">🐙 genius-asif-hub</span>
                  <a href="https://github.com/genius-asif-hub" target="_blank" rel="noopener noreferrer" className="github-profile-link">View Profile →</a>
                </div>
                <div className="github-calendar-body">
                  <GitHubActivityCalendar />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== EXPERIENCE ==================== */}
        <section className="experience" id="experience">
          <div className="container">
            <div className="exp-header reveal">
              <div className="section-label">Experience</div>
              <h2 className="section-title">Where I've worked</h2>
              <p className="section-subtitle">
                Roles where delivery, ownership, and quality were non-negotiable.
              </p>
            </div>
            <div className="exp-grid">
              <div className="exp-card reveal">
                <div className="exp-period">2022 — Present</div>
                <div className="exp-role">Senior Backend Engineer</div>
                <div className="exp-company">Remote / Freelance &amp; Product Teams</div>
                <p className="exp-desc">
                  Designing and delivering backend systems for SaaS products and agencies. Leading architecture decisions on
                  microservices projects, integrating complex third-party APIs, and shipping AI-augmented features using RAG
                  pipelines and LLM orchestration.
                </p>
                <div className="exp-tags">
                  <span className="exp-tag">NestJS</span>
                  <span className="exp-tag">PostgreSQL</span>
                  <span className="exp-tag">Microservices</span>
                  <span className="exp-tag">AI/RAG</span>
                  <span className="exp-tag">Stripe</span>
                </div>
              </div>
              <div className="exp-card reveal delay-1">
                <div className="exp-period">2020 — 2022</div>
                <div className="exp-role">Backend Engineer</div>
                <div className="exp-company">E-commerce Platform Team</div>
                <p className="exp-desc">
                  Built and maintained backend services for a multi-vendor e-commerce platform. Owned the eBay marketplace
                  integration, inventory sync engine, and payment orchestration layer using Stripe. Improved API response
                  times by 40% through query optimization and strategic caching.
                </p>
                <div className="exp-tags">
                  <span className="exp-tag">Laravel</span>
                  <span className="exp-tag">MySQL</span>
                  <span className="exp-tag">eBay API</span>
                  <span className="exp-tag">Redis</span>
                </div>
              </div>
              <div className="exp-card reveal delay-2">
                <div className="exp-period">2018 — 2020</div>
                <div className="exp-role">Full-Stack Developer</div>
                <div className="exp-company">Digital Agency</div>
                <p className="exp-desc">
                  Delivered end-to-end web applications for clients across real estate, retail, and service sectors.
                  Introduced standardized API patterns, shifted team from monolithic to service-oriented design, and mentored
                  junior developers on testing and code quality.
                </p>
                <div className="exp-tags">
                  <span className="exp-tag">Node.js</span>
                  <span className="exp-tag">Laravel</span>
                  <span className="exp-tag">MongoDB</span>
                  <span className="exp-tag">React</span>
                </div>
              </div>
              <div className="exp-card reveal delay-3">
                <div className="exp-period">2017 — 2018</div>
                <div className="exp-role">Junior PHP Developer</div>
                <div className="exp-company">Software Consultancy</div>
                <p className="exp-desc">
                  Started career building custom web applications and CMS integrations. Quickly moved from CRUD to ownership
                  of client API integrations, payment flows, and database design. Adopted Laravel and became the team's go-to
                  on Eloquent optimization.
                </p>
                <div className="exp-tags">
                  <span className="exp-tag">PHP</span>
                  <span className="exp-tag">CodeIgniter</span>
                  <span className="exp-tag">MySQL</span>
                  <span className="exp-tag">REST APIs</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== TESTIMONIALS ==================== */}
        <section className="testimonials" id="testimonials">
          <div className="container">
            <div className="testimonials-header reveal">
              <div className="section-label">Testimonials</div>
              <h2 className="section-title">What people say</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>Feedback from people I've built with.</p>
            </div>
            <div className="testimonials-grid reveal">
              <div className="testimonial-card">
                <div className="testimonial-quote">❝</div>
                <p className="testimonial-text">
                  Asif architected our entire backend from scratch — microservices, job queues, Stripe integration. He delivered
                  in half the time we estimated, with zero production incidents in the first 3 months. Rare-level engineer.
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}>JM</div>
                  <div>
                    <div className="testimonial-name">James Mitchell</div>
                    <div className="testimonial-role">CTO, SaaS Startup</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-quote">❝</div>
                <p className="testimonial-text">
                  Working with Asif was a completely different experience. He asked the right questions before writing a single
                  line of code, delivered clean documentation, and the eBay + Stripe integration he built has been running
                  flawlessly for 18 months.
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #06b6d4, #6366f1)' }}>SR</div>
                  <div>
                    <div className="testimonial-name">Sarah Reynolds</div>
                    <div className="testimonial-role">Product Manager, E-commerce Platform</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-quote">❝</div>
                <p className="testimonial-text">
                  Our RAG pipeline was a mess of spaghetti code. Asif refactored it into a clean, modular system with proper
                  vector chunking strategies and prompt engineering. Answer accuracy jumped from 68% to 91%. Genuinely
                  impressive work.
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>AK</div>
                  <div>
                    <div className="testimonial-name">Arjun Kumar</div>
                    <div className="testimonial-role">Lead AI Engineer, AI Startup</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== CONTACT ==================== */}
        <section className="contact" id="contact">
          <div className="contact-bg-orb" />
          <div className="container">
            <div className="contact-inner">
              <div className="contact-content reveal-left">
                <div className="section-label">Contact</div>
                <h2 className="section-title">Let's build something that matters.</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1rem', marginTop: 16 }}>
                  I'm open to senior backend roles, contract projects, and technical consulting. If you have a problem worth
                  solving — let's talk.
                </p>
                <a href="mailto:asif@krishaweb.com" className="contact-email-link">
                  ✉️ asif@krishaweb.com
                </a>
                <div className="contact-socials">
                  <a href="#" className="social-link">
                    <div className="social-icon">🔗</div>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>LinkedIn</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>linkedin.com/in/genius-asif</div>
                    </div>
                    <span className="social-arrow">→</span>
                  </a>
                  <a href="#" className="social-link">
                    <div className="social-icon">🐙</div>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>GitHub</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>github.com/genius-asif-hub</div>
                    </div>
                    <span className="social-arrow">→</span>
                  </a>
                  <a href="#" className="social-link">
                    <div className="social-icon">🐦</div>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>Twitter / X</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>@genius-asif</div>
                    </div>
                    <span className="social-arrow">→</span>
                  </a>
                </div>
              </div>
              <div className="contact-form reveal-right">
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 24, color: 'var(--text-primary)' }}>Send a message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        {/* ==================== FOOTER ==================== */}
        <footer className="footer">
          <div className="container footer-inner">
            <div className="footer-logo">asif<span>.</span>dev</div>
            <div className="footer-copy">© 2026 Asif Shaikh. Built with care, shipped with precision.</div>
            <div className="footer-links">
              <a href="#hero">Top ↑</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </footer>
        {/* Live System Feed */}
        <div className="live-feed" id="liveFeed" />
        {/* Floating Terminal Dashboard */}
        <div className="terminal-dashboard" id="terminalDashboard">
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
            </div>
            <div className="terminal-title">System Runtime Feed</div>
            <div style={{ width: 32 }} />{/* Spacer */}
          </div>
          <div className="terminal-body" id="terminalBody">
            {/* Logs will be injected here */}
            <div className="log-entry"><span>[12:54:27]</span> SYSTEM: Kernel initialized. Ready for interaction.</div>
          </div>
        </div>
      </div>


      <Script src="/script.js" strategy="afterInteractive" />
      <Script src="/live-feed.js" strategy="afterInteractive" />
    </>
  );
}
