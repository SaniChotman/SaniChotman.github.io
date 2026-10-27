/**
 * ==============================================================================
 * ENGINE RENDERER PORTOFOLIO (app.js)
 * ==============================================================================
 * Skrip ini membaca data dari data.js dan secara dinamis mengisi
 * elemen-elemen HTML di halaman index.html.
 * Dilengkapi dengan fitur:
 * - Mobile responsive navigation bar
 * - Sticky navbar shadow on scroll
 * - Dynamic SVG icons
 * - Copy to clipboard untuk email/kontak
 * - Interaksi Contact form (langsung diarahkan ke WhatsApp / Email)
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof PORTFOLIO_DATA === 'undefined') {
    console.error('PORTFOLIO_DATA tidak ditemukan! Pastikan data.js dimuat sebelum app.js');
    return;
  }

  // 1. Inisialisasi Seluruh Bagian Konten
  renderNavigation();
  renderHero();
  renderExperience();
  renderProjects();
  renderEducation();
  renderSkills();
  renderContact();
  renderFooter();

  // 2. Inisialisasi Fitur Interaktif UI
  setupMobileMenu();
  setupStickyNavbar();
  setupContactForm();
});

// Helper: Kumpulan Icon SVG Modern (Lucide-style)
const ICONS = {
  github: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  linkedin: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
  instagram: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
  whatsapp: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,
  email: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  location: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  externalLink: `<svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`,
  download: `<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>`,
  arrowRight: `<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`,
  check: `<svg class="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`
};

// 1. Render Navigasi
function renderNavigation() {
  const brandEl = document.getElementById('nav-brand');
  if (brandEl) {
    brandEl.innerHTML = `
      <span class="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/25">
        ${PORTFOLIO_DATA.profile.name.charAt(0)}
      </span>
      <span class="font-bold text-lg tracking-tight text-white hover:text-blue-400 transition-colors">
        ${PORTFOLIO_DATA.profile.name.split(' ')[0]}<span class="text-blue-500">.dev</span>
      </span>
    `;
  }
}

// 2. Render Hero Section
function renderHero() {
  const p = PORTFOLIO_DATA.profile;

  // Status Badge
  const statusBadge = document.getElementById('hero-status-badge');
  if (statusBadge) {
    statusBadge.innerHTML = `
      <span class="relative flex h-2.5 w-2.5">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </span>
      <span class="text-xs md:text-sm font-medium text-emerald-300">${p.statusBadge}</span>
    `;
  }

  // Name, Headline, Bio
  document.getElementById('hero-name').textContent = p.name;
  document.getElementById('hero-headline').textContent = p.headline;
  document.getElementById('hero-bio').textContent = p.bio;

  // Avatar Image
  const avatarEl = document.getElementById('hero-avatar');
  if (avatarEl) {
    avatarEl.src = p.avatar;
    avatarEl.alt = p.name;
  }

  // Social Links in Hero
  const socialContainer = document.getElementById('hero-socials');
  if (socialContainer) {
    socialContainer.innerHTML = '';
    const socials = p.socials || {};
    for (const [key, url] of Object.entries(socials)) {
      if (url && ICONS[key]) {
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/60 hover:border-blue-500 transition-all duration-200 hover:-translate-y-1 shadow-sm';
        a.setAttribute('aria-label', key);
        a.innerHTML = ICONS[key];
        socialContainer.appendChild(a);
      }
    }
  }

  // CV Link
  const cvBtn = document.getElementById('hero-cv-btn');
  if (cvBtn) {
    cvBtn.href = p.cvLink || '#contact';
    cvBtn.innerHTML = `${ICONS.download} Unduh CV / Resume`;
  }

  // Stats Grid
  const statsContainer = document.getElementById('hero-stats');
  if (statsContainer && Array.isArray(PORTFOLIO_DATA.stats)) {
    statsContainer.innerHTML = PORTFOLIO_DATA.stats.map(stat => `
      <div class="px-4 py-3 rounded-2xl glass-card text-center border border-slate-800/80 shadow-inner">
        <div class="text-2xl lg:text-3xl font-extrabold text-gradient-cyan mb-0.5">${stat.value}</div>
        <div class="text-xs text-slate-400 font-medium">${stat.label}</div>
      </div>
    `).join('');
  }
}

// 3. Render Experience Section
function renderExperience() {
  const section = document.getElementById('experience');
  const container = document.getElementById('experience-list');
  const navLinks = document.querySelectorAll('a[href="#experience"]');

  // Jika tidak ada data pengalaman kerja, sembunyikan section dan link navbar-nya secara rapi
  if (!PORTFOLIO_DATA.experiences || PORTFOLIO_DATA.experiences.length === 0) {
    if (section) section.classList.add('hidden');
    navLinks.forEach(link => link.classList.add('hidden'));
    return;
  }

  if (section) section.classList.remove('hidden');
  navLinks.forEach(link => link.classList.remove('hidden'));
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experiences.map((exp, index) => `
    <div class="relative pl-8 md:pl-10 group">
      <!-- Garis Vertikal & Dot Timeline -->
      <div class="absolute left-0 top-1.5 bottom-0 w-px bg-slate-800 group-last:bg-transparent"></div>
      <div class="absolute -left-1.5 top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300 shadow-md shadow-blue-500/30"></div>

      <!-- Experience Card -->
      <div class="glass-card rounded-2xl p-6 md:p-8 card-hover-lift mb-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
          <div>
            <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">${exp.role}</h3>
            <div class="text-sm font-medium text-slate-300 flex items-center gap-2 mt-0.5">
              <span class="text-blue-400 font-semibold">${exp.company}</span>
              <span class="text-slate-600">•</span>
              <span class="text-slate-400">${exp.location}</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
              ${exp.period}
            </span>
            <span class="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-400 border border-slate-700/60">
              ${exp.type}
            </span>
          </div>
        </div>

        <p class="text-sm text-slate-300 leading-relaxed mb-4">${exp.description}</p>

        <!-- Highlights -->
        ${exp.highlights && exp.highlights.length ? `
          <ul class="space-y-2 mb-5">
            ${exp.highlights.map(h => `
              <li class="flex items-start text-xs md:text-sm text-slate-300">
                ${ICONS.check}
                <span class="ml-2.5">${h}</span>
              </li>
            `).join('')}
          </ul>
        ` : ''}

        <!-- Tech tags -->
        ${exp.technologies && exp.technologies.length ? `
          <div class="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
            ${exp.technologies.map(t => `
              <span class="px-2.5 py-1 text-xs rounded-lg bg-slate-800/90 text-slate-300 border border-slate-700/50 font-mono">
                ${t}
              </span>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </div>
  `).join('');
}

// 4. Render Project Section
function renderProjects() {
  const container = document.getElementById('project-grid');
  if (!container || !Array.isArray(PORTFOLIO_DATA.projects)) return;

  container.innerHTML = PORTFOLIO_DATA.projects.map(proj => `
    <div class="glass-card rounded-2xl overflow-hidden card-hover-lift flex flex-col group border border-slate-800/80">
      <!-- Gambar Pratinjau Proyek -->
      <div class="relative overflow-hidden aspect-video bg-slate-900">
        <img 
          src="${proj.image}" 
          alt="${proj.title}" 
          loading="lazy"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80'"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
        <div class="absolute top-3 left-3">
          <span class="px-3 py-1 text-xs font-semibold rounded-full bg-slate-900/90 text-blue-300 backdrop-blur-md border border-blue-500/30">
            ${proj.category}
          </span>
        </div>
      </div>

      <!-- Konten Proyek -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            ${proj.title}
          </h3>
          <p class="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
            ${proj.description}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${proj.tags.map(t => `
              <span class="px-2.5 py-0.5 text-xs rounded-md bg-slate-800 text-slate-300 font-mono border border-slate-700/50">
                ${t}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Tombol Aksi -->
        <div class="flex items-center gap-3 pt-4 border-t border-slate-800/80">
          ${proj.demoUrl ? `
            <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/25 transition-all">
              Live Demo ${ICONS.externalLink}
            </a>
          ` : ''}
          ${proj.githubUrl ? `
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all" aria-label="Lihat Source Code">
              ${ICONS.github}
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

// 5. Render Education Section
function renderEducation() {
  const container = document.getElementById('education-list');
  if (!container || !Array.isArray(PORTFOLIO_DATA.education)) return;

  container.innerHTML = PORTFOLIO_DATA.education.map(edu => `
    <div class="glass-card rounded-2xl p-6 md:p-8 card-hover-lift border border-slate-800/80">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
        <div>
          <h3 class="text-xl font-bold text-white">${edu.degree}</h3>
          <div class="text-sm font-semibold text-blue-400 mt-0.5">${edu.institution}</div>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            ${edu.period}
          </span>
          ${edu.score ? `
            <span class="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              ${edu.score}
            </span>
          ` : ''}
        </div>
      </div>

      <p class="text-sm text-slate-300 leading-relaxed mb-4">${edu.description}</p>

      ${edu.activities && edu.activities.length ? `
        <div class="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
          ${edu.activities.map(act => `
            <span class="inline-flex items-center text-xs text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
              ${act}
            </span>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `).join('');
}

// 6. Render Skills Section
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container || !Array.isArray(PORTFOLIO_DATA.skills)) return;

  // Kelompokkan skills berdasarkan category
  const categories = {};
  PORTFOLIO_DATA.skills.forEach(s => {
    const cat = s.category || 'Lainnya';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(s);
  });

  container.innerHTML = Object.entries(categories).map(([catName, skills]) => `
    <div class="glass-card rounded-2xl p-5 border border-slate-800/80">
      <h3 class="text-sm font-bold uppercase tracking-wider text-blue-400 mb-3">${catName}</h3>
      <div class="flex flex-wrap gap-2">
        ${skills.map(s => `
          <span class="px-3 py-1.5 text-xs font-medium rounded-xl bg-slate-800/90 text-slate-200 border border-slate-700/60 hover:border-blue-500 hover:text-white transition-all cursor-default">
            ${s.name}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// 7. Render Contact Section
function renderContact() {
  const c = PORTFOLIO_DATA.contact || {};
  const cardsContainer = document.getElementById('contact-cards');

  if (document.getElementById('contact-title')) {
    document.getElementById('contact-title').textContent = c.title || 'Mari Terhubung!';
  }
  if (document.getElementById('contact-subtitle')) {
    document.getElementById('contact-subtitle').textContent = c.subtitle || '';
  }

  if (cardsContainer && Array.isArray(c.cards)) {
    cardsContainer.innerHTML = c.cards.map(card => `
      <a href="${card.link}" target="_blank" rel="noopener noreferrer" class="glass-card rounded-2xl p-6 card-hover-lift flex items-start gap-4 border border-slate-800/80 group">
        <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
          ${ICONS[card.icon] || ICONS.email}
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">${card.type}</div>
          <div class="text-base font-bold text-white truncate group-hover:text-blue-400 transition-colors">${card.value}</div>
          <div class="text-xs font-medium text-blue-400 mt-2 flex items-center">
            ${card.actionText} ${ICONS.arrowRight}
          </div>
        </div>
      </a>
    `).join('');
  }
}

// 8. Render Footer
function renderFooter() {
  const p = PORTFOLIO_DATA.profile;
  const f = PORTFOLIO_DATA.footer;

  const footerName = document.getElementById('footer-name');
  if (footerName) footerName.textContent = p.name;

  const footerTagline = document.getElementById('footer-tagline');
  if (footerTagline) footerTagline.textContent = f.tagline;

  const footerYear = document.getElementById('footer-year');
  if (footerYear) footerYear.textContent = f.copyrightYear;

  // Footer Social Links
  const footerSocials = document.getElementById('footer-socials');
  if (footerSocials) {
    footerSocials.innerHTML = '';
    const socials = p.socials || {};
    for (const [key, url] of Object.entries(socials)) {
      if (url && ICONS[key]) {
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center border border-slate-700/60 transition-colors';
        a.setAttribute('aria-label', key);
        a.innerHTML = ICONS[key];
        footerSocials.appendChild(a);
      }
    }
  }
}

// Fitur Interaktif: Mobile Menu Toggle
function setupMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// Fitur Interaktif: Sticky Navbar Glass Shadow
function setupStickyNavbar() {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('shadow-xl', 'shadow-black/20', 'border-slate-800');
      navbar.classList.remove('border-transparent');
    } else {
      navbar.classList.remove('shadow-xl', 'shadow-black/20', 'border-slate-800');
      navbar.classList.add('border-transparent');
    }
  });
}

// Fitur Interaktif: Form Kontak Direct Messaging
function setupContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('sender-name').value.trim();
    const email = document.getElementById('sender-email').value.trim();
    const message = document.getElementById('sender-message').value.trim();

    if (!name || !message) {
      alert('Mohon isi nama dan pesan Anda.');
      return;
    }

    const recipientEmail = PORTFOLIO_DATA.profile.email;
    const whatsappNum = (PORTFOLIO_DATA.profile.phone || '').replace(/[^0-9]/g, '');

    // Buat teks pesan
    const encodedText = encodeURIComponent(`Halo ${PORTFOLIO_DATA.profile.name},\n\nNama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);

    // Buka WhatsApp langsung atau fallback ke Email
    if (whatsappNum) {
      window.open(`https://wa.me/${whatsappNum}?text=${encodedText}`, '_blank');
    } else {
      window.location.href = `mailto:${recipientEmail}?subject=Pesan%20dari%20Portofolio%20(${name})&body=${encodedText}`;
    }

    form.reset();
  });
}
