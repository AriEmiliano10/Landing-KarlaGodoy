import {
  EBOOKS_DATA,
  SERVICE_PLANS,
  TESTIMONIALS_DATA,
  FAQ_ITEMS,
  INSTAGRAM_PROFILE,
  INSTAGRAM_POSTS_DATA,
  WHATSAPP_NUMBER,
} from './data.js';
import { appHelpers } from './helpers.js';
import { modalViews } from './modals.js';

// src/js/app-core.js
// Lógica y renderizado interactivo en Vanilla JS para la landing page de Karla Godoy.

class KarlaApp {
  constructor() {
    this.scrollTicking = false;

    this.state = {
      isBookingOpen: false,
      preselectedPlan: null,
      preselectedModality: 'online',
      activeModality: 'online',
      previewEbook: null,
      whatsappOpen: false,
      mobileMenuOpen: false,
      isPanelAccessOpen: false,
      activeMenu: 'inicio',
      faqIndexOpen: null,
      bookingForm: this.getDefaultBookingForm(),
      calculatorInputs: {
        gender: 'female',
        age: 30,
        weightKg: 62,
        heightCm: 165,
        activityLevel: 'moderate',
        goal: 'fat_loss',
      },
      calculatorResult: null,
    };

    this.init();
  }

  init() {
    this.render();
    this.setupGlobalScrollListener();
  }

  renderTemplate(templateId, hydrate = null) {
    const template = document.getElementById(templateId);
    if (!template) return '';

    const node = template.content.firstElementChild?.cloneNode(true);
    if (!node) return '';

    if (hydrate) {
      hydrate(node);
    }

    return node.outerHTML;
  }

  render() {
    const appDiv = document.getElementById('app-root');
    if (!appDiv) return;

    appDiv.innerHTML = `
      <!-- NAVBAR -->
      ${this.renderNavbar()}

      <!-- HERO -->
      ${this.renderHero()}

      <!-- OUTCOMES SECTION -->
      ${this.renderOutcomesSection()}

      <!-- CONSULTATION VALUE SECTION -->
      ${this.renderConsultationValueSection()}

      <!-- SERVICES SECTION -->
      ${this.renderServicesSection()}

      <!-- HOW IT WORKS SECTION -->
      ${this.renderCalculatorSection()}

      <!-- ABOUT SECTION -->
      ${this.renderAboutSection()}

      <!-- CURATED INSTAGRAM CONTENT -->
      ${this.renderInstagramSection()}

      <!-- EBOOKS SECTION -->
      ${this.renderEbooksSection()}

      <!-- TESTIMONIALS SECTION -->
      ${this.renderTestimonialsSection()}

      <!-- FAQ SECTION -->
      ${this.renderFaqSection()}

      <!-- FINAL SALES CTA SECTION -->
      ${this.renderSalesCtaSection()}

      <!-- FOOTER -->
      ${this.renderFooter()}

      <!-- FLOATING WHATSAPP WIDGET -->
      ${this.renderWhatsAppWidget()}

      <!-- MOBILE STICKY CTA -->
      ${this.renderMobileStickyCta()}

      <!-- BOOKING MODAL -->
      ${this.state.isBookingOpen ? this.renderBookingModal() : ''}

      <!-- EBOOK DETAILS MODAL -->
      ${this.state.previewEbook ? this.renderEbookModal() : ''}

      <!-- PANEL DEMO ACCESS MODAL -->
      ${this.state.isPanelAccessOpen ? this.renderPanelAccessModal() : ''}
    `;

    // Inicializar iconos solo si la libreria ya esta disponible.
    if (window.lucide?.createIcons) {
      window.lucide.createIcons();
    }
    this.attachDomEvents();
  }

  renderNavbar() {
    const activeDesktop = 'bg-[#F2EFE9] border border-[#d0bdac]/70 text-[#4f0911]';
    const inactiveDesktop = 'text-[#713132] hover:bg-[#F2EFE9] hover:text-[#4f0911]';
    const activeMobile = 'bg-[#916066]/15 text-[#4f0911]';
    const inactiveMobile = 'text-[#2c2421] hover:bg-[#916066]/10 hover:text-[#4f0911]';

    return `
      <header id="navbar-container" class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-transparent py-5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between">
            <a href="#" class="flex items-center">
              <img 
                src="./assets/images/logo.svg" 
                alt="Logo Karla Godoy" 
                decoding="async"
                class="h-16 w-auto object-contain" 
              />
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center gap-2 bg-white/85 backdrop-blur-sm border border-[#d0bdac]/60 rounded-full px-2 py-1.5 shadow-sm">
              <a href="#inicio" data-nav-key="inicio" class="nav-link px-4 py-2 rounded-full font-sans text-[11px] uppercase tracking-widest font-bold transition-all ${this.state.activeMenu === 'inicio' ? activeDesktop : inactiveDesktop}">Inicio</a>
              <a href="#sobre-mi" data-nav-key="metodo" class="nav-link px-4 py-2 rounded-full font-sans text-[11px] uppercase tracking-widest font-bold transition-all ${this.state.activeMenu === 'metodo' ? activeDesktop : inactiveDesktop}">Método</a>
              <a href="#consultas" data-nav-key="servicios" class="nav-link px-4 py-2 rounded-full font-sans text-[11px] uppercase tracking-widest font-bold transition-all ${this.state.activeMenu === 'servicios' ? activeDesktop : inactiveDesktop}">Servicios</a>
              <a href="#e-books" data-nav-key="paquetes" class="nav-link px-4 py-2 rounded-full font-sans text-[11px] uppercase tracking-widest font-bold transition-all ${this.state.activeMenu === 'paquetes' ? activeDesktop : inactiveDesktop}">Programas</a>
              <a href="#agenda-cta" data-nav-key="agenda" class="nav-link px-4 py-2 rounded-full font-sans text-[11px] uppercase tracking-widest font-bold transition-all ${this.state.activeMenu === 'agenda' ? activeDesktop : inactiveDesktop}">Agenda</a>
            </nav>

            <!-- HT Buttons -->
            <div class="hidden md:flex items-center gap-4">
              <button id="nav-panel-access-btn" class="px-4 py-3 rounded-full text-[#4f0911] hover:bg-[#d0bdac]/20 font-sans text-[10px] uppercase tracking-widest font-bold transition-all">
                Acceso panel
              </button>
              <button id="nav-booking-btn" class="px-6 py-3 rounded-full bg-[#4f0911] hover:bg-[#713132] text-[#FAF9F6] font-sans text-xs uppercase tracking-widest font-bold transition-all shadow-md">
                Agendar Cita
              </button>
            </div>

            <!-- Hamburger Button -->
            <button id="mobile-menu-toggle" class="md:hidden p-2 rounded-xl bg-white/40 border border-[#d0bdac]/40 text-[#4f0911]">
              <i data-lucide="${this.state.mobileMenuOpen ? 'x' : 'menu'}" class="w-6 h-6"></i>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div id="mobile-nav-menu" class="${this.state.mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-[#FAF9F6] border-b border-[#d0bdac]/40 p-4 space-y-3 shadow-lg absolute w-full left-0 top-full">
          <a href="#inicio" data-nav-key="inicio" class="nav-link mobile-nav-link block px-4 py-2 rounded-xl text-sm font-sans font-medium transition-all ${this.state.activeMenu === 'inicio' ? activeMobile : inactiveMobile}">Inicio</a>
          <a href="#sobre-mi" data-nav-key="metodo" class="nav-link mobile-nav-link block px-4 py-2 rounded-xl text-sm font-sans font-medium transition-all ${this.state.activeMenu === 'metodo' ? activeMobile : inactiveMobile}">Método</a>
          <a href="#consultas" data-nav-key="servicios" class="nav-link mobile-nav-link block px-4 py-2 rounded-xl text-sm font-sans font-medium transition-all ${this.state.activeMenu === 'servicios' ? activeMobile : inactiveMobile}">Servicios</a>
          <a href="#e-books" data-nav-key="paquetes" class="nav-link mobile-nav-link block px-4 py-2 rounded-xl text-sm font-sans font-medium transition-all ${this.state.activeMenu === 'paquetes' ? activeMobile : inactiveMobile}">Programas</a>
          <a href="#agenda-cta" data-nav-key="agenda" class="nav-link mobile-nav-link block px-4 py-2 rounded-xl text-sm font-sans font-medium transition-all ${this.state.activeMenu === 'agenda' ? activeMobile : inactiveMobile}">Agenda</a>
          <div class="pt-2 border-t border-[#d0bdac]/30 flex flex-col gap-2">
            <button id="mobile-panel-access-btn" class="w-full text-center py-3 border border-[#4f0911]/20 text-[#4f0911] text-xs font-bold uppercase tracking-widest rounded-full">
              Acceso al panel
            </button>
            <button id="mobile-booking-btn" class="w-full text-center py-3 bg-[#4f0911] text-[#FAF9F6] text-xs font-bold uppercase tracking-widest rounded-full shadow-md">
              Agendar Cita
            </button>
          </div>
        </div>
      </header>
    `;
  }

