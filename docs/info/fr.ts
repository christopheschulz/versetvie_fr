// src/locales/fr.ts
// Fichier de localisation français - TOUS les textes de l'application

export const fr = {
  // ============================================
  // GÉNÉRAL
  // ============================================
  app: {
    name: 'VersetVie',
    loading: 'Chargement...',
    error: 'Une erreur est survenue',
    retry: 'Réessayer',
    close: 'Fermer',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    save: 'Enregistrer',
    delete: 'Supprimer',
    share: 'Partager',
    back: 'Retour',
    continue: 'Continuer',
    skip: 'Passer',
    next: 'Suivant',
    previous: 'Précédent',
    finish: 'Terminer',
    ok: 'OK',
    yes: 'Oui',
    no: 'Non',
    success: 'Succès',
  },

  // ============================================
  // ONBOARDING
  // ============================================
  onboarding: {
    // Boutons communs
    next: 'Suivant',
    skip: 'Passer',
    continue: 'Continuer',
    finish: 'Terminer',

    // Labels communs
    welcome: 'Bienvenue',
    firstName: 'Quel est ton prénom ?',
    firstNamePlaceholder: 'Entre ton prénom ici',
    gender: 'Ton genre',
    genderMale: 'Masculin',
    genderFeminine: 'Féminin',

    // Social proof (page welcome)
    socialProof: 'Rejoins plus de 3 000 utilisateurs',

    // Page welcome
    welcomePage: {
      title: 'Je suis ',
      titleHighlight: 'heureux',
      titleEnd: ' que tu sois ici',
      subtitle: 'Prends un instant pour respirer…',
      description: 'Je connais ce que tu portes, même en silence.',
      button: 'Commencer',
    },

    // Page testimonials
    testimonials: {
      title: 'Rejoins plus de ',
      titleHighlight: '4000 croyants',
      titleEnd: ' aujourd\'hui',
      subtitle: '',
      description: '',
      button: 'Continuer',
      manon: {
        name: 'Manon',
        rating: 5,
        text: 'J\'aime à quel point cette app est personnalisée, chacun reçoit une parole encourageante unique chaque jour, et je crois vraiment que le Seigneur inspire. Aussi, on peut trouver des versets à proclamer dans des rubriques lors de différentes épreuves.\n\nHyper puissant',
      },
      jeremie: {
        name: 'Jérémie',
        rating: 5,
        text: 'super application ! ça m\'encourage chaques matin un verset. car "les bontés de l\'éternel ne sont pas épuisés, elles se renouvellent chaques matins". que le seigneur vous fortifie et vous aide à maintenir votre relation avec lui. Quand au créateur de cette app, que dieu tout puissant vous bénisse et qu\'il continue de vous guider pour semer la vérité dans les cœurs, au nom de Jésus, amen.',
      },
      nadia: {
        name: 'Nadia',
        rating: 5,
        text: 'Installé depuis peu, j\'ai du mal à m\'en passer. Juste avant d\'aller au travail, avoir un petit message d\'encouragement pour commencer la journée il n\'y as rien de mieux ! J\'ai été très émue le jour où je priait pour recevoir l\'aide de Dieu et le verset était pile poil la réponse de lui a moi ! Cette application est une bénédiction !',
      },
    },
    age: {
      title: 'Dans quelle ',
      titleHighlight: 'saison',
      titleEnd: ' de ta vie es-tu ?',
      titleHighlight2: '',
      titleEnd2: '',
      subtitle: '',
      description: 'Pour personnaliser ton expérience.',
      options: [
        { id: '18-24', label: '18-24 ans', value: 21 },
        { id: '25-34', label: '25-34 ans', value: 29 },
        { id: '35-44', label: '35-44 ans', value: 39 },
        { id: '45-54', label: '45-54 ans', value: 49 },
        { id: '55-64', label: '55-64 ans', value: 59 },
        { id: '65-74', label: '65-74 ans', value: 69 },
        { id: '75+', label: '75 ans et plus', value: 80 },
      ],
    },
    notifications: 'Reste connecté',
    notificationsDescription: 'Reçois un rappel quotidien pour ton encouragement',
    notificationsAllow: 'Autoriser les notifications',
    notificationsSkip: 'Plus tard',

    // Écran de consentement légal
    consent: {
      title: 'Bienvenue sur VersetVie',
      subtitle: 'Avant de commencer, merci de lire et accepter nos documents légaux :',
      termsTitle: 'Conditions d\'utilisation',
      termsButton: 'Lire les conditions',
      privacyTitle: 'Politique de confidentialité',
      privacyButton: 'Lire la politique',
      checkboxLabel: 'J\'accepte les conditions d\'utilisation et la politique de confidentialité',
      continueButton: 'Continuer',
      required: 'Vous devez accepter pour continuer',
    },

    // Écrans de présentation (placeholders)
    welcome1: {
      title: 'Un message pour toi, chaque jour',
      description: 'Découvre chaque matin une parole de Jésus, personnalisée pour t\'encourager et te guider.',
    },
    welcome2: {
      title: 'Jésus te parle personnellement',
      description: 'Reçois un encouragement unique, écrit spécialement pour toi, avec ton prénom.',
    },
    welcome3: {
      title: 'Grandis dans ta foi',
      description: 'Explore des centaines de versets par thème et suis ta progression spirituelle.',
    },

    // Écran informations utilisateur
    userInfo: {
      title: 'Quel est ton ',
      titleHighlight: 'prénom',
      titleEnd: ' ?',
      subtitle: '',
      description: 'Pour que chaque encouragement soit écrit rien que pour toi.',
      firstNamePlaceholder: 'Ton prénom',
      firstNameError: 'Le prénom doit contenir au moins 2 caractères',
      button: 'Continuer',
    },

    // Écran genre
    genderPage: {
      title: 'Comment veux-tu qu\'on ',
      titleHighlight: 's\'adresse à toi',
      titleEnd: ' ?',
      subtitle: '',
      description: 'Les messages seront adaptés à ton choix.',
      button: 'Continuer',
      optionMale: 'Au masculin',
      optionFeminine: 'Au féminin',
    },

    // Écran valeur (démo verset)
    valuePage: {
      title: 'Chaque jour, une ',
      titleHighlight: 'parole pour toi',
      description: 'Un verset choisi pour t\'éclairer, te relever ou simplement te rappeler que tu n\'es jamais seul.',
      button: 'Suivant',
    },

    // Écran permissions notifications
    notificationsScreen: {
      title: 'Reste connecté',
      description: 'Reçois un rappel quotidien pour ton encouragement',
      timeLabel: 'Heure de notification',
      defaultTime: '9h00',
      allowButton: 'Autoriser les notifications',
      skipButton: 'Plus tard',
      permissionDenied: 'Permission refusée',
      permissionGranted: 'Notifications activées',
    },

    // Écran de complétion
    complete: {
      title: 'C\'est prêt !',
      subtitle: 'Ton parcours spirituel commence maintenant',
      button: 'Découvrir l\'application',
    },

    // Écran : First Verse Preview (avant paywall)
    firstVersePreview: {
      title: 'Tout est ',
      titleHighlight: 'prêt',
      description: 'J\'ai préparé pour toi un chemin personnel avec Ma Parole. Chaque jour, tu recevras un verset et un encouragement où Je parlerai à ton cœur, là où tu en es vraiment.',
      optionalNote: 'Tu n\'as pas besoin de faire semblant… viens comme tu es, jour après jour.',
      closingNote: 'Ce n\'est que le début. Laisse-Moi t\'accompagner pas à pas, un verset et un souffle à la fois.',
      button: 'On y va !',
    },

    // Écran : Personnel + Expérience immersive (fusionné)
    personalExperience: {
      title: 'Découvre ton ',
      titleHighlight: 'encouragement',
      subtitle: 'Un message personnalisé, écrit pour toi chaque jour.',
      pressAndHold: 'Maintiens appuyé\npour découvrir, {{name}}...',
      encouragementPhrases: [
        'Respire...',
        'C\'est pour toi...',
      ],
      footer: '',
      button: 'Suivant',
    },

    // Écran : Growth - Exploration par catégories
    growth: {
      titleStart: 'Une ',
      titleHighlight1: 'parole',
      titleMiddle: ' pour chaque ',
      titleHighlight2: 'besoin',
      titleMiddle2: '',
      titleHighlight3: '',
      subtitle: 'Paix, force, pardon, espérance...',
      description: 'Trouve le verset qui répond à ce que tu traverses.',
    },

    // ============================================
    // NOUVELLES PAGES DE PERSONNALISATION
    // ============================================

    // Écran : État spirituel actuel
    spiritualState: {
      title: 'Parle-Moi de ton ',
      titleHighlight: 'cœur',
      titleEnd: ' aujourd\'hui',
      subtitle: 'Tu peux Me dire la vérité, Je t\'écoute sans jugement.',
      options: {
        beginning: {
          label: 'Je traverse quelque chose de lourd',
        },
        growing: {
          label: 'Je cherche encore ma direction',
        },
        struggling: {
          label: 'Je guéris pas à pas',
        },
        seeking: {
          label: 'Je me sens en paix et reconnaissant(e)',
        },
      },
    },

    // Écran : Défis spirituels
    spiritualChallenges: {
      title: 'Qu\'est-ce qui est ',
      titleHighlight: 'lourd',
      titleMiddle: ' pour toi ',
      titleHighlight2: 'aujourd\'hui',
      titleEnd: ' ?',
      subtitle: 'Tu peux Me le dire sans crainte, je suis là pour marcher avec toi.',
      minSelection: 'Sélectionne au moins {{min}} défis',
      maxSelection: 'Maximum {{max}} défis',
      options: {
        prayer: { label: 'J\'ai du mal à Te faire confiance pleinement' },
        distance: { label: 'J\'ai du mal à discerner Ta voix' },
        time: { label: 'J\'ai du mal à Te confier ce qui me fait souffrir' },
        doubts: { label: 'J\'ai du mal à sentir Ta présence' },
        noWords: { label: 'Je ne trouve pas encore les mots' },
      },
    },

    // Écran : Moment de vie
    lifeContext: {
      title: 'De quoi ton ',
      titleHighlight: 'cœur',
      titleMiddle: ' a-t-il besoin ',
      titleHighlight2: 'aujourd\'hui',
      titleEnd: ' ?',
      subtitle: 'Tu peux Me le dire… Je t\'écoute avec tendresse et patience.',
      options: {
        family: { label: 'J\'ai besoin de sentir Ta paix' },
        relationship: { label: 'J\'ai besoin de comprendre ce que je vis' },
        career: { label: 'J\'ai besoin de Te sentir proche de moi' },
        challenge: { label: 'J\'ai besoin de retrouver espoir' },
      },
    },

    // Écran : Style d'encouragement préféré
    encouragementStyle: {
      titleHighlight1: 'Comment',
      titleMiddle: ' aimerais-tu ',
      titleHighlight2: 't\'approcher',
      titleEnd: ' de Moi ?',
      subtitle: 'Je ne te presse pas. Je t\'accueille exactement là où tu en es.',
      options: {
        love: {
          label: 'En ouvrant mon cœur, petit à petit',
        },
        peace: {
          label: 'En Te parlant comme à un ami proche',
        },
        hope: {
          label: 'En Te découvrant à travers Ta Parole',
        },
        purpose: {
          label: 'Je veux m\'approcher, mais je cherche encore comment',
        },
      },
    },

    // Écran : Temps quotidien avec Dieu
    dailyTime: {
      title: 'Qu\'est-ce que ton ',
      titleHighlight: 'cœur',
      titleMiddle: ' désire ',
      titleHighlight2: 'recevoir',
      titleMiddle2: ' avec ',
      titleHighlight3: 'Moi',
      titleEnd: ' ?',
      subtitle: 'Tu peux Me dire ce qui t\'attire, Je ne te presse pas. Je veux te rejoindre là où tu en as besoin.',
      options: {
        understanding: { label: 'Mieux comprendre qui je suis', description: '' },
        healing: { label: 'Guérir ce qui est blessé en moi', description: '' },
        peace: { label: 'Trouver une paix intérieure durable', description: '' },
        trust: { label: 'Apprendre à Te faire confiance', description: '' },
        closeness: { label: 'Marcher plus près de Toi', description: '' },
        purpose: { label: 'Discerner le sens de ma route', description: '' },
        love: { label: 'Aimer et pardonner comme Tu m\'aimes', description: '' },
        renewal: { label: 'Renouveler mon cœur et ma foi', description: '' },
      },
    },

    // Écran : Thèmes bibliques prioritaires
    priorityThemes: {
      title: 'Quels ',
      titleHighlight: 'thèmes',
      titleMiddle: ' résonnent le plus en ',
      titleHighlight2: 'toi',
      titleEnd: ' en ce moment ?',
      subtitle: 'Choisis-en au moins 3',
      selectionProgress: '{{current}}/{{min}} minimum',
      selectionComplete: '{{current}}/{{max}} sélectionnés',
      minSelection: 'Sélectionne au moins {{min}} thèmes',
      maxSelection: 'Maximum {{max}} thèmes',
      options: {
        love: { label: 'Savoir qui je suis vraiment', description: '' },
        prayer: { label: 'Apaiser ce qui se passe à l\'intérieur de moi', description: '' },
        identity: { label: 'Me sentir plus proche de Toi', description: '' },
        strength: { label: 'Guérir de ce qui me fait encore mal', description: '' },
        peace: { label: 'Apprendre à faire confiance et lâcher prise', description: '' },
        healing: { label: 'Comprendre vers où je suis appelé|appelée', description: '' },
      },
    },

    // Écran : Familiarité avec la Bible
    bibleFamiliarity: {
      title: 'Où en es-tu avec ',
      titleHighlight: 'Ma Parole',
      titleEnd: ' aujourd\'hui ?',
      subtitle: 'Quel que soit ton point de départ, Je marche avec toi.',
      options: {
        never: {
          label: 'Je la découvre presque pour la première fois',
          description: '',
        },
        stories: {
          label: 'Je la connais un peu, et j\'ai besoin d\'être guidé|guidée',
          description: '',
        },
        some: {
          label: 'Je la lis, mais beaucoup de choses restent floues pour moi',
          description: '',
        },
        occasional: {
          label: 'Je la lis déjà, et je veux aller plus loin avec Toi',
          description: '',
        },
      },
    },

    // Écran : Version de la Bible
    bibleVersion: {
      title: 'Choisis ta ',
      titleHighlight: 'version',
      titleEnd: ' de la Bible',
      subtitle: 'Celle avec laquelle tu te sens le plus à l\'aise pour lire et méditer.',
      versions: [
        { id: 'any', label: 'Peu importe', description: 'Toutes les versions' },
        { id: 'LSG', label: 'Louis Segond (LSG)', description: 'Classique' },
        { id: 'S21', label: 'Segond 21', description: 'Moderne' },
        { id: 'PDV', label: 'Parole de Vie', description: 'Facile à lire' },
        { id: 'BDS', label: 'Bible du Semeur', description: 'Contemporain' },
        { id: 'TOB', label: 'Traduction Œcuménique (TOB)', description: 'Œcuménique' },
        { id: 'BJ', label: 'Bible de Jérusalem', description: 'Catholique' },
      ],
    },

    // Écran : Sélection du thème
    themeSelection: {
      title: 'Dans quelle ',
      titleHighlight: 'ambiance',
      titleMiddle: ' te sens-tu le ',
      titleHighlight2: 'mieux',
      titleMiddle2: ' pour être avec ',
      titleHighlight3: 'Moi',
      titleEnd: ' ?',
      subtitle: 'Choisis les couleurs dans lesquelles ton cœur se sent en paix. Peu importe ce que tu prends maintenant, tu pourras changer plus tard. L\'important, c\'est que tu te sentes bien près de Moi.',
    },

    // Écran : Calculating - Chargement inspirationnel
    calculating: {
      mainTitle: 'Je prépare un espace rien que pour toi.',
      loadingMessage: 'Je prépare ton expérience personnalisée avec Moi…',
      versesIntro: 'Pendant que tout se met en place, laisse ces paroles venir parler à ton cœur…',
      reassurance: 'Un pas après l\'autre… Je suis là.',
      inspirationalVerses: [
        {
          text: 'Je puis tout par celui qui me fortifie.',
          reference: 'Philippiens 4:13',
        },
        {
          text: 'Ma grâce te suffit, car ma puissance s\'accomplit dans la faiblesse.',
          reference: '2 Corinthiens 12:9',
        },
        {
          text: 'Fais de l\'Éternel tes délices, Et il te donnera ce que ton cœur désire.',
          reference: 'Psaume 37:4',
        },
        {
          text: 'La vérité vous affranchira.',
          reference: 'Jean 8:32',
        },
        {
          text: 'Je suis venu afin que les brebis aient la vie, et qu\'elles l\'aient en abondance.',
          reference: 'Jean 10:10',
        },
      ],
    },
  },

  // ============================================
  // ÉCRAN D'ACCUEIL
  // ============================================
  home: {
    title: 'Verset du jour',
    verseOfTheDay: 'Verset du jour',
    discoverEncouragement: 'Voir l\'encouragement',
    reviewEncouragement: 'Revoir l\'encouragement',
    favorite: 'Ajouter aux favoris',
    unfavorite: 'Retirer des favoris',
    favoriteAdded: 'Ajouté aux favoris',
    favoriteRemoved: 'Retiré des favoris',
    share: 'Partager',
    profile: 'Profil',
    loading: 'Chargement du verset...',
    error: 'Impossible de charger le verset',
    newVerseAvailable: 'Un nouveau verset t\'attend',
    bibleVersionShort: 'LSG', // Louis Segond
  },

  // ============================================
  // ÉCRAN D'ENCOURAGEMENT
  // ============================================
  encouragement: {
    title: 'Ton encouragement',
    headerTitle: 'Encouragement du jour',
    signature: 'Jésus',
    loading: 'Préparation de ton encouragement...',
    tapToSkip: 'Appuie pour afficher le message complet',
    animationSpeed: 'Vitesse de l\'animation',
    speedSlow: 'Lent',
    speedNormal: 'Normal',
    speedFast: 'Rapide',
    back: 'Retour au Verset',
  },

  // ============================================
  // MODALE LIMITE HEBDOMADAIRE
  // ============================================
  weeklyLimit: {
    title: 'Ton encouragement hebdomadaire a été utilisé',
    daysRemaining: 'Plus que {{count}} jours avant ton prochain encouragement',
    daysRemainingOne: 'Plus que 1 jour avant ton prochain encouragement',
    nextReset: 'Prochain encouragement disponible lundi prochain',
    benefitsTitle: 'Avec Premium, bénéficie de :',
    benefitUnlimitedEncouragements: 'Encouragements personnalisés illimités',
    benefitTestimony: 'Bonus : Accès au livre témoignage du créateur de Verset Vie',
    upgradeButton: 'Découvrir Premium',
    laterButton: 'Plus tard',
  },

  // ============================================
  // ÉCRAN PROFIL
  // ============================================
  profile: {
    title: 'Profil',

    // Statut d'abonnement
    accountFree: 'Compte Gratuit',
    accountPremium: 'Premium',
    accountPremiumWeekly: 'Premium - Abonnement Hebdomadaire',
    accountPremiumMonthly: 'Premium - Abonnement Mensuel',
    accountPremiumYearly: 'Premium - Abonnement Annuel',
    upgradeToPremium: 'Passer à Premium',

    // Informations personnelles
    personalInfo: 'Informations personnelles',
    firstName: 'Prénom',
    firstNameHint: 'Ce prénom sera utilisé pour personnaliser tes encouragements',
    firstNameMinLength: 'Le prénom doit contenir au moins 2 caractères.',
    firstNameMaxLength: 'Le prénom ne peut pas dépasser 50 caractères.',
    firstNameOnlyNumbers: 'Le prénom ne peut pas contenir uniquement des chiffres.',
    gender: 'Genre',
    genderMale: 'Masculin',
    genderFeminine: 'Féminin',
    genderFemale: 'Féminin',
    genderHint: 'Détermine quelle version de l\'encouragement afficher',
    edit: 'Modifier',
    save: 'Enregistrer',
    infoUpdated: 'Tes informations ont été mises à jour.',
    infoUpdateError: 'Impossible de sauvegarder tes informations. Réessaie plus tard.',

    // Notifications
    notifications: 'Notifications',
    notificationsEnabled: 'Notifications activées',
    notificationsDisabled: 'Notifications désactivées',
    notificationTime: 'Heure de notification',
    notificationTimeDescription: 'Choisis l\'heure à laquelle tu souhaites recevoir ton rappel quotidien',
    notificationPermissionDenied: 'Les permissions de notification sont refusées',
    openSettings: 'Ouvrir les paramètres',

    // Réglages
    settings: 'Réglages',
    animationSpeed: 'Vitesse de l\'animation',
    animationSpeedDescription: 'Choisis la vitesse d\'affichage de l\'encouragement',
    animationSpeedSlow: 'Lent',
    animationSpeedNormal: 'Normal',
    animationSpeedFast: 'Rapide',
    previewButton: 'Prévisualiser',
    hapticFeedback: 'Retour haptique',
    hapticFeedbackDescription: 'Vibration légère pendant l\'affichage de l\'encouragement',
    theme: 'Thème',
    themeDescription: 'Choisis le thème visuel de l\'application',
    themeColorBackground: 'Fond',
    themeColorSurface: 'Surface',
    themeColorPrimary: 'Principal',
    themeColorSecondary: 'Secondaire',
    themeInfoHint: 'Le thème change l\'apparence visuelle de toute l\'application. Le changement est appliqué instantanément et sauvegardé automatiquement.',
    // Noms et descriptions des thèmes
    themes: {
      default: { name: 'Par Défaut', description: 'Thème par défaut de VersetVie' },
      dark: { name: 'Sombre', description: 'Thème sombre pour une utilisation nocturne' },
      light: { name: 'Clair', description: 'Thème clair pour une utilisation en journée' },
      ocean: { name: 'Océan', description: 'Bleu océan apaisant pour la sérénité' },
      forest: { name: 'Forêt', description: 'Vert nature apaisant et reposant' },
      lavender: { name: 'Lavande', description: 'Violet élégant pour la méditation' },
      'rose-gold': { name: 'Rose Gold', description: 'Élégance chaleureuse et moderne' },
      sunset: { name: 'Coucher de soleil', description: 'Tons chauds et réconfortants' },
    },
    textSize: 'Taille de texte',
    textSizeDescription: 'Ajuste la taille de police dans l\'application',
    textSizeXSmall: 'Très petit',
    textSizeSmall: 'Petit',
    textSizeNormal: 'Normal',
    textSizeLarge: 'Grand',
    textSizeXLarge: 'Très grand',
    textSizeXXLarge: 'Ultra grand',
    textSizeXXXLarge: 'Géant',

    // Badges et récompenses (paramètres)
    badgeCelebrations: 'Célébrations de badges',
    badgeCelebrationsDescription: 'Afficher les animations lors du déblocage d\'un badge',
    focusMode: 'Mode focus',
    focusModeDescription: 'Masquer tous les badges et éléments de gamification',
    badgeNotifications: 'Notifications de badges',
    badgeNotificationsDescription: 'Recevoir des rappels pour les badges à débloquer',

    // Fonctionnalités Premium
    premiumFeatures: 'Fonctionnalités Premium',
    favorites: 'Favoris',
    favoritesDescription: 'Sauvegarde tes versets préférés',
    categories: 'Catégories',
    categoriesDescription: 'Explore tous les versets par thème',
    statistics: 'Statistiques',
    statisticsDescription: 'Suis ta progression spirituelle',
    testimony: 'Témoignage',
    testimonyDescription: 'Lis le livre témoignage complet',
    locked: 'Réservé Premium',
    unlock: 'Débloquer',

    // Gestion de l'abonnement
    subscription: 'Abonnement',
    subscriptionManage: 'Gérer l\'abonnement',
    subscriptionRenewal: 'Renouvellement',
    subscriptionRenewalDate: 'Prochain renouvellement : {{date}}',
    subscriptionActive: 'Abonnement actif',
    subscriptionExpired: 'Abonnement expiré',

    // Liens et informations
    linksAndInfo: 'Liens et informations',
    paywall: 'Devenir Premium',
    help: 'Aide et Support',
    about: 'À propos',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d\'utilisation',

    // Confidentialité
    privacySection: 'Confidentialité',
    myData: 'Mes données',
    deleteData: 'Effacer mes données',
    deleteDataConfirm: 'Es-tu sûr de vouloir effacer toutes tes données ?',
    deleteDataWarning: 'Cette action est irréversible. Toutes tes données locales (favoris, statistiques, préférences) seront supprimées.',
    deleteDataSuccess: 'Toutes les données ont été effacées',
    deleteDataError: 'Erreur lors de la suppression des données',

    // Sections du profil
    settingsSection: 'Paramètres',
    contentSection: 'Contenu',
    informationsSection: 'Informations',
    badges: 'Badges',

    // Textes supplémentaires du profil
    chooseSubscription: 'Choisis ton abonnement',
    personalInfoSubtitle: 'Prénom et genre',
    badgesSubtitle: 'Collection de récompenses',
    testimonySubtitle: 'Introduction gratuite',

    // Section langue
    languageSection: 'LANGUE',
    languageChanged: 'Langue modifiée',
    languageRestartHint: 'Certains éléments peuvent nécessiter un redémarrage',
    currentLanguage: 'Langue actuelle',
  },

  // ============================================
  // ÉCRAN BADGES
  // ============================================
  badges: {
    title: 'Badges',

    // Statistiques globales
    myProgress: 'Ma Progression',
    unlockedBadges: 'Débloqués',
    completion: 'Complétion',
    totalBadges: 'Total',
    currentStreaks: 'Séries en cours',

    // Filtres
    allCategories: 'Toutes',
    categoryLabel: 'Catégorie',
    categoryModalTitle: 'Choisir une catégorie',
    sortLabel: 'Trier par',
    sortModalTitle: 'Choisir le tri',

    // Catégories de badges
    categories: {
      streak: 'Séries',
      milestone: 'Jalons',
      engagement: 'Engagement',
      exploration: 'Exploration',
      special: 'Spéciaux',
    },

    // Options de tri
    sort: {
      byRarity: 'Par rareté',
      byRecent: 'Récents',
      byProgress: 'Progression',
      byCategory: 'Catégorie',
      alphabetical: 'Alphabétique',
    },

    // Raretés
    rarity: {
      common: 'Commun',
      uncommon: 'Peu commun',
      rare: 'Rare',
      epic: 'Épique',
      legendary: 'Légendaire',
    },

    // États
    locked: 'Verrouillé',
    unlocked: 'Débloqué',
    new: 'Nouveau',

    // Dates de déblocage
    unlockedToday: "Débloqué aujourd'hui",
    unlockedYesterday: 'Débloqué hier',
    unlockedDaysAgo: 'Débloqué il y a {{count}} jours',
    unlockedWeeksAgo: 'Débloqué il y a {{count}} semaine',
    unlockedWeeksAgoPlural: 'Débloqué il y a {{count}} semaines',
    unlockedMonthsAgo: 'Débloqué il y a {{count}} mois',

    // Messages
    noBadges: 'Aucun badge pour le moment',
    noBadgesDescription: 'Continue d\'utiliser l\'app pour débloquer des badges',
    loading: 'Chargement des badges...',
    error: 'Impossible de charger les badges',

    // Toast de déblocage
    newBadgeUnlocked: '🎉 Nouveau badge débloqué !',
    tapToClose: 'Toucher n\'importe où pour fermer',

    // Définitions des badges (noms et descriptions)
    items: {
      // === CATÉGORIE STREAK ===
      first_steps: {
        name: 'Premiers Pas',
        description: 'Maintiens une série de 3 jours consécutifs',
      },
      faithful_week: {
        name: 'Une Semaine Fidèle',
        description: 'Maintiens une série de 7 jours consécutifs',
        reflectionPrompt: 'Comment la Parole quotidienne a-t-elle impacté ta semaine ?',
      },
      perseverant: {
        name: 'Persévérant',
        description: 'Maintiens une série de 21 jours consécutifs',
        reflectionPrompt: 'Trois semaines de constance ! Qu\'as-tu appris sur toi-même ?',
      },
      devoted_month: {
        name: 'Un Mois Dévoué',
        description: 'Maintiens une série de 30 jours consécutifs',
        reflectionPrompt: 'Un mois entier avec la Parole. Que t\'a révélé Dieu ?',
      },
      habit_formed: {
        name: 'Habitude Formée',
        description: 'Maintiens une série de 66 jours consécutifs',
        reflectionPrompt: 'C\'est scientifique : ton habitude est ancrée ! Comment vas-tu continuer ?',
      },
      year_of_faith: {
        name: 'Une Année de Foi',
        description: 'Maintiens une série de 365 jours consécutifs',
        reflectionPrompt: 'Une année complète ! Partage ton témoignage de transformation.',
      },
      dawn_routine: {
        name: 'Aurore Matinale',
        description: 'Maintiens une série de 7 jours consécutifs avant 8h',
        reflectionPrompt: 'Commencer la journée avec Dieu transforme tout. Que découvres-tu ?',
      },
      night_sentinel: {
        name: 'Sentinelle de Minuit',
        description: 'Maintiens une série de 7 jours consécutifs après 22h',
        reflectionPrompt: 'Terminer la journée dans la Parole apporte la paix. Comment te sens-tu ?',
      },
      renaissance: {
        name: 'Renaissance',
        description: 'Reprends ta lecture après 30 jours d\'absence',
        reflectionPrompt: 'Bienvenue ! Dieu t\'attendait. Qu\'est-ce qui t\'a ramené ?',
      },
      second_wind: {
        name: 'Second Souffle',
        description: 'Reprends ta lecture après 7 jours d\'absence',
      },
      faith_marathon: {
        name: 'Marathon de Foi',
        description: 'Maintiens une série de 100 jours consécutifs',
        reflectionPrompt: 'Cent jours ! Tu as couru avec endurance. Qu\'as-tu appris ?',
      },
      four_seasons: {
        name: 'Quatre Saisons',
        description: 'Maintiens une série de 90 jours consécutifs',
        reflectionPrompt: 'Trois mois de fidélité ! Comment as-tu grandi spirituellement ?',
      },
      diamond_consistency: {
        name: 'Diamant de Constance',
        description: 'Maintiens une série de 50 jours consécutifs',
        reflectionPrompt: 'Cinquante jours de fidélité ! Ta constance brille comme un diamant.',
      },
      ardent_fire: {
        name: 'Brasier Ardent',
        description: 'Maintiens une série de 14 jours consécutifs',
        reflectionPrompt: 'Deux semaines de feu spirituel ! Continue d\'entretenir la flamme.',
      },
      shooting_star: {
        name: 'Étoile Filante',
        description: 'Maintiens une série de 5 jours consécutifs',
      },
      semester_devotion: {
        name: 'Semestre de Dévotion',
        description: 'Maintiens une série de 180 jours consécutifs',
        reflectionPrompt: 'Six mois de communion quotidienne ! Partage ton témoignage de transformation.',
      },

      // === CATÉGORIE MILESTONE ===
      new_journey: {
        name: 'Nouveau Voyage',
        description: 'Lis ton premier verset',
      },
      truth_seeker: {
        name: 'Chercheur de Vérité',
        description: 'Lis 30 versets',
      },
      devoted_student: {
        name: 'Étudiant Dévoué',
        description: 'Lis 100 versets',
      },
      scripture_master: {
        name: 'Maître des Écritures',
        description: 'Lis 365 versets (une année complète)',
      },
      diligent_reader: {
        name: 'Lecteur Assidu',
        description: 'Lis 50 versets',
      },
      scholar: {
        name: 'Érudit',
        description: 'Lis 200 versets',
      },
      teacher: {
        name: 'Enseignant',
        description: 'Lis 500 versets',
      },
      ancient_sage: {
        name: 'Sage Ancien',
        description: 'Lis 1000 versets',
      },
      blessed_week: {
        name: 'Semaine Bénie',
        description: 'Lis 7 versets',
      },
      first_anniversary: {
        name: 'Premier Anniversaire',
        description: 'Un an depuis ta première lecture',
        reflectionPrompt: 'Une année ensemble ! Regarde tout le chemin parcouru.',
      },

      // === CATÉGORIE ENGAGEMENT ===
      first_encouragement: {
        name: 'Premier Encouragement',
        description: 'Lis ton premier encouragement',
      },
      first_treasure: {
        name: 'Premier Trésor',
        description: 'Ajoute ton premier favori',
      },
      wisdom_collector: {
        name: 'Collectionneur de Sagesse',
        description: 'Ajoute 10 versets en favoris',
      },
      light_messenger: {
        name: 'Messager de Lumière',
        description: 'Partage ton premier verset',
      },
      evangelist: {
        name: 'Évangéliste',
        description: 'Partage 10 versets',
      },
      reflective_heart: {
        name: 'Cœur Réfléchi',
        description: 'Lis 25 encouragements',
      },
      treasure_keeper: {
        name: 'Gardien de Trésors',
        description: 'Ajoute 25 versets en favoris',
      },
      sacred_library: {
        name: 'Bibliothèque Sacrée',
        description: 'Ajoute 50 versets en favoris',
      },
      light_ambassador: {
        name: 'Ambassadeur de Lumière',
        description: 'Partage 25 versets',
      },
      meditative_heart: {
        name: 'Cœur Méditatif',
        description: 'Lis 50 encouragements',
      },
      contemplative_soul: {
        name: 'Âme Contemplative',
        description: 'Lis 100 encouragements',
      },
      first_meditation: {
        name: 'Première Méditation',
        description: 'Lis 5 encouragements',
      },
      faithful_visitor: {
        name: 'Visiteur Fidèle',
        description: 'Ouvre l\'app 15 jours (non consécutifs)',
      },
      daily_companion: {
        name: 'Compagnon Quotidien',
        description: 'Ouvre l\'app 30 jours (non consécutifs)',
      },

      // === CATÉGORIE EXPLORATION (Premium) ===
      explorer: {
        name: 'Explorateur',
        description: 'Lis des versets de 5 catégories différentes',
      },
      biblical_connoisseur: {
        name: 'Connaisseur Biblique',
        description: 'Lis des versets de toutes les catégories',
      },
      witness: {
        name: 'Témoin',
        description: 'Termine un chapitre du témoignage',
      },
      thematic_specialist: {
        name: 'Spécialiste Thématique',
        description: 'Lis tous les versets d\'une catégorie',
      },
      category_master: {
        name: 'Maître des Catégories',
        description: 'Lis tous les versets de 5 catégories',
      },
      devoted_witness: {
        name: 'Témoin Dévoué',
        description: 'Termine 5 chapitres du témoignage',
      },
      history_keeper: {
        name: 'Gardien de l\'Histoire',
        description: 'Termine tous les chapitres du témoignage (13)',
        reflectionPrompt: 'Tu as lu tout le témoignage ! Qu\'est-ce qui t\'a le plus marqué ?',
      },

      // === CATÉGORIE SPECIAL (cachés) ===
      sunday_worshipper: {
        name: 'Adorateur du Dimanche',
        description: 'Lis un verset un dimanche',
      },
      dawn_seeker: {
        name: 'Chercheur de l\'Aube',
        description: 'Lis un verset avant 7h du matin',
      },
      christmas_spirit: {
        name: 'Esprit de Noël',
        description: 'Lis un verset le 25 décembre',
        reflectionPrompt: 'Joyeux Noël ! Célèbre la naissance du Sauveur.',
      },
      new_year: {
        name: 'Nouvelle Année',
        description: 'Lis un verset le 1er janvier',
        reflectionPrompt: 'Nouvelle année, nouveau départ ! Quels sont tes projets avec Dieu ?',
      },
      epiphany: {
        name: 'Épiphanie',
        description: 'Lis un verset le 6 janvier',
        reflectionPrompt: 'Épiphanie : la manifestation de Jésus aux nations !',
      },
      candlemas: {
        name: 'Chandeleur',
        description: 'Lis un verset le 2 février',
        reflectionPrompt: 'Jésus, lumière des nations, présenté au Temple.',
      },
      ash_wednesday: {
        name: 'Mercredi des Cendres',
        description: 'Lis un verset le Mercredi des Cendres',
        reflectionPrompt: 'Début du Carême : un temps de conversion et de prière.',
      },
      palm_sunday: {
        name: 'Dimanche des Rameaux',
        description: 'Lis un verset le Dimanche des Rameaux',
        reflectionPrompt: 'Hosanna ! L\'entrée triomphale de Jésus à Jérusalem.',
      },
      good_friday: {
        name: 'Vendredi Saint',
        description: 'Lis un verset le Vendredi Saint',
        reflectionPrompt: 'Par Ses blessures, nous sommes guéris. Médite sur le sacrifice de Jésus.',
      },
      easter_blessed: {
        name: 'Pâques Glorieux',
        description: 'Lis un verset le dimanche de Pâques',
        reflectionPrompt: 'Il est ressuscité ! Alléluia ! Christ est vivant !',
      },
      ascension: {
        name: 'Ascension Céleste',
        description: 'Lis un verset le jeudi de l\'Ascension',
        reflectionPrompt: 'Jésus monte au ciel et nous envoie l\'Esprit Saint.',
      },
      pentecost: {
        name: 'Pentecôte',
        description: 'Lis un verset le dimanche de Pentecôte',
        reflectionPrompt: 'L\'Esprit Saint descend sur l\'Église ! Viens, Esprit Saint !',
      },
      all_saints: {
        name: 'Toussaint',
        description: 'Lis un verset le 1er novembre',
        reflectionPrompt: 'Communion des saints : tous appelés à la sainteté !',
      },
    },
  },

  // ============================================
  // BARRE DE NAVIGATION (TABS)
  // ============================================
  tabs: {
    home: 'Accueil',
    needs: 'Besoins',
    favorites: 'Favoris',
  },

  // ============================================
  // ÉCRAN BESOINS (TAB)
  // ============================================
  needs: {
    titleStart: 'De quoi as-tu ',
    titleHighlight: 'besoin',
    titleEnd: ' ?',
    hint: 'Appuie sur une bulle pour découvrir un verset',
    limitReached: {
      title: 'Découverte du jour utilisée',
      message:
        'Tu as déjà découvert un verset aujourd\'hui. Reviens demain ou passe Premium pour explorer sans limite !',
      ok: 'OK',
      goPremium: 'Passer Premium',
    },
    // Catégories (bulles)
    categories: {
      divineSurprise: 'Surprise divine',
      graceAndForgiveness: 'Grâce & Pardon',
      love: 'Amour',
      hope: 'Espérance',
      faithAndTrust: 'Foi & Confiance',
      healing: 'Guérison',
      prayerAndPraise: 'Prière & Louange',
      protection: 'Protection',
      peace: 'Paix',
      spiritualBattle: 'Combat spirituel',
      holySpirit: 'Saint-Esprit',
      growth: 'Croissance',
      divineGuidance: 'Guidance divine',
    },
  },

  // ============================================
  // ÉCRAN FAVORIS
  // ============================================
  favorites: {
    title: 'Favoris',
    empty: 'Aucun favori pour le moment',
    emptyDescription: 'Ajoute tes versets préférés en appuyant sur le cœur',
    emptyIcon: '♡',
    count: '{{count}} favoris',
    verseSingular: 'verset',
    versePlural: 'versets',
    unfavorite: 'Retirer des favoris',
    share: 'Partager',
    loading: 'Chargement des favoris...',
    error: 'Impossible de charger les favoris',
    errorRemove: 'Impossible de retirer des favoris.',
    errorLoad: 'Impossible de charger les favoris.',
    premiumRequired: 'Cette fonctionnalité est réservée aux membres Premium',
  },

  // ============================================
  // ÉCRAN CATÉGORIES
  // ============================================
  categories: {
    title: 'Catégories',
    allVerses: 'Tous les versets',
    allVersesCount: '{{count}} versets',
    categoryCount: '{{count}} versets',
    verseCounter: 'Verset {{current}} / {{total}}',
    swipeHint: 'Swipe pour naviguer',
    loading: 'Chargement des catégories...',
    error: 'Impossible de charger les catégories',
    premiumRequired: 'Cette fonctionnalité est réservée aux membres Premium',
    noVerses: 'Aucun verset dans cette catégorie',
    verseSingular: 'verset',
    versePlural: 'versets',

    // Noms des sections (groupes de catégories)
    sections: {
      allVerses: 'Tous les versets',
      fundamentals: 'Fondamentaux de la foi',
      spiritualLife: 'Vie spirituelle & Communion',
      transformation: 'Transformation & Guérison',
      battle: 'Combat & Protection',
      values: 'Valeurs & Vertus',
    },

    // Noms des thèmes par identifiant (pour mapping avec les icônes)
    themeNames: {
      love: 'Amour & Bienveillance',
      battle: 'Combat spirituel & Épreuves',
      community: 'Communauté & Vie de l\'Église',
      growth: 'Croissance & Fruit spirituel',
      hope: 'Espérance & Vie éternelle',
      faith: 'Foi, Confiance & Espérance',
      grace: 'Grâce, Salut & Pardon',
      healing: 'Guérison, Restauration & Renouveau',
      humility: 'Humilité, Foi & Confiance',
      justice: 'Justice, Sainteté & Vérité',
      liberation: 'Libération, Restauration & Renouveau',
      peace: 'Paix, Protection & Liberté',
      prayer: 'Prière, Adoration & Louange',
      intimacy: 'Relation & Intimité avec Dieu',
      spirit: 'Saint-Esprit & Puissance',
      guidance: 'Volonté & Guidance divine',
    },

    // Mapping des sections vers les identifiants de thèmes
    themeSections: {
      fundamentals: ['faith', 'grace', 'hope'],
      spiritualLife: ['intimacy', 'prayer', 'spirit', 'growth', 'humility'],
      transformation: ['healing', 'liberation', 'guidance'],
      battle: ['battle', 'peace'],
      values: ['love', 'justice', 'community'],
    },
  },

  // ============================================
  // ÉCRAN STATISTIQUES
  // ============================================
  statistics: {
    title: 'Statistiques',

    // Vue d'ensemble
    overview: 'Vue d\'ensemble',
    discoveries: 'Découvertes',
    globalProgress: 'Progression globale',
    globalProgressSubtitle: '{{count}} versets découverts sur {{total}}',
    versesDiscovered: 'versets découverts',
    versesDiscoveredCount: '{{count}} versets découverts',
    versesProgress: '{{count}} sur {{total}}',
    encouragementsRead: 'encouragements lus',
    encouragementsReadCount: '{{count}} encouragements lus',
    favorites: 'favoris',
    favoritesCount: '{{count}} favoris',
    timeSpent: 'passées dans l\'application',
    timeSpentFormatted: '{{hours}}h {{minutes}}min passées',
    progression: 'Progression',

    // Séries (Streaks)
    streaks: 'Séries',
    streakAppOpen: 'Ouverture app',
    streakVerseViewed: 'Découverte verset',
    streakEncouragementRead: 'Lecture encouragement',
    currentStreak: 'Actuelle',
    bestStreak: 'Record',
    streakDays: '{{count}} jours',
    streakDay: '1 jour',
    streakIcon: '🔥',
    verseIcon: '📖',
    encouragementIcon: '💛',

    // Catégories préférées
    preferredCategories: 'Catégories préférées',
    noCategoriesYet: 'Aucune catégorie explorée pour le moment',

    // Messages
    loading: 'Chargement des statistiques...',
    error: 'Impossible de charger les statistiques',
    premiumRequired: 'Cette fonctionnalité est réservée aux membres Premium',
  },

  // ============================================
  // ÉCRAN TÉMOIGNAGE
  // ============================================
  testimony: {
    title: 'Témoignage',
    subtitle: 'Mon Témoignage - Un chemin de foi et de transformation',
    author: 'Christophe Schulz',

    // Progression
    chaptersRead: 'chapitres lus',
    progress: 'Progression',
    progressCount: '{{read}} / {{total}} chapitres',

    // Liste des chapitres
    chapterFree: 'Gratuit',
    chapterPremium: 'Premium',
    chapterRead: 'Lu',
    chapterUnread: 'Non lu',
    chapterLocked: 'Verrouillé',

    // Lecture d'un chapitre
    previous: 'Chapitre précédent',
    next: 'Chapitre suivant',
    markAsRead: 'Marquer comme lu',
    markAsUnread: 'Marquer comme non lu',
    share: 'Partager',

    // Complétion
    completed: 'Témoignage complété !',
    completedMessage: 'Félicitations ! Tu as lu tous les chapitres du témoignage.',
    completedIcon: '✨',

    // Messages
    loading: 'Chargement du chapitre...',
    error: 'Impossible de charger le chapitre',
    premiumRequired: 'Ce chapitre est réservé aux membres Premium',
    chapterNotFound: 'Chapitre introuvable',
  },

  // ============================================
  // ÉCRAN PAYWALL D'ONBOARDING (Timeline)
  // ============================================
  onboardingPaywall: {
    // Titres (avec/sans essai gratuit)
    titleWithTrial: 'Comment fonctionne ta semaine gratuite ?',
    titleWithoutTrial: 'Devenir Premium',
    subtitleWithTrial: '0€ facturés aujourd\'hui',
    subtitleWithoutTrial: 'Accède à toutes les fonctionnalités',

    // Timeline (4 étapes)
    timeline: {
      day1: {
        title: 'Jour 1 : installer l\'application',
        description: 'Paramètre l\'application pour tes objectifs.',
      },
      fullAccess: {
        title: 'Accès complet',
        description: 'Ton état d\'esprit commence à changer.',
      },
      day5: {
        title: 'Jour 5 : notification',
        description: 'On te prévient 48h avant la fin de ta semaine d\'essai.',
      },
      day7: {
        title: 'Jour 7 : fin de l\'essai',
        description: 'Début de l\'abonnement le {{date}}, tu peux annuler librement avant.',
      },
    },

    // Pricing
    pricingWithTrial: '7 jours d\'accès gratuit illimité, puis {{price}}/an (soit {{pricePerMonth}}/mois).',
    pricingWithoutTrial: '{{price}}/an (soit {{pricePerMonth}}/mois)',
    pricingCancellation: 'Annulation libre',

    // Boutons
    startTrialButton: 'Essayer gratuitement',
    subscribeButton: 'S\'abonner maintenant',
    restorePurchases: 'Restaurer mes achats',

    // Messages
    loading: 'Chargement des offres...',
    purchasing: 'Traitement en cours...',
    error: 'Impossible de charger les offres. Vérifie ta connexion et réessaie.',
  },

  // ============================================
  // ÉCRAN PAYWALL D'ONBOARDING V2 (Essai payant)
  // ============================================
  onboardingPaywallV2: {
    // Titre principal
    title: 'Nous t\'offrons une semaine complète de VersetVie dans le cadre de notre mission de te rapprocher du cœur de Jésus quotidiennement.',
    subtitle: 'L\'argent ne doit pas t\'empêcher de trouver cette relation.',

    // Message essai
    trialMessage: 'Un essai nous coûte 10 € par mois pour subvenir aux différents coûts, mais tu peux choisir la formule qui te convient.',
    selectContribution: 'Choisis ton abonnement :',

    // Options de contribution
    contributions: {
      free: '0 €',
      low: '2 €',
      medium: '5 €',
      full: '10 €',
    },

    // Bouton principal
    startTrialButton: 'Commencer mon essai gratuit',

    // Pricing bottom
    pricingWeekly: '7 jours gratuits, puis {{price}}/{{duration}}. Résiliable à tout moment',

    // Liens
    usePromoCode: 'Utiliser un code avantage',
    restorePurchases: 'Restaurer les achats',
    terms: 'Conditions générales d\'utilisation',
    privacy: 'Politique de confidentialité',

    // Messages
    loading: 'Chargement des offres...',
    purchasing: 'Traitement en cours...',
    error: 'Impossible de charger les offres. Vérifie ta connexion et réessaie.',
  },

  // ============================================
  // ÉCRAN PAYWALL
  // ============================================
  paywall: {
    // Titres selon le contexte
    title: 'Obtiens l\'accès complet',
    titleOnboarding: 'Bienvenue {{name}} !',
    titleLimit: 'Tu as utilisé ton encouragement gratuit de la semaine !',
    titleFeature: 'Débloquer cette fonctionnalité',
    title24h: 'Ça fait déjà 24h que tu utilises VersetVie !',

    // Sous-titres
    subtitle: 'Obtenez l\'accès immédiat à toutes les fonctionnalités de l\'application.',
    subtitleOnboarding: 'Tous les versets sont gratuits. Premium = encouragements illimités + témoignage.',
    subtitleLimit: 'En gratuit : 1 encouragement/semaine. Premium : encouragements illimités.',
    subtitle24h: 'Imagine tout ce que tu pourrais découvrir avec Premium...',

    // Alertes
    confirmSkipTitle: 'Attention !',
    confirmSkipMessage: 'Profite de l\'essai gratuit pour un accès complet aux encouragements illimités.',
    confirmSkipCancel: 'Rester',
    confirmSkipConfirm: 'Quitter',

    // Paragraphe 1 : Version découverte
    featuresFree: 'Version découverte (incluse) :',
    featureAllVerses: '✓ Tous les versets quotidiens (426)',
    featureCategories: '✓ Navigation par catégories et thèmes',
    featureFavorites: '✓ Favoris illimités',
    featureStatistics: '✓ Statistiques détaillées',
    featureOneEncouragement: '✓ 1 encouragement par semaine',

    // Paragraphe 2 : Version Premium
    featuresPremium: 'Version Premium :',
    featureUnlimitedEncouragements: '✓ Encouragements illimités',
    featureTestimony: '✓ Livre témoignage complet',

    // Legacy (pour compatibilité)
    features: 'Version découverte (incluse) :',
    featureSupport: 'Support prioritaire',

    // Offres d'abonnement
    monthly: 'Mensuel',
    yearly: 'Annuel',
    recommended: 'Recommandé',
    bestOffer: 'Meilleure offre',
    subscribedMonthly: 'Abonné mensuel',
    subscribedYearly: 'Abonné annuel',
    save: 'Économise {{percent}}%',
    pricePerMonth: 'par mois',
    pricePerYear: 'par an',
    trialOffer: '{{days}} jours gratuits',
    thenPrice: 'puis {{price}}',
    freeTrialBadge: '7 jours d\'essai\ngratuit inclus',
    freeTrialDescription: 'Puis {{price}}/an',
    startFreeTrial: 'Commencer l\'essai gratuit',

    // Actions
    cta: 'Commencer',
    ctaSubscribe: 'S\'abonner maintenant',
    ctaAlreadySubscribed: 'Déjà abonné',
    ctaMonthly: 'S\'abonner (Mensuel)',
    ctaYearly: 'S\'abonner (Annuel)',
    restore: 'Restaurer mes achats',
    continueFree: 'Continuer en gratuit',
    close: 'Fermer',

    // Messages
    loading: 'Chargement des offres...',
    purchasing: 'Traitement de l\'achat...',
    processing: 'Traitement en cours...',
    restoring: 'Restauration en cours...',
    success: 'Abonnement activé !',
    successMessage: 'Bienvenue dans la communauté Premium',
    restoreSuccess: 'Abonnement restauré avec succès',
    restoreNone: 'Aucun achat à restaurer',
    error: 'Erreur',
    errorPurchase: 'Échec de l\'achat. Réessaie plus tard.',
    errorRestore: 'Échec de la restauration. Vérifie tes achats dans les paramètres du store.',
    errorNetwork: 'Pas de connexion internet. Vérifie ta connexion et réessaie.',
    unavailable: 'Les abonnements sont temporairement indisponibles.',
    loadError: 'Impossible de charger les offres. Vérifie ta connexion et réessaie.',

    // Packages
    packages: {
      monthly: '1 mois',
      annual: '1 an',
    },

    // Alertes de succès/erreur
    alerts: {
      purchaseSuccess: {
        title: 'Bienvenue dans Premium ! 🎉',
        message: 'Tu as maintenant accès à toutes les fonctionnalités de l\'application.',
        button: 'Découvrir',
      },
      restoreSuccess: {
        title: 'Achats restaurés ! 🎉',
        message: 'Ton abonnement a été restauré avec succès.',
      },
      noSubscription: {
        title: 'Aucun achat trouvé',
        message: 'Aucun abonnement actif n\'a été trouvé sur ce compte.',
      },
      restoreError: {
        title: 'Erreur',
        message: 'Impossible de restaurer les achats. Réessaie plus tard.',
      },
    },

    // Documents légaux
    terms: 'Conditions d\'utilisation',
    privacy: 'Politique de confidentialité',
    legalFooter: 'L\'abonnement sera renouvelé automatiquement sauf annulation.',
    legalDisclaimer: 'L\'abonnement sera renouvelé automatiquement sauf annulation.',

    // Feedback (modal de collecte de feedback au refus du paywall)
    feedback: {
      modalTitle: 'Aide-nous à améliorer VersetVie',
      question: 'Qu\'est-ce que tu espérais trouver en installant l\'app ?',
      subtitle: 'Ta réponse nous aide à améliorer l\'application',
      placeholder: 'Partage tes attentes...',
      minLengthError: 'Merci d\'écrire au moins 10 caractères',
      characterCounter: '{{current}}/{{max}}',
      continueButton: 'Envoyer',
      sending: 'Envoi en cours...',
      thankYou: 'Merci pour ton retour précieux !',
      thankYouTitle: 'Merci pour ton retour !',
      thankYouMessage: 'Ta participation nous aide à améliorer l\'application',
      thankYouMessageError: 'Nous n\'avons pas pu envoyer ton message, mais merci pour ta participation !',
    },
  },

  // ============================================
  // ÉCRAN PAYWALL PROFIL (Version conversion optimisée)
  // ============================================
  profilePaywall: {
    // Hero section
    title: 'Renouvelle ton ',
    titleHighlight: 'cœur',
    titleEnd: '\nchaque jour',
    subtitle: 'Découvre tout ce que ',
    subtitleHighlight: 'Verset Vie',
    subtitleEnd: ' a à t\'offrir',

    // Paragraphe 1 : Version découverte (gratuite)
    freeTitle: 'Version découverte (incluse) :',
    freeBenefit1: '✓ Tous les 426 versets quotidiens',
    freeBenefit2: '✓ Favoris, catégories, stats et badges',
    freeBenefit3: '✓ 1 encouragement par semaine',
    freeBenefit4: '',

    // Paragraphe 2 : Version Premium (payante)
    premiumTitle: 'Version Premium :',
    benefit1: '✓ Encouragements quotidiens illimités',
    benefit2: '✓ Livre témoignage du créateur complet',
    benefit3: '',
    benefit4: '',

    // Plans d'abonnement
    weeklyLabel: 'Hebdomadaire',
    monthlyLabel: 'Mensuel',
    yearlyLabel: 'Annuel',
    week: 'Semaine',
    month: 'Mois',
    year: 'Année',
    bestOfferBadge: 'Meilleure offre',
    freeTrialBadge: 'Essai gratuit',
    saveLabel: 'Économise plus de 50 %',

    // Prix (affichés dynamiquement depuis RevenueCat)
    weeklyPrice: '{{price}}/semaine',
    monthlyPrice: '{{price}}/mois',
    yearlyPrice: '{{price}}/an',

    // CTA principal
    ctaFreeTrial: 'Essayer gratuitement',
    ctaSubscribe: 'S\'abonner',
    changePlan: 'Changer de plan',
    activeWeekly: 'Abonnement Hebdomadaire actif ✓',
    activeMonthly: 'Abonnement Mensuel actif ✓',
    activeYearly: 'Abonnement Annuel actif ✓',

    // Textes légaux selon le plan
    legalWeekly: '7 jours gratuits, puis {{price}}/semaine. Résiliable à tout moment.',
    legalMonthly: '7 jours gratuits, puis {{price}}/mois. Résiliable à tout moment.',
    legalYearly: '7 jours gratuits, puis {{price}}/an. Résiliable à tout moment.',
    legalNoTrial: '{{price}}/{{duration}}. Résiliable à tout moment.',
    cancelAnytime: 'Résiliable à tout moment',

    // Actions secondaires
    restore: 'Restaurer les achats',
    terms: 'Conditions générales d\'utilisation',
    privacy: 'Politique de confidentialité',

    // Titres selon la source
    titles: {
      profile: 'Choisis ton abonnement',
      feature_favorites: 'Sauvegarde tes versets préférés',
      feature_categories: 'Explore tous les versets par thème',
      feature_statistics: 'Suis ta progression',
      feature_testimony: 'Lis le témoignage complet',
      feature_theme: 'Personnalise ton thème',
      default: 'Passe à Premium',
    },

    // Descriptions selon la source
    descriptions: {
      profile: 'Accède à toutes les fonctionnalités et profite pleinement de VersetVie.',
      feature_favorites: 'Sauvegarde tes versets préférés et retrouve-les à tout moment avec Premium.',
      feature_categories: 'Explore tous les versets par thème et découvre des centaines de paroles d\'encouragement.',
      feature_statistics: 'Suis ta progression, tes séries et tes catégories préférées avec Premium.',
      feature_testimony: 'Lis le témoignage complet de Christophe et découvre son chemin de foi.',
      feature_theme: 'Personnalise l\'apparence de l\'application avec les thèmes Premium.',
      default: 'Va plus loin dans ta foi avec Premium.',
    },

    // Durées pour le pricing
    durations: {
      weekly: 'semaine',
      monthly: 'mois',
      yearly: 'an',
    },

    // Messages d'état
    loading: 'Chargement des offres...',
    unavailable: 'Les abonnements sont temporairement indisponibles.',
    retry: 'Réessayer',
    close: 'Fermer',
    packageUnavailable: 'Package indisponible',
    packageUnavailableMsg: 'Ce forfait n\'est pas encore disponible. Essaie une autre option.',
    loadError: 'Impossible de charger les offres. Vérifie ta connexion et réessaie.',

    // Messages de succès
    welcomePremium: 'Bienvenue dans Premium ! 🎉',
    welcomePremiumMsg: 'Tu as maintenant accès à toutes les fonctionnalités de l\'application.',
    discover: 'Découvrir',
    purchasesRestored: 'Achats restaurés ! 🎉',
    purchasesRestoredMsg: 'Ton abonnement a été restauré avec succès.',
    noPurchasesFound: 'Aucun achat trouvé',
    noPurchasesFoundMsg: 'Aucun abonnement actif n\'a été trouvé sur ce compte.',
    restoreError: 'Impossible de restaurer les achats. Réessaie plus tard.',
  },

  // ============================================
  // NOTIFICATIONS
  // ============================================
  notifications: {
    // Configuration des périodes
    periods: {
      morning: {
        label: 'Matin',
        description: 'Pour commencer ta journée avec Ma paix',
        icon: 'sunny-outline',
      },
      afternoon: {
        label: 'Après-midi',
        description: 'Pour te retrouver au milieu de ce que tu vis',
        icon: 'partly-sunny-outline',
      },
      evening: {
        label: 'Soirée',
        description: 'Pour déposer ta journée près de Moi',
        icon: 'moon-outline',
      },
      night: {
        label: 'Nuit',
        description: 'Pour t\'accompagner si les nuits sont parfois difficiles',
        icon: 'bed-outline',
      },
    },

    // Écran de sélection de période (onboarding)
    periodSelection: {
      title: 'Quand veux-tu recevoir ton ',
      titleHighlight: 'encouragement',
      titleEnd: ' ?',
      activateButton: 'Activer',
      skipButton: 'Passer',
      randomTimeNotice: 'L\'heure exacte variera légèrement chaque jour.',
    },

    // Messages contextualisés par période
    // RÈGLE : Prénom TOUJOURS dans le body, JAMAIS dans le title
    contextual: {
      morning: {
        m: [
          { title: 'Bon réveil !', body: '{{name}}, commence ta journée avec ton encouragement' },
          { title: 'Coucou !', body: '{{name}}, ton verset du jour t\'attend' },
          { title: 'C\'est l\'heure !', body: '{{name}}, un nouveau message pour bien démarrer' },
          { title: 'Nouveau verset', body: '{{name}}, ton shot biblique matinal est prêt' },
        ],
        f: [
          { title: 'Bon réveil !', body: '{{name}}, commence ta journée avec ton encouragement' },
          { title: 'Coucou !', body: '{{name}}, ton verset du jour t\'attend' },
          { title: 'C\'est l\'heure !', body: '{{name}}, un nouveau message pour bien démarrer' },
          { title: 'Nouveau verset', body: '{{name}}, ton shot biblique matinal est prêt' },
        ],
      },
      afternoon: {
        m: [
          { title: 'Pause inspiration', body: '{{name}}, besoin d\'encouragement ? Prends une pause inspirante' },
          { title: 'Bon après-midi', body: '{{name}}, ton verset t\'attend' },
          { title: 'Un moment pour toi', body: '{{name}}, découvre ton encouragement' },
          { title: 'Pause spirituelle', body: 'Hey {{name}}, une pause spirituelle te ferait du bien' },
        ],
        f: [
          { title: 'Pause inspiration', body: '{{name}}, besoin d\'encouragement ? Prends une pause inspirante' },
          { title: 'Bon après-midi', body: '{{name}}, ton verset t\'attend' },
          { title: 'Un moment pour toi', body: '{{name}}, découvre ton encouragement' },
          { title: 'Pause spirituelle', body: 'Hey {{name}}, une pause spirituelle te ferait du bien' },
        ],
      },
      evening: {
        m: [
          { title: 'Bonne soirée !', body: '{{name}}, termine ta journée avec inspiration' },
          { title: 'Fin de journée', body: '{{name}}, ton encouragement du soir t\'attend' },
          { title: 'Bonsoir', body: '{{name}}, un message pour clôturer ta journée' },
          { title: 'Avant de terminer', body: '{{name}}, prends un moment pour toi' },
        ],
        f: [
          { title: 'Bonne soirée !', body: '{{name}}, termine ta journée avec inspiration' },
          { title: 'Fin de journée', body: '{{name}}, ton encouragement du soir t\'attend' },
          { title: 'Bonsoir', body: '{{name}}, un message pour clôturer ta journée' },
          { title: 'Avant de terminer', body: '{{name}}, prends un moment pour toi' },
        ],
      },
      night: {
        m: [
          { title: 'Bonne nuit', body: '{{name}}, une pensée avant de dormir' },
          { title: 'Avant de dormir', body: '{{name}}, ton encouragement nocturne t\'attend' },
          { title: 'Douce nuit', body: '{{name}}, termine sur une note inspirante' },
          { title: 'Dernière pensée', body: '{{name}}, un verset pour la nuit' },
        ],
        f: [
          { title: 'Bonne nuit', body: '{{name}}, une pensée avant de dormir' },
          { title: 'Avant de dormir', body: '{{name}}, ton encouragement nocturne t\'attend' },
          { title: 'Douce nuit', body: '{{name}}, termine sur une note inspirante' },
          { title: 'Dernière pensée', body: '{{name}}, un verset pour la nuit' },
        ],
      },
    },

    // Messages intelligents contextualisés (VERSION 2.1+)
    // Utilisés par intelligentNotificationService.ts
    // RÈGLE : Prénom TOUJOURS dans le body, JAMAIS dans le title
    intelligent: {
      verse_not_read: {
        m: [
          { title: 'Ton verset t\'attend', body: '{{name}}, un nouveau message de Jésus pour toi aujourd\'hui' },
          { title: 'N\'oublie pas !', body: '{{name}}, ton verset quotidien est prêt à être découvert' },
          { title: 'Prends un instant', body: '{{name}}, un message spécial t\'attend dans l\'app' },
          { title: 'Rendez-vous quotidien', body: '{{name}}, découvre ce que Dieu a pour toi aujourd\'hui' },
        ],
        f: [
          { title: 'Ton verset t\'attend', body: '{{name}}, un nouveau message de Jésus pour toi aujourd\'hui' },
          { title: 'N\'oublie pas !', body: '{{name}}, ton verset quotidien est prêt à être découvert' },
          { title: 'Prends un instant', body: '{{name}}, un message spécial t\'attend dans l\'app' },
          { title: 'Rendez-vous quotidien', body: '{{name}}, découvre ce que Dieu a pour toi aujourd\'hui' },
        ],
      },
      encouragement_waiting: {
        m: [
          { title: 'Verset découvert', body: '{{name}}, n\'oublie pas de lire ton encouragement personnalisé' },
          { title: 'Il reste une étape !', body: '{{name}}, Jésus a un message personnel pour toi' },
          { title: 'Découvre la suite', body: '{{name}}, ton encouragement personnalisé t\'attend' },
          { title: 'Un mot d\'amour pour toi', body: '{{name}}, va lire ce que Jésus veut te dire' },
        ],
        f: [
          { title: 'Verset découvert', body: '{{name}}, n\'oublie pas de lire ton encouragement personnalisé' },
          { title: 'Il reste une étape !', body: '{{name}}, Jésus a un message personnel pour toi' },
          { title: 'Découvre la suite', body: '{{name}}, ton encouragement personnalisé t\'attend' },
          { title: 'Un mot d\'amour pour toi', body: '{{name}}, va lire ce que Jésus veut te dire' },
        ],
      },
      badge_close: {
        m: [
          { title: 'Plus que {{remaining}} jour{{s}} !', body: '{{name}}, tu es proche de débloquer un nouveau badge' },
          { title: 'Presque réussi !', body: '{{name}}, encore {{remaining}} jour{{s}} pour ton prochain badge' },
          { title: 'Tu y es presque !', body: '{{name}}, plus que {{remaining}} jour{{s}} avant le succès' },
          { title: 'Dernier effort !', body: '{{name}}, un badge se débloque dans {{remaining}} jour{{s}}' },
        ],
        f: [
          { title: 'Plus que {{remaining}} jour{{s}} !', body: '{{name}}, tu es proche de débloquer un nouveau badge' },
          { title: 'Presque réussi !', body: '{{name}}, encore {{remaining}} jour{{s}} pour ton prochain badge' },
          { title: 'Tu y es presque !', body: '{{name}}, plus que {{remaining}} jour{{s}} avant le succès' },
          { title: 'Dernier effort !', body: '{{name}}, un badge se débloque dans {{remaining}} jour{{s}}' },
        ],
      },
      streak_active: {
        m: [
          { title: '{{streak}} jours d\'affilée !', body: '{{name}}, continue ta série en lisant ton verset aujourd\'hui' },
          { title: 'Série de {{streak}} jours !', body: '{{name}}, ne perds pas ta belle lancée, lis ton verset' },
          { title: 'Bravo !', body: '{{name}}, {{streak}} jours consécutifs, continue comme ça' },
          { title: 'Sur une lancée !', body: '{{name}}, {{streak}} jours de suite, c\'est excellent' },
        ],
        f: [
          { title: '{{streak}} jours d\'affilée !', body: '{{name}}, continue ta série en lisant ton verset aujourd\'hui' },
          { title: 'Série de {{streak}} jours !', body: '{{name}}, ne perds pas ta belle lancée, lis ton verset' },
          { title: 'Bravo !', body: '{{name}}, {{streak}} jours consécutifs, continue comme ça' },
          { title: 'Sur une lancée !', body: '{{name}}, {{streak}} jours de suite, c\'est excellent' },
        ],
      },
      comeback: {
        m: [
          { title: 'Content de te revoir !', body: '{{name}}, reprends ta lecture quotidienne dès aujourd\'hui' },
          { title: 'Heureux de te retrouver !', body: '{{name}}, Dieu t\'attendait, découvre ton verset' },
          { title: 'Bienvenue de retour !', body: '{{name}}, recommence une nouvelle série aujourd\'hui' },
          { title: 'Tu nous as manqué !', body: '{{name}}, c\'est le moment de revenir à ta routine spirituelle' },
        ],
        f: [
          { title: 'Contente de te revoir !', body: '{{name}}, reprends ta lecture quotidienne dès aujourd\'hui' },
          { title: 'Heureuse de te retrouver !', body: '{{name}}, Dieu t\'attendait, découvre ton verset' },
          { title: 'Bienvenue de retour !', body: '{{name}}, recommence une nouvelle série aujourd\'hui' },
          { title: 'Tu nous as manqué !', body: '{{name}}, c\'est le moment de revenir à ta routine spirituelle' },
        ],
      },
    },

    // Messages de configuration
    scheduleSuccess: 'Notification programmée dans la période {{period}}',
    scheduleError: 'Erreur lors de la programmation de la notification',
    cancelSuccess: 'Notifications désactivées',
    permissionRequired: 'Permission de notification requise',
    permissionDenied: 'Permission refusée. Active les notifications dans les paramètres.',
    currentPeriod: 'Période actuelle',
    changePeriod: 'Modifier',

    // Page de paramètres des notifications
    settingsPage: {
      description: 'Reçois un rappel quotidien pour ton encouragement',
      permissionDeniedTitle: 'Permissions refusées',
      permissionDeniedMessage: 'Les notifications sont désactivées dans les paramètres de ton appareil. Active-les pour recevoir des rappels quotidiens.',
      permissionWarning: 'Les permissions de notification ne sont pas accordées. Active-les dans les paramètres de ton appareil pour recevoir des rappels.',
      openSettings: 'Ouvrir les paramètres',
      cancel: 'Annuler',
      confirm: 'Confirmer',
      enabledTitle: 'Notifications activées ✅',
      enabledMessage: 'Tu recevras une notification quotidienne dans la période {{period}} ({{description}}).\n\n📆 Première notification : demain\n⏰ Heure exacte : varie chaque jour dans cette plage',
      errorTitle: 'Erreur',
      enableError: 'Impossible d\'activer les notifications. Vérifie les permissions.',
      genericError: 'Une erreur est survenue.',
      disabledTitle: 'Notifications désactivées',
      disabledMessage: 'Active les notifications pour choisir la période de rappel.',
      periodUpdatedTitle: 'Période mise à jour ✅',
      periodUpdatedMessage: 'Tu recevras ta notification quotidienne dans la période {{period}} ({{description}}).\n\nContexte frais garanti à chaque notification.',
      choosePeriod: 'Choisis ta période',
      periodHint: 'L\'heure exacte varie chaque jour dans la période choisie',
      infoHint: 'Les notifications te rappellent chaque jour de découvrir ton encouragement personnel. L\'heure varie dans la période choisie pour rester naturel.',
      devModeTitle: 'Mode Développement',
      devModeDescription: 'Teste l\'affichage des notifications avec un message long pour vérifier le BigTextStyle (Android) et le subtitle (iOS).',
      testButton: 'Envoyer notification test (2s)',
      testScheduledTitle: 'Notification planifiée',
      testScheduledMessage: 'Une notification de test avec un vrai message sera envoyée dans 2 secondes.',
    },

    // Subtitles iOS (affichés sous le titre de notification)
    subtitles: {
      verseNotRead: 'Verset du jour',
      encouragementWaiting: 'Encouragement personnalisé',
      badgeClose: 'Badge à débloquer',
      streakActive: 'Série en cours',
      comeback: 'Bon retour',
    },

    // Channel Android (configuration du canal de notifications)
    androidChannel: {
      name: 'Encouragements quotidiens',
      description: 'Notifications pour les versets et encouragements du jour',
    },

    // Message fallback par défaut
    fallback: {
      title: 'Coucou !',
      body: '{{name}}, ton encouragement du jour t\'attend !',
    },
  },

  // ============================================
  // PARTAGE
  // ============================================
  share: {
    signature: 'Partagé depuis VersetVie',
    success: 'Verset partagé',
    error: 'Erreur lors du partage',
    errorTitle: 'Impossible de partager',
    errorMessage: 'Le partage a échoué. Réessaie plus tard.',
    copied: 'Copié dans le presse-papier',
    copiedMessage: 'Le contenu a été copié dans le presse-papier',
    // Alertes de partage
    alerts: {
      unavailable: {
        title: 'Partage non disponible',
        message: 'Le partage n\'est pas disponible sur cet appareil. Le contenu a été copié dans le presse-papier.',
      },
      failed: {
        title: 'Erreur de partage',
        message: 'Impossible de partager le contenu. Réessaie plus tard.',
      },
    },
  },

  // ============================================
  // VALIDATION
  // ============================================
  validation: {
    invalidFirstName: 'Prénom invalide',
  },

  // ============================================
  // ERREURS
  // ============================================
  errors: {
    // Erreurs génériques
    generic: 'Une erreur est survenue',
    genericMessage: 'Quelque chose s\'est mal passé. Réessaie plus tard.',
    network: 'Erreur de connexion',
    networkMessage: 'Vérifie ta connexion internet et réessaie.',
    notFound: 'Introuvable',
    notFoundMessage: 'La ressource demandée n\'a pas été trouvée.',
    unauthorized: 'Non autorisé',
    unauthorizedMessage: 'Tu n\'as pas accès à cette ressource.',
    invalidInput: 'Entrée invalide',

    // Erreurs spécifiques
    premium: 'Cette fonctionnalité est réservée aux membres Premium',
    premiumMessage: 'Passe à Premium pour débloquer toutes les fonctionnalités.',
    subscriptionFailed: 'Échec de l\'abonnement',
    subscriptionFailedMessage: 'L\'abonnement n\'a pas pu être traité. Réessaie plus tard.',
    dataLoadFailed: 'Erreur de chargement',
    dataLoadFailedMessage: 'Les données n\'ont pas pu être chargées. Réessaie ou réinstalle l\'application.',
    verseLoadFailed: 'Impossible de charger le verset',
    verseLoadFailedMessage: 'Le verset n\'a pas pu être chargé. Réessaie plus tard.',

    // Actions
    retry: 'Réessayer',
    cancel: 'Annuler',
    goBack: 'Retour',
    contactSupport: 'Contacter le support',
  },

  // ============================================
  // CONNEXION INTERNET
  // ============================================
  offline: {
    banner: 'Pas de connexion internet',
    message: 'Certaines fonctionnalités nécessitent une connexion internet.',
    retry: 'Réessayer',
  },

  // ============================================
  // MENU DEBUG (Développement uniquement)
  // ============================================
  debug: {
    title: 'Menu Debug',
    warning: 'Mode développement actif',

    // Gestion des versets
    versesSection: 'Gestion des versets',
    changeVerse: 'Changer de verset maintenant',
    verseChanged: 'Nouveau verset sélectionné',

    // Onboarding
    onboarding: 'Onboarding',
    resetOnboarding: 'Réinitialiser l\'onboarding',
    onboardingReset: 'Onboarding réinitialisé',

    // Abonnement
    subscription: 'Abonnement',
    simulateSubscription: 'Simuler abonnement',
    free: 'Gratuit',
    premiumMonthly: 'Premium Mensuel',
    premiumYearly: 'Premium Annuel',
    subscriptionSimulated: 'Abonnement simulé : {{type}}',

    // Informations
    info: 'Informations',
    version: 'Version',
    build: 'Build',
    currentSubscription: 'Abonnement actuel',
    availableVerses: 'Versets disponibles',
    currentVerse: 'Verset actuel',
    lastVerseChange: 'Dernier changement',
    encouragementViewed: 'Encouragement vu',
    currentTheme: 'Thème actuel',
    onboardingCompleted: 'Onboarding complété',
    userName: 'Prénom utilisateur',
    userGender: 'Genre utilisateur',
    attConsent: 'Consentement ATT',
    attAccepted: 'Accepté',
    attDenied: 'Refusé',
    attNotAsked: 'Non demandé',

    // Actions avancées
    actions: 'Actions avancées',
    clearData: 'Effacer toutes les données',
    clearDataConfirm: 'Es-tu sûr ? Cette action est irréversible.',
    clearDataSuccess: 'Toutes les données ont été effacées',
    showLogs: 'Afficher les logs',
    showAsyncStorage: 'Logs AsyncStorage',
    testNotification: 'Tester les notifications',
    notificationSent: 'Notification de test envoyée',

    // Valeurs
    yes: 'Oui',
    no: 'Non',
    male: 'Masculin',
    female: 'Féminin',
    verses: '{{count}} versets',
  },

  // ============================================
  // MIGRATION V1 → V2
  // ============================================
  migration: {
    // Phase migration
    title: 'Migration de vos données',
    description: 'Nous récupérons votre progression de la version précédente.',
    step_checking: 'Vérification des données...',
    step_verses: 'Récupération des versets consultés...',
    step_stats: 'Récupération de vos statistiques...',
    step_favorites: 'Récupération de vos favoris...',
    step_finalizing: 'Finalisation...',

    // Phase succès
    success_title: 'Migration réussie !',
    success_description: 'Vos données ont été récupérées avec succès',

    // Résumé détaillé
    summary_title: 'Récapitulatif',
    summary_stats_title: '📊 Statistiques',
    summary_verses_viewed: '{{count}} versets consultés',
    summary_encouragements_read: '{{count}} encouragements lus',
    summary_days_active: '{{count}} jours d\'activité',
    summary_streak_title: '🔥 Séries',
    summary_current_streak: 'Série actuelle : {{count}} jours',
    summary_best_streak: 'Meilleure série : {{count}} jours',
    summary_favorites_title: '⭐ Favoris',
    summary_favorites_migrated: '{{count}} favoris récupérés',

    // Actions
    auto_continue_in: 'L\'application démarre dans {{seconds}}s',
    button_continue: 'Continuer ({{seconds}})',
    button_continue_now: 'Continuer',

    // Erreur
    error_title: 'Migration incomplète',
    error_description: 'Certaines données n\'ont pas pu être récupérées.',
    error_continue: 'L\'application fonctionne normalement.',
  },

  // ============================================
  // ÉCRANS LÉGAUX - AIDE ET SUPPORT
  // ============================================
  help: {
    title: 'Aide & Support',
    description: 'Besoin d\'aide ou d\'assistance ? Nous sommes là pour t\'accompagner dans l\'utilisation de Verset Vie. Consulte la FAQ ci-dessous ou contacte-nous directement.',
    faqTitle: 'FAQ - Questions fréquentes',
    contactTitle: 'Contact',
    contactDescription: 'Pour toute question, suggestion ou problème technique :',
    contactUs: 'Contactez-nous',
    faq: {
      howItWorks: {
        question: 'Comment fonctionne Verset Vie ?',
        answer: 'Chaque jour, découvre un nouveau verset biblique accompagné d\'un encouragement personnalisé pour nourrir ta foi.',
      },
      oncePerDay: {
        question: 'Pourquoi je ne peux lire qu\'un verset par jour ?',
        answer: 'On limite la découverte à un verset et un encouragement par jour pour favoriser la méditation quotidienne.',
      },
      changeInfo: {
        question: 'Puis-je changer mon prénom ou mon genre ?',
        answer: 'Oui, tu peux modifier ces informations dans la page Profil en cliquant sur \'Modifier\'.',
      },
      bug: {
        question: 'Je rencontre un bug, que faire ?',
        answer: 'Contacte-nous via le lien ci-dessous',
      },
    },
  },

  // ============================================
  // ÉCRANS LÉGAUX - À PROPOS
  // ============================================
  about: {
    title: 'À propos de Verset Vie',
    description: 'Verset Vie est une application conçue pour t\'encourager chaque jour avec un verset biblique et un mot d\'encouragement personnalisé. Découvre, médite et partage la Parole de Dieu facilement, où que tu sois.',
    versesAvailable: 'Nombre de versets disponibles',
    versesCount: '{{count}} versets',
    bibleVersion: 'Version de la Bible',
    bibleVersionName: 'Louis Segond 1910',
    bibleVersionCopyright: 'Domaine public',
    appVersion: 'Version de l\'application',
    versionInfo: 'Version : {{version}}',
    thankYou: 'Merci d\'utiliser Verset Vie !',
    developedWith: 'Développé avec foi et passion pour t\'accompagner chaque jour.',
  },

  // ============================================
  // ÉCRANS LÉGAUX - POLITIQUE DE CONFIDENTIALITÉ
  // ============================================
  privacy: {
    title: 'Politiques de confidentialité',
    lastUpdated: 'Dernière mise à jour : {{date}}',
    introduction: 'Chez Verset Vie, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégons vos informations dans le respect du RGPD et autres réglementations applicables.',

    // Section 1 - Données collectées
    section1: {
      title: '1. Données collectées',
      profileDataTitle: 'Données de profil (stockées localement) :',
      profileData: '• Prénom (optionnel, pour personnalisation)\n• Genre (pour adapter le contenu)\n• Mode d\'abonnement (standard/premium)\n• Préférences d\'application',
      analyticsDataTitle: 'Données d\'usage anonymisées (via Mixpanel EU) :',
      analyticsData: '• Genre de l\'utilisateur (m/f)\n• Mode d\'abonnement (premium/standard)\n• Statut de completion de l\'onboarding\n• Événements d\'utilisation (écrans visités, boutons cliqués)\n• Interactions avec le contenu (versets découverts)\n• Informations techniques (plateforme, version de l\'app)',
      attributionDataTitle: 'Données d\'attribution (via Tenjin, avec consentement ATT iOS) :',
      attributionData: '• IDFA (iOS avec consentement ATT)\n• GAID (Android)\n• Informations de campagne marketing (source d\'installation)',
    },

    // Section 2 - Ce que nous NE collectons PAS
    section2: {
      title: '2. Ce que nous NE collectons PAS',
      content: 'Nous nous engageons à NE PAS collecter :\n• Adresses email ou numéros de téléphone\n• Localisation géographique précise\n• Textes complets des versets consultés\n• Données biométriques ou photos\n• Historique de navigation web\n• Contacts ou informations d\'autres applications',
    },

    // Section 3 - Utilisation des données
    section3: {
      title: '3. Utilisation des données',
      profileUsageTitle: 'Données de profil :',
      profileUsage: '• Personnaliser votre expérience spirituelle\n• Adapter le contenu selon votre genre\n• Sauvegarder vos préférences',
      analyticsUsageTitle: 'Données d\'usage (Mixpanel EU) :',
      analyticsUsage: '• Analyser l\'engagement des utilisateurs\n• Améliorer l\'interface et les fonctionnalités\n• Comprendre les préférences par genre\n• Optimiser le processus d\'onboarding\n• Mesurer la performance de l\'application',
      attributionUsageTitle: 'Données d\'attribution (Tenjin) :',
      attributionUsage: '• Mesurer l\'efficacité des campagnes marketing\n• Attribuer les installations aux bonnes sources\n• Optimiser les investissements publicitaires',
    },

    // Section 4 - Partage des données
    section4: {
      title: '4. Partage des données',
      mixpanelTitle: 'Mixpanel EU (analytics) :',
      mixpanelContent: 'Nous utilisons Mixpanel avec serveurs EU pour analyser l\'usage de l\'app. Seules des données anonymisées sont partagées (genre, mode d\'abonnement, événements d\'usage). Aucune information personnelle identifiable n\'est transmise.',
      tenjinTitle: 'Tenjin (attribution marketing) :',
      tenjinContent: 'Nous utilisons Tenjin pour mesurer l\'efficacité de nos campagnes marketing. Sur iOS, cela nécessite votre consentement ATT (App Tracking Transparency). Vous pouvez refuser à tout moment.',
      revenuecatTitle: 'RevenueCat (gestion des abonnements) :',
      revenuecatContent: 'RevenueCat gère les abonnements Premium et communique avec Apple/Google pour vérifier les achats. Seules les données nécessaires à la gestion d\'abonnement sont partagées.',
      supabaseTitle: 'Supabase (retours utilisateurs) :',
      supabaseContent: 'Nous utilisons Supabase pour collecter tes retours sur l\'app (suggestions, avis sur le paywall). Seul le texte de ton feedback et un identifiant anonyme sont stockés. Aucune donnée personnelle n\'est transmise.',
      noOtherSharingTitle: 'Aucun autre partage :',
      noOtherSharing: 'Nous ne vendons, n\'échangeons ni ne louons vos données à des tiers à des fins commerciales.',
    },

    // Section 5 - Stockage et sécurité
    section5: {
      title: '5. Stockage et sécurité',
      localStorageTitle: 'Stockage local :',
      localStorage: 'Vos données de profil sont stockées uniquement sur votre appareil via AsyncStorage (chiffrement natif).',
      mixpanelStorageTitle: 'Données Mixpanel EU :',
      mixpanelStorage: 'Les données d\'usage anonymisées sont stockées sur les serveurs sécurisés de Mixpanel dans l\'Union Européenne (conformes RGPD, SOC 2, chiffrement en transit et au repos).',
      tenjinStorageTitle: 'Données Tenjin :',
      tenjinStorage: 'Les données d\'attribution sont stockées sur les serveurs de Tenjin selon leurs politiques de confidentialité.',
      supabaseStorageTitle: 'Données Supabase :',
      supabaseStorage: 'Les feedbacks sont stockés de manière sécurisée sur les serveurs Supabase (conformes RGPD, chiffrement HTTPS, authentification sécurisée).',
      retentionTitle: 'Rétention :',
      retention: '• Données locales : conservées jusqu\'à désinstallation\n• Données Mixpanel : 24 mois maximum\n• Données Tenjin : selon leur politique de rétention\n• Données Supabase : conservées pour amélioration du produit',
    },

    // Section 6 - Vos droits (RGPD)
    section6: {
      title: '6. Vos droits (RGPD)',
      content: 'Vous disposez des droits suivants :',
      accessRight: 'Droit d\'accès :',
      accessRightDesc: ' Connaître les données collectées',
      rectificationRight: 'Droit de rectification :',
      rectificationRightDesc: ' Corriger vos données via les paramètres',
      erasureRight: 'Droit à l\'effacement :',
      erasureRightDesc: ' Désinstaller l\'app efface toutes vos données locales',
      objectionRight: 'Droit d\'opposition :',
      objectionRightDesc: ' Refuser le tracking ATT (iOS) ou réinitialiser l\'identifiant publicitaire (Android)',
      portabilityRight: 'Droit à la portabilité :',
      portabilityRightDesc: ' Exporter vos favoris depuis l\'app',
      exerciseRights: 'Pour exercer ces droits ou pour toute question, vous pouvez nous contacter via l\'écran "Aide & Support".',
    },

    // Section 7 - Cookies et tracking
    section7: {
      title: '7. Cookies et tracking',
      content: 'Cette application mobile n\'utilise pas de cookies web. Le tracking analytics Mixpanel utilise des identifiants anonymes temporaires qui ne permettent pas de vous identifier personnellement. L\'attribution Tenjin utilise l\'IDFA (iOS) ou GAID (Android) avec votre consentement.',
    },

    // Section 8 - Modifications
    section8: {
      title: '8. Modifications',
      content: 'Nous nous réservons le droit de modifier cette politique de confidentialité. Les modifications importantes vous seront notifiées via l\'application. La version actuelle est toujours accessible dans les paramètres.',
    },

    // Section 9 - Contact
    section9: {
      title: '9. Contact',
      content: 'Pour toute question concernant cette politique de confidentialité ou vos données personnelles, contactez-nous via l\'écran "Aide & Support" de l\'application.',
    },

    // Carte de choix (optionnel, si vous voulez ajouter un toggle pour Mixpanel)
    choice: {
      title: 'Votre choix',
      description: 'Maintenant que vous avez lu notre politique de confidentialité, vous pouvez choisir si vous souhaitez partager des données d\'usage anonymisées pour nous aider à améliorer l\'application.',
      acceptTracking: 'J\'accepte le partage de données d\'usage anonymisées (Mixpanel)',
      modifiableAnytime: 'Vous pouvez modifier ce choix à tout moment depuis cet écran.',
    },
  },

  // ============================================
  // ÉCRANS LÉGAUX - CONDITIONS D'UTILISATION
  // ============================================
  terms: {
    title: 'Conditions d\'utilisation',
    lastUpdated: 'Dernière mise à jour :',
    welcome: 'Bienvenue sur Verset Vie. En utilisant notre application, vous acceptez les conditions d\'utilisation suivantes.',

    section1Title: '1. Acceptation des conditions',
    section1Text: 'En accédant et en utilisant Verset Vie, vous acceptez d\'être lié par ces conditions d\'utilisation. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser l\'application.',

    section2Title: '2. Utilisation du service',
    section2Text: 'Vous acceptez de :\n• Utiliser l\'application conformément aux lois en vigueur\n• Ne pas utiliser l\'application à des fins illégales\n• Ne pas perturber le fonctionnement normal de l\'application\n• Respecter les droits de propriété intellectuelle',

    section3Title: '3. Compte utilisateur',
    section3Text: 'Vous êtes responsable de :\n• La confidentialité de votre compte\n• Toutes les activités effectuées sous votre compte\n• La véracité des informations fournies',

    section4Title: '4. Modifications des conditions',
    section4Text: 'Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prendront effet dès leur publication dans l\'application.',

    section5Title: '5. Contact',
    section5Text: 'Pour toute question concernant ces conditions d\'utilisation, veuillez nous contacter via la section "Aide et Support" de l\'application.',
  },

  // ============================================
  // ONBOARDING V3
  // ============================================
  onboardingV3: {
    personalProblem: {
      title: 'Qu\'est-ce qui te ',
      titleHighlight: 'pèse',
      titleEnd: ' en ce moment ?',
      subtitle: 'Partage librement ce qui occupe ton cœur.',
      placeholder: 'Écris ici...',
      infoNote: '🔒 Seuls ton prénom et ta prière seront partagés pour la prière commune dans l\'app. Aucune autre information personnelle. Si tu n\'es pas d\'accord, appuie simplement sur Continuer.',
      sendButton: 'Envoyer ma prière',
      skipButton: 'Passer cette étape',
    },
    questions: {
      title: 'Ton parcours de ',
      titleHighlight: 'communion',
      titleEnd: ' avec Jésus',
      // Barres de progression thématiques
      theme1Label: 'Ta relation avec Jésus',
      theme2Label: 'Ta vie quotidienne',
      theme3Label: 'Ta croissance spirituelle',
      // Intros contextuelles par question
      intro1: 'Pour commencer :',
      intro2: 'Toujours sur ta relation avec Jésus :',
      intro3: 'Parlons de ton quotidien :',
      intro4: 'Toujours sur ta vie quotidienne :',
      intro5: 'Concernant ta croissance :',
      intro6: 'Une dernière question :',
      // Questions groupées par thème
      // Thème 1 : Relation avec Jésus
      q1: 'Désires-tu avoir une relation personnelle et vivante avec Jésus ?',
      q2: 'Veux-tu apprendre à entendre la voix de Jésus au quotidien ?',
      // Thème 2 : Vie quotidienne
      q3: 'Ressens-tu le besoin de passer du temps avec Jésus chaque jour ?',
      q4: 'Veux-tu faire de Jésus ton premier réflexe dans tes décisions ?',
      // Thème 3 : Croissance spirituelle
      q5: 'Aimerais-tu suivre ta croissance spirituelle ?',
      q6: 'Souhaites-tu recevoir des encouragements personnalisés de Jésus ?',
      buttonNo: 'Non',
      buttonYes: 'Oui',
      completedMessage: 'Merci pour tes réponses ! Nous allons maintenant préparer ton espace de communion.',
      readyMessage: 'Ton espace de communion est prêt !',
      loadingLabel: 'Préparation',
      continueButton: 'Continuer',
    },
    prePaywall: {
      title: 'Ton parcours de ',
      titleHighlight: 'communion',
      titleEnd: ' commence ici',
      subtitle: 'Nous sommes là pour t\'aider à faire grandir ta relation avec Jésus à travers un cœur à cœur.',
      // Bénéfices orientés résultats (pas features)
      benefit1: 'Ressens la paix intérieure dès ton réveil',
      benefit2: 'Commence chaque journée avec une direction claire',
      benefit3: 'Grandis spirituellement jour après jour',
      // Témoignage (social proof)
      testimonialQuote: 'Depuis que j\'utilise VersetVie, ma relation avec Jésus a complètement changé. Je me sens plus proche de Lui chaque jour.',
      testimonialAuthor: 'Marie, utilisatrice depuis 6 mois',
      // Note de confiance
      trustNote: 'Annulation possible à tout moment',
      // CTA
      ctaButton: 'Continuer',
      // Note en bas de page
      bottomNote: 'Chaque jour, un verset et un encouragement pour nourrir ta relation avec Jésus.',
    },
  },
};

// Export du type pour garantir la cohérence
export type TranslationKeys = typeof fr;

// Export nommé pour utilisation directe
export const strings = fr;