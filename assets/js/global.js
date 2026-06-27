/* ============================================================
   EYE OF SAURON PLATFORM — Global JavaScript
   ============================================================ */

'use strict';

// ── Translations Store ─────────────────────────────────────────
const translations = {
  pt: {
    'nav.projects':  'Projetos',
    'nav.blog':      'Blog',
    'nav.about':     'Sobre',
    'nav.contact':   'Contato',
    'hero.label':    'Eye of Sauron Platform',
    'hero.title':    'Construindo o Futuro com IA',
    'hero.subtitle': 'Agentes Autônomos • Análise de Dados • Inovação',
    'hero.desc':     'Uma plataforma de IA com três produtos autônomos — vigilância de dados públicos, engenharia de software e engenharia de dados/MLOps — unidos por um mesmo idioma de alertas e ética.',
    'hero.cta1':     'Ver Projetos',
    'hero.cta2':     'Sobre Mim',
    'brands.label':  'Ecossistema',
    'brands.title':  'Minhas Marcas',
    'brands.desc':   'Três produtos que compõem a plataforma — vigilância de dados públicos, engenharia de software autônoma e engenharia de dados/MLOps — unidos por um mesmo idioma de alertas e ética.',
    'eos.title':     'Eye of Sauron',
    'eos.desc':      'Plataforma de análise e monitoramento de dados. Projetos que enxergam padrões onde outros veem ruído — combate à corrupção, mercado imobiliário e análise de logs.',
    'eos.cta':       'Explorar',
    'dev.title':     'Devinho',
    'dev.desc':      'Engenheiro de Software Autônomo — um agente de IA capaz de criar, testar e implantar software de forma independente, similar ao Devin AI.',
    'dev.cta':       'Conhecer',
    'projects.label':'Portfólio',
    'projects.title':'Projetos em Destaque',
    'projects.desc': 'Uma seleção dos projetos mais impactantes da plataforma.',
    'projects.all':  'Ver Todos os Projetos',
    'skills.label':  'Stack',
    'skills.title':  'Tecnologias & Habilidades',
    'blog.label':    'Blog',
    'blog.title':    'Artigos Técnicos',
    'blog.desc':     'Insights sobre IA, análise de dados e projetos em desenvolvimento.',
    'blog.read':     'Ler artigo',
    'blog.all':      'Ver todos os artigos',
    'footer.tagline':'Construindo inteligência que transforma realidades.',
    'footer.platform':'Plataforma',
    'footer.connect':'Conectar',
    'footer.copy':   '© 2025 Eye of Sauron Platform. Todos os direitos reservados.',
    'status.active':       'Ativo',
    'status.development':  'Em Desenvolvimento',
    'status.planning':     'Planejamento',
  },
  en: {
    'nav.projects':  'Projects',
    'nav.blog':      'Blog',
    'nav.about':     'About',
    'nav.contact':   'Contact',
    'hero.label':    'Eye of Sauron Platform',
    'hero.title':    'Building the Future with AI',
    'hero.subtitle': 'Autonomous Agents • Data Analysis • Innovation',
    'hero.desc':     'An AI platform with three autonomous products — public-data surveillance, software engineering, and data engineering/MLOps — bound by a shared language of alerts and ethics.',
    'hero.cta1':     'View Projects',
    'hero.cta2':     'About Me',
    'brands.label':  'Ecosystem',
    'brands.title':  'My Brands',
    'brands.desc':   'Three products that make up the platform — public-data surveillance, autonomous software engineering, and data engineering/MLOps — bound by a shared language of alerts and ethics.',
    'eos.title':     'Eye of Sauron',
    'eos.desc':      'Data analysis and monitoring platform. Projects that see patterns where others see noise — anti-corruption, real estate, and log analysis.',
    'eos.cta':       'Explore',
    'dev.title':     'Devinho',
    'dev.desc':      'Autonomous Software Engineer — an AI agent capable of creating, testing and deploying software independently, similar to Devin AI.',
    'dev.cta':       'Learn More',
    'projects.label':'Portfolio',
    'projects.title':'Featured Projects',
    'projects.desc': 'A selection of the most impactful projects on the platform.',
    'projects.all':  'View All Projects',
    'skills.label':  'Stack',
    'skills.title':  'Technologies & Skills',
    'blog.label':    'Blog',
    'blog.title':    'Technical Articles',
    'blog.desc':     'Insights on AI, data analysis and projects in development.',
    'blog.read':     'Read article',
    'blog.all':      'View all articles',
    'footer.tagline':'Building intelligence that transforms realities.',
    'footer.platform':'Platform',
    'footer.connect':'Connect',
    'footer.copy':   '© 2025 Eye of Sauron Platform. All rights reserved.',
    'status.active':       'Active',
    'status.development':  'In Development',
    'status.planning':     'Planning',
  }
};