  renderHero() {
    return `
      <section id="inicio" class="relative pt-32 pb-16 md:pt-44 md:pb-32 bg-[#FAF9F6] overflow-hidden">
        <!-- Background organic shapes/blobs -->
        <div class="absolute top-20 right-0 w-96 h-96 bg-[#916066]/5 rounded-full blur-3xl -z-10"></div>
        <div class="absolute bottom-10 left-10 w-80 h-80 bg-[#d0bdac]/20 rounded-full blur-3xl -z-10"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Grid: Text Copy -->
            <div class="lg:col-span-7 space-y-8 text-left">
              <div class="space-y-4">
                <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-sm border border-[#d0bdac]/70 text-[#6F5648] text-[11px] font-sans font-semibold uppercase tracking-[0.16em]">
                  <i data-lucide="sparkles" class="w-3.5 h-3.5 text-[#8C6A57]"></i> Nutrición clínica personalizada
                </span>
                <p class="font-sans text-sm sm:text-base uppercase tracking-[0.14em] font-semibold text-[#4A3930]">TRANSFORMA TU SALUD DESDE LA RAÍZ</p>
                <h1 class="font-serif text-5xl sm:text-6xl lg:text-[70px] font-bold text-[#4f0911] leading-[1.1] tracking-tight">
                  Nutrición Clínica <br class="hidden sm:block"/>
                  <span class="italic font-normal text-[#713132] font-serif">de Precisión</span>
                </h1>
              </div>

              <p class="font-sans text-base sm:text-lg text-[#713132]/90 leading-relaxed max-w-xl font-light">
                <strong class="font-semibold text-[#4f0911]">Tu cuerpo no necesita otra dieta.</strong> Necesita una estrategia diseñada exclusivamente para ti. Analizo tu salud de forma integral para resolver el problema desde la raíz e integrar nutrición clínica, deportiva y funcional con evidencia científica.
              </p>

              <!-- CTAs -->
              <div class="flex flex-wrap items-center gap-4">
                <button id="hero-booking-btn" class="px-8 py-4 bg-[#4f0911] hover:bg-[#713132] text-[#FAF9F6] font-sans text-xs uppercase tracking-widest font-bold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                  Agendar Valoración <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>
                <a href="#consultas" class="px-8 py-4 border border-[#d0bdac] hover:bg-[#d0bdac]/10 text-[#4f0911] font-sans text-xs uppercase tracking-widest font-bold rounded-full transition-all">
                  Conocer Servicios
                </a>
              </div>

              <!-- Quick highlights -->
              <div class="pt-8 border-t border-[#d0bdac]/40 grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <h4 class="font-serif text-2xl sm:text-3xl font-bold text-[#4f0911]">+1,200</h4>
                  <p class="font-sans text-[10px] sm:text-xs text-[#856654] uppercase tracking-wider font-semibold">Transformaciones</p>
                </div>
                <div>
                  <h4 class="font-serif text-2xl sm:text-3xl font-bold text-[#4f0911]">100%</h4>
                  <p class="font-sans text-[10px] sm:text-xs text-[#856654] uppercase tracking-wider font-semibold">Estrategia Personalizada</p>
                </div>
                <div>
                  <h4 class="font-serif text-2xl sm:text-3xl font-bold text-[#4f0911]">Clínico</h4>
                  <p class="font-sans text-[10px] sm:text-xs text-[#856654] uppercase tracking-wider font-semibold">Base Científica</p>
                </div>
              </div>
            </div>

            <!-- Right Grid: Portrait Image with custom frame styling -->
            <div class="lg:col-span-5 relative flex justify-center">
              <div class="relative w-full max-w-[380px] aspect-[4/5] rounded-[40px] overflow-hidden border border-[#d0bdac] bg-white p-3.5 shadow-2xl">
                <img 
                  src="./assets/images/karla.jpg" 
                  alt="Karla Godoy - Nutrióloga" 
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                  class="w-full h-full object-cover rounded-[28px] grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <!-- Miniature floating badges -->
              <div class="absolute -top-4 -left-4 bg-[#FAF9F6] border border-[#d0bdac] p-3 rounded-2xl shadow-xl flex items-center gap-2 max-w-[160px]">
                <div class="w-8 h-8 rounded-full bg-[#FAF9F6] flex items-center justify-center border border-[#d0bdac]/30">
                  <i data-lucide="award" class="w-4 h-4 text-[#C5A059]"></i>
                </div>
                <div>
                  <p class="font-[Cormorant_Garamond] font-bold text-xs text-[#4f0911] leading-none mb-0.5">Certificada</p>
                  <p class="font-sans text-[9px] text-[#856654] tracking-wider leading-none">Nutrióloga Clínica</p>
                </div>
              </div>

              <div class="absolute bottom-10 -right-4 bg-[#4f0911] text-[#FAF9F6] p-4 rounded-3xl shadow-xl flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white">
                  <i data-lucide="check" class="w-4 h-4"></i>
                </div>
                <div>
                  <p class="font-serif font-bold text-[13px] text-white leading-none">Salud Hormonal</p>
                  <p class="font-sans text-[9px] text-white/70 tracking-wider">Plan Integral</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    `;
  }

