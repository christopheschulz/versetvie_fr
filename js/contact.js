/**
 * Script pour la page de contact
 */

// Import des modules communs (si disponibles)
let themeManager, navigation;

// Si on est dans un environnement avec modules
if (typeof window !== 'undefined' && window.themeManager) {
  themeManager = window.themeManager;
  navigation = window.navigation;
} else {
  // Sinon, on crée des versions simplifiées
  themeManager = {
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

  navigation = {
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
}

// Gestion du formulaire de contact
const contactForm = {
  form: document.getElementById('contactForm'),
  modal: document.getElementById('confirmationModal'),
  
  init() {
    this.form?.addEventListener('submit', (e) => {
      this.handleSubmit(e);
    });
  },
  
  handleSubmit(e) {
    e.preventDefault();
    
    const form = this.form;
    const submitButton = form.querySelector('button[type="submit"]');
    const modal = this.modal;
    
    // Désactiver le bouton pendant l'envoi
    submitButton.disabled = true;
    submitButton.innerHTML = `
      <svg class="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Envoi en cours...
    `;

    // Envoyer le formulaire en AJAX
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      if (response.ok) {
        // Réinitialiser le formulaire
        form.reset();
        // Afficher la modale
        modal?.classList.add('active');
        // Rediriger vers la page d'accueil après 4 secondes
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 4000);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    })
    .catch(error => {
      console.error('Erreur:', error);
      alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
    })
    .finally(() => {
      // Réactiver le bouton
      submitButton.disabled = false;
      submitButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l9-6 9 6-9 6-9-6zm0 0v6a9 9 0 009 9 9 9 0 009-9v-6" />
        </svg>
        Envoyer
      `;
    });
  }
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  themeManager.init();
  navigation.init();
  contactForm.init();
});