// ── Language Manager ──────────────────────────────────────────
const LangManager = {
  current: 'pt',

  init() {
    const saved = localStorage.getItem('eos_lang') || 'pt';
    this.set(saved, false);
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => this.set(btn.dataset.lang));
    });
  },

  set(lang, save = true) {
    this.current = lang;
    if (save) localStorage.setItem('eos_lang', lang);

    // Update buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Translate all elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const text = translations[lang]?.[key];
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.innerHTML = text;
        }
      }
    });

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }
};

// ── Navbar ────────────────────────────────────────────────────
const NavbarManager = {
  init() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (!navbar) return;

    // Scroll effect
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });

    // Mobile menu
    hamburger?.addEventListener('click', () => {
      navLinks?.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      const isOpen = navLinks?.classList.contains('open');
      if (spans[0]) spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
      if (spans[1]) spans[1].style.opacity = isOpen ? '0' : '1';
      if (spans[2]) spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
    });

    // Close menu on link click
    navLinks?.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    // Active link highlight
    this.highlightActive();
  },

  highlightActive() {
    const path = window.location.pathname;
    document.querySelectorAll('.navbar-links a').forEach(a => {
      const href = a.getAttribute('href');
      if (href && path.includes(href) && href !== '/' && href !== 'index.html') {
        a.classList.add('active');
        a.style.color = 'var(--neon-cyan)';
      }
    });
  }
};

// ── Scroll Reveal ────────────────────────────────────────────
const ScrollReveal = {
  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
};

// ── Particle Canvas ──────────────────────────────────────────
const ParticleSystem = {
  canvas: null,
  ctx: null,
  particles: [],
  mouse: { x: 0, y: 0 },
  animId: null,

  init(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    this.createParticles();
    this.bindEvents();
    this.animate();
  },

  resize() {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
  },

  createParticles() {
    this.particles = [];
    const count = Math.floor((window.innerWidth * window.innerHeight) / 12000);
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x:      Math.random() * this.canvas.width,
        y:      Math.random() * this.canvas.height,
        vx:     (Math.random() - 0.5) * 0.4,
        vy:     (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        alpha:  Math.random() * 0.5 + 0.2,
        color:  Math.random() > 0.5 ? '0, 245, 255' : '124, 58, 237',
      });
    }
  },

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
    }, { passive: true });

    window.addEventListener('mousemove', e => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    }, { passive: true });
  },

  drawParticle(p) {
    this.ctx.beginPath();
    this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
    this.ctx.fill();
  },

  drawConnections(p, index) {
    for (let j = index + 1; j < this.particles.length; j++) {
      const p2 = this.particles[j];
      const dx = p.x - p2.x;
      const dy = p.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.ctx.strokeStyle = `rgba(0, 245, 255, ${(1 - dist / 120) * 0.08})`;
        this.ctx.lineWidth = 0.5;
        this.ctx.stroke();
      }
    }

    // Mouse attraction
    const mdx = p.x - this.mouse.x;
    const mdy = p.y - this.mouse.y;
    const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
    if (mdist < 150) {
      this.ctx.beginPath();
      this.ctx.moveTo(p.x, p.y);
      this.ctx.lineTo(this.mouse.x, this.mouse.y);
      this.ctx.strokeStyle = `rgba(0, 245, 255, ${(1 - mdist / 150) * 0.15})`;
      this.ctx.lineWidth = 0.5;
      this.ctx.stroke();
    }
  },

  update(p) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > this.canvas.width)  p.vx *= -1;
    if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;
  },

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach((p, i) => {
      this.update(p);
      this.drawParticle(p);
      this.drawConnections(p, i);
    });
    this.animId = requestAnimationFrame(() => this.animate());
  }
};