  renderOutcomesSection() {
    const outcomes = [
      ['activity', 'Mejora tu composición corporal'],
      ['heart-pulse', 'Reduce inflamación'],
      ['dumbbell', 'Conserva y aumenta masa muscular'],
      ['scale', 'Equilibra tu salud hormonal'],
      ['chart-no-axes-combined', 'Optimiza tu salud metabólica'],
      ['zap', 'Recupera tu energía'],
      ['baby', 'Favorece tu fertilidad y un embarazo saludable'],
      ['trophy', 'Mejora tu rendimiento deportivo'],
      ['utensils', 'Disfruta comer sin restricciones'],
    ];

    return `
      <section class="py-20 bg-[#FDFBF7] border-y border-[#d0bdac]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div class="max-w-3xl space-y-3 mb-12">
            <span class="font-serif italic text-xl text-[#916066]">Resultados que puedes sentir</span>
            <h2 class="font-serif text-4xl sm:text-5xl font-bold text-[#4f0911] leading-tight">¿Qué puedes lograr conmigo?</h2>
            <p class="font-sans text-base text-[#713132]/90 leading-relaxed font-light">No transformo únicamente tu físico. Transformo la manera en que entiendes y cuidas tu cuerpo.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${outcomes.map(([icon, text]) => `
              <article class="flex items-center gap-3 rounded-2xl bg-[#FAF9F6] border border-[#d0bdac]/45 p-5 shadow-sm">
                <span class="w-10 h-10 shrink-0 rounded-full bg-[#916066]/10 text-[#713132] flex items-center justify-center"><i data-lucide="${icon}" class="w-5 h-5"></i></span>
                <p class="font-sans text-sm font-semibold text-[#4f0911] leading-snug">${text}</p>
              </article>
            `).join('')}
          </div>
          <p class="mt-10 max-w-4xl font-serif text-2xl sm:text-3xl text-[#4f0911] leading-snug">Cuando entiendes lo que tu cuerpo necesita, los resultados dejan de depender de la fuerza de voluntad.</p>
        </div>
      </section>
    `;
  }

  renderConsultationValueSection() {
    const inclusions = [
      'Valoración clínica integral.',
      'Interpretación de laboratorios y antecedentes.',
      'Análisis de composición corporal.',
      'Estrategia nutricional personalizada basada en crononutrición, horarios, ritmo de vida y objetivos.',
      'Guía de suplementación basada en evidencia.',
      'Recomendación de movimiento adaptada a tu estilo de vida y condición.',
      'Educación nutricional para que entiendas tu cuerpo y no dependas de dietas para siempre.',
    ];

    return `
      <section class="py-20 bg-[#FAF9F6]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          <div class="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
            <span class="font-serif italic text-xl text-[#916066]">Una consulta diseñada para ti</span>
            <h2 class="font-serif text-4xl sm:text-5xl font-bold text-[#4f0911] leading-tight">En mi consulta no recibes una dieta estándar.</h2>
            <p class="font-sans text-lg text-[#713132] leading-relaxed font-light">Recibes una estrategia integral diseñada exclusivamente para ti.</p>
            <button id="consultation-booking-btn" class="px-7 py-3.5 rounded-full bg-[#4f0911] hover:bg-[#713132] text-white font-sans text-xs uppercase tracking-widest font-bold transition-all">Agendar valoración</button>
          </div>
          <div class="lg:col-span-7 rounded-[32px] bg-white border border-[#d0bdac]/55 p-7 sm:p-9 shadow-sm">
            <p class="font-sans text-[10px] text-[#856654] uppercase tracking-widest font-bold mb-6">Tu consulta incluye</p>
            <ol class="space-y-5">
              ${inclusions.map((item, index) => `
                <li class="flex gap-4">
                  <span class="font-serif text-2xl text-[#916066] leading-none">0${index + 1}</span>
                  <p class="font-sans text-sm sm:text-base text-[#2C2421] leading-relaxed">${item}</p>
                </li>
              `).join('')}
            </ol>
          </div>
        </div>
      </section>
    `;
  }

