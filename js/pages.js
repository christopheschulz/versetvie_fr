/**
 * Script pour les pages légales et autres pages secondaires
 */

// Gestion du thème (version simplifiée)
const themeManager = {
  html: document.documentElement,
  modeSwitch: document.getElementById('modeSwitch'),
  modeSwitchIcon: document.getElementById('modeSwitchIcon'),
  modeSwitchText: document.getElementById('modeSwitchText'),
  
  init() {
    this.modeSwitch?.addEventListener('click', () => {
      this.toggle();
    });
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
    const savedTheme = localStorage.getItem('theme');
    this.setMode(savedTheme || 'light');
  }
};

// Navigation mobile
const navigation = {
  mobileMenuBtn: document.getElementById('mobileMenuBtn'),
  navMobile: document.getElementById('navMobile'),
  
  init() {
    this.mobileMenuBtn?.addEventListener('click', () => {
      this.toggleMobileMenu();
    });
    
    this.navMobile?.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-link-mobile')) {
        this.closeMobileMenu();
      }
    });
  },
  
  toggleMobileMenu() {
    this.navMobile?.classList.toggle('active');
    this.mobileMenuBtn?.classList.toggle('active');
  },
  
  closeMobileMenu() {
    this.navMobile?.classList.remove('active');
    this.mobileMenuBtn?.classList.remove('active');
  }
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  themeManager.init();
  navigation.init();
});