// ── Typed Text Effect ─────────────────────────────────────────
const TypedText = {
  init(elementId, texts, speed = 80, pause = 2000) {
    const el = document.getElementById(elementId);
    if (!el) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const current = texts[textIndex];
      const displayed = isDeleting
        ? current.substring(0, charIndex--)
        : current.substring(0, charIndex++);

      el.textContent = displayed;

      let delay = isDeleting ? speed / 2 : speed;

      if (!isDeleting && charIndex > current.length) {
        delay = pause;
        isDeleting = true;
      } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length;
        delay = 500;
      }

      setTimeout(type, delay);
    };
    type();
  }
};

// ── Counter Animation ─────────────────────────────────────────
const CounterAnimation = {
  init() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  },

  animate(el) {
    const target = parseInt(el.dataset.counter, 10);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const update = () => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current);
      if (current < target) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }
};

// ── Filter System (Projects) ──────────────────────────────────
const FilterSystem = {
  init() {
    const filterBtns = document.querySelectorAll('[data-filter]');
    const filterItems = document.querySelectorAll('[data-category]');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        filterItems.forEach(item => {
          const show = filter === 'all' || item.dataset.category?.includes(filter);
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = show ? '' : 'none';
            if (show) {
              requestAnimationFrame(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
              });
            }
          }, 150);
          item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        });
      });
    });
  }
};

// ── Copy to Clipboard ─────────────────────────────────────────
const Clipboard = {
  init() {
    document.querySelectorAll('[data-copy]').forEach(btn => {
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(btn.dataset.copy).then(() => {
          const orig = btn.innerHTML;
          btn.innerHTML = '✓ Copiado!';
          btn.style.color = 'var(--neon-green)';
          setTimeout(() => { btn.innerHTML = orig; btn.style.color = ''; }, 2000);
        });
      });
    });
  }
};

// ── Smooth Anchor Scroll ──────────────────────────────────────
const SmoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }
};

// ── Cursor Glow ───────────────────────────────────────────────
const CursorGlow = {
  init() {
    if (window.matchMedia('(hover: none)').matches) return; // skip touch

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.cssText = `
      position: fixed; pointer-events: none; z-index: 9999;
      width: 300px; height: 300px; border-radius: 50%;
      background: radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      transition: transform 0.1s ease;
    `;
    document.body.appendChild(glow);

    window.addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    }, { passive: true });
  }
};

// ── App Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  LangManager.init();
  NavbarManager.init();
  ScrollReveal.init();
  CounterAnimation.init();
  FilterSystem.init();
  Clipboard.init();
  SmoothScroll.init();
  CursorGlow.init();

  // Page-specific inits
  if (document.getElementById('particle-canvas')) {
    ParticleSystem.init('particle-canvas');
  }

  if (document.getElementById('typed-text')) {
    TypedText.init('typed-text', [
      'Agentes Autônomos de IA',
      'Análise Inteligente de Dados',
      'Combate à Corrupção',
      'Oportunidades Imobiliárias',
      'Engenharia de Software Autônoma',
    ]);
  }
});

// Export for use in other modules
window.EOS = {
  LangManager,
  NavbarManager,
  ScrollReveal,
  ParticleSystem,
  TypedText,
  FilterSystem,
};