  renderAboutSection() {
    return `
      <section id="sobre-mi" class="py-20 bg-[#FAF9F6]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <!-- Left Grid: Editorial content and signature -->
            <div class="lg:col-span-6 space-y-7 text-left">
              <span class="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#916066] block">
                Sobre mí
              </span>
              <h2 class="font-serif text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-semibold text-[#4f0911] leading-[1.02] tracking-[-0.025em]">
                Hola, soy Karla Godoy
              </h2>

              <div class="max-w-[39rem] space-y-5 font-sans text-[15px] sm:text-base text-[#2C2421]/85 leading-[1.8] font-normal">
                <p class="font-serif text-xl sm:text-2xl text-[#713132] leading-snug">
                  Soy Karla, nutrióloga clínica especializada en nutrición integral, funcional y deportiva.
                </p>

                <p>
                  Me gusta conocer la historia detrás de cada persona, escuchar, analizar y entender qué está pasando antes de decidir qué hacer. Porque cada cuerpo, cada historia y cada objetivo son diferentes.
                </p>

                <p>
                  Trabajo especialmente con mujeres que quieren verse y sentirse mejor, mejorar su composición corporal, optimizar su salud y rendimiento, sin sacrificar su bienestar en el proceso.
                </p>

                <p class="border-l-2 border-[#916066]/60 pl-5 font-medium text-[#4f0911]">
                  Porque para mí, verte mejor es importante. Pero que tu cuerpo esté funcionando mejor también lo es.
                </p>
              </div>

              <!-- Button CTA -->
              <div class="pt-4">
                <button id="about-booking-btn" class="px-6 py-3 rounded-full border border-[#4f0911] text-[#4f0911] hover:bg-[#4f0911] hover:text-[#FAF9F6] text-xs font-sans font-bold uppercase tracking-widest transition-all">
                  Mi Metodología de Citas
                </button>
              </div>
            </div>

            <!-- Right Grid: 3 Pillars Card Grid -->
            <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div class="bg-[#FDFBF7] p-7 rounded-[32px] border border-[#d0bdac]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 sm:min-h-[290px]">
                <div class="w-12 h-12 rounded-2xl bg-[#4f0911]/10 text-[#4f0911] flex items-center justify-center">
                  <i data-lucide="badge-check" class="w-6 h-6"></i>
                </div>
                <div class="space-y-2">
                  <h4 class="font-serif text-lg font-bold text-[#4f0911]">Formación y Cédula Profesional</h4>
                  <p class="font-sans text-[13px] text-[#713132]/90 leading-relaxed font-light">Nutrición Clínica y Bienestar Integral por el Tecnológico de Monterrey.</p>
                  <p class="inline-flex w-fit px-3 py-1 rounded-full bg-[#4f0911]/5 border border-[#4f0911]/15 font-sans text-[11px] text-[#4f0911] font-semibold">Cédula profesional: 13898917</p>
                </div>
              </div>

              <div class="bg-[#FDFBF7] p-7 rounded-[32px] border border-[#d0bdac]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 sm:min-h-[290px]">
                <div class="w-12 h-12 rounded-2xl bg-[#916066]/10 text-[#916066] flex items-center justify-center">
                  <i data-lucide="book-open-check" class="w-6 h-6"></i>
                </div>
                <div class="space-y-2">
                  <h4 class="font-serif text-lg font-bold text-[#4f0911]">Especialidades que me distinguen</h4>
                  <ul class="space-y-2 pt-1">
                    <li class="flex items-start gap-2 font-sans text-[12px] text-[#713132]/90 leading-relaxed"><i data-lucide="check" class="w-3.5 h-3.5 text-[#916066] shrink-0 mt-0.5"></i><span>Nutrición clínica, deportiva y funcional.</span></li>
                    <li class="flex items-start gap-2 font-sans text-[12px] text-[#713132]/90 leading-relaxed"><i data-lucide="check" class="w-3.5 h-3.5 text-[#916066] shrink-0 mt-0.5"></i><span>Educadora en Diabetes - Federación Mexicana de Diabetes.</span></li>
                    <li class="flex items-start gap-2 font-sans text-[12px] text-[#713132]/90 leading-relaxed"><i data-lucide="check" class="w-3.5 h-3.5 text-[#916066] shrink-0 mt-0.5"></i><span>Nutrición en Síndrome Metabólico - Federación Nacional de Nutrición y Ciencia.</span></li>
                    <li class="flex items-start gap-2 font-sans text-[12px] text-[#713132]/90 leading-relaxed"><i data-lucide="check" class="w-3.5 h-3.5 text-[#916066] shrink-0 mt-0.5"></i><span>Nutrición Deportiva - Sociedad Internacional de Entrenadores Físicos y Deportivos.</span></li>
                  </ul>
                </div>
              </div>

              <div class="bg-[#FDFBF7] p-7 rounded-[32px] border border-[#d0bdac]/50 shadow-sm hover:shadow-md transition-all duration-300 sm:col-span-2 flex flex-col sm:flex-row items-start gap-5">
                <div class="w-12 h-12 rounded-2xl bg-[#856654]/10 text-[#856654] flex items-center justify-center shrink-0">
                  <i data-lucide="building-2" class="w-6 h-6"></i>
                </div>
                <div class="space-y-2.5">
                  <h4 class="font-serif text-lg font-bold text-[#4f0911]">Experiencia Clínica Hospitalaria</h4>
                  <p class="font-sans text-[13px] text-[#713132]/85 leading-relaxed font-light">Experiencia directa en atención clínica y nutrición hospitalaria en instituciones de alto nivel:</p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2 font-sans text-[12px] text-[#713132]/90 leading-relaxed"><i data-lucide="check" class="w-3.5 h-3.5 text-[#856654] shrink-0 mt-0.5"></i><span>Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán.</span></li>
                    <li class="flex items-start gap-2 font-sans text-[12px] text-[#713132]/90 leading-relaxed"><i data-lucide="check" class="w-3.5 h-3.5 text-[#856654] shrink-0 mt-0.5"></i><span>Hospital Ángeles del Pedregal.</span></li>
                    <li class="flex items-start gap-2 font-sans text-[12px] text-[#713132]/90 leading-relaxed"><i data-lucide="check" class="w-3.5 h-3.5 text-[#856654] shrink-0 mt-0.5"></i><span>Asociación Pro Personas con Parálisis Cerebral (APAC).</span></li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    `;
  }

