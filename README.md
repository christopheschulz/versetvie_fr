# Verset Vie – Landing Page

Ce dépôt contient la landing page statique de l'application Verset Vie.

## Structure des fichiers

- `index.html` : page d'accueil
- `mentions-legales.html` : mentions légales obligatoires
- `politique-confidentialite.html` : politique de confidentialité
- `contact.html` : page de contact
- `assets/bg-landing.jpg` : image de fond (à placer dans un dossier `assets`)

## Publier sur GitHub Pages

1. **Crée un nouveau dépôt GitHub** (ex : `versetvie`)
2. Place tous les fichiers à la racine du dépôt (ou dans un dossier `/docs` si tu préfères)
3. Ajoute, commit et pousse les fichiers sur GitHub :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/ton-utilisateur/versetvie.git
   git push -u origin main
   ```
4. Va dans les paramètres du dépôt > Pages > choisis la branche `main` et le dossier `/root` (ou `/docs` si tu utilises ce dossier)
5. Ton site sera accessible à l'adresse `https://ton-utilisateur.github.io/versetvie/`

## Conseils
- Utilise des **chemins relatifs** pour les liens et images (ex : `assets/bg-landing.jpg`)
- Personnalise les mentions légales avec tes informations d'éditeur
- Si tu ajoutes Google Analytics ou des cookies, adapte la politique de confidentialité et ajoute une bannière cookies

---

Pour toute question, contacte : contact@versetvie.app # versetvie_fr
