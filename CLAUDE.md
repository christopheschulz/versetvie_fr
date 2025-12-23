# CLAUDE.md

Ce fichier fournit des conseils à Claude Code (claude.ai/code) lors du travail sur le code de ce dépôt.

## Vue d'ensemble du projet

Il s'agit d'une landing page statique pour l'application mobile **VersetVie**, une application chrétienne française qui fournit des versets bibliques quotidiens avec des encouragements. La landing page est hébergée sur GitHub Pages et sert de site web marketing principal.

## Architecture et structure

Il s'agit d'un site web statique simple sans processus de build ni dépendances :

- **Pages HTML statiques** : Toutes les pages sont des fichiers HTML autonomes avec CSS et JavaScript intégrés
- **Aucun framework** : Utilise HTML vanilla, CSS (avec Tailwind CDN) et JavaScript
- **Design responsive** : Layout responsive mobile-first utilisant Tailwind CSS
- **Système de thème** : Basculement mode clair/sombre avec persistance localStorage
- **Assets** : Images stockées dans le répertoire `/assets/`
- **Formulaires** : Le formulaire de contact utilise le service FormSubmit.co

### Structure des fichiers
```
├── index.html              # Page d'accueil principale
├── contact.html            # Page formulaire de contact
├── mentions-legales.html   # Mentions légales (obligation légale française)
├── politique-confidentialite.html  # Politique de confidentialité
├── don.html               # Page de don (si présente)
├── assets/                # Images et fichiers média
│   ├── icon-versetvie.png # Icône de l'app
│   ├── verset.png         # Capture d'écran app - accueil
│   ├── encouragement.png  # Capture d'écran app - motivation
│   ├── categories.png     # Capture d'écran app - catégories
│   ├── statistiques.png   # Capture d'écran app - statistiques
│   └── ...               # Autres captures et images
├── CNAME                  # Domaine personnalisé GitHub Pages
└── README.md             # Documentation du projet
```

## Fonctionnalités principales

- **Mode Sombre/Clair** : Basculement de thème persistant avec localStorage
- **Carrousel d'images** : Swiper.js pour la galerie de captures d'écran
- **Animations de scroll** : Intersection Observer pour les effets reveal-on-scroll
- **Formulaire de contact** : Intégré avec FormSubmit.co pour la gestion des emails
- **Liens App Store** : Liens directs vers l'iOS App Store
- **Design responsive** : Fonctionne sur toutes les tailles d'appareils

## Directives de développement

### Approche de stylisation
- Utilise Tailwind CSS via CDN (non compilé)
- CSS personnalisé pour les animations complexes et le basculement de thème
- Schéma de couleurs cohérent : jaune (#facc15) pour l'accent, gris foncés pour le texte
- Effets de glass morphism avec backdrop-blur

### Architecture JavaScript
- JavaScript vanilla uniquement - aucun framework
- Gestion des thèmes avec persistance localStorage
- Gestion des formulaires avec l'API fetch
- Intersection Observer pour les animations
- Swiper.js pour la fonctionnalité carrousel

### Gestion du contenu
- Tout le contenu textuel est en français
- Les captures d'écran de l'app doivent être mises à jour quand l'UI de l'app change
- Le formulaire de contact envoie vers : krisskoolbycode@etik.com

## Déploiement

Ce site est déployé via GitHub Pages :
- Hébergé à la racine du dépôt
- Domaine personnalisé configuré via le fichier CNAME
- Déploiement automatique lors du push sur la branche main

### Publier les modifications
1. Apporter des modifications aux fichiers HTML/CSS/JS
2. Tester localement en ouvrant les fichiers HTML dans le navigateur
3. Commit et push vers la branche main
4. Les modifications se déploieront automatiquement sur GitHub Pages

## Dépendances externes

- **Tailwind CSS** : `https://cdn.tailwindcss.com`
- **Google Fonts** : Polices Inter & Playfair Display
- **Swiper.js** : `https://cdn.jsdelivr.net/npm/swiper@11/`
- **FormSubmit.co** : Service de gestion des formulaires de contact

## Notes importantes

- Aucun processus de build - édition directe des fichiers
- Tous les chemins utilisent des URLs relatives pour la compatibilité GitHub Pages
- Les images doivent être optimisées pour le web avant d'être ajoutées à assets/
- La politique de confidentialité mentionne l'usage de Mixpanel dans l'application mobile
- Les pages légales (mentions-legales, politique-confidentialite) sont requises pour la conformité française

## Bonnes pratiques de développement

- **Séparation des langages** : 
  - respecter la séparation des langues. Pas de css ou de js dans le html