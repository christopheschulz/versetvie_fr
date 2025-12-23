// src/locales/de.ts
// German localization file - ALL application texts

import type { TranslationKeys } from './types';

export const de: TranslationKeys = {
  // ============================================
  // GENERAL
  // ============================================
  app: {
    name: 'VersetVie',
    loading: 'Laden...',
    error: 'Ein Fehler ist aufgetreten',
    retry: 'Erneut versuchen',
    close: 'Schließen',
    cancel: 'Abbrechen',
    confirm: 'Bestätigen',
    save: 'Speichern',
    delete: 'Löschen',
    share: 'Teilen',
    back: 'Zurück',
    continue: 'Weiter',
    skip: 'Überspringen',
    next: 'Weiter',
    previous: 'Zurück',
    finish: 'Fertig',
    ok: 'OK',
    yes: 'Ja',
    no: 'Nein',
    success: 'Erfolg',
  },

  // ============================================
  // ONBOARDING
  // ============================================
  onboarding: {
    // Common buttons
    next: 'Weiter',
    skip: 'Überspringen',
    continue: 'Weiter',
    finish: 'Fertig',

    // Common labels
    welcome: 'Willkommen',
    firstName: 'Wie ist dein Vorname?',
    firstNamePlaceholder: 'Gib hier deinen Vornamen ein',
    gender: 'Dein Geschlecht',
    genderMale: 'Männlich',
    genderFeminine: 'Weiblich',

    // Social proof (welcome page)
    socialProof: 'Schließe dich über 3.000 Nutzern an',

    // Welcome page
    welcomePage: {
      title: 'Ich bin ',
      titleHighlight: 'froh',
      titleEnd: ', dass du hier bist',
      subtitle: 'Nimm dir einen Moment zum Durchatmen...',
      description: 'Ich kenne, was du trägst, auch wenn du schweigst.',
      button: 'Beginnen',
    },

    // Testimonials page
    testimonials: {
      title: 'Schließe dich heute ',
      titleHighlight: '4000 Gläubigen',
      titleEnd: ' an',
      subtitle: '',
      description: '',
      button: 'Weiter',
      manon: {
        name: 'Manon',
        rating: 5,
        text: 'Ich liebe, wie persönlich diese App ist. Jeder erhält täglich ein einzigartiges ermutigendes Wort, und ich glaube wirklich, dass der Herr inspiriert. Außerdem kann man Verse zu verschiedenen Herausforderungen in Kategorien finden.\n\nSuper kraftvoll',
      },
      jeremie: {
        name: 'Jérémie',
        rating: 5,
        text: 'Tolle App! Sie ermutigt mich jeden Morgen mit einem Vers, denn "die Güte des Herrn ist nicht erschöpft, sie erneuert sich jeden Morgen". Möge der Herr euch stärken und euch helfen, eure Beziehung zu ihm zu pflegen. Was den Ersteller dieser App betrifft, möge der allmächtige Gott euch segnen und euch weiterhin führen, um die Wahrheit in die Herzen zu säen, im Namen Jesu, Amen.',
      },
      nadia: {
        name: 'Nadia',
        rating: 5,
        text: 'Erst kürzlich installiert, kann ich nicht mehr ohne. Kurz bevor ich zur Arbeit gehe, eine kleine Ermutigung für den Tag - es gibt nichts Besseres! Ich war sehr bewegt an dem Tag, als ich um Gottes Hilfe betete und der Vers genau Seine Antwort an mich war! Diese App ist ein Segen!',
      },
    },
    age: {
      title: 'In welcher ',
      titleHighlight: 'Lebensphase',
      titleEnd: ' befindest du dich?',
      titleHighlight2: '',
      titleEnd2: '',
      subtitle: '',
      description: 'Um dein Erlebnis zu personalisieren.',
      options: [
        { id: '18-24', label: '18-24 Jahre', value: 21 },
        { id: '25-34', label: '25-34 Jahre', value: 29 },
        { id: '35-44', label: '35-44 Jahre', value: 39 },
        { id: '45-54', label: '45-54 Jahre', value: 49 },
        { id: '55-64', label: '55-64 Jahre', value: 59 },
        { id: '65-74', label: '65-74 Jahre', value: 69 },
        { id: '75+', label: '75 Jahre und älter', value: 80 },
      ],
    },
    notifications: 'Bleib verbunden',
    notificationsDescription: 'Erhalte eine tägliche Erinnerung für deine Ermutigung',
    notificationsAllow: 'Benachrichtigungen erlauben',
    notificationsSkip: 'Später',

    // Legal consent screen
    consent: {
      title: 'Willkommen bei VersetVie',
      subtitle: 'Bevor wir beginnen, lies und akzeptiere bitte unsere rechtlichen Dokumente:',
      termsTitle: 'Nutzungsbedingungen',
      termsButton: 'Bedingungen lesen',
      privacyTitle: 'Datenschutzrichtlinie',
      privacyButton: 'Richtlinie lesen',
      checkboxLabel: 'Ich akzeptiere die Nutzungsbedingungen und die Datenschutzrichtlinie',
      continueButton: 'Weiter',
      required: 'Du musst akzeptieren, um fortzufahren',
    },

    // Presentation screens (placeholders)
    welcome1: {
      title: 'Eine Botschaft für dich, jeden Tag',
      description: 'Entdecke jeden Morgen ein Wort von Jesus, persönlich um dich zu ermutigen und zu führen.',
    },
    welcome2: {
      title: 'Jesus spricht persönlich zu dir',
      description: 'Erhalte eine einzigartige Ermutigung, speziell für dich geschrieben, mit deinem Namen.',
    },
    welcome3: {
      title: 'Wachse in deinem Glauben',
      description: 'Erkunde Hunderte von Versen nach Themen und verfolge deinen geistlichen Fortschritt.',
    },

    // User info screen
    userInfo: {
      title: 'Wie ist dein ',
      titleHighlight: 'Vorname',
      titleEnd: '?',
      subtitle: '',
      description: 'Damit jede Ermutigung nur für dich geschrieben wird.',
      firstNamePlaceholder: 'Dein Vorname',
      firstNameError: 'Der Vorname muss mindestens 2 Zeichen haben',
      button: 'Weiter',
    },

    // Gender screen
    genderPage: {
      title: 'Wie möchtest du ',
      titleHighlight: 'angesprochen werden',
      titleEnd: '?',
      subtitle: '',
      description: 'Die Nachrichten werden an deine Wahl angepasst.',
      button: 'Weiter',
      optionMale: 'Männlich',
      optionFeminine: 'Weiblich',
    },

    // Value screen (verse demo)
    valuePage: {
      title: 'Jeden Tag ein ',
      titleHighlight: 'Wort für dich',
      description: 'Ein Vers, ausgewählt um dich zu erleuchten, aufzurichten oder dich einfach daran zu erinnern, dass du nie allein bist.',
      button: 'Weiter',
    },

    // Notifications permission screen
    notificationsScreen: {
      title: 'Bleib verbunden',
      description: 'Erhalte eine tägliche Erinnerung für deine Ermutigung',
      timeLabel: 'Benachrichtigungszeit',
      defaultTime: '9:00',
      allowButton: 'Benachrichtigungen erlauben',
      skipButton: 'Später',
      permissionDenied: 'Berechtigung verweigert',
      permissionGranted: 'Benachrichtigungen aktiviert',
    },

    // Completion screen
    complete: {
      title: 'Es ist bereit!',
      subtitle: 'Deine geistliche Reise beginnt jetzt',
      button: 'Die App entdecken',
    },

    // First Verse Preview screen (before paywall)
    firstVersePreview: {
      title: 'Alles ist ',
      titleHighlight: 'bereit',
      description: 'Ich habe für dich einen persönlichen Weg mit Meinem Wort vorbereitet. Jeden Tag wirst du einen Vers und eine Ermutigung erhalten, in der Ich zu deinem Herzen spreche, genau dort, wo du wirklich bist.',
      optionalNote: 'Du musst nicht so tun... komm so wie du bist, Tag für Tag.',
      closingNote: 'Das ist erst der Anfang. Lass Mich dich Schritt für Schritt begleiten, ein Vers und ein Atemzug auf einmal.',
      button: 'Los geht\'s!',
    },

    // Personal Experience screen (merged)
    personalExperience: {
      title: 'Entdecke deine ',
      titleHighlight: 'Ermutigung',
      subtitle: 'Eine persönliche Botschaft, jeden Tag für dich geschrieben.',
      pressAndHold: 'Halte gedrückt\num zu entdecken, {{name}}...',
      encouragementPhrases: [
        'Atme...',
        'Das ist für dich...',
      ],
      footer: '',
      button: 'Weiter',
    },

    // Growth screen - Category exploration
    growth: {
      titleStart: 'Ein ',
      titleHighlight1: 'Wort',
      titleMiddle: ' für jeden ',
      titleHighlight2: 'Bedarf',
      titleMiddle2: '',
      titleHighlight3: '',
      subtitle: 'Frieden, Stärke, Vergebung, Hoffnung...',
      description: 'Finde den Vers, der auf das antwortet, was du durchmachst.',
    },

    // ============================================
    // NEW PERSONALIZATION PAGES
    // ============================================

    // Spiritual state screen
    spiritualState: {
      title: 'Erzähl Mir von deinem ',
      titleHighlight: 'Herzen',
      titleEnd: ' heute',
      subtitle: 'Du kannst Mir die Wahrheit sagen, Ich höre ohne zu urteilen.',
      options: {
        beginning: {
          label: 'Ich durchlebe etwas Schweres',
        },
        growing: {
          label: 'Ich suche noch meine Richtung',
        },
        struggling: {
          label: 'Ich heile Schritt für Schritt',
        },
        seeking: {
          label: 'Ich fühle mich friedlich und dankbar',
        },
      },
    },

    // Spiritual challenges screen
    spiritualChallenges: {
      title: 'Was ist ',
      titleHighlight: 'schwer',
      titleMiddle: ' für dich ',
      titleHighlight2: 'heute',
      titleEnd: '?',
      subtitle: 'Du kannst es Mir ohne Angst sagen, Ich bin hier um mit dir zu gehen.',
      minSelection: 'Wähle mindestens {{min}} Herausforderungen',
      maxSelection: 'Maximal {{max}} Herausforderungen',
      options: {
        prayer: { label: 'Es fällt mir schwer, Dir voll zu vertrauen' },
        distance: { label: 'Es fällt mir schwer, Deine Stimme zu unterscheiden' },
        time: { label: 'Es fällt mir schwer, Dir anzuvertrauen was mich leiden lässt' },
        doubts: { label: 'Es fällt mir schwer, Deine Gegenwart zu spüren' },
        noWords: { label: 'Ich finde noch nicht die Worte' },
      },
    },

    // Life context screen
    lifeContext: {
      title: 'Was braucht dein ',
      titleHighlight: 'Herz',
      titleMiddle: ' ',
      titleHighlight2: 'heute',
      titleEnd: '?',
      subtitle: 'Du kannst es Mir sagen... Ich höre mit Zärtlichkeit und Geduld zu.',
      options: {
        family: { label: 'Ich brauche es, Deinen Frieden zu spüren' },
        relationship: { label: 'Ich brauche es zu verstehen, was ich durchlebe' },
        career: { label: 'Ich brauche es, Dich nah bei mir zu spüren' },
        challenge: { label: 'Ich brauche es, wieder Hoffnung zu finden' },
      },
    },

    // Encouragement style screen
    encouragementStyle: {
      titleHighlight1: 'Wie',
      titleMiddle: ' möchtest du dich ',
      titleHighlight2: 'Mir nähern',
      titleEnd: '?',
      subtitle: 'Ich dränge dich nicht. Ich empfange dich genau dort, wo du bist.',
      options: {
        love: {
          label: 'Indem ich mein Herz öffne, Schritt für Schritt',
        },
        peace: {
          label: 'Indem ich mit Dir wie mit einem engen Freund spreche',
        },
        hope: {
          label: 'Indem ich Dich durch Dein Wort entdecke',
        },
        purpose: {
          label: 'Ich will mich nähern, aber ich suche noch wie',
        },
      },
    },

    // Daily time screen
    dailyTime: {
      title: 'Was wünscht sich dein ',
      titleHighlight: 'Herz',
      titleMiddle: ' zu ',
      titleHighlight2: 'empfangen',
      titleMiddle2: ' mit ',
      titleHighlight3: 'Mir',
      titleEnd: '?',
      subtitle: 'Du kannst Mir sagen, was dich anzieht, Ich dränge dich nicht. Ich will dich dort erreichen, wo du es brauchst.',
      options: {
        understanding: { label: 'Besser verstehen, wer ich bin', description: '' },
        healing: { label: 'Heilen, was in mir verletzt ist', description: '' },
        peace: { label: 'Dauerhaften inneren Frieden finden', description: '' },
        trust: { label: 'Lernen, Dir zu vertrauen', description: '' },
        closeness: { label: 'Näher bei Dir wandeln', description: '' },
        purpose: { label: 'Den Sinn meines Weges erkennen', description: '' },
        love: { label: 'Lieben und vergeben wie Du mich liebst', description: '' },
        renewal: { label: 'Mein Herz und meinen Glauben erneuern', description: '' },
      },
    },

    // Priority themes screen
    priorityThemes: {
      title: 'Welche ',
      titleHighlight: 'Themen',
      titleMiddle: ' klingen am meisten in ',
      titleHighlight2: 'dir',
      titleEnd: ' gerade?',
      subtitle: 'Wähle mindestens 3',
      selectionProgress: '{{current}}/{{min}} Minimum',
      selectionComplete: '{{current}}/{{max}} ausgewählt',
      minSelection: 'Wähle mindestens {{min}} Themen',
      maxSelection: 'Maximal {{max}} Themen',
      options: {
        love: { label: 'Wissen, wer ich wirklich bin', description: '' },
        prayer: { label: 'Beruhigen, was in mir vorgeht', description: '' },
        identity: { label: 'Mich Dir näher fühlen', description: '' },
        strength: { label: 'Heilen von dem, was noch wehtut', description: '' },
        peace: { label: 'Lernen zu vertrauen und loszulassen', description: '' },
        healing: { label: 'Verstehen, wozu ich berufen bin', description: '' },
      },
    },

    // Bible familiarity screen
    bibleFamiliarity: {
      title: 'Wo stehst du mit ',
      titleHighlight: 'Meinem Wort',
      titleEnd: ' heute?',
      subtitle: 'Egal wo du anfängst, Ich gehe mit dir.',
      options: {
        never: {
          label: 'Ich entdecke es fast zum ersten Mal',
          description: '',
        },
        stories: {
          label: 'Ich kenne es ein wenig und brauche Führung',
          description: '',
        },
        some: {
          label: 'Ich lese es, aber vieles bleibt mir unklar',
          description: '',
        },
        occasional: {
          label: 'Ich lese es bereits und will mit Dir weitergehen',
          description: '',
        },
      },
    },

    // Bible version screen
    bibleVersion: {
      title: 'Wähle deine ',
      titleHighlight: 'Version',
      titleEnd: ' der Bibel',
      subtitle: 'Die, mit der du dich am wohlsten fühlst zum Lesen und Meditieren.',
      versions: [
        { id: 'any', label: 'Egal', description: 'Alle Versionen' },
        { id: 'LUT', label: 'Lutherbibel', description: 'Klassisch' },
        { id: 'ELB', label: 'Elberfelder Bibel', description: 'Wörtlich' },
        { id: 'SCH', label: 'Schlachter 2000', description: 'Beliebt' },
        { id: 'NGU', label: 'Neue Genfer Übersetzung', description: 'Modern' },
        { id: 'HFA', label: 'Hoffnung für Alle', description: 'Leicht zu lesen' },
        { id: 'EIN', label: 'Einheitsübersetzung', description: 'Katholisch' },
      ],
    },

    // Theme selection screen
    themeSelection: {
      title: 'In welcher ',
      titleHighlight: 'Atmosphäre',
      titleMiddle: ' fühlst du dich am ',
      titleHighlight2: 'wohlsten',
      titleMiddle2: ', um mit ',
      titleHighlight3: 'Mir',
      titleEnd: ' zu sein?',
      subtitle: 'Wähle die Farben, in denen dein Herz Frieden findet. Egal was du jetzt nimmst, du kannst es später ändern. Wichtig ist, dass du dich bei Mir wohlfühlst.',
    },

    // Calculating screen - Inspirational loading
    calculating: {
      mainTitle: 'Ich bereite einen Raum nur für dich vor.',
      loadingMessage: 'Ich bereite dein persönliches Erlebnis mit Mir vor...',
      versesIntro: 'Während alles eingerichtet wird, lass diese Worte zu deinem Herzen sprechen...',
      reassurance: 'Schritt für Schritt... Ich bin da.',
      inspirationalVerses: [
        {
          text: 'Ich vermag alles durch den, der mich stark macht.',
          reference: 'Philipper 4:13',
        },
        {
          text: 'Meine Gnade genügt dir, denn meine Kraft kommt in der Schwachheit zur Vollendung.',
          reference: '2. Korinther 12:9',
        },
        {
          text: 'Habe deine Lust am Herrn, so wird er dir geben, was dein Herz begehrt.',
          reference: 'Psalm 37:4',
        },
        {
          text: 'Die Wahrheit wird euch frei machen.',
          reference: 'Johannes 8:32',
        },
        {
          text: 'Ich bin gekommen, damit sie das Leben haben und es in Fülle haben.',
          reference: 'Johannes 10:10',
        },
      ],
    },
  },

  // ============================================
  // HOME SCREEN
  // ============================================
  home: {
    title: 'Vers des Tages',
    verseOfTheDay: 'Vers des Tages',
    discoverEncouragement: 'Ermutigung ansehen',
    reviewEncouragement: 'Ermutigung erneut lesen',
    favorite: 'Zu Favoriten hinzufügen',
    unfavorite: 'Aus Favoriten entfernen',
    favoriteAdded: 'Zu Favoriten hinzugefügt',
    favoriteRemoved: 'Aus Favoriten entfernt',
    share: 'Teilen',
    profile: 'Profil',
    loading: 'Vers wird geladen...',
    error: 'Vers konnte nicht geladen werden',
    newVerseAvailable: 'Ein neuer Vers wartet auf dich',
    bibleVersionShort: 'SCH51', // Schlachter 1951
  },

  // ============================================
  // ENCOURAGEMENT SCREEN
  // ============================================
  encouragement: {
    title: 'Deine Ermutigung',
    headerTitle: 'Ermutigung des Tages',
    signature: 'Jesus',
    loading: 'Deine Ermutigung wird vorbereitet...',
    tapToSkip: 'Tippe um die vollständige Nachricht anzuzeigen',
    animationSpeed: 'Animationsgeschwindigkeit',
    speedSlow: 'Langsam',
    speedNormal: 'Normal',
    speedFast: 'Schnell',
    back: 'Zurück zum Vers',
  },

  // ============================================
  // WEEKLY LIMIT MODAL
  // ============================================
  weeklyLimit: {
    title: 'Deine wöchentliche Ermutigung wurde verwendet',
    daysRemaining: 'Noch {{count}} Tage bis zur nächsten Ermutigung',
    daysRemainingOne: 'Noch 1 Tag bis zur nächsten Ermutigung',
    nextReset: 'Nächste Ermutigung verfügbar nächsten Montag',
    benefitsTitle: 'Mit Premium profitierst du von:',
    benefitUnlimitedEncouragements: 'Unbegrenzte persönliche Ermutigungen',
    benefitTestimony: 'Bonus: Zugang zum Zeugnis-Buch des Verset Vie Erstellers',
    upgradeButton: 'Premium entdecken',
    laterButton: 'Später',
  },

  // ============================================
  // PROFILE SCREEN
  // ============================================
  profile: {
    title: 'Profil',

    // Subscription status
    accountFree: 'Kostenloses Konto',
    accountPremium: 'Premium',
    accountPremiumWeekly: 'Premium - Wöchentliches Abo',
    accountPremiumMonthly: 'Premium - Monatliches Abo',
    accountPremiumYearly: 'Premium - Jährliches Abo',
    upgradeToPremium: 'Zu Premium wechseln',

    // Personal information
    personalInfo: 'Persönliche Informationen',
    firstName: 'Vorname',
    firstNameHint: 'Dieser Name wird verwendet, um deine Ermutigungen zu personalisieren',
    firstNameMinLength: 'Der Vorname muss mindestens 2 Zeichen enthalten.',
    firstNameMaxLength: 'Der Vorname darf nicht länger als 50 Zeichen sein.',
    firstNameOnlyNumbers: 'Der Vorname darf nicht nur aus Zahlen bestehen.',
    gender: 'Geschlecht',
    genderMale: 'Männlich',
    genderFeminine: 'Weiblich',
    genderFemale: 'Weiblich',
    genderHint: 'Bestimmt welche Version der Ermutigung angezeigt wird',
    edit: 'Bearbeiten',
    save: 'Speichern',
    infoUpdated: 'Deine Informationen wurden aktualisiert.',
    infoUpdateError: 'Deine Informationen konnten nicht gespeichert werden. Bitte versuche es später erneut.',

    // Notifications
    notifications: 'Benachrichtigungen',
    notificationsEnabled: 'Benachrichtigungen aktiviert',
    notificationsDisabled: 'Benachrichtigungen deaktiviert',
    notificationTime: 'Benachrichtigungszeit',
    notificationTimeDescription: 'Wähle die Uhrzeit für deine tägliche Erinnerung',
    notificationPermissionDenied: 'Benachrichtigungsberechtigungen wurden verweigert',
    openSettings: 'Einstellungen öffnen',

    // Settings
    settings: 'Einstellungen',
    animationSpeed: 'Animationsgeschwindigkeit',
    animationSpeedDescription: 'Wähle die Anzeigegeschwindigkeit der Ermutigung',
    animationSpeedSlow: 'Langsam',
    animationSpeedNormal: 'Normal',
    animationSpeedFast: 'Schnell',
    previewButton: 'Vorschau',
    hapticFeedback: 'Haptisches Feedback',
    hapticFeedbackDescription: 'Leichte Vibration während der Ermutigungs-Anzeige',
    theme: 'Design',
    themeDescription: 'Wähle das visuelle Design der App',
    themeColorBackground: 'Hintergrund',
    themeColorSurface: 'Oberfläche',
    themeColorPrimary: 'Primär',
    themeColorSecondary: 'Sekundär',
    themeInfoHint: 'Das Design ändert das visuelle Erscheinungsbild der gesamten App. Änderungen werden sofort angewendet und automatisch gespeichert.',
    // Theme-Namen und Beschreibungen
    themes: {
      default: { name: 'Standard', description: 'Standard-Design von VersetVie' },
      dark: { name: 'Dunkel', description: 'Dunkles Design für die Nacht' },
      light: { name: 'Hell', description: 'Helles Design für den Tag' },
      ocean: { name: 'Ozean', description: 'Beruhigendes Meeresblau für Gelassenheit' },
      forest: { name: 'Wald', description: 'Beruhigendes natürliches Grün' },
      lavender: { name: 'Lavendel', description: 'Elegantes Lila für Meditation' },
      'rose-gold': { name: 'Roségold', description: 'Warme und moderne Eleganz' },
      sunset: { name: 'Sonnenuntergang', description: 'Warme und behagliche Töne' },
    },
    textSize: 'Textgröße',
    textSizeDescription: 'Passe die Schriftgröße in der App an',
    textSizeXSmall: 'Sehr klein',
    textSizeSmall: 'Klein',
    textSizeNormal: 'Normal',
    textSizeLarge: 'Groß',
    textSizeXLarge: 'Sehr groß',
    textSizeXXLarge: 'Ultra groß',
    textSizeXXXLarge: 'Riesig',

    // Badges and rewards (settings)
    badgeCelebrations: 'Abzeichen-Feierlichkeiten',
    badgeCelebrationsDescription: 'Animationen beim Freischalten eines Abzeichens anzeigen',
    focusMode: 'Fokus-Modus',
    focusModeDescription: 'Alle Abzeichen und Gamification-Elemente ausblenden',
    badgeNotifications: 'Abzeichen-Benachrichtigungen',
    badgeNotificationsDescription: 'Erinnerungen für freizuschaltende Abzeichen erhalten',

    // Premium features
    premiumFeatures: 'Premium Funktionen',
    favorites: 'Favoriten',
    favoritesDescription: 'Speichere deine Lieblingsverse',
    categories: 'Kategorien',
    categoriesDescription: 'Erkunde alle Verse nach Thema',
    statistics: 'Statistiken',
    statisticsDescription: 'Verfolge deinen geistlichen Fortschritt',
    testimony: 'Zeugnis',
    testimonyDescription: 'Lies das vollständige Zeugnis-Buch',
    locked: 'Premium reserviert',
    unlock: 'Freischalten',

    // Subscription management
    subscription: 'Abonnement',
    subscriptionManage: 'Abonnement verwalten',
    subscriptionRenewal: 'Verlängerung',
    subscriptionRenewalDate: 'Nächste Verlängerung: {{date}}',
    subscriptionActive: 'Aktives Abonnement',
    subscriptionExpired: 'Abgelaufenes Abonnement',

    // Links and info
    linksAndInfo: 'Links und Informationen',
    paywall: 'Premium werden',
    help: 'Hilfe & Support',
    about: 'Über uns',
    privacy: 'Datenschutzrichtlinie',
    terms: 'Nutzungsbedingungen',

    // Privacy
    privacySection: 'Datenschutz',
    myData: 'Meine Daten',
    deleteData: 'Meine Daten löschen',
    deleteDataConfirm: 'Bist du sicher, dass du alle deine Daten löschen möchtest?',
    deleteDataWarning: 'Diese Aktion ist unwiderruflich. Alle deine lokalen Daten (Favoriten, Statistiken, Einstellungen) werden gelöscht.',
    deleteDataSuccess: 'Alle Daten wurden gelöscht',
    deleteDataError: 'Fehler beim Löschen der Daten',

    // Profile sections
    settingsSection: 'Einstellungen',
    contentSection: 'Inhalt',
    informationsSection: 'Informationen',
    badges: 'Abzeichen',

    // Additional profile texts
    chooseSubscription: 'Wähle dein Abonnement',
    personalInfoSubtitle: 'Vorname und Geschlecht',
    badgesSubtitle: 'Belohnungssammlung',
    testimonySubtitle: 'Kostenlose Einführung',

    // Language section
    languageSection: 'SPRACHE',
    languageChanged: 'Sprache geändert',
    languageRestartHint: 'Einige Elemente erfordern möglicherweise einen Neustart',
    currentLanguage: 'Aktuelle Sprache',
  },

  // ============================================
  // BADGES SCREEN
  // ============================================
  badges: {
    title: 'Abzeichen',

    // Global statistics
    myProgress: 'Mein Fortschritt',
    unlockedBadges: 'Freigeschaltet',
    completion: 'Abschluss',
    totalBadges: 'Gesamt',
    currentStreaks: 'Laufende Serien',

    // Filters
    allCategories: 'Alle',
    categoryLabel: 'Kategorie',
    categoryModalTitle: 'Kategorie wählen',
    sortLabel: 'Sortieren nach',
    sortModalTitle: 'Sortierung wählen',

    // Badge categories
    categories: {
      streak: 'Serien',
      milestone: 'Meilensteine',
      engagement: 'Engagement',
      exploration: 'Erkundung',
      special: 'Spezielle',
    },

    // Sort options
    sort: {
      byRarity: 'Nach Seltenheit',
      byRecent: 'Neueste',
      byProgress: 'Fortschritt',
      byCategory: 'Kategorie',
      alphabetical: 'Alphabetisch',
    },

    // Rarities
    rarity: {
      common: 'Gewöhnlich',
      uncommon: 'Ungewöhnlich',
      rare: 'Selten',
      epic: 'Episch',
      legendary: 'Legendär',
    },

    // States
    locked: 'Gesperrt',
    unlocked: 'Freigeschaltet',
    new: 'Neu',

    // Freischaltungsdaten
    unlockedToday: 'Heute freigeschaltet',
    unlockedYesterday: 'Gestern freigeschaltet',
    unlockedDaysAgo: 'Vor {{count}} Tagen freigeschaltet',
    unlockedWeeksAgo: 'Vor {{count}} Woche freigeschaltet',
    unlockedWeeksAgoPlural: 'Vor {{count}} Wochen freigeschaltet',
    unlockedMonthsAgo: 'Vor {{count}} Monaten freigeschaltet',

    // Messages
    noBadges: 'Noch keine Abzeichen',
    noBadgesDescription: 'Nutze die App weiter um Abzeichen freizuschalten',
    loading: 'Abzeichen werden geladen...',
    error: 'Abzeichen konnten nicht geladen werden',

    // Freischaltungs-Toast
    newBadgeUnlocked: '🎉 Neues Abzeichen freigeschaltet!',
    tapToClose: 'Tippen zum Schließen',

    // Abzeichen-Definitionen (Namen und Beschreibungen)
    items: {
      // === KATEGORIE SERIEN ===
      first_steps: {
        name: 'Erste Schritte',
        description: 'Halte eine 3-Tage-Serie aufrecht',
      },
      faithful_week: {
        name: 'Eine treue Woche',
        description: 'Halte eine 7-Tage-Serie aufrecht',
        reflectionPrompt: 'Wie hat das tägliche Wort deine Woche beeinflusst?',
      },
      perseverant: {
        name: 'Beharrlich',
        description: 'Halte eine 21-Tage-Serie aufrecht',
        reflectionPrompt: 'Drei Wochen Beständigkeit! Was hast du über dich gelernt?',
      },
      devoted_month: {
        name: 'Ein hingebungsvoller Monat',
        description: 'Halte eine 30-Tage-Serie aufrecht',
        reflectionPrompt: 'Ein ganzer Monat mit dem Wort. Was hat Gott dir offenbart?',
      },
      habit_formed: {
        name: 'Gewohnheit gebildet',
        description: 'Halte eine 66-Tage-Serie aufrecht',
        reflectionPrompt: 'Wissenschaftlich belegt: Deine Gewohnheit ist verankert! Wie wirst du weitermachen?',
      },
      year_of_faith: {
        name: 'Ein Jahr des Glaubens',
        description: 'Halte eine 365-Tage-Serie aufrecht',
        reflectionPrompt: 'Ein ganzes Jahr! Teile dein Zeugnis der Verwandlung.',
      },
      dawn_routine: {
        name: 'Morgenröte',
        description: 'Halte eine 7-Tage-Serie vor 8 Uhr aufrecht',
        reflectionPrompt: 'Den Tag mit Gott zu beginnen verändert alles. Was entdeckst du?',
      },
      night_sentinel: {
        name: 'Mitternachtswächter',
        description: 'Halte eine 7-Tage-Serie nach 22 Uhr aufrecht',
        reflectionPrompt: 'Den Tag im Wort zu beenden bringt Frieden. Wie fühlst du dich?',
      },
      renaissance: {
        name: 'Renaissance',
        description: 'Nimm das Lesen nach 30 Tagen Abwesenheit wieder auf',
        reflectionPrompt: 'Willkommen zurück! Gott hat auf dich gewartet. Was hat dich zurückgebracht?',
      },
      second_wind: {
        name: 'Zweiter Atem',
        description: 'Nimm das Lesen nach 7 Tagen Abwesenheit wieder auf',
      },
      faith_marathon: {
        name: 'Glaubensmarathon',
        description: 'Halte eine 100-Tage-Serie aufrecht',
        reflectionPrompt: 'Hundert Tage! Du bist mit Ausdauer gelaufen. Was hast du gelernt?',
      },
      four_seasons: {
        name: 'Vier Jahreszeiten',
        description: 'Halte eine 90-Tage-Serie aufrecht',
        reflectionPrompt: 'Drei Monate Treue! Wie bist du geistlich gewachsen?',
      },
      diamond_consistency: {
        name: 'Diamant der Beständigkeit',
        description: 'Halte eine 50-Tage-Serie aufrecht',
        reflectionPrompt: 'Fünfzig Tage Treue! Deine Beständigkeit strahlt wie ein Diamant.',
      },
      ardent_fire: {
        name: 'Brennendes Feuer',
        description: 'Halte eine 14-Tage-Serie aufrecht',
        reflectionPrompt: 'Zwei Wochen geistliches Feuer! Halte die Flamme am Brennen.',
      },
      shooting_star: {
        name: 'Sternschnuppe',
        description: 'Halte eine 5-Tage-Serie aufrecht',
      },
      semester_devotion: {
        name: 'Semester der Hingabe',
        description: 'Halte eine 180-Tage-Serie aufrecht',
        reflectionPrompt: 'Sechs Monate täglicher Gemeinschaft! Teile dein Zeugnis der Verwandlung.',
      },

      // === KATEGORIE MEILENSTEINE ===
      new_journey: {
        name: 'Neue Reise',
        description: 'Lies deinen ersten Vers',
      },
      truth_seeker: {
        name: 'Wahrheitssucher',
        description: 'Lies 30 Verse',
      },
      devoted_student: {
        name: 'Hingebungsvoller Schüler',
        description: 'Lies 100 Verse',
      },
      scripture_master: {
        name: 'Meister der Schrift',
        description: 'Lies 365 Verse (ein ganzes Jahr)',
      },
      diligent_reader: {
        name: 'Fleißiger Leser',
        description: 'Lies 50 Verse',
      },
      scholar: {
        name: 'Gelehrter',
        description: 'Lies 200 Verse',
      },
      teacher: {
        name: 'Lehrer',
        description: 'Lies 500 Verse',
      },
      ancient_sage: {
        name: 'Alter Weiser',
        description: 'Lies 1000 Verse',
      },
      blessed_week: {
        name: 'Gesegnete Woche',
        description: 'Lies 7 Verse',
      },
      first_anniversary: {
        name: 'Erster Jahrestag',
        description: 'Ein Jahr seit deiner ersten Lesung',
        reflectionPrompt: 'Ein Jahr zusammen! Schau, wie weit du gekommen bist.',
      },

      // === KATEGORIE ENGAGEMENT ===
      first_encouragement: {
        name: 'Erste Ermutigung',
        description: 'Lies deine erste Ermutigung',
      },
      first_treasure: {
        name: 'Erster Schatz',
        description: 'Füge deinen ersten Favoriten hinzu',
      },
      wisdom_collector: {
        name: 'Weisheitssammler',
        description: 'Füge 10 Verse zu Favoriten hinzu',
      },
      light_messenger: {
        name: 'Lichtbote',
        description: 'Teile deinen ersten Vers',
      },
      evangelist: {
        name: 'Evangelist',
        description: 'Teile 10 Verse',
      },
      reflective_heart: {
        name: 'Nachdenkliches Herz',
        description: 'Lies 25 Ermutigungen',
      },
      treasure_keeper: {
        name: 'Schatzhüter',
        description: 'Füge 25 Verse zu Favoriten hinzu',
      },
      sacred_library: {
        name: 'Heilige Bibliothek',
        description: 'Füge 50 Verse zu Favoriten hinzu',
      },
      light_ambassador: {
        name: 'Lichtbotschafter',
        description: 'Teile 25 Verse',
      },
      meditative_heart: {
        name: 'Meditatives Herz',
        description: 'Lies 50 Ermutigungen',
      },
      contemplative_soul: {
        name: 'Kontemplative Seele',
        description: 'Lies 100 Ermutigungen',
      },
      first_meditation: {
        name: 'Erste Meditation',
        description: 'Lies 5 Ermutigungen',
      },
      faithful_visitor: {
        name: 'Treuer Besucher',
        description: 'Öffne die App 15 Tage (nicht aufeinanderfolgend)',
      },
      daily_companion: {
        name: 'Täglicher Begleiter',
        description: 'Öffne die App 30 Tage (nicht aufeinanderfolgend)',
      },

      // === KATEGORIE ERKUNDUNG (Premium) ===
      explorer: {
        name: 'Entdecker',
        description: 'Lies Verse aus 5 verschiedenen Kategorien',
      },
      biblical_connoisseur: {
        name: 'Bibelkenner',
        description: 'Lies Verse aus allen Kategorien',
      },
      witness: {
        name: 'Zeuge',
        description: 'Beende ein Kapitel des Zeugnisses',
      },
      thematic_specialist: {
        name: 'Themenspezialist',
        description: 'Lies alle Verse einer Kategorie',
      },
      category_master: {
        name: 'Kategoriemeister',
        description: 'Lies alle Verse aus 5 Kategorien',
      },
      devoted_witness: {
        name: 'Hingebungsvoller Zeuge',
        description: 'Beende 5 Kapitel des Zeugnisses',
      },
      history_keeper: {
        name: 'Geschichtshüter',
        description: 'Beende alle Kapitel des Zeugnisses (13)',
        reflectionPrompt: 'Du hast das gesamte Zeugnis gelesen! Was hat dich am meisten berührt?',
      },

      // === KATEGORIE SPEZIELLE (versteckt) ===
      sunday_worshipper: {
        name: 'Sonntagsanbeter',
        description: 'Lies einen Vers am Sonntag',
      },
      dawn_seeker: {
        name: 'Morgensternsucher',
        description: 'Lies einen Vers vor 7 Uhr morgens',
      },
      christmas_spirit: {
        name: 'Weihnachtsgeist',
        description: 'Lies einen Vers am 25. Dezember',
        reflectionPrompt: 'Frohe Weihnachten! Feiere die Geburt des Erlösers.',
      },
      new_year: {
        name: 'Neujahr',
        description: 'Lies einen Vers am 1. Januar',
        reflectionPrompt: 'Neues Jahr, neuer Anfang! Was sind deine Pläne mit Gott?',
      },
      epiphany: {
        name: 'Erscheinung des Herrn',
        description: 'Lies einen Vers am 6. Januar',
        reflectionPrompt: 'Erscheinung des Herrn: die Offenbarung Jesu an die Völker!',
      },
      candlemas: {
        name: 'Mariä Lichtmess',
        description: 'Lies einen Vers am 2. Februar',
        reflectionPrompt: 'Jesus, Licht der Völker, im Tempel dargestellt.',
      },
      ash_wednesday: {
        name: 'Aschermittwoch',
        description: 'Lies einen Vers am Aschermittwoch',
        reflectionPrompt: 'Beginn der Fastenzeit: eine Zeit der Umkehr und des Gebets.',
      },
      palm_sunday: {
        name: 'Palmsonntag',
        description: 'Lies einen Vers am Palmsonntag',
        reflectionPrompt: 'Hosanna! Jesu triumphaler Einzug in Jerusalem.',
      },
      good_friday: {
        name: 'Karfreitag',
        description: 'Lies einen Vers am Karfreitag',
        reflectionPrompt: 'Durch seine Wunden sind wir geheilt. Meditiere über Jesu Opfer.',
      },
      easter_blessed: {
        name: 'Herrliches Ostern',
        description: 'Lies einen Vers am Ostersonntag',
        reflectionPrompt: 'Er ist auferstanden! Halleluja! Christus lebt!',
      },
      ascension: {
        name: 'Himmelfahrt',
        description: 'Lies einen Vers am Himmelfahrtstag',
        reflectionPrompt: 'Jesus fährt in den Himmel auf und sendet uns den Heiligen Geist.',
      },
      pentecost: {
        name: 'Pfingsten',
        description: 'Lies einen Vers am Pfingstsonntag',
        reflectionPrompt: 'Der Heilige Geist kommt auf die Kirche herab! Komm, Heiliger Geist!',
      },
      all_saints: {
        name: 'Allerheiligen',
        description: 'Lies einen Vers am 1. November',
        reflectionPrompt: 'Gemeinschaft der Heiligen: alle zur Heiligkeit berufen!',
      },
    },
  },

  // ============================================
  // NAVIGATION BAR (TABS)
  // ============================================
  tabs: {
    home: 'Start',
    needs: 'Bedürfnisse',
    favorites: 'Favoriten',
  },

  // ============================================
  // NEEDS SCREEN (TAB)
  // ============================================
  needs: {
    titleStart: 'Was ',
    titleHighlight: 'brauchst',
    titleEnd: ' du?',
    hint: 'Tippe auf eine Blase um einen Vers zu entdecken',
    limitReached: {
      title: 'Tägliche Entdeckung verwendet',
      message:
        'Du hast heute bereits einen Vers entdeckt. Komm morgen wieder oder werde Premium für unbegrenztes Erkunden!',
      ok: 'OK',
      goPremium: 'Premium werden',
    },
    // Kategorien (Blasen)
    categories: {
      divineSurprise: 'Göttliche Überraschung',
      graceAndForgiveness: 'Gnade & Vergebung',
      love: 'Liebe',
      hope: 'Hoffnung',
      faithAndTrust: 'Glaube & Vertrauen',
      healing: 'Heilung',
      prayerAndPraise: 'Gebet & Lobpreis',
      protection: 'Schutz',
      peace: 'Frieden',
      spiritualBattle: 'Geistlicher Kampf',
      holySpirit: 'Heiliger Geist',
      growth: 'Wachstum',
      divineGuidance: 'Göttliche Führung',
    },
  },

  // ============================================
  // FAVORITES SCREEN
  // ============================================
  favorites: {
    title: 'Favoriten',
    empty: 'Noch keine Favoriten',
    emptyDescription: 'Füge deine Lieblingsverse hinzu, indem du auf das Herz tippst',
    emptyIcon: '♡',
    count: '{{count}} Favoriten',
    verseSingular: 'Vers',
    versePlural: 'Verse',
    unfavorite: 'Aus Favoriten entfernen',
    share: 'Teilen',
    loading: 'Favoriten werden geladen...',
    error: 'Favoriten konnten nicht geladen werden',
    errorRemove: 'Konnte nicht aus Favoriten entfernt werden.',
    errorLoad: 'Favoriten konnten nicht geladen werden.',
    premiumRequired: 'Diese Funktion ist Premium-Mitgliedern vorbehalten',
  },

  // ============================================
  // CATEGORIES SCREEN
  // ============================================
  categories: {
    title: 'Kategorien',
    allVerses: 'Alle Verse',
    allVersesCount: '{{count}} Verse',
    categoryCount: '{{count}} Verse',
    verseCounter: 'Vers {{current}} / {{total}}',
    swipeHint: 'Wische zum Navigieren',
    loading: 'Kategorien werden geladen...',
    error: 'Kategorien konnten nicht geladen werden',
    premiumRequired: 'Diese Funktion ist Premium-Mitgliedern vorbehalten',
    noVerses: 'Keine Verse in dieser Kategorie',
    verseSingular: 'Vers',
    versePlural: 'Verse',

    // Sektionsnamen (Kategoriegruppen)
    sections: {
      allVerses: 'Alle Verse',
      fundamentals: 'Grundlagen des Glaubens',
      spiritualLife: 'Geistliches Leben & Gemeinschaft',
      transformation: 'Verwandlung & Heilung',
      battle: 'Kampf & Schutz',
      values: 'Werte & Tugenden',
    },

    // Themennamen nach Kennung (für Icon-Mapping)
    themeNames: {
      love: 'Liebe & Güte',
      battle: 'Geistlicher Kampf & Prüfungen',
      community: 'Gemeinschaft & Gemeindeleben',
      growth: 'Wachstum & geistliche Frucht',
      hope: 'Hoffnung & ewiges Leben',
      faith: 'Glaube, Vertrauen & Hoffnung',
      grace: 'Gnade, Erlösung & Vergebung',
      healing: 'Heilung, Wiederherstellung & Erneuerung',
      humility: 'Demut, Glaube & Vertrauen',
      justice: 'Gerechtigkeit, Heiligkeit & Wahrheit',
      liberation: 'Befreiung, Wiederherstellung & Erneuerung',
      peace: 'Frieden, Schutz & Freiheit',
      prayer: 'Gebet, Anbetung & Lobpreis',
      intimacy: 'Beziehung & Nähe zu Gott',
      spirit: 'Heiliger Geist & Kraft',
      guidance: 'Gottes Wille & Führung',
    },

    // Sektion zu Themenkennung Mapping
    themeSections: {
      fundamentals: ['faith', 'grace', 'hope'],
      spiritualLife: ['intimacy', 'prayer', 'spirit', 'growth', 'humility'],
      transformation: ['healing', 'liberation', 'guidance'],
      battle: ['battle', 'peace'],
      values: ['love', 'justice', 'community'],
    },
  },

  // ============================================
  // STATISTICS SCREEN
  // ============================================
  statistics: {
    title: 'Statistiken',

    // Overview
    overview: 'Übersicht',
    discoveries: 'Entdeckungen',
    globalProgress: 'Gesamtfortschritt',
    globalProgressSubtitle: '{{count}} Verse von {{total}} entdeckt',
    versesDiscovered: 'Verse entdeckt',
    versesDiscoveredCount: '{{count}} Verse entdeckt',
    versesProgress: '{{count}} von {{total}}',
    encouragementsRead: 'Ermutigungen gelesen',
    encouragementsReadCount: '{{count}} Ermutigungen gelesen',
    favorites: 'Favoriten',
    favoritesCount: '{{count}} Favoriten',
    timeSpent: 'in der App verbracht',
    timeSpentFormatted: '{{hours}}h {{minutes}}min verbracht',
    progression: 'Fortschritt',

    // Streaks
    streaks: 'Serien',
    streakAppOpen: 'App geöffnet',
    streakVerseViewed: 'Vers entdeckt',
    streakEncouragementRead: 'Ermutigung gelesen',
    currentStreak: 'Aktuell',
    bestStreak: 'Rekord',
    streakDays: '{{count}} Tage',
    streakDay: '1 Tag',
    streakIcon: '🔥',
    verseIcon: '📖',
    encouragementIcon: '💛',

    // Preferred categories
    preferredCategories: 'Bevorzugte Kategorien',
    noCategoriesYet: 'Noch keine Kategorien erkundet',

    // Messages
    loading: 'Statistiken werden geladen...',
    error: 'Statistiken konnten nicht geladen werden',
    premiumRequired: 'Diese Funktion ist Premium-Mitgliedern vorbehalten',
  },

  // ============================================
  // TESTIMONY SCREEN
  // ============================================
  testimony: {
    title: 'Zeugnis',
    subtitle: 'Mein Zeugnis - Ein Weg des Glaubens und der Transformation',
    author: 'Christophe Schulz',

    // Progress
    chaptersRead: 'Kapitel gelesen',
    progress: 'Fortschritt',
    progressCount: '{{read}} / {{total}} Kapitel',

    // Chapter list
    chapterFree: 'Kostenlos',
    chapterPremium: 'Premium',
    chapterRead: 'Gelesen',
    chapterUnread: 'Ungelesen',
    chapterLocked: 'Gesperrt',

    // Reading a chapter
    previous: 'Vorheriges Kapitel',
    next: 'Nächstes Kapitel',
    markAsRead: 'Als gelesen markieren',
    markAsUnread: 'Als ungelesen markieren',
    share: 'Teilen',

    // Completion
    completed: 'Zeugnis abgeschlossen!',
    completedMessage: 'Herzlichen Glückwunsch! Du hast alle Kapitel des Zeugnisses gelesen.',
    completedIcon: '✨',

    // Messages
    loading: 'Kapitel wird geladen...',
    error: 'Kapitel konnte nicht geladen werden',
    premiumRequired: 'Dieses Kapitel ist Premium-Mitgliedern vorbehalten',
    chapterNotFound: 'Kapitel nicht gefunden',
  },

  // ============================================
  // ONBOARDING PAYWALL SCREEN (Timeline)
  // ============================================
  onboardingPaywall: {
    // Titles (with/without free trial)
    titleWithTrial: 'Wie funktioniert deine kostenlose Woche?',
    titleWithoutTrial: 'Premium werden',
    subtitleWithTrial: 'Heute 0€ berechnet',
    subtitleWithoutTrial: 'Erhalte Zugang zu allen Funktionen',

    // Timeline (4 steps)
    timeline: {
      day1: {
        title: 'Tag 1: App installieren',
        description: 'Konfiguriere die App für deine Ziele.',
      },
      fullAccess: {
        title: 'Voller Zugang',
        description: 'Deine Denkweise beginnt sich zu ändern.',
      },
      day5: {
        title: 'Tag 5: Benachrichtigung',
        description: 'Wir informieren dich 48h vor Ende deiner Testwoche.',
      },
      day7: {
        title: 'Tag 7: Ende der Testphase',
        description: 'Beginn des Abonnements am {{date}}, du kannst vorher frei kündigen.',
      },
    },

    // Pricing
    pricingWithTrial: '7 Tage kostenloser unbegrenzter Zugang, dann {{price}}/Jahr (also {{pricePerMonth}}/Monat).',
    pricingWithoutTrial: '{{price}}/Jahr (also {{pricePerMonth}}/Monat)',
    pricingCancellation: 'Jederzeit kündbar',

    // Buttons
    startTrialButton: 'Kostenlos testen',
    subscribeButton: 'Jetzt abonnieren',
    restorePurchases: 'Käufe wiederherstellen',

    // Messages
    loading: 'Angebote werden geladen...',
    purchasing: 'Verarbeitung läuft...',
    error: 'Angebote konnten nicht geladen werden. Überprüfe deine Verbindung und versuche es erneut.',
  },

  // ============================================
  // ONBOARDING PAYWALL V2 SCREEN (Paid trial)
  // ============================================
  onboardingPaywallV2: {
    // Main title
    title: 'Wir schenken dir eine komplette Woche VersetVie im Rahmen unserer Mission, dich dem Herzen Jesu täglich näher zu bringen.',
    subtitle: 'Geld sollte dich nicht davon abhalten, diese Beziehung zu finden.',

    // Trial message
    trialMessage: 'Eine Testphase kostet uns 10€ pro Monat für verschiedene Kosten, aber du kannst die Formel wählen, die dir passt.',
    selectContribution: 'Wähle dein Abonnement:',

    // Contribution options
    contributions: {
      free: '0 €',
      low: '2 €',
      medium: '5 €',
      full: '10 €',
    },

    // Main button
    startTrialButton: 'Meine kostenlose Testphase starten',

    // Pricing bottom
    pricingWeekly: '7 Tage kostenlos, dann {{price}}/{{duration}}. Jederzeit kündbar',

    // Links
    usePromoCode: 'Vorteilscode verwenden',
    restorePurchases: 'Käufe wiederherstellen',
    terms: 'Nutzungsbedingungen',
    privacy: 'Datenschutzrichtlinie',

    // Messages
    loading: 'Angebote werden geladen...',
    purchasing: 'Verarbeitung läuft...',
    error: 'Angebote konnten nicht geladen werden. Überprüfe deine Verbindung und versuche es erneut.',
  },

  // ============================================
  // PAYWALL SCREEN
  // ============================================
  paywall: {
    // Titles based on context
    title: 'Erhalte vollen Zugang',
    titleOnboarding: 'Willkommen {{name}}!',
    titleLimit: 'Du hast deine kostenlose Ermutigung der Woche verwendet!',
    titleFeature: 'Diese Funktion freischalten',
    title24h: 'Du nutzt VersetVie schon seit 24 Stunden!',

    // Subtitles
    subtitle: 'Erhalte sofortigen Zugang zu allen Funktionen der App.',
    subtitleOnboarding: 'Alle Verse sind kostenlos. Premium = unbegrenzte Ermutigungen + Zeugnis.',
    subtitleLimit: 'Kostenlos: 1 Ermutigung/Woche. Premium: unbegrenzte Ermutigungen.',
    subtitle24h: 'Stell dir vor, was du alles mit Premium entdecken könntest...',

    // Alerts
    confirmSkipTitle: 'Achtung!',
    confirmSkipMessage: 'Nutze die kostenlose Testphase für vollen Zugang zu unbegrenzten Ermutigungen.',
    confirmSkipCancel: 'Bleiben',
    confirmSkipConfirm: 'Verlassen',

    // Paragraph 1: Discovery version
    featuresFree: 'Entdeckungsversion (inklusive):',
    featureAllVerses: '✓ Alle täglichen Verse (426)',
    featureCategories: '✓ Navigation nach Kategorien und Themen',
    featureFavorites: '✓ Unbegrenzte Favoriten',
    featureStatistics: '✓ Detaillierte Statistiken',
    featureOneEncouragement: '✓ 1 Ermutigung pro Woche',

    // Paragraph 2: Premium version
    featuresPremium: 'Premium Version:',
    featureUnlimitedEncouragements: '✓ Unbegrenzte Ermutigungen',
    featureTestimony: '✓ Vollständiges Zeugnis-Buch',

    // Legacy (for compatibility)
    features: 'Entdeckungsversion (inklusive):',
    featureSupport: 'Prioritärer Support',

    // Subscription offers
    monthly: 'Monatlich',
    yearly: 'Jährlich',
    recommended: 'Empfohlen',
    bestOffer: 'Bestes Angebot',
    subscribedMonthly: 'Monatlicher Abonnent',
    subscribedYearly: 'Jährlicher Abonnent',
    save: 'Spare {{percent}}%',
    pricePerMonth: 'pro Monat',
    pricePerYear: 'pro Jahr',
    trialOffer: '{{days}} Tage kostenlos',
    thenPrice: 'dann {{price}}',
    freeTrialBadge: '7 Tage kostenlose\nTestphase inklusive',
    freeTrialDescription: 'Dann {{price}}/Jahr',
    startFreeTrial: 'Kostenlose Testphase starten',

    // Actions
    cta: 'Starten',
    ctaSubscribe: 'Jetzt abonnieren',
    ctaAlreadySubscribed: 'Bereits abonniert',
    ctaMonthly: 'Abonnieren (Monatlich)',
    ctaYearly: 'Abonnieren (Jährlich)',
    restore: 'Meine Käufe wiederherstellen',
    continueFree: 'Kostenlos fortfahren',
    close: 'Schließen',

    // Messages
    loading: 'Angebote werden geladen...',
    purchasing: 'Kauf wird verarbeitet...',
    processing: 'Wird verarbeitet...',
    restoring: 'Wiederherstellung läuft...',
    success: 'Abonnement aktiviert!',
    successMessage: 'Willkommen in der Premium-Community',
    restoreSuccess: 'Abonnement erfolgreich wiederhergestellt',
    restoreNone: 'Keine Käufe zum Wiederherstellen',
    error: 'Fehler',
    errorPurchase: 'Kauf fehlgeschlagen. Versuche es später erneut.',
    errorRestore: 'Wiederherstellung fehlgeschlagen. Überprüfe deine Käufe in den Store-Einstellungen.',
    errorNetwork: 'Keine Internetverbindung. Überprüfe deine Verbindung und versuche es erneut.',
    unavailable: 'Abonnements sind vorübergehend nicht verfügbar.',
    loadError: 'Angebote konnten nicht geladen werden. Überprüfe deine Verbindung und versuche es erneut.',

    // Packages
    packages: {
      monthly: '1 Monat',
      annual: '1 Jahr',
    },

    // Success/error alerts
    alerts: {
      purchaseSuccess: {
        title: 'Willkommen bei Premium! 🎉',
        message: 'Du hast jetzt Zugang zu allen App-Funktionen.',
        button: 'Entdecken',
      },
      restoreSuccess: {
        title: 'Käufe wiederhergestellt! 🎉',
        message: 'Dein Abonnement wurde erfolgreich wiederhergestellt.',
      },
      noSubscription: {
        title: 'Kein Kauf gefunden',
        message: 'Es wurde kein aktives Abonnement für dieses Konto gefunden.',
      },
      restoreError: {
        title: 'Fehler',
        message: 'Käufe konnten nicht wiederhergestellt werden. Versuche es später erneut.',
      },
    },

    // Legal documents
    terms: 'Nutzungsbedingungen',
    privacy: 'Datenschutzrichtlinie',
    legalFooter: 'Das Abonnement wird automatisch verlängert, sofern nicht gekündigt.',
    legalDisclaimer: 'Das Abonnement wird automatisch verlängert, sofern nicht gekündigt.',

    // Feedback (modal for collecting feedback on paywall refusal)
    feedback: {
      modalTitle: 'Hilf uns, VersetVie zu verbessern',
      question: 'Was hast du dir erhofft, als du die App installiert hast?',
      subtitle: 'Deine Antwort hilft uns, die App zu verbessern',
      placeholder: 'Teile deine Erwartungen...',
      minLengthError: 'Bitte schreibe mindestens 10 Zeichen',
      characterCounter: '{{current}}/{{max}}',
      continueButton: 'Senden',
      sending: 'Wird gesendet...',
      thankYou: 'Danke für dein wertvolles Feedback!',
      thankYouTitle: 'Danke für dein Feedback!',
      thankYouMessage: 'Deine Teilnahme hilft uns, die App zu verbessern',
      thankYouMessageError: 'Wir konnten deine Nachricht nicht senden, aber danke für deine Teilnahme!',
    },
  },

  // ============================================
  // PROFILE PAYWALL SCREEN (Optimized conversion version)
  // ============================================
  profilePaywall: {
    // Hero section
    title: 'Erneuere dein ',
    titleHighlight: 'Herz',
    titleEnd: '\njeden Tag',
    subtitle: 'Entdecke alles, was ',
    subtitleHighlight: 'Verset Vie',
    subtitleEnd: ' dir zu bieten hat',

    // Paragraph 1: Discovery version (free)
    freeTitle: 'Entdeckungsversion (inklusive):',
    freeBenefit1: '✓ Alle 426 täglichen Verse',
    freeBenefit2: '✓ Favoriten, Kategorien, Statistiken und Abzeichen',
    freeBenefit3: '✓ 1 Ermutigung pro Woche',
    freeBenefit4: '',

    // Paragraph 2: Premium version (paid)
    premiumTitle: 'Premium Version:',
    benefit1: '✓ Unbegrenzte tägliche Ermutigungen',
    benefit2: '✓ Vollständiges Zeugnis-Buch des Erstellers',
    benefit3: '',
    benefit4: '',

    // Subscription plans
    weeklyLabel: 'Wöchentlich',
    monthlyLabel: 'Monatlich',
    yearlyLabel: 'Jährlich',
    bestOfferBadge: 'Top-Angebot',
    freeTrialBadge: 'Gratis testen',
    saveLabel: 'Spare über 50%',

    // Prices (dynamically displayed from RevenueCat)
    weeklyPrice: '{{price}}/Woche',
    monthlyPrice: '{{price}}/Monat',
    yearlyPrice: '{{price}}/Jahr',

    // Main CTA
    ctaFreeTrial: 'Kostenlos testen',
    ctaSubscribe: 'Abonnieren',

    // Legal texts per plan
    legalWeekly: '7 Tage kostenlos, dann {{price}}/Woche. Jederzeit kündbar.',
    legalMonthly: '7 Tage kostenlos, dann {{price}}/Monat. Jederzeit kündbar.',
    legalYearly: '7 Tage kostenlos, dann {{price}}/Jahr. Jederzeit kündbar.',
    legalNoTrial: '{{price}}/{{duration}}. Jederzeit kündbar.',

    // Secondary actions
    restore: 'Käufe wiederherstellen',
    terms: 'Nutzungsbedingungen',
    privacy: 'Datenschutzrichtlinie',

    // Duration labels (for buttons)
    week: 'Woche',
    month: 'Monat',
    year: 'Jahr',
    changePlan: 'Abo ändern',
    activeWeekly: 'Wöchentliches Abo aktiv ✓',
    activeMonthly: 'Monatliches Abo aktiv ✓',
    activeYearly: 'Jährliches Abo aktiv ✓',
    cancelAnytime: 'Jederzeit kündbar',

    // Titles by source
    titles: {
      profile: 'Wähle dein Abonnement',
      feature_favorites: 'Speichere deine Lieblingsverse',
      feature_categories: 'Entdecke alle Verse nach Thema',
      feature_statistics: 'Verfolge deinen Fortschritt',
      feature_testimony: 'Lies das vollständige Zeugnis',
      feature_theme: 'Passe dein Theme an',
      default: 'Werde Premium',
    },

    // Descriptions by source
    descriptions: {
      profile: 'Erhalte Zugang zu allen Funktionen und genieße VersetVie in vollem Umfang.',
      feature_favorites: 'Speichere deine Lieblingsverse und finde sie jederzeit mit Premium.',
      feature_categories: 'Entdecke alle Verse nach Thema und finde Hunderte ermutigender Worte.',
      feature_statistics: 'Verfolge deinen Fortschritt, Serien und Lieblingskategorien mit Premium.',
      feature_testimony: 'Lies Christophes vollständiges Zeugnis und entdecke seinen Glaubensweg.',
      feature_theme: 'Passe das Erscheinungsbild der App mit Premium-Themes an.',
      default: 'Gehe weiter in deinem Glauben mit Premium.',
    },

    // Durations for pricing
    durations: {
      weekly: 'Woche',
      monthly: 'Monat',
      yearly: 'Jahr',
    },

    // Status messages
    loading: 'Angebote werden geladen...',
    unavailable: 'Abonnements sind vorübergehend nicht verfügbar.',
    retry: 'Erneut versuchen',
    close: 'Schließen',
    packageUnavailable: 'Paket nicht verfügbar',
    packageUnavailableMsg: 'Dieses Paket ist noch nicht verfügbar. Versuche eine andere Option.',
    loadError: 'Angebote konnten nicht geladen werden. Überprüfe deine Verbindung und versuche es erneut.',

    // Success messages
    welcomePremium: 'Willkommen bei Premium! 🎉',
    welcomePremiumMsg: 'Du hast jetzt Zugang zu allen App-Funktionen.',
    discover: 'Entdecken',

    // Restore messages
    purchasesRestored: 'Käufe wiederhergestellt! 🎉',
    purchasesRestoredMsg: 'Dein Abonnement wurde erfolgreich wiederhergestellt.',
    noPurchasesFound: 'Keine Käufe gefunden',
    noPurchasesFoundMsg: 'Kein aktives Abonnement wurde auf diesem Konto gefunden.',
    restoreError: 'Käufe konnten nicht wiederhergestellt werden. Bitte versuche es später erneut.',
  },

  // ============================================
  // NOTIFICATIONS
  // ============================================
  notifications: {
    // Period configuration
    periods: {
      morning: {
        label: 'Morgen',
        description: 'Um deinen Tag mit Meinem Frieden zu beginnen',
        icon: 'sunny-outline',
      },
      afternoon: {
        label: 'Nachmittag',
        description: 'Um dich mitten im Tag wiederzufinden',
        icon: 'partly-sunny-outline',
      },
      evening: {
        label: 'Abend',
        description: 'Um deinen Tag bei Mir abzulegen',
        icon: 'moon-outline',
      },
      night: {
        label: 'Nacht',
        description: 'Um dich zu begleiten wenn die Nächte manchmal schwer sind',
        icon: 'bed-outline',
      },
    },

    // Period selection screen (onboarding)
    periodSelection: {
      title: 'Wann möchtest du deine ',
      titleHighlight: 'Ermutigung',
      titleEnd: ' erhalten?',
      activateButton: 'Aktivieren',
      skipButton: 'Überspringen',
      randomTimeNotice: 'Die genaue Uhrzeit wird jeden Tag leicht variieren.',
    },

    // Contextualized messages by period
    // RULE: First name ALWAYS in body, NEVER in title
    contextual: {
      morning: {
        m: [
          { title: 'Guten Morgen!', body: '{{name}}, starte deinen Tag mit deiner Ermutigung' },
          { title: 'Hallo!', body: '{{name}}, dein Vers des Tages wartet' },
          { title: 'Es ist Zeit!', body: '{{name}}, eine neue Nachricht für einen guten Start' },
          { title: 'Neuer Vers', body: '{{name}}, dein morgendlicher Bibel-Shot ist bereit' },
        ],
        f: [
          { title: 'Guten Morgen!', body: '{{name}}, starte deinen Tag mit deiner Ermutigung' },
          { title: 'Hallo!', body: '{{name}}, dein Vers des Tages wartet' },
          { title: 'Es ist Zeit!', body: '{{name}}, eine neue Nachricht für einen guten Start' },
          { title: 'Neuer Vers', body: '{{name}}, dein morgendlicher Bibel-Shot ist bereit' },
        ],
      },
      afternoon: {
        m: [
          { title: 'Inspirationspause', body: '{{name}}, brauchst du Ermutigung? Mach eine inspirierende Pause' },
          { title: 'Guten Nachmittag', body: '{{name}}, dein Vers wartet' },
          { title: 'Ein Moment für dich', body: '{{name}}, entdecke deine Ermutigung' },
          { title: 'Geistliche Pause', body: 'Hey {{name}}, eine geistliche Pause würde dir gut tun' },
        ],
        f: [
          { title: 'Inspirationspause', body: '{{name}}, brauchst du Ermutigung? Mach eine inspirierende Pause' },
          { title: 'Guten Nachmittag', body: '{{name}}, dein Vers wartet' },
          { title: 'Ein Moment für dich', body: '{{name}}, entdecke deine Ermutigung' },
          { title: 'Geistliche Pause', body: 'Hey {{name}}, eine geistliche Pause würde dir gut tun' },
        ],
      },
      evening: {
        m: [
          { title: 'Guten Abend!', body: '{{name}}, beende deinen Tag mit Inspiration' },
          { title: 'Tagesende', body: '{{name}}, deine Abendermutigung wartet' },
          { title: 'Guten Abend', body: '{{name}}, eine Nachricht zum Abschluss deines Tages' },
          { title: 'Bevor du aufhörst', body: '{{name}}, nimm dir einen Moment für dich' },
        ],
        f: [
          { title: 'Guten Abend!', body: '{{name}}, beende deinen Tag mit Inspiration' },
          { title: 'Tagesende', body: '{{name}}, deine Abendermutigung wartet' },
          { title: 'Guten Abend', body: '{{name}}, eine Nachricht zum Abschluss deines Tages' },
          { title: 'Bevor du aufhörst', body: '{{name}}, nimm dir einen Moment für dich' },
        ],
      },
      night: {
        m: [
          { title: 'Gute Nacht', body: '{{name}}, ein Gedanke vor dem Schlafen' },
          { title: 'Vor dem Schlafen', body: '{{name}}, deine nächtliche Ermutigung wartet' },
          { title: 'Süße Nacht', body: '{{name}}, beende mit einer inspirierenden Note' },
          { title: 'Letzter Gedanke', body: '{{name}}, ein Vers für die Nacht' },
        ],
        f: [
          { title: 'Gute Nacht', body: '{{name}}, ein Gedanke vor dem Schlafen' },
          { title: 'Vor dem Schlafen', body: '{{name}}, deine nächtliche Ermutigung wartet' },
          { title: 'Süße Nacht', body: '{{name}}, beende mit einer inspirierenden Note' },
          { title: 'Letzter Gedanke', body: '{{name}}, ein Vers für die Nacht' },
        ],
      },
    },

    // Intelligent contextualized messages (VERSION 2.1+)
    // Used by intelligentNotificationService.ts
    // RULE: First name ALWAYS in body, NEVER in title
    intelligent: {
      verse_not_read: {
        m: [
          { title: 'Dein Vers wartet', body: '{{name}}, eine neue Nachricht von Jesus für dich heute' },
          { title: 'Vergiss nicht!', body: '{{name}}, dein täglicher Vers ist bereit entdeckt zu werden' },
          { title: 'Nimm dir einen Moment', body: '{{name}}, eine besondere Nachricht wartet in der App' },
          { title: 'Tägliches Treffen', body: '{{name}}, entdecke was Gott heute für dich hat' },
        ],
        f: [
          { title: 'Dein Vers wartet', body: '{{name}}, eine neue Nachricht von Jesus für dich heute' },
          { title: 'Vergiss nicht!', body: '{{name}}, dein täglicher Vers ist bereit entdeckt zu werden' },
          { title: 'Nimm dir einen Moment', body: '{{name}}, eine besondere Nachricht wartet in der App' },
          { title: 'Tägliches Treffen', body: '{{name}}, entdecke was Gott heute für dich hat' },
        ],
      },
      encouragement_waiting: {
        m: [
          { title: 'Vers entdeckt', body: '{{name}}, vergiss nicht deine persönliche Ermutigung zu lesen' },
          { title: 'Noch ein Schritt!', body: '{{name}}, Jesus hat eine persönliche Nachricht für dich' },
          { title: 'Entdecke mehr', body: '{{name}}, deine persönliche Ermutigung wartet' },
          { title: 'Ein Liebeswort für dich', body: '{{name}}, lies was Jesus dir sagen möchte' },
        ],
        f: [
          { title: 'Vers entdeckt', body: '{{name}}, vergiss nicht deine persönliche Ermutigung zu lesen' },
          { title: 'Noch ein Schritt!', body: '{{name}}, Jesus hat eine persönliche Nachricht für dich' },
          { title: 'Entdecke mehr', body: '{{name}}, deine persönliche Ermutigung wartet' },
          { title: 'Ein Liebeswort für dich', body: '{{name}}, lies was Jesus dir sagen möchte' },
        ],
      },
      badge_close: {
        m: [
          { title: 'Nur noch {{remaining}} Tag{{s}}!', body: '{{name}}, du bist nah dran ein neues Abzeichen freizuschalten' },
          { title: 'Fast geschafft!', body: '{{name}}, noch {{remaining}} Tag{{s}} für dein nächstes Abzeichen' },
          { title: 'Du bist fast da!', body: '{{name}}, nur noch {{remaining}} Tag{{s}} bis zum Erfolg' },
          { title: 'Letzte Anstrengung!', body: '{{name}}, ein Abzeichen wird in {{remaining}} Tag{{s}} freigeschaltet' },
        ],
        f: [
          { title: 'Nur noch {{remaining}} Tag{{s}}!', body: '{{name}}, du bist nah dran ein neues Abzeichen freizuschalten' },
          { title: 'Fast geschafft!', body: '{{name}}, noch {{remaining}} Tag{{s}} für dein nächstes Abzeichen' },
          { title: 'Du bist fast da!', body: '{{name}}, nur noch {{remaining}} Tag{{s}} bis zum Erfolg' },
          { title: 'Letzte Anstrengung!', body: '{{name}}, ein Abzeichen wird in {{remaining}} Tag{{s}} freigeschaltet' },
        ],
      },
      streak_active: {
        m: [
          { title: '{{streak}} Tage am Stück!', body: '{{name}}, setze deine Serie fort und lies heute deinen Vers' },
          { title: 'Serie von {{streak}} Tagen!', body: '{{name}}, verliere nicht deinen Lauf, lies deinen Vers' },
          { title: 'Bravo!', body: '{{name}}, {{streak}} Tage hintereinander, mach weiter so' },
          { title: 'Auf einer Welle!', body: '{{name}}, {{streak}} Tage am Stück, das ist ausgezeichnet' },
        ],
        f: [
          { title: '{{streak}} Tage am Stück!', body: '{{name}}, setze deine Serie fort und lies heute deinen Vers' },
          { title: 'Serie von {{streak}} Tagen!', body: '{{name}}, verliere nicht deinen Lauf, lies deinen Vers' },
          { title: 'Bravo!', body: '{{name}}, {{streak}} Tage hintereinander, mach weiter so' },
          { title: 'Auf einer Welle!', body: '{{name}}, {{streak}} Tage am Stück, das ist ausgezeichnet' },
        ],
      },
      comeback: {
        m: [
          { title: 'Schön dich wiederzusehen!', body: '{{name}}, nimm heute deine tägliche Lesung wieder auf' },
          { title: 'Froh dich wiederzuhaben!', body: '{{name}}, Gott hat auf dich gewartet, entdecke deinen Vers' },
          { title: 'Willkommen zurück!', body: '{{name}}, starte heute eine neue Serie' },
          { title: 'Du hast uns gefehlt!', body: '{{name}}, es ist Zeit zu deiner geistlichen Routine zurückzukehren' },
        ],
        f: [
          { title: 'Schön dich wiederzusehen!', body: '{{name}}, nimm heute deine tägliche Lesung wieder auf' },
          { title: 'Froh dich wiederzuhaben!', body: '{{name}}, Gott hat auf dich gewartet, entdecke deinen Vers' },
          { title: 'Willkommen zurück!', body: '{{name}}, starte heute eine neue Serie' },
          { title: 'Du hast uns gefehlt!', body: '{{name}}, es ist Zeit zu deiner geistlichen Routine zurückzukehren' },
        ],
      },
    },

    // Configuration messages
    scheduleSuccess: 'Benachrichtigung für die Periode {{period}} geplant',
    scheduleError: 'Fehler beim Planen der Benachrichtigung',
    cancelSuccess: 'Benachrichtigungen deaktiviert',
    permissionRequired: 'Benachrichtigungsberechtigung erforderlich',
    permissionDenied: 'Berechtigung verweigert. Aktiviere Benachrichtigungen in den Einstellungen.',
    currentPeriod: 'Aktuelle Periode',
    changePeriod: 'Ändern',

    // Benachrichtigungseinstellungen-Seite
    settingsPage: {
      description: 'Erhalte eine tägliche Erinnerung für deine Ermutigung',
      permissionDeniedTitle: 'Berechtigungen verweigert',
      permissionDeniedMessage: 'Benachrichtigungen sind in deinen Geräteeinstellungen deaktiviert. Aktiviere sie, um tägliche Erinnerungen zu erhalten.',
      permissionWarning: 'Benachrichtigungsberechtigungen wurden nicht erteilt. Aktiviere sie in deinen Geräteeinstellungen, um Erinnerungen zu erhalten.',
      openSettings: 'Einstellungen öffnen',
      cancel: 'Abbrechen',
      confirm: 'Bestätigen',
      enabledTitle: 'Benachrichtigungen aktiviert ✅',
      enabledMessage: 'Du wirst täglich eine Benachrichtigung in der Periode {{period}} ({{description}}) erhalten.\n\n📆 Erste Benachrichtigung: morgen\n⏰ Genaue Uhrzeit: variiert täglich innerhalb dieses Zeitraums',
      errorTitle: 'Fehler',
      enableError: 'Benachrichtigungen können nicht aktiviert werden. Überprüfe die Berechtigungen.',
      genericError: 'Ein Fehler ist aufgetreten.',
      disabledTitle: 'Benachrichtigungen deaktiviert',
      disabledMessage: 'Aktiviere Benachrichtigungen, um die Erinnerungsperiode zu wählen.',
      periodUpdatedTitle: 'Periode aktualisiert ✅',
      periodUpdatedMessage: 'Du wirst deine tägliche Benachrichtigung in der Periode {{period}} ({{description}}) erhalten.\n\nFrischer Kontext bei jeder Benachrichtigung garantiert.',
      choosePeriod: 'Wähle deine Periode',
      periodHint: 'Die genaue Uhrzeit variiert täglich innerhalb der gewählten Periode',
      infoHint: 'Benachrichtigungen erinnern dich jeden Tag, deine persönliche Ermutigung zu entdecken. Die Uhrzeit variiert innerhalb der gewählten Periode, um natürlich zu bleiben.',
      devModeTitle: 'Entwicklungsmodus',
      devModeDescription: 'Teste die Benachrichtigungsanzeige mit einer langen Nachricht, um BigTextStyle (Android) und Untertitel (iOS) zu prüfen.',
      testButton: 'Test-Benachrichtigung senden (2s)',
      testScheduledTitle: 'Benachrichtigung geplant',
      testScheduledMessage: 'Eine Test-Benachrichtigung mit einer echten Nachricht wird in 2 Sekunden gesendet.',
    },

    // iOS subtitles (shown under notification title)
    subtitles: {
      verseNotRead: 'Vers des Tages',
      encouragementWaiting: 'Persönliche Ermutigung',
      badgeClose: 'Abzeichen freizuschalten',
      streakActive: 'Laufende Serie',
      comeback: 'Willkommen zurück',
    },

    // Android channel (notification channel configuration)
    androidChannel: {
      name: 'Tägliche Ermutigungen',
      description: 'Benachrichtigungen für Verse und Ermutigungen des Tages',
    },

    // Default fallback message
    fallback: {
      title: 'Hallo!',
      body: '{{name}}, deine Ermutigung des Tages wartet auf dich!',
    },
  },

  // ============================================
  // SHARE
  // ============================================
  share: {
    signature: 'Geteilt von VersetVie',
    success: 'Vers geteilt',
    error: 'Fehler beim Teilen',
    errorTitle: 'Teilen nicht möglich',
    errorMessage: 'Teilen fehlgeschlagen. Versuche es später erneut.',
    copied: 'In die Zwischenablage kopiert',
    copiedMessage: 'Der Inhalt wurde in die Zwischenablage kopiert',
    // Sharing alerts
    alerts: {
      unavailable: {
        title: 'Teilen nicht verfügbar',
        message: 'Teilen ist auf diesem Gerät nicht verfügbar. Der Inhalt wurde in die Zwischenablage kopiert.',
      },
      failed: {
        title: 'Fehler beim Teilen',
        message: 'Der Inhalt konnte nicht geteilt werden. Versuche es später erneut.',
      },
    },
  },

  // ============================================
  // VALIDATION
  // ============================================
  validation: {
    invalidFirstName: 'Ungültiger Vorname',
  },

  // ============================================
  // ERRORS
  // ============================================
  errors: {
    // Generic errors
    generic: 'Ein Fehler ist aufgetreten',
    genericMessage: 'Etwas ist schief gelaufen. Versuche es später erneut.',
    network: 'Verbindungsfehler',
    networkMessage: 'Überprüfe deine Internetverbindung und versuche es erneut.',
    notFound: 'Nicht gefunden',
    notFoundMessage: 'Die angeforderte Ressource wurde nicht gefunden.',
    unauthorized: 'Nicht autorisiert',
    unauthorizedMessage: 'Du hast keinen Zugang zu dieser Ressource.',
    invalidInput: 'Ungültige Eingabe',

    // Specific errors
    premium: 'Diese Funktion ist Premium-Mitgliedern vorbehalten',
    premiumMessage: 'Wechsle zu Premium um alle Funktionen freizuschalten.',
    subscriptionFailed: 'Abonnement fehlgeschlagen',
    subscriptionFailedMessage: 'Das Abonnement konnte nicht verarbeitet werden. Versuche es später erneut.',
    dataLoadFailed: 'Ladefehler',
    dataLoadFailedMessage: 'Die Daten konnten nicht geladen werden. Versuche es erneut oder installiere die App neu.',
    verseLoadFailed: 'Vers konnte nicht geladen werden',
    verseLoadFailedMessage: 'Der Vers konnte nicht geladen werden. Versuche es später erneut.',

    // Actions
    retry: 'Erneut versuchen',
    cancel: 'Abbrechen',
    goBack: 'Zurück',
    contactSupport: 'Support kontaktieren',
  },

  // ============================================
  // INTERNET CONNECTION
  // ============================================
  offline: {
    banner: 'Keine Internetverbindung',
    message: 'Einige Funktionen erfordern eine Internetverbindung.',
    retry: 'Erneut versuchen',
  },

  // ============================================
  // DEBUG MENU (Development only)
  // ============================================
  debug: {
    title: 'Debug-Menü',
    warning: 'Entwicklungsmodus aktiv',

    // Verse management
    versesSection: 'Versverwaltung',
    changeVerse: 'Vers jetzt wechseln',
    verseChanged: 'Neuer Vers ausgewählt',

    // Onboarding
    onboarding: 'Onboarding',
    resetOnboarding: 'Onboarding zurücksetzen',
    onboardingReset: 'Onboarding zurückgesetzt',

    // Subscription
    subscription: 'Abonnement',
    simulateSubscription: 'Abonnement simulieren',
    free: 'Kostenlos',
    premiumMonthly: 'Premium Monatlich',
    premiumYearly: 'Premium Jährlich',
    subscriptionSimulated: 'Simuliertes Abonnement: {{type}}',

    // Information
    info: 'Informationen',
    version: 'Version',
    build: 'Build',
    currentSubscription: 'Aktuelles Abonnement',
    availableVerses: 'Verfügbare Verse',
    currentVerse: 'Aktueller Vers',
    lastVerseChange: 'Letzte Änderung',
    encouragementViewed: 'Ermutigung angesehen',
    currentTheme: 'Aktuelles Design',
    onboardingCompleted: 'Onboarding abgeschlossen',
    userName: 'Benutzername',
    userGender: 'Benutzergeschlecht',
    attConsent: 'ATT Zustimmung',
    attAccepted: 'Akzeptiert',
    attDenied: 'Abgelehnt',
    attNotAsked: 'Nicht gefragt',

    // Advanced actions
    actions: 'Erweiterte Aktionen',
    clearData: 'Alle Daten löschen',
    clearDataConfirm: 'Bist du sicher? Diese Aktion ist unwiderruflich.',
    clearDataSuccess: 'Alle Daten wurden gelöscht',
    showLogs: 'Logs anzeigen',
    showAsyncStorage: 'AsyncStorage Logs',
    testNotification: 'Benachrichtigungen testen',
    notificationSent: 'Testbenachrichtigung gesendet',

    // Values
    yes: 'Ja',
    no: 'Nein',
    male: 'Männlich',
    female: 'Weiblich',
    verses: '{{count}} Verse',
  },

  // ============================================
  // MIGRATION V1 → V2
  // ============================================
  migration: {
    // Migration phase
    title: 'Migration deiner Daten',
    description: 'Wir holen deinen Fortschritt aus der vorherigen Version.',
    step_checking: 'Daten werden überprüft...',
    step_verses: 'Angesehene Verse werden geholt...',
    step_stats: 'Deine Statistiken werden geholt...',
    step_favorites: 'Deine Favoriten werden geholt...',
    step_finalizing: 'Abschluss...',

    // Success phase
    success_title: 'Migration erfolgreich!',
    success_description: 'Deine Daten wurden erfolgreich wiederhergestellt',

    // Detailed summary
    summary_title: 'Zusammenfassung',
    summary_stats_title: '📊 Statistiken',
    summary_verses_viewed: '{{count}} Verse angesehen',
    summary_encouragements_read: '{{count}} Ermutigungen gelesen',
    summary_days_active: '{{count}} aktive Tage',
    summary_streak_title: '🔥 Serien',
    summary_current_streak: 'Aktuelle Serie: {{count}} Tage',
    summary_best_streak: 'Beste Serie: {{count}} Tage',
    summary_favorites_title: '⭐ Favoriten',
    summary_favorites_migrated: '{{count}} Favoriten wiederhergestellt',

    // Actions
    auto_continue_in: 'App startet in {{seconds}}s',
    button_continue: 'Weiter ({{seconds}})',
    button_continue_now: 'Weiter',

    // Error
    error_title: 'Unvollständige Migration',
    error_description: 'Einige Daten konnten nicht wiederhergestellt werden.',
    error_continue: 'Die App funktioniert normal.',
  },

  // ============================================
  // LEGAL SCREENS - HELP AND SUPPORT
  // ============================================
  help: {
    title: 'Hilfe & Support',
    description: 'Brauchst du Hilfe oder Unterstützung? Wir sind hier um dich bei der Nutzung von Verset Vie zu begleiten. Schau dir die FAQ unten an oder kontaktiere uns direkt.',
    faqTitle: 'FAQ - Häufige Fragen',
    contactTitle: 'Kontakt',
    contactDescription: 'Für Fragen, Vorschläge oder technische Probleme:',
    contactUs: 'Kontaktiere uns',
    faq: {
      howItWorks: {
        question: 'Wie funktioniert Verset Vie?',
        answer: 'Jeden Tag entdeckst du einen neuen Bibelvers begleitet von einer persönlichen Ermutigung um deinen Glauben zu nähren.',
      },
      oncePerDay: {
        question: 'Warum kann ich nur einen Vers pro Tag lesen?',
        answer: 'Wir beschränken die Entdeckung auf einen Vers und eine Ermutigung pro Tag um die tägliche Meditation zu fördern.',
      },
      changeInfo: {
        question: 'Kann ich meinen Namen oder mein Geschlecht ändern?',
        answer: 'Ja, du kannst diese Informationen auf der Profilseite ändern, indem du auf \'Bearbeiten\' klickst.',
      },
      bug: {
        question: 'Ich habe einen Fehler gefunden, was soll ich tun?',
        answer: 'Kontaktiere uns über den Link unten',
      },
    },
  },

  // ============================================
  // LEGAL SCREENS - ABOUT
  // ============================================
  about: {
    title: 'Über Verset Vie',
    description: 'Verset Vie ist eine App, die dich jeden Tag mit einem Bibelvers und einer persönlichen Ermutigung ermutigen soll. Entdecke, meditiere und teile das Wort Gottes einfach, wo immer du bist.',
    versesAvailable: 'Anzahl verfügbarer Verse',
    versesCount: '{{count}} Verse',
    bibleVersion: 'Bibelübersetzung',
    bibleVersionName: 'Schlachter 1951',
    bibleVersionCopyright: '© Genfer Bibelgesellschaft',
    appVersion: 'App-Version',
    versionInfo: 'Version: {{version}}',
    thankYou: 'Danke, dass du Verset Vie verwendest!',
    developedWith: 'Mit Glauben und Leidenschaft entwickelt um dich jeden Tag zu begleiten.',
  },

  // ============================================
  // LEGAL SCREENS - PRIVACY POLICY
  // ============================================
  privacy: {
    title: 'Datenschutzrichtlinie',
    lastUpdated: 'Letzte Aktualisierung: {{date}}',
    introduction: 'Bei Verset Vie legen wir großen Wert auf den Schutz deiner persönlichen Daten. Diese Datenschutzrichtlinie erklärt, wie wir deine Informationen gemäß der DSGVO und anderen geltenden Vorschriften sammeln, verwenden und schützen.',

    // Section 1 - Data collected
    section1: {
      title: '1. Gesammelte Daten',
      profileDataTitle: 'Profildaten (lokal gespeichert):',
      profileData: '• Vorname (optional, zur Personalisierung)\n• Geschlecht (zur Anpassung des Inhalts)\n• Abonnementmodus (Standard/Premium)\n• App-Einstellungen',
      analyticsDataTitle: 'Anonymisierte Nutzungsdaten (über Mixpanel EU):',
      analyticsData: '• Benutzergeschlecht (m/w)\n• Abonnementmodus (Premium/Standard)\n• Onboarding-Abschlussstatus\n• Nutzungsereignisse (besuchte Bildschirme, geklickte Buttons)\n• Inhaltsinteraktionen (entdeckte Verse)\n• Technische Informationen (Plattform, App-Version)',
      attributionDataTitle: 'Attributionsdaten (über Tenjin, mit iOS ATT-Zustimmung):',
      attributionData: '• IDFA (iOS mit ATT-Zustimmung)\n• GAID (Android)\n• Marketing-Kampagneninformationen (Installationsquelle)',
    },

    // Section 2 - What we DON'T collect
    section2: {
      title: '2. Was wir NICHT sammeln',
      content: 'Wir verpflichten uns, NICHT zu sammeln:\n• E-Mail-Adressen oder Telefonnummern\n• Genaue geografische Standorte\n• Vollständige Texte der angesehenen Verse\n• Biometrische Daten oder Fotos\n• Web-Browserverlauf\n• Kontakte oder Informationen aus anderen Apps',
    },

    // Section 3 - Data usage
    section3: {
      title: '3. Datennutzung',
      profileUsageTitle: 'Profildaten:',
      profileUsage: '• Dein geistliches Erlebnis personalisieren\n• Inhalte an dein Geschlecht anpassen\n• Deine Einstellungen speichern',
      analyticsUsageTitle: 'Nutzungsdaten (Mixpanel EU):',
      analyticsUsage: '• Benutzerengagement analysieren\n• Oberfläche und Funktionen verbessern\n• Präferenzen nach Geschlecht verstehen\n• Onboarding-Prozess optimieren\n• App-Leistung messen',
      attributionUsageTitle: 'Attributionsdaten (Tenjin):',
      attributionUsage: '• Effektivität von Marketingkampagnen messen\n• Installationen den richtigen Quellen zuordnen\n• Werbeinvestitionen optimieren',
    },

    // Section 4 - Data sharing
    section4: {
      title: '4. Datenweitergabe',
      mixpanelTitle: 'Mixpanel EU (Analytics):',
      mixpanelContent: 'Wir verwenden Mixpanel mit EU-Servern zur App-Nutzungsanalyse. Nur anonymisierte Daten werden geteilt (Geschlecht, Abonnementmodus, Nutzungsereignisse). Keine persönlich identifizierbaren Informationen werden übermittelt.',
      tenjinTitle: 'Tenjin (Marketing-Attribution):',
      tenjinContent: 'Wir verwenden Tenjin um die Effektivität unserer Marketingkampagnen zu messen. Auf iOS erfordert dies deine ATT-Zustimmung (App Tracking Transparency). Du kannst jederzeit ablehnen.',
      revenuecatTitle: 'RevenueCat (Abonnementverwaltung):',
      revenuecatContent: 'RevenueCat verwaltet Premium-Abonnements und kommuniziert mit Apple/Google zur Kaufverifizierung. Nur für die Abonnementverwaltung notwendige Daten werden geteilt.',
      supabaseTitle: 'Supabase (Benutzerfeedback):',
      supabaseContent: 'Wir verwenden Supabase um dein Feedback zur App zu sammeln (Vorschläge, Paywall-Meinungen). Nur dein Feedbacktext und eine anonyme ID werden gespeichert. Keine persönlichen Daten werden übermittelt.',
      noOtherSharingTitle: 'Keine weitere Weitergabe:',
      noOtherSharing: 'Wir verkaufen, tauschen oder vermieten deine Daten nicht an Dritte für kommerzielle Zwecke.',
    },

    // Section 5 - Storage and security
    section5: {
      title: '5. Speicherung und Sicherheit',
      localStorageTitle: 'Lokale Speicherung:',
      localStorage: 'Deine Profildaten werden nur auf deinem Gerät über AsyncStorage gespeichert (native Verschlüsselung).',
      mixpanelStorageTitle: 'Mixpanel EU Daten:',
      mixpanelStorage: 'Anonymisierte Nutzungsdaten werden auf sicheren Mixpanel-Servern in der Europäischen Union gespeichert (DSGVO-konform, SOC 2, Verschlüsselung bei Übertragung und im Ruhezustand).',
      tenjinStorageTitle: 'Tenjin Daten:',
      tenjinStorage: 'Attributionsdaten werden auf Tenjin-Servern gemäß deren Datenschutzrichtlinien gespeichert.',
      supabaseStorageTitle: 'Supabase Daten:',
      supabaseStorage: 'Feedback wird sicher auf Supabase-Servern gespeichert (DSGVO-konform, HTTPS-Verschlüsselung, sichere Authentifizierung).',
      retentionTitle: 'Aufbewahrung:',
      retention: '• Lokale Daten: bis zur Deinstallation aufbewahrt\n• Mixpanel Daten: maximal 24 Monate\n• Tenjin Daten: gemäß deren Aufbewahrungsrichtlinie\n• Supabase Daten: zur Produktverbesserung aufbewahrt',
    },

    // Section 6 - Your rights (GDPR)
    section6: {
      title: '6. Deine Rechte (DSGVO)',
      content: 'Du hast folgende Rechte:',
      accessRight: 'Auskunftsrecht:',
      accessRightDesc: ' Erfahre welche Daten gesammelt werden',
      rectificationRight: 'Berichtigungsrecht:',
      rectificationRightDesc: ' Korrigiere deine Daten über die Einstellungen',
      erasureRight: 'Löschungsrecht:',
      erasureRightDesc: ' Deinstalliere die App um alle lokalen Daten zu löschen',
      objectionRight: 'Widerspruchsrecht:',
      objectionRightDesc: ' Lehne ATT-Tracking ab (iOS) oder setze die Werbe-ID zurück (Android)',
      portabilityRight: 'Datenübertragbarkeit:',
      portabilityRightDesc: ' Exportiere deine Favoriten aus der App',
      exerciseRights: 'Um diese Rechte auszuüben oder für Fragen, kontaktiere uns über den Bildschirm "Hilfe & Support".',
    },

    // Section 7 - Cookies and tracking
    section7: {
      title: '7. Cookies und Tracking',
      content: 'Diese mobile App verwendet keine Web-Cookies. Das Mixpanel Analytics-Tracking verwendet anonyme temporäre Identifikatoren, die dich nicht persönlich identifizieren können. Die Tenjin-Attribution verwendet IDFA (iOS) oder GAID (Android) mit deiner Zustimmung.',
    },

    // Section 8 - Modifications
    section8: {
      title: '8. Änderungen',
      content: 'Wir behalten uns das Recht vor, diese Datenschutzrichtlinie jederzeit zu ändern. Wichtige Änderungen werden dir über die App mitgeteilt. Die aktuelle Version ist immer in den Einstellungen zugänglich.',
    },

    // Section 9 - Contact
    section9: {
      title: '9. Kontakt',
      content: 'Für Fragen zu dieser Datenschutzrichtlinie oder deinen persönlichen Daten, kontaktiere uns über den Bildschirm "Hilfe & Support" in der App.',
    },

    // Choice card (optional, if you want to add a toggle for Mixpanel)
    choice: {
      title: 'Deine Wahl',
      description: 'Nachdem du unsere Datenschutzrichtlinie gelesen hast, kannst du wählen, ob du anonymisierte Nutzungsdaten teilen möchtest, um uns bei der Verbesserung der App zu helfen.',
      acceptTracking: 'Ich akzeptiere das Teilen anonymisierter Nutzungsdaten (Mixpanel)',
      modifiableAnytime: 'Du kannst diese Wahl jederzeit auf diesem Bildschirm ändern.',
    },
  },

  // ============================================
  // LEGAL SCREENS - TERMS OF USE
  // ============================================
  terms: {
    title: 'Nutzungsbedingungen',
    lastUpdated: 'Letzte Aktualisierung:',
    welcome: 'Willkommen bei Verset Vie. Durch die Nutzung unserer App akzeptierst du die folgenden Nutzungsbedingungen.',

    section1Title: '1. Annahme der Bedingungen',
    section1Text: 'Durch den Zugriff auf und die Nutzung von Verset Vie akzeptierst du, an diese Nutzungsbedingungen gebunden zu sein. Wenn du diese Bedingungen nicht akzeptierst, nutze die App bitte nicht.',

    section2Title: '2. Nutzung des Dienstes',
    section2Text: 'Du stimmst zu:\n• Die App gemäß den geltenden Gesetzen zu nutzen\n• Die App nicht für illegale Zwecke zu verwenden\n• Den normalen Betrieb der App nicht zu stören\n• Die geistigen Eigentumsrechte zu respektieren',

    section3Title: '3. Benutzerkonto',
    section3Text: 'Du bist verantwortlich für:\n• Die Vertraulichkeit deines Kontos\n• Alle unter deinem Konto durchgeführten Aktivitäten\n• Die Richtigkeit der bereitgestellten Informationen',

    section4Title: '4. Änderungen der Bedingungen',
    section4Text: 'Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Änderungen treten in Kraft, sobald sie in der App veröffentlicht werden.',

    section5Title: '5. Kontakt',
    section5Text: 'Für Fragen zu diesen Nutzungsbedingungen kontaktiere uns bitte über den Abschnitt "Hilfe und Support" in der App.',
  },

  // ============================================
  // ONBOARDING V3
  // ============================================
  onboardingV3: {
    personalProblem: {
      title: 'Was ',
      titleHighlight: 'belastet',
      titleEnd: ' dich gerade?',
      subtitle: 'Teile frei, was dein Herz beschäftigt.',
      placeholder: 'Schreib hier...',
      infoNote: '🔒 Nur dein Vorname und dein Gebet werden für das gemeinsame Gebet in der App geteilt. Keine anderen persönlichen Daten. Wenn du nicht einverstanden bist, tippe einfach auf Weiter.',
      sendButton: 'Mein Gebet senden',
      skipButton: 'Diesen Schritt überspringen',
    },
    questions: {
      title: 'Dein Weg der ',
      titleHighlight: 'Gemeinschaft',
      titleEnd: ' mit Jesus',
      // Thematic progress bars
      theme1Label: 'Deine Beziehung zu Jesus',
      theme2Label: 'Dein Alltag',
      theme3Label: 'Dein geistliches Wachstum',
      // Contextual intros per question
      intro1: 'Zum Anfang:',
      intro2: 'Noch zu deiner Beziehung mit Jesus:',
      intro3: 'Sprechen wir über deinen Alltag:',
      intro4: 'Noch zu deinem Alltag:',
      intro5: 'Bezüglich deines Wachstums:',
      intro6: 'Eine letzte Frage:',
      // Questions grouped by theme
      // Theme 1: Relationship with Jesus
      q1: 'Wünschst du dir eine persönliche und lebendige Beziehung zu Jesus?',
      q2: 'Möchtest du lernen, die Stimme von Jesus im Alltag zu hören?',
      // Theme 2: Daily life
      q3: 'Spürst du das Bedürfnis, jeden Tag Zeit mit Jesus zu verbringen?',
      q4: 'Möchtest du Jesus zu deinem ersten Reflex bei Entscheidungen machen?',
      // Theme 3: Spiritual growth
      q5: 'Möchtest du dein geistliches Wachstum verfolgen?',
      q6: 'Möchtest du persönliche Ermutigungen von Jesus erhalten?',
      buttonNo: 'Nein',
      buttonYes: 'Ja',
      completedMessage: 'Danke für deine Antworten! Wir werden jetzt deinen Gemeinschaftsraum vorbereiten.',
      readyMessage: 'Dein Gemeinschaftsraum ist bereit!',
      loadingLabel: 'Vorbereitung',
      continueButton: 'Weiter',
    },
    prePaywall: {
      title: 'Dein Weg der ',
      titleHighlight: 'Gemeinschaft',
      titleEnd: ' beginnt hier',
      subtitle: 'Wir sind hier, um dir zu helfen, deine Beziehung zu Jesus durch ein Herz-zu-Herz wachsen zu lassen.',
      // Result-oriented benefits (not features)
      benefit1: 'Spüre inneren Frieden schon beim Aufwachen',
      benefit2: 'Beginne jeden Tag mit klarer Richtung',
      benefit3: 'Wachse geistlich Tag für Tag',
      // Testimonial (social proof)
      testimonialQuote: 'Seit ich VersetVie verwende, hat sich meine Beziehung zu Jesus komplett verändert. Ich fühle mich Ihm jeden Tag näher.',
      testimonialAuthor: 'Marie, Nutzerin seit 6 Monaten',
      // Trust note
      trustNote: 'Jederzeit kündbar',
      // CTA
      ctaButton: 'Weiter',
      // Bottom note
      bottomNote: 'Jeden Tag ein Vers und eine Ermutigung um deine Beziehung zu Jesus zu nähren.',
    },
  },
};