  renderServicesSection() {
    const isOnline = this.state.activeModality === 'online';

    return `
      <section id="consultas" class="py-20 bg-[#FDFBF7] border-t border-[#d0bdac]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Section Header and Modality switch Buttons -->
          <div class="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div class="max-w-xl text-left">
              <span class="font-serif italic text-xl text-[#916066] tracking-tight block">
                Planes de asesoría personalizada
              </span>
              <h2 class="font-serif text-4xl sm:text-5xl font-bold text-[#4f0911] leading-tight">
                Nuestras Consultas de Especialista
              </h2>
            </div>

            <!-- Switch buttons inline -->
            <div class="bg-[#FAF9F6] border border-[#d0bdac]/50 p-1.5 rounded-full flex gap-1.5 select-none self-center shrink-0">
              <button 
                id="service-modality-online"
                class="px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all ${isOnline ? 'bg-[#2D2A26] text-[#FAF9F6] shadow-sm' : 'text-[#713132] hover:text-[#4f0911]'}"
              >
                <i data-lucide="video" class="w-4 h-4 text-[#C5A059]"></i> Videollamada Online
              </button>
              <button 
                id="service-modality-presencial"
                class="px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all ${!isOnline ? 'bg-[#2D2A26] text-[#FAF9F6] shadow-sm' : 'text-[#713132] hover:text-[#4f0911]'}"
              >
                <i data-lucide="map-pin" class="w-4 h-4 text-[#C5A059]"></i> Presencial (Consultorio)
              </button>
            </div>
          </div>

          <!-- Modality descriptive info -->
          <div class="bg-[#FAF9F6] border border-[#d0bdac]/30 p-5 rounded-3xl mb-10 flex flex-col sm:flex-row items-start gap-4 text-left max-w-4xl">
            <div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-[#d0bdac]/20 shrink-0 text-[#C5A059]">
              <i data-lucide="${isOnline ? 'video' : 'map-pin'}" class="w-6 h-6"></i>
            </div>
            <div class="space-y-1">
              <h4 class="font-serif font-bold text-base text-[#4f0911]">
                ${isOnline ? 'Consultas Virtuales Globales por Videollamada HD' : 'Consultas Presenciales en Clínica de Autor'}
              </h4>
              <p class="font-sans text-xs text-[#856654] leading-relaxed font-light">
                ${isOnline 
                  ? 'Atención uno a uno disponible para cualquier país de habla hispana. Te enviaré un instructivo amigable previo a la cita para poder evaluar tus perímetros corporales y monitorear avances paso a paso.'
                  : 'Atención presencial en nuestro consultorio premium con privacidad absoluta. Incluye análisis avanzado de composición corporal (InBody) en cada una de tus sesiones.'
                }
              </p>
            </div>
          </div>

          <!-- Services Grid Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${SERVICE_PLANS.map(plan => {
              const isPopular = plan.popular;
              return `
                <div class="relative bg-[#FAF9F6] rounded-[36px] border ${isPopular ? 'border-[#916066] ring-2 ring-[#916066]/10' : 'border-[#d0bdac]/60'} p-8 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-lg text-left">
                  
                  ${isPopular ? `
                    <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#916066] text-white font-sans text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                      MÁS RECOMENDADO ⭐
                    </span>
                  ` : ''}

                  <div class="space-y-6">
                    <!-- Title metadata -->
                    <div class="space-y-2 border-b border-[#d0bdac]/35 pb-5">
                      <span class="font-sans text-[10px] text-[#916066] uppercase tracking-widest font-bold block">${plan.duration}</span>
                      <h3 class="font-serif text-2xl font-bold text-[#4f0911] leading-tight">${plan.title}</h3>
                      <p class="font-sans text-xs text-[#856654] leading-normal font-light">${plan.subtitle}</p>
                    </div>

                    <!-- Price label -->
                    <div class="space-y-0.5">
                      ${plan.price !== null ? `
                        <span class="font-sans text-[9px] text-[#856654]/70 uppercase tracking-widest font-bold">Inversión del programa</span>
                        <div class="flex items-baseline gap-1">
                          <span class="font-serif text-4xl font-bold text-[#4f0911]">$${plan.price.toLocaleString('es-MX')}</span>
                          <span class="font-sans text-xs text-[#856654] uppercase font-bold">${plan.currency}</span>
                        </div>
                        ${plan.savings ? `<p class="font-sans text-[10px] text-emerald-700 font-bold uppercase tracking-wide">Ahorras $${plan.savings.toLocaleString('es-MX')} MXN</p>` : ''}
                      ` : '<div class="h-12" aria-label="Precio pendiente de confirmar"></div>'}
                    </div>

                    <!-- Recommended bullet and text -->
                    <p class="font-sans text-xs text-[#713132] font-semibold italic bg-[#916066]/5 rounded-xl p-3 border-l-2 border-[#916066]">
                      ${plan.recommendedFor}
                    </p>

                    <!-- Features -->
                    <div class="space-y-3 pt-2">
                      <span class="font-sans text-[9px] text-[#856654]/70 uppercase tracking-widest font-bold block">¿Qué Incluye este Plan?</span>
                      <ul class="space-y-2.5">
                        ${plan.features.map(feature => `
                          <li class="flex items-start gap-2.5 text-xs font-sans text-[#2C2421]/90 leading-normal font-light">
                            <i data-lucide="check" class="w-4 h-4 text-[#916066] shrink-0 mt-0.5"></i>
                            <span>${feature}</span>
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                  </div>

                  <div class="pt-8">
                    <button 
                      onclick="window.app.handleOpenBooking('${plan.id}', '${this.state.preselectedModality}')"
                      class="w-full py-4 text-center rounded-full font-sans text-xs uppercase tracking-widest font-bold transition-all shadow-sm ${isPopular ? 'bg-[#4f0911] text-[#FAF9F6] hover:bg-[#713132]' : 'bg-[#F2EFE9] text-[#2D2A26] border border-[#d0bdac] hover:bg-white'}"
                    >
                      Reservar Este Programa
                    </button>
                  </div>

                </div>
              `;
            }).join('')}
          </div>

        </div>
      </section>
    `;
  }

  renderInstagramPost(post, index) {
    return `
      <article class="group relative min-w-0 self-start overflow-hidden rounded-[26px] border border-[#d0bdac]/55 p-2.5 shadow-sm transition-shadow duration-300 sm:rounded-[34px] sm:p-3 xl:p-4 hover:shadow-xl" style="background-color: ${post.surface};">
        <span class="absolute -right-3 -top-7 font-serif text-[96px] leading-none font-bold opacity-[0.07] sm:-right-5 sm:-top-10 sm:text-[128px]" style="color: ${post.accent};" aria-hidden="true">0${index + 1}</span>
        <span class="absolute -left-16 top-16 h-32 w-32 rounded-full border opacity-20 sm:-left-12 sm:top-20 sm:h-36 sm:w-36" style="border-color: ${post.accent};" aria-hidden="true"></span>

