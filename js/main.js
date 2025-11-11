/**
 * Verset Vie - Script principal
 * Gestion des animations, navigation, carousel et thème
 */

// Gestion de la bannière d'annonce
const announcementBanner = {
  banner: document.getElementById('announcementBanner'),
  closeBtn: document.getElementById('closeAnnouncement'),

  init() {
    // Vérifier si la bannière a déjà été fermée
    const isClosed = localStorage.getItem('announcementClosed');

    if (isClosed === 'true') {
      this.banner?.remove();
      document.body.style.paddingTop = '80px';
    } else {
      // Gérer la fermeture de la bannière
      this.closeBtn?.addEventListener('click', () => {
        this.close();
      });
    }
  },

  close() {
    this.banner?.classList.add('hidden');
    localStorage.setItem('announcementClosed', 'true');

    // Attendre la fin de l'animation avant de retirer l'élément
    setTimeout(() => {
      this.banner?.remove();
      document.body.style.paddingTop = '80px';
    }, 300);
  }
};

// Animations de révélation au scroll
const reveals = document.querySelectorAll('.reveal-on-scroll');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { 
  threshold: 0.1,
  rootMargin: '50px 0px -50px 0px'
});
reveals.forEach(el => observer.observe(el));

// Carousel avec 3 images visibles
const carousel = {
  currentSlide: 0,
  slides: document.querySelectorAll('.carousel-slide'),
  dots: document.querySelectorAll('.carousel-dot'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  
  init() {
    // Gestion des boutons précédent/suivant
    this.prevBtn?.addEventListener('click', () => this.prevSlide());
    this.nextBtn?.addEventListener('click', () => this.nextSlide());
    
    // Gestion des points de navigation
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });
    
    // Permettre de cliquer sur les images latérales
    this.slides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        if (index !== this.currentSlide) {
          this.goToSlide(index);
        }
      });
    });
  },
  
  updateSlides() {
    const totalSlides = this.slides.length;
    
    this.slides.forEach((slide, index) => {
      slide.classList.remove('active', 'prev', 'next', 'hidden');
      
      if (index === this.currentSlide) {
        // Image active (centre)
        slide.classList.add('active');
      } else if (index === (this.currentSlide - 1 + totalSlides) % totalSlides) {
        // Image précédente (gauche)
        slide.classList.add('prev');
      } else if (index === (this.currentSlide + 1) % totalSlides) {
        // Image suivante (droite)
        slide.classList.add('next');
      } else {
        // Images cachées
        slide.classList.add('hidden');
      }
    });
    
    // Mise à jour des points de navigation
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentSlide);
    });
  },
  
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateSlides();
  },
  
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.updateSlides();
  },
  
  goToSlide(index) {
    this.currentSlide = index;
    this.updateSlides();
  }
};

// Gestion du thème clair/sombre
const themeManager = {
  html: document.documentElement,
  modeSwitch: document.getElementById('modeSwitch'),
  modeSwitchIcon: document.getElementById('modeSwitchIcon'),
  modeSwitchText: document.getElementById('modeSwitchText'),
  
  init() {
    // Gestion du clic sur le bouton de thème
    this.modeSwitch?.addEventListener('click', () => {
      this.toggle();
    });
    
    // Initialiser le thème au chargement
    this.initTheme();
  },
  
  setMode(mode) {
    if (mode === 'dark') {
      this.html.classList.add('dark');
      if (this.modeSwitchIcon) this.modeSwitchIcon.textContent = '☀️';
      if (this.modeSwitchText) this.modeSwitchText.textContent = 'Mode sombre';
      localStorage.setItem('theme', 'dark');
    } else {
      this.html.classList.remove('dark');
      if (this.modeSwitchIcon) this.modeSwitchIcon.textContent = '🌙';
      if (this.modeSwitchText) this.modeSwitchText.textContent = 'Mode clair';
      localStorage.setItem('theme', 'light');
    }
  },
  
  toggle() {
    const isDark = this.html.classList.contains('dark');
    this.setMode(isDark ? 'light' : 'dark');
  },
  
  initTheme() {
    // Vérifier si c'est la première visite
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      // Première visite : forcer le mode sombre
      this.setMode('dark');
      localStorage.setItem('hasVisited', 'true');
    } else {
      // Visites suivantes : utiliser le thème sauvegardé ou le mode clair par défaut
      const savedTheme = localStorage.getItem('theme');
      this.setMode(savedTheme || 'light');
    }
  }
};

// Navigation mobile et smooth scroll
const navigation = {
  mobileMenuBtn: document.getElementById('mobileMenuBtn'),
  navMobile: document.getElementById('navMobile'),
  navLinks: document.querySelectorAll('.nav-link, .nav-link-mobile'),
  
  init() {
    // Gestion du menu mobile
    this.mobileMenuBtn?.addEventListener('click', () => {
      this.toggleMobileMenu();
    });
    
    // Fermer le menu mobile lors du clic sur un lien
    this.navMobile?.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-link-mobile')) {
        this.closeMobileMenu();
      }
    });
    
    // Navigation smooth scroll
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        this.handleNavClick(e, link);
      });
    });
    
    // Active link on scroll
    window.addEventListener('scroll', () => {
      this.updateActiveLink();
    });
  },
  
  toggleMobileMenu() {
    this.navMobile?.classList.toggle('active');
    this.mobileMenuBtn?.classList.toggle('active');
  },
  
  closeMobileMenu() {
    this.navMobile?.classList.remove('active');
    this.mobileMenuBtn?.classList.remove('active');
  },
  
  handleNavClick(e, link) {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = document.querySelector('.header-nav')?.offsetHeight || 80;
        const targetPosition = target.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Mettre à jour le lien actif
        this.navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  },
  
  updateActiveLink() {
    const sections = ['accueil', 'fonctionnalites', 'apercu', 'mission'];
    const headerHeight = document.querySelector('.header-nav')?.offsetHeight || 80;
    
    let current = '';
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= headerHeight + 100 && rect.bottom > headerHeight + 100) {
          current = section;
        }
      }
    });
    
    if (current) {
      this.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }
  }
};

// Initialisation de tous les modules
document.addEventListener('DOMContentLoaded', () => {
  // Initialiser la bannière d'annonce
  announcementBanner.init();

  // Initialiser le carousel
  if (carousel.slides.length > 0) {
    carousel.init();
    carousel.updateSlides(); // S'assurer que l'état initial est correct
  }

  // Initialiser la gestion du thème
  themeManager.init();

  // Initialiser la navigation
  navigation.init();
  
  // Force l'affichage des sections si les animations ne se déclenchent pas
  setTimeout(() => {
    const hiddenSections = document.querySelectorAll('.reveal-on-scroll:not(.visible)');
    hiddenSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.classList.add('visible');
      }
    });
  }, 1000);
});

// Export pour les autres pages si nécessaire
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    themeManager,
    navigation
  };
}