        <header class="relative flex min-h-[62px] items-center justify-between gap-3 px-1.5 pb-2.5 pt-0.5 sm:min-h-[72px] sm:gap-4 sm:px-2 sm:pb-3 sm:pt-1">
          <div class="min-w-0">
            <span class="block font-sans text-[9px] uppercase tracking-[0.18em] font-bold" style="color: ${post.accent};">${post.category}</span>
            <span class="mt-1 block font-serif text-base italic leading-tight sm:text-lg" style="color: ${post.accent};">${post.eyebrow}</span>
          </div>
          <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80 shadow-sm sm:h-11 sm:w-11" style="color: ${post.accent};">
            <i data-lucide="${post.icon}" class="h-[18px] w-[18px] sm:h-5 sm:w-5"></i>
          </span>
        </header>

        <div class="kg-instagram-embed-shell relative overflow-hidden rounded-[20px] border border-white/80 bg-white shadow-[0_14px_34px_rgba(79,9,17,0.10)] sm:rounded-[25px] sm:shadow-[0_18px_45px_rgba(79,9,17,0.10)]">
          <iframe
            src="${post.embedUrl}"
            title="Publicación de Instagram: ${post.title}"
            class="kg-instagram-embed block h-[640px] w-full border-0 bg-white min-[390px]:h-[680px] md:h-[700px] xl:h-[720px] 2xl:h-[760px]"
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>

        <footer class="relative px-1.5 pb-1.5 pt-4 sm:px-2 sm:pb-2 sm:pt-5">
          <h3 class="font-serif text-lg font-bold leading-tight text-[#4f0911] sm:text-xl">${post.title}</h3>
          <p class="mt-2 font-sans text-[11px] font-light leading-relaxed text-[#2C2421]/75 sm:text-xs">${post.description}</p>
          <div class="mt-3 flex items-center justify-between gap-3 border-t border-white/70 pt-3 sm:mt-4 sm:gap-4 sm:pt-4">
            <span class="font-sans text-[9px] font-bold uppercase tracking-[0.16em]" style="color: ${post.accent};">Publicación 0${index + 1}</span>
            <a
              href="${post.url}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir en Instagram: ${post.title}"
              class="inline-flex min-h-11 items-center gap-1.5 px-1 font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-[#713132] hover:text-[#4f0911]"
            >
              Instagram
              <i data-lucide="arrow-up-right" class="h-3.5 w-3.5"></i>
            </a>
          </div>
        </footer>
      </article>
    `;
  }

  renderInstagramSection() {
    return `
      <section id="contenido" class="border-y border-[#d0bdac]/30 bg-[#FDFBF7] py-14 sm:py-20">
        <div class="mx-auto max-w-7xl px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
          <div class="mb-8 grid grid-cols-1 items-end gap-6 sm:mb-12 lg:grid-cols-12 lg:gap-12">
            <div class="space-y-3 text-left sm:space-y-4 lg:col-span-8">
              <span class="block font-serif text-lg italic tracking-tight text-[#916066] sm:text-xl">
                Del consultorio a tu día a día
              </span>
              <h2 class="font-serif text-[2rem] font-bold leading-[1.05] tracking-tight text-[#4f0911] sm:text-4xl lg:text-5xl">
                Contenido para entender y cuidar tu cuerpo
              </h2>
              <p class="max-w-2xl font-sans text-[13px] font-light leading-relaxed text-[#713132]/85 sm:text-base">
                Una selección de ideas que Karla comparte sobre bienestar, nutrición y movimiento desde una mirada cercana.
              </p>
            </div>

            <div class="lg:col-span-4 lg:flex lg:justify-end">
              <a
                href="${INSTAGRAM_PROFILE.url}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver el perfil oficial de Karla Godoy en Instagram"
                class="group inline-flex w-full items-center justify-between gap-3 rounded-[20px] border border-[#d0bdac]/60 bg-white px-4 py-3.5 shadow-sm transition-all duration-300 sm:w-auto sm:gap-5 sm:rounded-[24px] sm:px-5 sm:py-4 lg:w-full hover:-translate-y-1 hover:shadow-md"
              >
                <span class="flex min-w-0 items-center gap-3">
                  <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4f0911] text-white sm:h-11 sm:w-11">
                    <i data-lucide="camera" class="h-[18px] w-[18px] sm:h-5 sm:w-5"></i>
                  </span>
                  <span class="min-w-0">
                    <span class="block font-sans text-[9px] uppercase tracking-[0.18em] text-[#856654] font-bold">Perfil oficial</span>
                    <span class="block truncate font-serif text-base font-bold text-[#4f0911] sm:text-lg">${INSTAGRAM_PROFILE.handle}</span>
                  </span>
                </span>
                <i data-lucide="arrow-up-right" class="h-5 w-5 shrink-0 text-[#916066] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
              </a>
            </div>
          </div>

          <div class="mx-auto grid max-w-5xl grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-6">
            ${INSTAGRAM_POSTS_DATA.map((post, index) => this.renderInstagramPost(post, index)).join('')}
          </div>

          <p class="mx-auto mt-7 max-w-3xl px-2 text-center font-sans text-[10px] leading-relaxed text-[#856654] sm:mt-8 sm:text-xs">
            Selección editorial del perfil oficial. Las publicaciones se cargan desde Instagram al acercarse a esta sección. El contenido educativo no sustituye una valoración personalizada.
          </p>
        </div>
      </section>
    `;
  }

  renderEbooksSection() {
    return `
      <section id="e-books" class="py-20 bg-[#FAF9F6]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Section layout header -->
          <div class="text-center max-w-2xl mx-auto space-y-4 mb-14">
            <span class="font-serif italic text-xl text-[#916066] tracking-tight block">
              Biblioteca virtual de autor
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4f0911] tracking-tight">
              E-Books Interactivos Clínicos
            </h2>
            <p class="font-sans text-sm text-[#713132]/95 leading-relaxed font-light">
              Guías completas paso a paso, recetarios sin azúcar refinada y protocolos de salud hormonal diseñados para educarte y empoderar tus decisiones de bienestar diario.
            </p>
          </div>

          <!-- Ebooks Layout Container -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${EBOOKS_DATA.map(ebook => `
              <div class="bg-[#FDFBF7] rounded-[32px] border border-[#d0bdac]/45 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left">
                
                <!-- Card Header Image & Info -->
                <div>
                  <div class="relative aspect-[4/3] w-full bg-cream overflow-hidden group">
                    <img 
                      src="${ebook.coverImage}" 
                      alt="${ebook.title}" 
                      loading="lazy"
                      decoding="async"
                      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    <!-- Floating badge -->
                    <span class="absolute top-3 left-3 bg-[#4f0911] text-[#FAF9F6] text-[8px] font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                      ${ebook.badge}
                    </span>

                    <!-- Floating detail summary info -->
                    <div class="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                      <span class="font-sans text-[10px] text-white/90 flex items-center gap-1.5 uppercase font-medium tracking-wide">
                        <i data-lucide="book-open" class="w-3.5 h-3.5 text-[#C5A059]"></i> ${ebook.pages} Páginas
                      </span>
                      <span class="font-sans text-[10px] uppercase font-bold text-[#C5A059]">PDF Interactivo</span>
                    </div>
                  </div>

                  <!-- Book body content -->
                  <div class="p-6 space-y-3.5">
                    <div class="space-y-1">
                      <h3 class="font-serif text-xl sm:text-2xl font-bold text-[#4f0911] leading-tight line-clamp-1">${ebook.title}</h3>
                      <p class="font-sans text-[11px] text-[#856654] font-medium leading-relaxed min-h-[32px] line-clamp-2">${ebook.subtitle}</p>
                    </div>

                    <p class="font-sans text-xs text-[#2C2421]/90 leading-relaxed font-light line-clamp-3">
                      ${ebook.description}
                    </p>

                    <!-- Price tag detail -->
                    <div class="flex items-baseline gap-1.5 pt-2">
                      <span class="font-sans text-[10px] text-[#856654] uppercase tracking-wider font-semibold">Valor único:</span>
                      <span class="font-serif text-2xl font-bold text-[#4f0911]">$${ebook.price}</span>
                      <span class="font-sans text-[10px] text-[#856654] uppercase font-bold">${ebook.currency}</span>
                    </div>
                  </div>
                </div>

                <!-- Footer buttons list -->
                <div class="p-6 pt-0 space-y-2">
                  <button 
                    onclick="window.app.handleOpenPreviewEbook('${ebook.id}')"
                    class="w-full py-3 text-center rounded-xl bg-[#F2EFE9] text-[#4f0911] font-sans text-xs uppercase tracking-widest font-bold hover:bg-[#d0bdac]/25 transition-all text-xs"
                  >
                    Ver Contenidos & Temario
                  </button>
                  <button 
                    onclick="window.app.handleBuyEbookWhatsApp('${ebook.id}')"
                    class="w-full py-3.5 text-center rounded-xl bg-[#4f0911] hover:bg-[#713132] text-white font-sans text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-1.5 text-xs shadow-sm"
                  >
                    <i data-lucide="download" class="w-3.5 h-3.5 text-[#d0bdac]"></i> Adquirir E-Book
                  </button>
                </div>

              </div>
            `).join('')}
          </div>

        </div>
      </section>
    `;
  }

  renderCalculatorSection() {
    const processSteps = [
      {
        number: '01',
        title: 'Agenda',
        description: 'Elige fecha y modalidad para comenzar con una valoración clínica personalizada.',
        badge: 'Primer contacto',
        topColor: '#D7C8B8',
      },
      {
        number: '02',
        title: 'Sesión de\nDiagnóstico',
        description: 'Evaluación clínica profunda: antropometría, actividad física y análisis de estilo de vida.',
        badge: 'Evaluación clínica',
        topColor: '#A97B82',
      },
      {
        number: '03',
        title: 'Estrategia',
        description: 'Diseñamos un plan personalizado con estrategias específicas a tu objetivo y a lo que tu cuerpo necesita.',
        badge: 'Plan personalizado',
        topColor: '#CBA54E',
      },
      {
        number: '04',
        title: 'Seguimientos',
        description: 'Monitoreo cercano 1:1 con ajustes estratégicos y apoyo continuo durante todo el proceso.',
        badge: 'Monitoreo 1:1',
        topColor: '#4F0911',
      },
      {
        number: '05',
        title: 'Resultados\nSostenibles',
        description: 'Construimos hábitos que se sostienen en el tiempo para proteger tu salud integral y llevarte a tu mejor versión.',
        badge: 'Hábitos a largo plazo',
        topColor: '#856654',
      },
    ];

    return `
      <section id="calculadora" class="py-20 bg-[#FAF9F6] border-t border-[#d0bdac]/45">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="max-w-4xl text-left space-y-3 mb-10">
            <span class="font-serif italic text-xl text-[#916066] tracking-tight block">
              Cómo funciona
            </span>
            <h2 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4f0911] leading-[1.08] tracking-tight">
              El camino estructurado hacia tu mejor versión
            </h2>
          </div>

          <div class="relative">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-6 relative">
              ${processSteps.map((step, index) => `
                <article class="relative bg-[#FDFBF7] rounded-[20px] border border-[#e9e1d8] px-6 py-7 lg:px-7 lg:py-8 shadow-[0_6px_24px_rgba(79,9,17,0.04)] text-left flex flex-col min-h-[390px]" style="border-top: 3px solid ${step.topColor};">
                  <p class="font-serif text-[50px] sm:text-[58px] leading-none text-[#A3878A] font-normal mb-8">${step.number}</p>

                  <h3 class="font-serif text-[26px] sm:text-[29px] text-[#4f0911] leading-[1.15] tracking-tight mb-4 whitespace-pre-line min-h-[72px] sm:min-h-[94px]">${step.title}</h3>
                  <p class="font-sans text-[14px] text-[#5D5047] leading-[1.55] min-h-[120px] sm:min-h-[136px]">${step.description}</p>

                  <div class="mt-auto pt-8 flex items-center gap-3">
                    <span class="w-8 h-px bg-[#d8cec2]"></span>
                    <span class="font-sans text-[10px] uppercase tracking-[0.12em] text-[#7A6357] font-semibold">${step.badge}</span>
                  </div>

                  ${index < processSteps.length - 1 ? '<span class="hidden xl:block absolute right-[-30px] top-1/2 -translate-y-1/2 w-12 h-px bg-[#e1d6ca]"></span>' : ''}
                </article>
              `).join('')}
            </div>
          </div>

        </div>
      </section>
    `;
  }

  renderSalesCtaSection() {
    return `
      <section id="agenda-cta" class="py-16 bg-[#FAF9F6] border-t border-[#d0bdac]/25">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="rounded-[32px] bg-gradient-to-r from-[#4f0911] via-[#5a121d] to-[#7a3537] p-8 sm:p-10 lg:p-12 text-[#FAF9F6] shadow-[0_18px_55px_rgba(79,9,17,0.18)] border border-[#916066]/30">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div class="lg:col-span-8 space-y-4 text-left">
                <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/12 border border-white/25 font-sans text-[10px] uppercase tracking-[0.16em] font-bold text-[#f2e9df]">
                  Cupos limitados por semana
                </span>
                <h3 class="font-serif text-4xl sm:text-5xl font-bold leading-tight text-white">
                  Agenda tu valoración clínica y comienza tu transformación con estrategia.
                </h3>
                <p class="font-sans text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
                  Atención personalizada 1:1, enfoque clínico integral y seguimiento real para resultados sostenibles.
                </p>
              </div>

              <div class="lg:col-span-4 flex flex-col gap-3 sm:gap-4">
                <button id="sales-cta-booking-btn" class="w-full py-4 px-6 rounded-full bg-white text-[#4f0911] hover:bg-[#F2EFE9] font-sans text-xs uppercase tracking-widest font-bold transition-all shadow-xl flex items-center justify-center gap-2">
                  Reservar mi lugar <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>
                <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Karla, me interesa agendar mi valoración clínica personalizada. ¿Me compartes disponibilidad?')}" target="_blank" class="w-full py-4 px-6 rounded-full border border-white/35 hover:border-white/60 hover:bg-white/10 text-white font-sans text-xs uppercase tracking-widest font-bold transition-all text-center">
                  Hablar por WhatsApp
                </a>
                <div class="pt-1 space-y-1.5 text-center lg:text-left">
                  <p class="font-sans text-[11px] text-white/80">+1,200 pacientes atendidos con enfoque clínico personalizado.</p>
                  <p class="font-sans text-[10px] uppercase tracking-[0.12em] text-[#f2e9df] font-semibold">Cédula profesional 13898917</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderMobileStickyCta() {
    return `
      <div class="md:hidden fixed bottom-5 left-4 right-24 z-30">
        <button id="mobile-sticky-booking-btn" class="w-full py-3.5 px-4 rounded-full bg-[#4f0911] text-[#FAF9F6] shadow-xl font-sans text-[11px] uppercase tracking-widest font-bold border border-[#713132]/40">
          Agendar valoración
        </button>
      </div>
    `;
  }

  renderTestimonialsSection() {
    return `
      <section id="testimonios" class="py-20 bg-[#FDFBF7] border-t border-[#d0bdac]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span class="font-serif italic text-xl text-[#916066] tracking-tight block">
              Historias de éxito reales
            </span>
            <h2 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4f0911] leading-[1.08] tracking-tight">
              Testimonios de Pacientes
            </h2>
            <p class="font-sans text-sm sm:text-[15px] text-[#713132]/95 leading-relaxed font-light">
              La mayor recompensa de mi profesión es ver la transformación integral en la vida y vitalidad de quienes confían en mi guía clínica.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            ${TESTIMONIALS_DATA.map(test => `
              <div class="bg-[#FAF9F6] p-6 lg:p-7 rounded-[30px] border border-[#d0bdac]/50 shadow-[0_8px_28px_rgba(79,9,17,0.05)] text-left">
                
                <div class="space-y-5">
                  <div class="flex items-center gap-0.5 text-[#B2764A]">
                    ${Array(test.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-current"></i>').join('')}
                  </div>

                  <div class="flex items-center gap-3">
                    <img 
                      src="${test.image}" 
                      alt="${test.name}" 
                      loading="lazy"
                      decoding="async"
                      class="w-14 h-14 rounded-full object-cover border-2 border-[#d0bdac]/70"
                    />
                    <div>
                      <h4 class="font-serif font-bold text-3xl text-[#4f0911] leading-none mb-1">${test.name}</h4>
                      <p class="font-sans text-sm text-[#6A4A44]/85 leading-tight">${test.goal}, ${test.age} años</p>
                    </div>
                  </div>

                  <p class="font-sans text-[13px] sm:text-[14px] text-[#2C2421]/90 leading-relaxed">
                    "${test.quote}"
                  </p>
                </div>

              </div>
            `).join('')}
          </div>

        </div>
      </section>
    `;
  }

  renderFaqSection() {
    return `
      <section class="py-20 bg-[#FAF9F6] border-t border-[#d0bdac]/35">
        <div class="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div class="text-center max-w-2xl mx-auto space-y-4 mb-14">
            <span class="font-serif italic text-xl text-[#916066] tracking-tight block">
              Dudas comunes aclaradas
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#4f0911] tracking-tight">
              Preguntas Frecuentes
            </h2>
          </div>

          <!-- Interactive Accordions -->
          <div class="space-y-4">
            ${FAQ_ITEMS.map((faq, index) => {
              const isOpen = this.state.faqIndexOpen === index;
              return `
                <div class="bg-[#FDFBF7] rounded-[24px] border ${isOpen ? 'border-[#916066]' : 'border-[#d0bdac]/45'} overflow-hidden shadow-sm transition-all">
                  <button 
                    onclick="window.app.handleToggleFaq(${index})"
                    class="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#916066]/5 transition-all"
                  >
                    <span class="font-serif font-bold text-base sm:text-lg text-[#4f0911]">${faq.q}</span>
                    <span class="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#d0bdac]/30 text-[#4f0911] shrink-0 ml-4">
                      <i data-lucide="${isOpen ? 'chevron-up' : 'chevron-down'}" class="w-4 h-4"></i>
                    </span>
                  </button>

                  <div class="${isOpen ? 'block' : 'hidden'} px-6 pb-6 pt-1 border-t border-black/5">
                    <p class="font-sans text-xs text-[#713132]/90 leading-relaxed font-light">
                      ${faq.a}
                    </p>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

        </div>
      </section>
    `;
  }

  renderFooter() {
    return this.renderTemplate('tpl-footer', (node) => {
      const yearEl = node.querySelector('[data-current-year]');
      if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
      }
    });
  }

  renderWhatsAppWidget() {
    return this.renderTemplate('tpl-whatsapp-widget', (node) => {
      const infoPanel = node.querySelector('#whatsapp-info-panel');
      if (infoPanel) {
        infoPanel.classList.toggle('hidden', !this.state.whatsappOpen);
        infoPanel.classList.toggle('block', this.state.whatsappOpen);
      }

      const chatLink = node.querySelector('[data-whatsapp-chat-link]');
      if (chatLink) {
        chatLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Karla! Me interesa recibir información sobre tus consultas.')}`;
      }
    });
  }

}

Object.assign(KarlaApp.prototype, appHelpers, modalViews);

export default KarlaApp;
