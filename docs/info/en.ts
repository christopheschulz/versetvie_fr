// src/locales/en.ts
// English localization file - ALL application texts

import type { TranslationKeys } from './types';

export const en: TranslationKeys = {
  // ============================================
  // GENERAL
  // ============================================
  app: {
    name: 'VersetVie',
    loading: 'Loading...',
    error: 'An error occurred',
    retry: 'Retry',
    close: 'Close',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    delete: 'Delete',
    share: 'Share',
    back: 'Back',
    continue: 'Continue',
    skip: 'Skip',
    next: 'Next',
    previous: 'Previous',
    finish: 'Finish',
    ok: 'OK',
    yes: 'Yes',
    no: 'No',
    success: 'Success',
  },

  // ============================================
  // ONBOARDING
  // ============================================
  onboarding: {
    // Common buttons
    next: 'Next',
    skip: 'Skip',
    continue: 'Continue',
    finish: 'Finish',

    // Common labels
    welcome: 'Welcome',
    firstName: 'What is your first name?',
    firstNamePlaceholder: 'Enter your first name here',
    gender: 'Your gender',
    genderMale: 'Male',
    genderFeminine: 'Female',

    // Social proof (welcome page)
    socialProof: 'Join over 3,000 users',

    // Welcome page
    welcomePage: {
      title: 'I am ',
      titleHighlight: 'glad',
      titleEnd: ' you are here',
      subtitle: 'Take a moment to breathe…',
      description: 'I know what you carry, even in silence.',
      button: 'Get Started',
    },

    // Testimonials page
    testimonials: {
      title: 'Join over ',
      titleHighlight: '4000 believers',
      titleEnd: ' today',
      subtitle: '',
      description: '',
      button: 'Continue',
      manon: {
        name: 'Manon',
        rating: 5,
        text: 'I love how personalized this app is, everyone receives a unique encouraging word each day, and I truly believe the Lord inspires it. Also, you can find verses to proclaim in different categories during various trials.\n\nSuper powerful',
      },
      jeremie: {
        name: 'Jérémie',
        rating: 5,
        text: 'Great app! It encourages me every morning with a verse. Because "the steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning". May the Lord strengthen you and help you maintain your relationship with Him. As for the creator of this app, may Almighty God bless you and continue to guide you to sow truth in hearts, in Jesus\' name, amen.',
      },
      nadia: {
        name: 'Nadia',
        rating: 5,
        text: 'Installed recently, I can hardly do without it. Just before going to work, having a little message of encouragement to start the day is the best! I was very moved the day I was praying to receive God\'s help and the verse was exactly His answer to me! This app is a blessing!',
      },
    },
    age: {
      title: 'What ',
      titleHighlight: 'season',
      titleEnd: ' of life are you in?',
      titleHighlight2: '',
      titleEnd2: '',
      subtitle: '',
      description: 'To personalize your experience.',
      options: [
        { id: '18-24', label: '18-24 years', value: 21 },
        { id: '25-34', label: '25-34 years', value: 29 },
        { id: '35-44', label: '35-44 years', value: 39 },
        { id: '45-54', label: '45-54 years', value: 49 },
        { id: '55-64', label: '55-64 years', value: 59 },
        { id: '65-74', label: '65-74 years', value: 69 },
        { id: '75+', label: '75 years and older', value: 80 },
      ],
    },
    notifications: 'Stay connected',
    notificationsDescription: 'Receive a daily reminder for your encouragement',
    notificationsAllow: 'Allow notifications',
    notificationsSkip: 'Later',

    // Legal consent screen
    consent: {
      title: 'Welcome to VersetVie',
      subtitle: 'Before we begin, please read and accept our legal documents:',
      termsTitle: 'Terms of Service',
      termsButton: 'Read terms',
      privacyTitle: 'Privacy Policy',
      privacyButton: 'Read policy',
      checkboxLabel: 'I accept the terms of service and privacy policy',
      continueButton: 'Continue',
      required: 'You must accept to continue',
    },

    // Presentation screens (placeholders)
    welcome1: {
      title: 'A message for you, every day',
      description: 'Discover each morning a word from Jesus, personalized to encourage and guide you.',
    },
    welcome2: {
      title: 'Jesus speaks to you personally',
      description: 'Receive a unique encouragement, written especially for you, with your name.',
    },
    welcome3: {
      title: 'Grow in your faith',
      description: 'Explore hundreds of verses by theme and track your spiritual progress.',
    },

    // User info screen
    userInfo: {
      title: 'What is your ',
      titleHighlight: 'first name',
      titleEnd: '?',
      subtitle: '',
      description: 'So that each encouragement is written just for you.',
      firstNamePlaceholder: 'Your first name',
      firstNameError: 'First name must be at least 2 characters',
      button: 'Continue',
    },

    // Gender screen
    genderPage: {
      title: 'How would you like to be ',
      titleHighlight: 'addressed',
      titleEnd: '?',
      subtitle: '',
      description: 'Messages will be adapted to your choice.',
      button: 'Continue',
      optionMale: 'Masculine',
      optionFeminine: 'Feminine',
    },

    // Value screen (verse demo)
    valuePage: {
      title: 'Every day, a ',
      titleHighlight: 'word for you',
      description: 'A verse chosen to enlighten you, lift you up, or simply remind you that you are never alone.',
      button: 'Next',
    },

    // Notification permissions screen
    notificationsScreen: {
      title: 'Stay connected',
      description: 'Receive a daily reminder for your encouragement',
      timeLabel: 'Notification time',
      defaultTime: '9:00 AM',
      allowButton: 'Allow notifications',
      skipButton: 'Later',
      permissionDenied: 'Permission denied',
      permissionGranted: 'Notifications enabled',
    },

    // Completion screen
    complete: {
      title: 'All set!',
      subtitle: 'Your spiritual journey starts now',
      button: 'Discover the app',
    },

    // First Verse Preview screen (before paywall)
    firstVersePreview: {
      title: 'Everything is ',
      titleHighlight: 'ready',
      description: 'I have prepared a personal path for you with My Word. Each day, you will receive a verse and an encouragement where I will speak to your heart, right where you are.',
      optionalNote: 'You don\'t need to pretend… come as you are, day after day.',
      closingNote: 'This is just the beginning. Let Me walk with you step by step, one verse and one breath at a time.',
      button: 'Let\'s go!',
    },

    // Personal Experience screen (merged)
    personalExperience: {
      title: 'Discover your ',
      titleHighlight: 'encouragement',
      subtitle: 'A personalized message, written for you each day.',
      pressAndHold: 'Press and hold\nto discover, {{name}}...',
      encouragementPhrases: [
        'Breathe...',
        'This is for you...',
      ],
      footer: '',
      button: 'Next',
    },

    // Growth screen - Category exploration
    growth: {
      titleStart: 'A ',
      titleHighlight1: 'word',
      titleMiddle: ' for every ',
      titleHighlight2: 'need',
      titleMiddle2: '',
      titleHighlight3: '',
      subtitle: 'Peace, strength, forgiveness, hope...',
      description: 'Find the verse that speaks to what you\'re going through.',
    },

    // ============================================
    // NEW PERSONALIZATION PAGES
    // ============================================

    // Spiritual state screen
    spiritualState: {
      title: 'Tell Me about your ',
      titleHighlight: 'heart',
      titleEnd: ' today',
      subtitle: 'You can tell Me the truth, I listen without judgment.',
      options: {
        beginning: {
          label: 'I\'m going through something heavy',
        },
        growing: {
          label: 'I\'m still searching for my direction',
        },
        struggling: {
          label: 'I\'m healing step by step',
        },
        seeking: {
          label: 'I feel at peace and grateful',
        },
      },
    },

    // Spiritual challenges screen
    spiritualChallenges: {
      title: 'What feels ',
      titleHighlight: 'heavy',
      titleMiddle: ' for you ',
      titleHighlight2: 'today',
      titleEnd: '?',
      subtitle: 'You can tell Me without fear, I\'m here to walk with you.',
      minSelection: 'Select at least {{min}} challenges',
      maxSelection: 'Maximum {{max}} challenges',
      options: {
        prayer: { label: 'I struggle to fully trust You' },
        distance: { label: 'I struggle to discern Your voice' },
        time: { label: 'I struggle to entrust You with what hurts me' },
        doubts: { label: 'I struggle to feel Your presence' },
        noWords: { label: 'I haven\'t found the words yet' },
      },
    },

    // Life context screen
    lifeContext: {
      title: 'What does your ',
      titleHighlight: 'heart',
      titleMiddle: ' need ',
      titleHighlight2: 'today',
      titleEnd: '?',
      subtitle: 'You can tell Me… I listen with tenderness and patience.',
      options: {
        family: { label: 'I need to feel Your peace' },
        relationship: { label: 'I need to understand what I\'m going through' },
        career: { label: 'I need to feel You close to me' },
        challenge: { label: 'I need to find hope again' },
      },
    },

    // Encouragement style screen
    encouragementStyle: {
      titleHighlight1: 'How',
      titleMiddle: ' would you like to ',
      titleHighlight2: 'draw near',
      titleEnd: ' to Me?',
      subtitle: 'I don\'t rush you. I welcome you exactly where you are.',
      options: {
        love: {
          label: 'By opening my heart, little by little',
        },
        peace: {
          label: 'By talking to You like a close friend',
        },
        hope: {
          label: 'By discovering You through Your Word',
        },
        purpose: {
          label: 'I want to draw near, but I\'m still figuring out how',
        },
      },
    },

    // Daily time with God screen
    dailyTime: {
      title: 'What does your ',
      titleHighlight: 'heart',
      titleMiddle: ' desire to ',
      titleHighlight2: 'receive',
      titleMiddle2: ' with ',
      titleHighlight3: 'Me',
      titleEnd: '?',
      subtitle: 'You can tell Me what draws you, I don\'t rush you. I want to meet you where you need Me.',
      options: {
        understanding: { label: 'Better understand who I am', description: '' },
        healing: { label: 'Heal what is wounded in me', description: '' },
        peace: { label: 'Find lasting inner peace', description: '' },
        trust: { label: 'Learn to trust You', description: '' },
        closeness: { label: 'Walk closer to You', description: '' },
        purpose: { label: 'Discern the meaning of my path', description: '' },
        love: { label: 'Love and forgive as You love me', description: '' },
        renewal: { label: 'Renew my heart and faith', description: '' },
      },
    },

    // Priority themes screen
    priorityThemes: {
      title: 'Which ',
      titleHighlight: 'themes',
      titleMiddle: ' resonate most with ',
      titleHighlight2: 'you',
      titleEnd: ' right now?',
      subtitle: 'Choose at least 3',
      selectionProgress: '{{current}}/{{min}} minimum',
      selectionComplete: '{{current}}/{{max}} selected',
      minSelection: 'Select at least {{min}} themes',
      maxSelection: 'Maximum {{max}} themes',
      options: {
        love: { label: 'Knowing who I truly am', description: '' },
        prayer: { label: 'Calming what\'s happening inside me', description: '' },
        identity: { label: 'Feeling closer to You', description: '' },
        strength: { label: 'Healing from what still hurts', description: '' },
        peace: { label: 'Learning to trust and let go', description: '' },
        healing: { label: 'Understanding where I\'m called', description: '' },
      },
    },

    // Bible familiarity screen
    bibleFamiliarity: {
      title: 'Where are you with ',
      titleHighlight: 'My Word',
      titleEnd: ' today?',
      subtitle: 'Whatever your starting point, I walk with you.',
      options: {
        never: {
          label: 'I\'m discovering it almost for the first time',
          description: '',
        },
        stories: {
          label: 'I know it a little, and I need guidance',
          description: '',
        },
        some: {
          label: 'I read it, but many things remain unclear to me',
          description: '',
        },
        occasional: {
          label: 'I already read it, and I want to go deeper with You',
          description: '',
        },
      },
    },

    // Bible version screen
    bibleVersion: {
      title: 'Choose your ',
      titleHighlight: 'version',
      titleEnd: ' of the Bible',
      subtitle: 'The one you feel most comfortable reading and meditating with.',
      versions: [
        { id: 'any', label: 'Any version', description: 'All versions' },
        { id: 'KJV', label: 'King James Version (KJV)', description: 'Classic' },
        { id: 'NIV', label: 'New International Version (NIV)', description: 'Popular' },
        { id: 'ESV', label: 'English Standard Version (ESV)', description: 'Accurate' },
        { id: 'NLT', label: 'New Living Translation (NLT)', description: 'Easy to read' },
        { id: 'NASB', label: 'New American Standard (NASB)', description: 'Literal' },
        { id: 'NKJV', label: 'New King James Version (NKJV)', description: 'Updated classic' },
      ],
    },

    // Theme selection screen
    themeSelection: {
      title: 'In what ',
      titleHighlight: 'atmosphere',
      titleMiddle: ' do you feel ',
      titleHighlight2: 'best',
      titleMiddle2: ' to be with ',
      titleHighlight3: 'Me',
      titleEnd: '?',
      subtitle: 'Choose the colors where your heart feels at peace. Whatever you choose now, you can change later. What matters is that you feel good near Me.',
    },

    // Calculating - Inspirational loading screen
    calculating: {
      mainTitle: 'I\'m preparing a space just for you.',
      loadingMessage: 'I\'m preparing your personalized experience with Me…',
      versesIntro: 'While everything is being set up, let these words speak to your heart…',
      reassurance: 'One step at a time… I am here.',
      inspirationalVerses: [
        {
          text: 'I can do all things through him who strengthens me.',
          reference: 'Philippians 4:13',
        },
        {
          text: 'My grace is sufficient for you, for my power is made perfect in weakness.',
          reference: '2 Corinthians 12:9',
        },
        {
          text: 'Delight yourself in the Lord, and he will give you the desires of your heart.',
          reference: 'Psalm 37:4',
        },
        {
          text: 'The truth will set you free.',
          reference: 'John 8:32',
        },
        {
          text: 'I came that they may have life and have it abundantly.',
          reference: 'John 10:10',
        },
      ],
    },
  },

  // ============================================
  // HOME SCREEN
  // ============================================
  home: {
    title: 'Verse of the Day',
    verseOfTheDay: 'Verse of the Day',
    discoverEncouragement: 'See encouragement',
    reviewEncouragement: 'Review encouragement',
    favorite: 'Add to favorites',
    unfavorite: 'Remove from favorites',
    favoriteAdded: 'Added to favorites',
    favoriteRemoved: 'Removed from favorites',
    share: 'Share',
    profile: 'Profile',
    loading: 'Loading verse...',
    error: 'Unable to load verse',
    newVerseAvailable: 'A new verse awaits you',
    bibleVersionShort: 'WEB', // World English Bible
  },

  // ============================================
  // ENCOURAGEMENT SCREEN
  // ============================================
  encouragement: {
    title: 'Your encouragement',
    headerTitle: 'Encouragement of the Day',
    signature: 'Jesus',
    loading: 'Preparing your encouragement...',
    tapToSkip: 'Tap to show full message',
    animationSpeed: 'Animation speed',
    speedSlow: 'Slow',
    speedNormal: 'Normal',
    speedFast: 'Fast',
    back: 'Back to Verse',
  },

  // ============================================
  // WEEKLY LIMIT MODAL
  // ============================================
  weeklyLimit: {
    title: 'Your weekly encouragement has been used',
    daysRemaining: 'Only {{count}} days until your next encouragement',
    daysRemainingOne: 'Only 1 day until your next encouragement',
    nextReset: 'Next encouragement available next Monday',
    benefitsTitle: 'With Premium, enjoy:',
    benefitUnlimitedEncouragements: 'Unlimited personalized encouragements',
    benefitTestimony: 'Bonus: Access to the VersetVie creator\'s testimony book',
    upgradeButton: 'Discover Premium',
    laterButton: 'Later',
  },

  // ============================================
  // PROFILE SCREEN
  // ============================================
  profile: {
    title: 'Profile',

    // Subscription status
    accountFree: 'Free Account',
    accountPremium: 'Premium',
    accountPremiumWeekly: 'Premium - Weekly Subscription',
    accountPremiumMonthly: 'Premium - Monthly Subscription',
    accountPremiumYearly: 'Premium - Yearly Subscription',
    upgradeToPremium: 'Upgrade to Premium',

    // Personal information
    personalInfo: 'Personal information',
    firstName: 'First name',
    firstNameHint: 'This name will be used to personalize your encouragements',
    firstNameMinLength: 'First name must contain at least 2 characters.',
    firstNameMaxLength: 'First name cannot exceed 50 characters.',
    firstNameOnlyNumbers: 'First name cannot contain only numbers.',
    gender: 'Gender',
    genderMale: 'Male',
    genderFeminine: 'Female',
    genderFemale: 'Female',
    genderHint: 'Determines which version of encouragement to display',
    edit: 'Edit',
    save: 'Save',
    infoUpdated: 'Your information has been updated.',
    infoUpdateError: 'Unable to save your information. Please try again later.',

    // Notifications
    notifications: 'Notifications',
    notificationsEnabled: 'Notifications enabled',
    notificationsDisabled: 'Notifications disabled',
    notificationTime: 'Notification time',
    notificationTimeDescription: 'Choose when you want to receive your daily reminder',
    notificationPermissionDenied: 'Notification permissions are denied',
    openSettings: 'Open settings',

    // Settings
    settings: 'Settings',
    animationSpeed: 'Animation speed',
    animationSpeedDescription: 'Choose the display speed for encouragement',
    animationSpeedSlow: 'Slow',
    animationSpeedNormal: 'Normal',
    animationSpeedFast: 'Fast',
    previewButton: 'Preview',
    hapticFeedback: 'Haptic feedback',
    hapticFeedbackDescription: 'Light vibration during encouragement display',
    theme: 'Theme',
    themeDescription: 'Choose the visual theme of the app',
    themeColorBackground: 'Background',
    themeColorSurface: 'Surface',
    themeColorPrimary: 'Primary',
    themeColorSecondary: 'Secondary',
    themeInfoHint: 'The theme changes the visual appearance of the entire app. Changes are applied instantly and saved automatically.',
    // Theme names and descriptions
    themes: {
      default: { name: 'Default', description: 'Default VersetVie theme' },
      dark: { name: 'Dark', description: 'Dark theme for nighttime use' },
      light: { name: 'Light', description: 'Light theme for daytime use' },
      ocean: { name: 'Ocean', description: 'Soothing ocean blue for serenity' },
      forest: { name: 'Forest', description: 'Calming natural green' },
      lavender: { name: 'Lavender', description: 'Elegant purple for meditation' },
      'rose-gold': { name: 'Rose Gold', description: 'Warm and modern elegance' },
      sunset: { name: 'Sunset', description: 'Warm and comforting tones' },
    },
    textSize: 'Text size',
    textSizeDescription: 'Adjust the font size in the app',
    textSizeXSmall: 'Extra small',
    textSizeSmall: 'Small',
    textSizeNormal: 'Normal',
    textSizeLarge: 'Large',
    textSizeXLarge: 'Extra large',
    textSizeXXLarge: 'Ultra large',
    textSizeXXXLarge: 'Giant',

    // Badges and rewards (settings)
    badgeCelebrations: 'Badge celebrations',
    badgeCelebrationsDescription: 'Show animations when unlocking a badge',
    focusMode: 'Focus mode',
    focusModeDescription: 'Hide all badges and gamification elements',
    badgeNotifications: 'Badge notifications',
    badgeNotificationsDescription: 'Receive reminders for badges to unlock',

    // Premium features
    premiumFeatures: 'Premium Features',
    favorites: 'Favorites',
    favoritesDescription: 'Save your favorite verses',
    categories: 'Categories',
    categoriesDescription: 'Explore all verses by theme',
    statistics: 'Statistics',
    statisticsDescription: 'Track your spiritual progress',
    testimony: 'Testimony',
    testimonyDescription: 'Read the complete testimony book',
    locked: 'Premium Only',
    unlock: 'Unlock',

    // Subscription management
    subscription: 'Subscription',
    subscriptionManage: 'Manage subscription',
    subscriptionRenewal: 'Renewal',
    subscriptionRenewalDate: 'Next renewal: {{date}}',
    subscriptionActive: 'Subscription active',
    subscriptionExpired: 'Subscription expired',

    // Links and information
    linksAndInfo: 'Links and information',
    paywall: 'Become Premium',
    help: 'Help & Support',
    about: 'About',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',

    // Privacy
    privacySection: 'Privacy',
    myData: 'My data',
    deleteData: 'Delete my data',
    deleteDataConfirm: 'Are you sure you want to delete all your data?',
    deleteDataWarning: 'This action is irreversible. All your local data (favorites, statistics, preferences) will be deleted.',
    deleteDataSuccess: 'All data has been deleted',
    deleteDataError: 'Error deleting data',

    // Profile sections
    settingsSection: 'Settings',
    contentSection: 'Content',
    informationsSection: 'Information',
    badges: 'Badges',

    // Additional profile texts
    chooseSubscription: 'Choose your subscription',
    personalInfoSubtitle: 'First name and gender',
    badgesSubtitle: 'Rewards collection',
    testimonySubtitle: 'Free introduction',

    // Language section
    languageSection: 'LANGUAGE',
    languageChanged: 'Language changed',
    languageRestartHint: 'Some elements may require a restart',
    currentLanguage: 'Current language',
  },

  // ============================================
  // BADGES SCREEN
  // ============================================
  badges: {
    title: 'Badges',

    // Global stats
    myProgress: 'My Progress',
    unlockedBadges: 'Unlocked',
    completion: 'Completion',
    totalBadges: 'Total',
    currentStreaks: 'Current streaks',

    // Filters
    allCategories: 'All',
    categoryLabel: 'Category',
    categoryModalTitle: 'Choose a category',
    sortLabel: 'Sort by',
    sortModalTitle: 'Choose sorting',

    // Badge categories
    categories: {
      streak: 'Streaks',
      milestone: 'Milestones',
      engagement: 'Engagement',
      exploration: 'Exploration',
      special: 'Special',
    },

    // Sort options
    sort: {
      byRarity: 'By rarity',
      byRecent: 'Recent',
      byProgress: 'Progress',
      byCategory: 'Category',
      alphabetical: 'Alphabetical',
    },

    // Rarities
    rarity: {
      common: 'Common',
      uncommon: 'Uncommon',
      rare: 'Rare',
      epic: 'Epic',
      legendary: 'Legendary',
    },

    // States
    locked: 'Locked',
    unlocked: 'Unlocked',
    new: 'New',

    // Unlock dates
    unlockedToday: 'Unlocked today',
    unlockedYesterday: 'Unlocked yesterday',
    unlockedDaysAgo: 'Unlocked {{count}} days ago',
    unlockedWeeksAgo: 'Unlocked {{count}} week ago',
    unlockedWeeksAgoPlural: 'Unlocked {{count}} weeks ago',
    unlockedMonthsAgo: 'Unlocked {{count}} months ago',

    // Messages
    noBadges: 'No badges yet',
    noBadgesDescription: 'Keep using the app to unlock badges',
    loading: 'Loading badges...',
    error: 'Unable to load badges',

    // Unlock toast
    newBadgeUnlocked: '🎉 New badge unlocked!',
    tapToClose: 'Tap anywhere to close',

    // Badge definitions (names and descriptions)
    items: {
      // === STREAK CATEGORY ===
      first_steps: {
        name: 'First Steps',
        description: 'Maintain a 3-day streak',
      },
      faithful_week: {
        name: 'A Faithful Week',
        description: 'Maintain a 7-day streak',
        reflectionPrompt: 'How has the daily Word impacted your week?',
      },
      perseverant: {
        name: 'Perseverant',
        description: 'Maintain a 21-day streak',
        reflectionPrompt: 'Three weeks of consistency! What have you learned about yourself?',
      },
      devoted_month: {
        name: 'A Devoted Month',
        description: 'Maintain a 30-day streak',
        reflectionPrompt: 'A full month with the Word. What has God revealed to you?',
      },
      habit_formed: {
        name: 'Habit Formed',
        description: 'Maintain a 66-day streak',
        reflectionPrompt: 'Science says your habit is now anchored! How will you continue?',
      },
      year_of_faith: {
        name: 'A Year of Faith',
        description: 'Maintain a 365-day streak',
        reflectionPrompt: 'A full year! Share your testimony of transformation.',
      },
      dawn_routine: {
        name: 'Morning Dawn',
        description: 'Maintain a 7-day streak before 8am',
        reflectionPrompt: 'Starting the day with God transforms everything. What are you discovering?',
      },
      night_sentinel: {
        name: 'Midnight Sentinel',
        description: 'Maintain a 7-day streak after 10pm',
        reflectionPrompt: 'Ending the day in the Word brings peace. How do you feel?',
      },
      renaissance: {
        name: 'Renaissance',
        description: 'Resume reading after 30 days of absence',
        reflectionPrompt: 'Welcome back! God was waiting for you. What brought you back?',
      },
      second_wind: {
        name: 'Second Wind',
        description: 'Resume reading after 7 days of absence',
      },
      faith_marathon: {
        name: 'Faith Marathon',
        description: 'Maintain a 100-day streak',
        reflectionPrompt: 'One hundred days! You ran with endurance. What have you learned?',
      },
      four_seasons: {
        name: 'Four Seasons',
        description: 'Maintain a 90-day streak',
        reflectionPrompt: 'Three months of faithfulness! How have you grown spiritually?',
      },
      diamond_consistency: {
        name: 'Diamond of Consistency',
        description: 'Maintain a 50-day streak',
        reflectionPrompt: 'Fifty days of faithfulness! Your consistency shines like a diamond.',
      },
      ardent_fire: {
        name: 'Burning Fire',
        description: 'Maintain a 14-day streak',
        reflectionPrompt: 'Two weeks of spiritual fire! Keep fanning the flame.',
      },
      shooting_star: {
        name: 'Shooting Star',
        description: 'Maintain a 5-day streak',
      },
      semester_devotion: {
        name: 'Semester of Devotion',
        description: 'Maintain a 180-day streak',
        reflectionPrompt: 'Six months of daily communion! Share your testimony of transformation.',
      },

      // === MILESTONE CATEGORY ===
      new_journey: {
        name: 'New Journey',
        description: 'Read your first verse',
      },
      truth_seeker: {
        name: 'Truth Seeker',
        description: 'Read 30 verses',
      },
      devoted_student: {
        name: 'Devoted Student',
        description: 'Read 100 verses',
      },
      scripture_master: {
        name: 'Scripture Master',
        description: 'Read 365 verses (a full year)',
      },
      diligent_reader: {
        name: 'Diligent Reader',
        description: 'Read 50 verses',
      },
      scholar: {
        name: 'Scholar',
        description: 'Read 200 verses',
      },
      teacher: {
        name: 'Teacher',
        description: 'Read 500 verses',
      },
      ancient_sage: {
        name: 'Ancient Sage',
        description: 'Read 1000 verses',
      },
      blessed_week: {
        name: 'Blessed Week',
        description: 'Read 7 verses',
      },
      first_anniversary: {
        name: 'First Anniversary',
        description: 'One year since your first reading',
        reflectionPrompt: 'One year together! Look at how far you\'ve come.',
      },

      // === ENGAGEMENT CATEGORY ===
      first_encouragement: {
        name: 'First Encouragement',
        description: 'Read your first encouragement',
      },
      first_treasure: {
        name: 'First Treasure',
        description: 'Add your first favorite',
      },
      wisdom_collector: {
        name: 'Wisdom Collector',
        description: 'Add 10 verses to favorites',
      },
      light_messenger: {
        name: 'Light Messenger',
        description: 'Share your first verse',
      },
      evangelist: {
        name: 'Evangelist',
        description: 'Share 10 verses',
      },
      reflective_heart: {
        name: 'Reflective Heart',
        description: 'Read 25 encouragements',
      },
      treasure_keeper: {
        name: 'Treasure Keeper',
        description: 'Add 25 verses to favorites',
      },
      sacred_library: {
        name: 'Sacred Library',
        description: 'Add 50 verses to favorites',
      },
      light_ambassador: {
        name: 'Light Ambassador',
        description: 'Share 25 verses',
      },
      meditative_heart: {
        name: 'Meditative Heart',
        description: 'Read 50 encouragements',
      },
      contemplative_soul: {
        name: 'Contemplative Soul',
        description: 'Read 100 encouragements',
      },
      first_meditation: {
        name: 'First Meditation',
        description: 'Read 5 encouragements',
      },
      faithful_visitor: {
        name: 'Faithful Visitor',
        description: 'Open the app 15 days (non-consecutive)',
      },
      daily_companion: {
        name: 'Daily Companion',
        description: 'Open the app 30 days (non-consecutive)',
      },

      // === EXPLORATION CATEGORY (Premium) ===
      explorer: {
        name: 'Explorer',
        description: 'Read verses from 5 different categories',
      },
      biblical_connoisseur: {
        name: 'Biblical Connoisseur',
        description: 'Read verses from all categories',
      },
      witness: {
        name: 'Witness',
        description: 'Complete a testimony chapter',
      },
      thematic_specialist: {
        name: 'Thematic Specialist',
        description: 'Read all verses from one category',
      },
      category_master: {
        name: 'Category Master',
        description: 'Read all verses from 5 categories',
      },
      devoted_witness: {
        name: 'Devoted Witness',
        description: 'Complete 5 testimony chapters',
      },
      history_keeper: {
        name: 'History Keeper',
        description: 'Complete all testimony chapters (13)',
        reflectionPrompt: 'You\'ve read the entire testimony! What touched you the most?',
      },

      // === SPECIAL CATEGORY (hidden) ===
      sunday_worshipper: {
        name: 'Sunday Worshipper',
        description: 'Read a verse on Sunday',
      },
      dawn_seeker: {
        name: 'Dawn Seeker',
        description: 'Read a verse before 7am',
      },
      christmas_spirit: {
        name: 'Christmas Spirit',
        description: 'Read a verse on December 25',
        reflectionPrompt: 'Merry Christmas! Celebrate the birth of the Savior.',
      },
      new_year: {
        name: 'New Year',
        description: 'Read a verse on January 1',
        reflectionPrompt: 'New year, new beginning! What are your plans with God?',
      },
      epiphany: {
        name: 'Epiphany',
        description: 'Read a verse on January 6',
        reflectionPrompt: 'Epiphany: the manifestation of Jesus to the nations!',
      },
      candlemas: {
        name: 'Candlemas',
        description: 'Read a verse on February 2',
        reflectionPrompt: 'Jesus, light of the nations, presented at the Temple.',
      },
      ash_wednesday: {
        name: 'Ash Wednesday',
        description: 'Read a verse on Ash Wednesday',
        reflectionPrompt: 'Beginning of Lent: a time for conversion and prayer.',
      },
      palm_sunday: {
        name: 'Palm Sunday',
        description: 'Read a verse on Palm Sunday',
        reflectionPrompt: 'Hosanna! Jesus\' triumphal entry into Jerusalem.',
      },
      good_friday: {
        name: 'Good Friday',
        description: 'Read a verse on Good Friday',
        reflectionPrompt: 'By His wounds, we are healed. Meditate on Jesus\' sacrifice.',
      },
      easter_blessed: {
        name: 'Glorious Easter',
        description: 'Read a verse on Easter Sunday',
        reflectionPrompt: 'He is risen! Alleluia! Christ is alive!',
      },
      ascension: {
        name: 'Heavenly Ascension',
        description: 'Read a verse on Ascension Thursday',
        reflectionPrompt: 'Jesus ascends to heaven and sends us the Holy Spirit.',
      },
      pentecost: {
        name: 'Pentecost',
        description: 'Read a verse on Pentecost Sunday',
        reflectionPrompt: 'The Holy Spirit descends upon the Church! Come, Holy Spirit!',
      },
      all_saints: {
        name: 'All Saints',
        description: 'Read a verse on November 1',
        reflectionPrompt: 'Communion of saints: all called to holiness!',
      },
    },
  },

  // ============================================
  // NAVIGATION BAR (TABS)
  // ============================================
  tabs: {
    home: 'Home',
    needs: 'Needs',
    favorites: 'Favorites',
  },

  // ============================================
  // NEEDS SCREEN (TAB)
  // ============================================
  needs: {
    titleStart: 'What do you ',
    titleHighlight: 'need',
    titleEnd: '?',
    hint: 'Tap a bubble to discover a verse',
    limitReached: {
      title: 'Daily discovery used',
      message:
        'You\'ve already discovered a verse today. Come back tomorrow or go Premium to explore without limits!',
      ok: 'OK',
      goPremium: 'Go Premium',
    },
    // Categories (bubbles)
    categories: {
      divineSurprise: 'Divine Surprise',
      graceAndForgiveness: 'Grace & Forgiveness',
      love: 'Love',
      hope: 'Hope',
      faithAndTrust: 'Faith & Trust',
      healing: 'Healing',
      prayerAndPraise: 'Prayer & Praise',
      protection: 'Protection',
      peace: 'Peace',
      spiritualBattle: 'Spiritual Battle',
      holySpirit: 'Holy Spirit',
      growth: 'Growth',
      divineGuidance: 'Divine Guidance',
    },
  },

  // ============================================
  // FAVORITES SCREEN
  // ============================================
  favorites: {
    title: 'Favorites',
    empty: 'No favorites yet',
    emptyDescription: 'Add your favorite verses by tapping the heart',
    emptyIcon: '♡',
    count: '{{count}} favorites',
    verseSingular: 'verse',
    versePlural: 'verses',
    unfavorite: 'Remove from favorites',
    share: 'Share',
    loading: 'Loading favorites...',
    error: 'Unable to load favorites',
    errorRemove: 'Unable to remove from favorites.',
    errorLoad: 'Unable to load favorites.',
    premiumRequired: 'This feature is reserved for Premium members',
  },

  // ============================================
  // CATEGORIES SCREEN
  // ============================================
  categories: {
    title: 'Categories',
    allVerses: 'All verses',
    allVersesCount: '{{count}} verses',
    categoryCount: '{{count}} verses',
    verseCounter: 'Verse {{current}} / {{total}}',
    swipeHint: 'Swipe to navigate',
    loading: 'Loading categories...',
    error: 'Unable to load categories',
    premiumRequired: 'This feature is reserved for Premium members',
    noVerses: 'No verses in this category',
    verseSingular: 'verse',
    versePlural: 'verses',

    // Section names (category groups)
    sections: {
      allVerses: 'All verses',
      fundamentals: 'Fundamentals of Faith',
      spiritualLife: 'Spiritual Life & Communion',
      transformation: 'Transformation & Healing',
      battle: 'Warfare & Protection',
      values: 'Values & Virtues',
    },

    // Theme names by identifier (for icon mapping)
    themeNames: {
      love: 'Love & Kindness',
      battle: 'Spiritual Warfare & Trials',
      community: 'Community & Church Life',
      growth: 'Growth & Spiritual Fruit',
      hope: 'Hope & Eternal Life',
      faith: 'Faith, Trust & Hope',
      grace: 'Grace, Salvation & Forgiveness',
      healing: 'Healing, Restoration & Renewal',
      humility: 'Humility, Faith & Trust',
      justice: 'Justice, Holiness & Truth',
      liberation: 'Liberation, Restoration & Renewal',
      peace: 'Peace, Protection & Freedom',
      prayer: 'Prayer, Worship & Praise',
      intimacy: 'Relationship & Intimacy with God',
      spirit: 'Holy Spirit & Power',
      guidance: 'God\'s Will & Guidance',
    },

    // Section to theme identifier mapping
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
    title: 'Statistics',

    // Overview
    overview: 'Overview',
    discoveries: 'Discoveries',
    globalProgress: 'Global progress',
    globalProgressSubtitle: '{{count}} verses discovered out of {{total}}',
    versesDiscovered: 'verses discovered',
    versesDiscoveredCount: '{{count}} verses discovered',
    versesProgress: '{{count}} of {{total}}',
    encouragementsRead: 'encouragements read',
    encouragementsReadCount: '{{count}} encouragements read',
    favorites: 'favorites',
    favoritesCount: '{{count}} favorites',
    timeSpent: 'spent in the app',
    timeSpentFormatted: '{{hours}}h {{minutes}}min spent',
    progression: 'Progress',

    // Streaks
    streaks: 'Streaks',
    streakAppOpen: 'App opened',
    streakVerseViewed: 'Verse discovered',
    streakEncouragementRead: 'Encouragement read',
    currentStreak: 'Current',
    bestStreak: 'Best',
    streakDays: '{{count}} days',
    streakDay: '1 day',
    streakIcon: '🔥',
    verseIcon: '📖',
    encouragementIcon: '💛',

    // Preferred categories
    preferredCategories: 'Preferred categories',
    noCategoriesYet: 'No categories explored yet',

    // Messages
    loading: 'Loading statistics...',
    error: 'Unable to load statistics',
    premiumRequired: 'This feature is reserved for Premium members',
  },

  // ============================================
  // TESTIMONY SCREEN
  // ============================================
  testimony: {
    title: 'Testimony',
    subtitle: 'My Testimony - A journey of faith and transformation',
    author: 'Christophe Schulz',

    // Progress
    chaptersRead: 'chapters read',
    progress: 'Progress',
    progressCount: '{{read}} / {{total}} chapters',

    // Chapter list
    chapterFree: 'Free',
    chapterPremium: 'Premium',
    chapterRead: 'Read',
    chapterUnread: 'Unread',
    chapterLocked: 'Locked',

    // Reading a chapter
    previous: 'Previous chapter',
    next: 'Next chapter',
    markAsRead: 'Mark as read',
    markAsUnread: 'Mark as unread',
    share: 'Share',

    // Completion
    completed: 'Testimony completed!',
    completedMessage: 'Congratulations! You have read all the testimony chapters.',
    completedIcon: '✨',

    // Messages
    loading: 'Loading chapter...',
    error: 'Unable to load chapter',
    premiumRequired: 'This chapter is reserved for Premium members',
    chapterNotFound: 'Chapter not found',
  },

  // ============================================
  // ONBOARDING PAYWALL SCREEN (Timeline)
  // ============================================
  onboardingPaywall: {
    // Titles (with/without free trial)
    titleWithTrial: 'How does your free week work?',
    titleWithoutTrial: 'Become Premium',
    subtitleWithTrial: '€0 charged today',
    subtitleWithoutTrial: 'Access all features',

    // Timeline (4 steps)
    timeline: {
      day1: {
        title: 'Day 1: install the app',
        description: 'Set up the app for your goals.',
      },
      fullAccess: {
        title: 'Full access',
        description: 'Your mindset starts to change.',
      },
      day5: {
        title: 'Day 5: notification',
        description: 'We\'ll notify you 48h before your trial week ends.',
      },
      day7: {
        title: 'Day 7: end of trial',
        description: 'Subscription starts on {{date}}, you can cancel freely before.',
      },
    },

    // Pricing
    pricingWithTrial: '7 days of unlimited free access, then {{price}}/year ({{pricePerMonth}}/month).',
    pricingWithoutTrial: '{{price}}/year ({{pricePerMonth}}/month)',
    pricingCancellation: 'Free cancellation',

    // Buttons
    startTrialButton: 'Try for free',
    subscribeButton: 'Subscribe now',
    restorePurchases: 'Restore my purchases',

    // Messages
    loading: 'Loading offers...',
    purchasing: 'Processing...',
    error: 'Unable to load offers. Check your connection and try again.',
  },

  // ============================================
  // ONBOARDING PAYWALL V2 SCREEN (Paid trial)
  // ============================================
  onboardingPaywallV2: {
    // Main title
    title: 'We offer you a full week of VersetVie as part of our mission to bring you closer to the heart of Jesus daily.',
    subtitle: 'Money shouldn\'t prevent you from finding this relationship.',

    // Trial message
    trialMessage: 'A trial costs us €10/month to cover various costs, but you can choose the plan that suits you.',
    selectContribution: 'Choose your subscription:',

    // Contribution options
    contributions: {
      free: '€0',
      low: '€2',
      medium: '€5',
      full: '€10',
    },

    // Main button
    startTrialButton: 'Start my free trial',

    // Bottom pricing
    pricingWeekly: '7 days free, then {{price}}/{{duration}}. Cancel anytime',

    // Links
    usePromoCode: 'Use a promo code',
    restorePurchases: 'Restore purchases',
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',

    // Messages
    loading: 'Loading offers...',
    purchasing: 'Processing...',
    error: 'Unable to load offers. Check your connection and try again.',
  },

  // ============================================
  // PAYWALL SCREEN
  // ============================================
  paywall: {
    // Titles by context
    title: 'Get full access',
    titleOnboarding: 'Welcome {{name}}!',
    titleLimit: 'You\'ve used your free weekly encouragement!',
    titleFeature: 'Unlock this feature',
    title24h: 'It\'s been 24 hours since you started using VersetVie!',

    // Subtitles
    subtitle: 'Get immediate access to all app features.',
    subtitleOnboarding: 'All verses are free. Premium = unlimited encouragements + testimony.',
    subtitleLimit: 'Free: 1 encouragement/week. Premium: unlimited encouragements.',
    subtitle24h: 'Imagine everything you could discover with Premium...',

    // Alerts
    confirmSkipTitle: 'Warning!',
    confirmSkipMessage: 'Take advantage of the free trial for full access to unlimited encouragements.',
    confirmSkipCancel: 'Stay',
    confirmSkipConfirm: 'Leave',

    // Paragraph 1: Discovery version
    featuresFree: 'Discovery version (included):',
    featureAllVerses: '✓ All daily verses (426)',
    featureCategories: '✓ Navigation by categories and themes',
    featureFavorites: '✓ Unlimited favorites',
    featureStatistics: '✓ Detailed statistics',
    featureOneEncouragement: '✓ 1 encouragement per week',

    // Paragraph 2: Premium version
    featuresPremium: 'Premium version:',
    featureUnlimitedEncouragements: '✓ Unlimited encouragements',
    featureTestimony: '✓ Complete testimony book',

    // Legacy (for compatibility)
    features: 'Discovery version (included):',
    featureSupport: 'Priority support',

    // Subscription offers
    monthly: 'Monthly',
    yearly: 'Yearly',
    recommended: 'Recommended',
    bestOffer: 'Best offer',
    subscribedMonthly: 'Monthly subscriber',
    subscribedYearly: 'Yearly subscriber',
    save: 'Save {{percent}}%',
    pricePerMonth: 'per month',
    pricePerYear: 'per year',
    trialOffer: '{{days}} days free',
    thenPrice: 'then {{price}}',
    freeTrialBadge: '7 days free\ntrial included',
    freeTrialDescription: 'Then {{price}}/year',
    startFreeTrial: 'Start free trial',

    // Actions
    cta: 'Get Started',
    ctaSubscribe: 'Subscribe now',
    ctaAlreadySubscribed: 'Already subscribed',
    ctaMonthly: 'Subscribe (Monthly)',
    ctaYearly: 'Subscribe (Yearly)',
    restore: 'Restore my purchases',
    continueFree: 'Continue for free',
    close: 'Close',

    // Messages
    loading: 'Loading offers...',
    purchasing: 'Processing purchase...',
    processing: 'Processing...',
    restoring: 'Restoring...',
    success: 'Subscription activated!',
    successMessage: 'Welcome to the Premium community',
    restoreSuccess: 'Subscription successfully restored',
    restoreNone: 'No purchases to restore',
    error: 'Error',
    errorPurchase: 'Purchase failed. Try again later.',
    errorRestore: 'Restore failed. Check your purchases in store settings.',
    errorNetwork: 'No internet connection. Check your connection and try again.',
    unavailable: 'Subscriptions are temporarily unavailable.',
    loadError: 'Unable to load offers. Check your connection and try again.',

    // Packages
    packages: {
      monthly: '1 month',
      annual: '1 year',
    },

    // Success/error alerts
    alerts: {
      purchaseSuccess: {
        title: 'Welcome to Premium! 🎉',
        message: 'You now have access to all app features.',
        button: 'Discover',
      },
      restoreSuccess: {
        title: 'Purchases restored! 🎉',
        message: 'Your subscription has been successfully restored.',
      },
      noSubscription: {
        title: 'No purchase found',
        message: 'No active subscription was found on this account.',
      },
      restoreError: {
        title: 'Error',
        message: 'Unable to restore purchases. Try again later.',
      },
    },

    // Legal documents
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    legalFooter: 'Subscription will auto-renew unless cancelled.',
    legalDisclaimer: 'Subscription will auto-renew unless cancelled.',

    // Feedback (modal for collecting feedback on paywall rejection)
    feedback: {
      modalTitle: 'Help us improve VersetVie',
      question: 'What were you hoping to find when installing the app?',
      subtitle: 'Your answer helps us improve the app',
      placeholder: 'Share your expectations...',
      minLengthError: 'Please write at least 10 characters',
      characterCounter: '{{current}}/{{max}}',
      continueButton: 'Submit',
      sending: 'Sending...',
      thankYou: 'Thank you for your valuable feedback!',
      thankYouTitle: 'Thank you for your feedback!',
      thankYouMessage: 'Your participation helps us improve the app',
      thankYouMessageError: 'We couldn\'t send your message, but thank you for your participation!',
    },
  },

  // ============================================
  // PROFILE PAYWALL SCREEN (Optimized conversion version)
  // ============================================
  profilePaywall: {
    // Hero section
    title: 'Renew your ',
    titleHighlight: 'heart',
    titleEnd: '\nevery day',
    subtitle: 'Discover everything ',
    subtitleHighlight: 'VersetVie',
    subtitleEnd: ' has to offer you',

    // Paragraph 1: Discovery version (free)
    freeTitle: 'Discovery version (included):',
    freeBenefit1: '✓ All 426 daily verses',
    freeBenefit2: '✓ Favorites, categories, stats and badges',
    freeBenefit3: '✓ 1 encouragement per week',
    freeBenefit4: '',

    // Paragraph 2: Premium version (paid)
    premiumTitle: 'Premium version:',
    benefit1: '✓ Unlimited daily encouragements',
    benefit2: '✓ Complete creator\'s testimony book',
    benefit3: '',
    benefit4: '',

    // Subscription plans
    weeklyLabel: 'Weekly',
    monthlyLabel: 'Monthly',
    yearlyLabel: 'Yearly',
    bestOfferBadge: 'Best offer',
    freeTrialBadge: 'Free trial',
    saveLabel: 'Save over 50%',

    // Prices (displayed dynamically from RevenueCat)
    weeklyPrice: '{{price}}/week',
    monthlyPrice: '{{price}}/month',
    yearlyPrice: '{{price}}/year',

    // Main CTA
    ctaFreeTrial: 'Try for free',
    ctaSubscribe: 'Subscribe',

    // Legal texts by plan
    legalWeekly: '7 days free, then {{price}}/week. Cancel anytime.',
    legalMonthly: '7 days free, then {{price}}/month. Cancel anytime.',
    legalYearly: '7 days free, then {{price}}/year. Cancel anytime.',
    legalNoTrial: '{{price}}/{{duration}}. Cancel anytime.',

    // Secondary actions
    restore: 'Restore purchases',
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',

    // Duration labels (for buttons)
    week: 'Week',
    month: 'Month',
    year: 'Year',
    changePlan: 'Change plan',
    activeWeekly: 'Weekly Subscription active ✓',
    activeMonthly: 'Monthly Subscription active ✓',
    activeYearly: 'Yearly Subscription active ✓',
    cancelAnytime: 'Cancel anytime',

    // Titles by source
    titles: {
      profile: 'Choose your subscription',
      feature_favorites: 'Save your favorite verses',
      feature_categories: 'Explore all verses by theme',
      feature_statistics: 'Track your progress',
      feature_testimony: 'Read the full testimony',
      feature_theme: 'Customize your theme',
      default: 'Go Premium',
    },

    // Descriptions by source
    descriptions: {
      profile: 'Access all features and fully enjoy VersetVie.',
      feature_favorites: 'Save your favorite verses and find them anytime with Premium.',
      feature_categories: 'Explore all verses by theme and discover hundreds of encouraging words.',
      feature_statistics: 'Track your progress, streaks and favorite categories with Premium.',
      feature_testimony: 'Read Christophe\'s full testimony and discover his faith journey.',
      feature_theme: 'Customize the app appearance with Premium themes.',
      default: 'Go further in your faith with Premium.',
    },

    // Durations for pricing
    durations: {
      weekly: 'week',
      monthly: 'month',
      yearly: 'year',
    },

    // Status messages
    loading: 'Loading offers...',
    unavailable: 'Subscriptions are temporarily unavailable.',
    retry: 'Retry',
    close: 'Close',
    packageUnavailable: 'Package unavailable',
    packageUnavailableMsg: 'This plan is not yet available. Try another option.',
    loadError: 'Unable to load offers. Check your connection and try again.',

    // Success messages
    welcomePremium: 'Welcome to Premium! 🎉',
    welcomePremiumMsg: 'You now have access to all app features.',
    discover: 'Discover',

    // Restore messages
    purchasesRestored: 'Purchases restored! 🎉',
    purchasesRestoredMsg: 'Your subscription has been successfully restored.',
    noPurchasesFound: 'No purchases found',
    noPurchasesFoundMsg: 'No active subscription was found on this account.',
    restoreError: 'Unable to restore purchases. Please try again later.',
  },

  // ============================================
  // NOTIFICATIONS
  // ============================================
  notifications: {
    // Period configuration
    periods: {
      morning: {
        label: 'Morning',
        description: 'To start your day with My peace',
        icon: 'sunny-outline',
      },
      afternoon: {
        label: 'Afternoon',
        description: 'To find Me in the midst of what you\'re living',
        icon: 'partly-sunny-outline',
      },
      evening: {
        label: 'Evening',
        description: 'To lay down your day near Me',
        icon: 'moon-outline',
      },
      night: {
        label: 'Night',
        description: 'To accompany you if nights are sometimes difficult',
        icon: 'bed-outline',
      },
    },

    // Period selection screen (onboarding)
    periodSelection: {
      title: 'When do you want to receive your ',
      titleHighlight: 'encouragement',
      titleEnd: '?',
      activateButton: 'Activate',
      skipButton: 'Skip',
      randomTimeNotice: 'The exact time will vary slightly each day.',
    },

    // Contextualized messages by period
    // RULE: First name ALWAYS in body, NEVER in title
    contextual: {
      morning: {
        m: [
          { title: 'Good morning!', body: '{{name}}, start your day with your encouragement' },
          { title: 'Hello!', body: '{{name}}, your verse of the day awaits' },
          { title: 'It\'s time!', body: '{{name}}, a new message to start well' },
          { title: 'New verse', body: '{{name}}, your morning biblical shot is ready' },
        ],
        f: [
          { title: 'Good morning!', body: '{{name}}, start your day with your encouragement' },
          { title: 'Hello!', body: '{{name}}, your verse of the day awaits' },
          { title: 'It\'s time!', body: '{{name}}, a new message to start well' },
          { title: 'New verse', body: '{{name}}, your morning biblical shot is ready' },
        ],
      },
      afternoon: {
        m: [
          { title: 'Inspiration break', body: '{{name}}, need encouragement? Take an inspiring break' },
          { title: 'Good afternoon', body: '{{name}}, your verse awaits' },
          { title: 'A moment for you', body: '{{name}}, discover your encouragement' },
          { title: 'Spiritual break', body: 'Hey {{name}}, a spiritual break would do you good' },
        ],
        f: [
          { title: 'Inspiration break', body: '{{name}}, need encouragement? Take an inspiring break' },
          { title: 'Good afternoon', body: '{{name}}, your verse awaits' },
          { title: 'A moment for you', body: '{{name}}, discover your encouragement' },
          { title: 'Spiritual break', body: 'Hey {{name}}, a spiritual break would do you good' },
        ],
      },
      evening: {
        m: [
          { title: 'Good evening!', body: '{{name}}, end your day with inspiration' },
          { title: 'End of day', body: '{{name}}, your evening encouragement awaits' },
          { title: 'Good night', body: '{{name}}, a message to close your day' },
          { title: 'Before finishing', body: '{{name}}, take a moment for yourself' },
        ],
        f: [
          { title: 'Good evening!', body: '{{name}}, end your day with inspiration' },
          { title: 'End of day', body: '{{name}}, your evening encouragement awaits' },
          { title: 'Good night', body: '{{name}}, a message to close your day' },
          { title: 'Before finishing', body: '{{name}}, take a moment for yourself' },
        ],
      },
      night: {
        m: [
          { title: 'Good night', body: '{{name}}, a thought before sleeping' },
          { title: 'Before sleep', body: '{{name}}, your night encouragement awaits' },
          { title: 'Sweet dreams', body: '{{name}}, end on an inspiring note' },
          { title: 'Final thought', body: '{{name}}, a verse for the night' },
        ],
        f: [
          { title: 'Good night', body: '{{name}}, a thought before sleeping' },
          { title: 'Before sleep', body: '{{name}}, your night encouragement awaits' },
          { title: 'Sweet dreams', body: '{{name}}, end on an inspiring note' },
          { title: 'Final thought', body: '{{name}}, a verse for the night' },
        ],
      },
    },

    // Intelligent contextualized messages (VERSION 2.1+)
    // Used by intelligentNotificationService.ts
    // RULE: First name ALWAYS in body, NEVER in title
    intelligent: {
      verse_not_read: {
        m: [
          { title: 'Your verse awaits', body: '{{name}}, a new message from Jesus for you today' },
          { title: 'Don\'t forget!', body: '{{name}}, your daily verse is ready to discover' },
          { title: 'Take a moment', body: '{{name}}, a special message awaits in the app' },
          { title: 'Daily appointment', body: '{{name}}, discover what God has for you today' },
        ],
        f: [
          { title: 'Your verse awaits', body: '{{name}}, a new message from Jesus for you today' },
          { title: 'Don\'t forget!', body: '{{name}}, your daily verse is ready to discover' },
          { title: 'Take a moment', body: '{{name}}, a special message awaits in the app' },
          { title: 'Daily appointment', body: '{{name}}, discover what God has for you today' },
        ],
      },
      encouragement_waiting: {
        m: [
          { title: 'Verse discovered', body: '{{name}}, don\'t forget to read your personalized encouragement' },
          { title: 'One more step!', body: '{{name}}, Jesus has a personal message for you' },
          { title: 'Discover the rest', body: '{{name}}, your personalized encouragement awaits' },
          { title: 'A word of love for you', body: '{{name}}, go read what Jesus wants to tell you' },
        ],
        f: [
          { title: 'Verse discovered', body: '{{name}}, don\'t forget to read your personalized encouragement' },
          { title: 'One more step!', body: '{{name}}, Jesus has a personal message for you' },
          { title: 'Discover the rest', body: '{{name}}, your personalized encouragement awaits' },
          { title: 'A word of love for you', body: '{{name}}, go read what Jesus wants to tell you' },
        ],
      },
      badge_close: {
        m: [
          { title: 'Only {{remaining}} day{{s}} left!', body: '{{name}}, you\'re close to unlocking a new badge' },
          { title: 'Almost there!', body: '{{name}}, {{remaining}} more day{{s}} for your next badge' },
          { title: 'You\'re so close!', body: '{{name}}, only {{remaining}} day{{s}} until success' },
          { title: 'Final push!', body: '{{name}}, a badge unlocks in {{remaining}} day{{s}}' },
        ],
        f: [
          { title: 'Only {{remaining}} day{{s}} left!', body: '{{name}}, you\'re close to unlocking a new badge' },
          { title: 'Almost there!', body: '{{name}}, {{remaining}} more day{{s}} for your next badge' },
          { title: 'You\'re so close!', body: '{{name}}, only {{remaining}} day{{s}} until success' },
          { title: 'Final push!', body: '{{name}}, a badge unlocks in {{remaining}} day{{s}}' },
        ],
      },
      streak_active: {
        m: [
          { title: '{{streak}} days in a row!', body: '{{name}}, continue your streak by reading your verse today' },
          { title: '{{streak}} day streak!', body: '{{name}}, don\'t lose your momentum, read your verse' },
          { title: 'Well done!', body: '{{name}}, {{streak}} consecutive days, keep it up' },
          { title: 'On a roll!', body: '{{name}}, {{streak}} days straight, excellent' },
        ],
        f: [
          { title: '{{streak}} days in a row!', body: '{{name}}, continue your streak by reading your verse today' },
          { title: '{{streak}} day streak!', body: '{{name}}, don\'t lose your momentum, read your verse' },
          { title: 'Well done!', body: '{{name}}, {{streak}} consecutive days, keep it up' },
          { title: 'On a roll!', body: '{{name}}, {{streak}} days straight, excellent' },
        ],
      },
      comeback: {
        m: [
          { title: 'Good to see you!', body: '{{name}}, resume your daily reading today' },
          { title: 'Happy to see you again!', body: '{{name}}, God was waiting for you, discover your verse' },
          { title: 'Welcome back!', body: '{{name}}, start a new streak today' },
          { title: 'We missed you!', body: '{{name}}, it\'s time to return to your spiritual routine' },
        ],
        f: [
          { title: 'Good to see you!', body: '{{name}}, resume your daily reading today' },
          { title: 'Happy to see you again!', body: '{{name}}, God was waiting for you, discover your verse' },
          { title: 'Welcome back!', body: '{{name}}, start a new streak today' },
          { title: 'We missed you!', body: '{{name}}, it\'s time to return to your spiritual routine' },
        ],
      },
    },

    // Configuration messages
    scheduleSuccess: 'Notification scheduled for {{period}} period',
    scheduleError: 'Error scheduling notification',
    cancelSuccess: 'Notifications disabled',
    permissionRequired: 'Notification permission required',
    permissionDenied: 'Permission denied. Enable notifications in settings.',
    currentPeriod: 'Current period',
    changePeriod: 'Change',

    // Notification settings page
    settingsPage: {
      description: 'Receive a daily reminder for your encouragement',
      permissionDeniedTitle: 'Permissions denied',
      permissionDeniedMessage: 'Notifications are disabled in your device settings. Enable them to receive daily reminders.',
      permissionWarning: 'Notification permissions are not granted. Enable them in your device settings to receive reminders.',
      openSettings: 'Open settings',
      cancel: 'Cancel',
      confirm: 'Confirm',
      enabledTitle: 'Notifications enabled ✅',
      enabledMessage: 'You will receive a daily notification during the {{period}} period ({{description}}).\n\n📆 First notification: tomorrow\n⏰ Exact time: varies each day within this range',
      errorTitle: 'Error',
      enableError: 'Unable to enable notifications. Check permissions.',
      genericError: 'An error occurred.',
      disabledTitle: 'Notifications disabled',
      disabledMessage: 'Enable notifications to choose the reminder period.',
      periodUpdatedTitle: 'Period updated ✅',
      periodUpdatedMessage: 'You will receive your daily notification during the {{period}} period ({{description}}).\n\nFresh context guaranteed with each notification.',
      choosePeriod: 'Choose your period',
      periodHint: 'The exact time varies each day within the chosen period',
      infoHint: 'Notifications remind you every day to discover your personal encouragement. The time varies within the chosen period to keep it natural.',
      devModeTitle: 'Development Mode',
      devModeDescription: 'Test the notification display with a long message to check BigTextStyle (Android) and subtitle (iOS).',
      testButton: 'Send test notification (2s)',
      testScheduledTitle: 'Notification scheduled',
      testScheduledMessage: 'A test notification with a real message will be sent in 2 seconds.',
    },

    // iOS subtitles (displayed under notification title)
    subtitles: {
      verseNotRead: 'Verse of the Day',
      encouragementWaiting: 'Personalized Encouragement',
      badgeClose: 'Badge to unlock',
      streakActive: 'Active streak',
      comeback: 'Welcome back',
    },

    // Android channel (notification channel configuration)
    androidChannel: {
      name: 'Daily Encouragements',
      description: 'Notifications for daily verses and encouragements',
    },

    // Default fallback message
    fallback: {
      title: 'Hello!',
      body: '{{name}}, your daily encouragement awaits!',
    },
  },

  // ============================================
  // SHARING
  // ============================================
  share: {
    signature: 'Shared from VersetVie',
    success: 'Verse shared',
    error: 'Error sharing',
    errorTitle: 'Unable to share',
    errorMessage: 'Sharing failed. Try again later.',
    copied: 'Copied to clipboard',
    copiedMessage: 'Content has been copied to clipboard',
    // Sharing alerts
    alerts: {
      unavailable: {
        title: 'Sharing unavailable',
        message: 'Sharing is not available on this device. Content has been copied to clipboard.',
      },
      failed: {
        title: 'Sharing error',
        message: 'Unable to share content. Try again later.',
      },
    },
  },

  // ============================================
  // VALIDATION
  // ============================================
  validation: {
    invalidFirstName: 'Invalid first name',
  },

  // ============================================
  // ERRORS
  // ============================================
  errors: {
    // Generic errors
    generic: 'An error occurred',
    genericMessage: 'Something went wrong. Try again later.',
    network: 'Connection error',
    networkMessage: 'Check your internet connection and try again.',
    notFound: 'Not found',
    notFoundMessage: 'The requested resource was not found.',
    unauthorized: 'Unauthorized',
    unauthorizedMessage: 'You don\'t have access to this resource.',
    invalidInput: 'Invalid input',

    // Specific errors
    premium: 'This feature is reserved for Premium members',
    premiumMessage: 'Upgrade to Premium to unlock all features.',
    subscriptionFailed: 'Subscription failed',
    subscriptionFailedMessage: 'The subscription could not be processed. Try again later.',
    dataLoadFailed: 'Loading error',
    dataLoadFailedMessage: 'Data could not be loaded. Try again or reinstall the app.',
    verseLoadFailed: 'Unable to load verse',
    verseLoadFailedMessage: 'The verse could not be loaded. Try again later.',

    // Actions
    retry: 'Retry',
    cancel: 'Cancel',
    goBack: 'Go back',
    contactSupport: 'Contact support',
  },

  // ============================================
  // INTERNET CONNECTION
  // ============================================
  offline: {
    banner: 'No internet connection',
    message: 'Some features require an internet connection.',
    retry: 'Retry',
  },

  // ============================================
  // DEBUG MENU (Development only)
  // ============================================
  debug: {
    title: 'Debug Menu',
    warning: 'Development mode active',

    // Verse management
    versesSection: 'Verse management',
    changeVerse: 'Change verse now',
    verseChanged: 'New verse selected',

    // Onboarding
    onboarding: 'Onboarding',
    resetOnboarding: 'Reset onboarding',
    onboardingReset: 'Onboarding reset',

    // Subscription
    subscription: 'Subscription',
    simulateSubscription: 'Simulate subscription',
    free: 'Free',
    premiumMonthly: 'Premium Monthly',
    premiumYearly: 'Premium Yearly',
    subscriptionSimulated: 'Subscription simulated: {{type}}',

    // Information
    info: 'Information',
    version: 'Version',
    build: 'Build',
    currentSubscription: 'Current subscription',
    availableVerses: 'Available verses',
    currentVerse: 'Current verse',
    lastVerseChange: 'Last change',
    encouragementViewed: 'Encouragement viewed',
    currentTheme: 'Current theme',
    onboardingCompleted: 'Onboarding completed',
    userName: 'User name',
    userGender: 'User gender',
    attConsent: 'ATT consent',
    attAccepted: 'Accepted',
    attDenied: 'Denied',
    attNotAsked: 'Not asked',

    // Advanced actions
    actions: 'Advanced actions',
    clearData: 'Clear all data',
    clearDataConfirm: 'Are you sure? This action is irreversible.',
    clearDataSuccess: 'All data has been cleared',
    showLogs: 'Show logs',
    showAsyncStorage: 'AsyncStorage logs',
    testNotification: 'Test notifications',
    notificationSent: 'Test notification sent',

    // Values
    yes: 'Yes',
    no: 'No',
    male: 'Male',
    female: 'Female',
    verses: '{{count}} verses',
  },

  // ============================================
  // MIGRATION V1 → V2
  // ============================================
  migration: {
    // Migration phase
    title: 'Migrating your data',
    description: 'We are recovering your progress from the previous version.',
    step_checking: 'Checking data...',
    step_verses: 'Recovering viewed verses...',
    step_stats: 'Recovering your statistics...',
    step_favorites: 'Recovering your favorites...',
    step_finalizing: 'Finalizing...',

    // Success phase
    success_title: 'Migration successful!',
    success_description: 'Your data has been successfully recovered',

    // Detailed summary
    summary_title: 'Summary',
    summary_stats_title: '📊 Statistics',
    summary_verses_viewed: '{{count}} verses viewed',
    summary_encouragements_read: '{{count}} encouragements read',
    summary_days_active: '{{count}} days of activity',
    summary_streak_title: '🔥 Streaks',
    summary_current_streak: 'Current streak: {{count}} days',
    summary_best_streak: 'Best streak: {{count}} days',
    summary_favorites_title: '⭐ Favorites',
    summary_favorites_migrated: '{{count}} favorites recovered',

    // Actions
    auto_continue_in: 'App starts in {{seconds}}s',
    button_continue: 'Continue ({{seconds}})',
    button_continue_now: 'Continue',

    // Error
    error_title: 'Incomplete migration',
    error_description: 'Some data could not be recovered.',
    error_continue: 'The app works normally.',
  },

  // ============================================
  // LEGAL SCREENS - HELP AND SUPPORT
  // ============================================
  help: {
    title: 'Help & Support',
    description: 'Need help or assistance? We are here to help you use VersetVie. Check the FAQ below or contact us directly.',
    faqTitle: 'FAQ - Frequently Asked Questions',
    contactTitle: 'Contact',
    contactDescription: 'For any questions, suggestions, or technical issues:',
    contactUs: 'Contact us',
    faq: {
      howItWorks: {
        question: 'How does VersetVie work?',
        answer: 'Every day, discover a new Bible verse accompanied by a personalized encouragement to nourish your faith.',
      },
      oncePerDay: {
        question: 'Why can I only read one verse per day?',
        answer: 'We limit discovery to one verse and one encouragement per day to encourage daily meditation.',
      },
      changeInfo: {
        question: 'Can I change my name or gender?',
        answer: 'Yes, you can modify this information on the Profile page by clicking \'Edit\'.',
      },
      bug: {
        question: 'I\'m experiencing a bug, what should I do?',
        answer: 'Contact us via the link below',
      },
    },
  },

  // ============================================
  // LEGAL SCREENS - ABOUT
  // ============================================
  about: {
    title: 'About VersetVie',
    description: 'VersetVie is an app designed to encourage you every day with a Bible verse and a personalized word of encouragement. Discover, meditate, and share God\'s Word easily, wherever you are.',
    versesAvailable: 'Number of available verses',
    versesCount: '{{count}} verses',
    bibleVersion: 'Bible version',
    bibleVersionName: 'World English Bible',
    bibleVersionCopyright: 'Public domain',
    appVersion: 'App version',
    versionInfo: 'Version: {{version}}',
    thankYou: 'Thank you for using VersetVie!',
    developedWith: 'Developed with faith and passion to accompany you every day.',
  },

  // ============================================
  // LEGAL SCREENS - PRIVACY POLICY
  // ============================================
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: {{date}}',
    introduction: 'At VersetVie, we place great importance on protecting your personal data. This privacy policy explains how we collect, use, and protect your information in compliance with GDPR and other applicable regulations.',

    // Section 1 - Data collected
    section1: {
      title: '1. Data collected',
      profileDataTitle: 'Profile data (stored locally):',
      profileData: '• First name (optional, for personalization)\n• Gender (to adapt content)\n• Subscription mode (standard/premium)\n• App preferences',
      analyticsDataTitle: 'Anonymized usage data (via Mixpanel EU):',
      analyticsData: '• User gender (m/f)\n• Subscription mode (premium/standard)\n• Onboarding completion status\n• Usage events (screens visited, buttons clicked)\n• Content interactions (verses discovered)\n• Technical information (platform, app version)',
      attributionDataTitle: 'Attribution data (via Tenjin, with iOS ATT consent):',
      attributionData: '• IDFA (iOS with ATT consent)\n• GAID (Android)\n• Marketing campaign information (installation source)',
    },

    // Section 2 - What we do NOT collect
    section2: {
      title: '2. What we do NOT collect',
      content: 'We commit to NOT collecting:\n• Email addresses or phone numbers\n• Precise geographic location\n• Full text of viewed verses\n• Biometric data or photos\n• Web browsing history\n• Contacts or information from other apps',
    },

    // Section 3 - Data usage
    section3: {
      title: '3. Data usage',
      profileUsageTitle: 'Profile data:',
      profileUsage: '• Personalize your spiritual experience\n• Adapt content to your gender\n• Save your preferences',
      analyticsUsageTitle: 'Usage data (Mixpanel EU):',
      analyticsUsage: '• Analyze user engagement\n• Improve interface and features\n• Understand preferences by gender\n• Optimize onboarding process\n• Measure app performance',
      attributionUsageTitle: 'Attribution data (Tenjin):',
      attributionUsage: '• Measure marketing campaign effectiveness\n• Attribute installations to correct sources\n• Optimize advertising investments',
    },

    // Section 4 - Data sharing
    section4: {
      title: '4. Data sharing',
      mixpanelTitle: 'Mixpanel EU (analytics):',
      mixpanelContent: 'We use Mixpanel with EU servers to analyze app usage. Only anonymized data is shared (gender, subscription mode, usage events). No personally identifiable information is transmitted.',
      tenjinTitle: 'Tenjin (marketing attribution):',
      tenjinContent: 'We use Tenjin to measure marketing campaign effectiveness. On iOS, this requires your ATT (App Tracking Transparency) consent. You can refuse at any time.',
      revenuecatTitle: 'RevenueCat (subscription management):',
      revenuecatContent: 'RevenueCat manages Premium subscriptions and communicates with Apple/Google to verify purchases. Only data necessary for subscription management is shared.',
      supabaseTitle: 'Supabase (user feedback):',
      supabaseContent: 'We use Supabase to collect your feedback on the app (suggestions, paywall reviews). Only your feedback text and an anonymous identifier are stored. No personal data is transmitted.',
      noOtherSharingTitle: 'No other sharing:',
      noOtherSharing: 'We do not sell, trade, or rent your data to third parties for commercial purposes.',
    },

    // Section 5 - Storage and security
    section5: {
      title: '5. Storage and security',
      localStorageTitle: 'Local storage:',
      localStorage: 'Your profile data is stored only on your device via AsyncStorage (native encryption).',
      mixpanelStorageTitle: 'Mixpanel EU data:',
      mixpanelStorage: 'Anonymized usage data is stored on Mixpanel\'s secure servers in the European Union (GDPR compliant, SOC 2, encrypted in transit and at rest).',
      tenjinStorageTitle: 'Tenjin data:',
      tenjinStorage: 'Attribution data is stored on Tenjin servers according to their privacy policies.',
      supabaseStorageTitle: 'Supabase data:',
      supabaseStorage: 'Feedback is securely stored on Supabase servers (GDPR compliant, HTTPS encryption, secure authentication).',
      retentionTitle: 'Retention:',
      retention: '• Local data: kept until uninstallation\n• Mixpanel data: 24 months maximum\n• Tenjin data: per their retention policy\n• Supabase data: kept for product improvement',
    },

    // Section 6 - Your rights (GDPR)
    section6: {
      title: '6. Your rights (GDPR)',
      content: 'You have the following rights:',
      accessRight: 'Right of access:',
      accessRightDesc: ' Know what data is collected',
      rectificationRight: 'Right to rectification:',
      rectificationRightDesc: ' Correct your data via settings',
      erasureRight: 'Right to erasure:',
      erasureRightDesc: ' Uninstalling the app erases all your local data',
      objectionRight: 'Right to object:',
      objectionRightDesc: ' Refuse ATT tracking (iOS) or reset advertising ID (Android)',
      portabilityRight: 'Right to portability:',
      portabilityRightDesc: ' Export your favorites from the app',
      exerciseRights: 'To exercise these rights or for any questions, you can contact us via the "Help & Support" screen.',
    },

    // Section 7 - Cookies and tracking
    section7: {
      title: '7. Cookies and tracking',
      content: 'This mobile app does not use web cookies. Mixpanel analytics tracking uses temporary anonymous identifiers that do not allow personal identification. Tenjin attribution uses IDFA (iOS) or GAID (Android) with your consent.',
    },

    // Section 8 - Modifications
    section8: {
      title: '8. Modifications',
      content: 'We reserve the right to modify this privacy policy. Important changes will be notified via the app. The current version is always accessible in settings.',
    },

    // Section 9 - Contact
    section9: {
      title: '9. Contact',
      content: 'For any questions regarding this privacy policy or your personal data, contact us via the "Help & Support" screen of the app.',
    },

    // Choice card (optional, if you want to add a toggle for Mixpanel)
    choice: {
      title: 'Your choice',
      description: 'Now that you have read our privacy policy, you can choose whether to share anonymized usage data to help us improve the app.',
      acceptTracking: 'I accept sharing anonymized usage data (Mixpanel)',
      modifiableAnytime: 'You can change this choice at any time from this screen.',
    },
  },

  // ============================================
  // LEGAL SCREENS - TERMS OF SERVICE
  // ============================================
  terms: {
    title: 'Terms of Service',
    lastUpdated: 'Last updated:',
    welcome: 'Welcome to VersetVie. By using our app, you accept the following terms of service.',

    section1Title: '1. Acceptance of terms',
    section1Text: 'By accessing and using VersetVie, you agree to be bound by these terms of service. If you do not accept these terms, please do not use the app.',

    section2Title: '2. Use of service',
    section2Text: 'You agree to:\n• Use the app in accordance with applicable laws\n• Not use the app for illegal purposes\n• Not disrupt normal app operation\n• Respect intellectual property rights',

    section3Title: '3. User account',
    section3Text: 'You are responsible for:\n• The confidentiality of your account\n• All activities performed under your account\n• The accuracy of information provided',

    section4Title: '4. Terms modifications',
    section4Text: 'We reserve the right to modify these terms at any time. Changes will take effect upon publication in the app.',

    section5Title: '5. Contact',
    section5Text: 'For any questions regarding these terms of service, please contact us via the "Help and Support" section of the app.',
  },

  // ============================================
  // ONBOARDING V3
  // ============================================
  onboardingV3: {
    personalProblem: {
      title: 'What ',
      titleHighlight: 'weighs',
      titleEnd: ' on you right now?',
      subtitle: 'Freely share what occupies your heart.',
      placeholder: 'Write here...',
      infoNote: '🔒 Only your first name and prayer will be shared for community prayer in the app. No other personal information. If you don\'t agree, simply tap Continue.',
      sendButton: 'Send my prayer',
      skipButton: 'Skip this step',
    },
    questions: {
      title: 'Your journey of ',
      titleHighlight: 'communion',
      titleEnd: ' with Jesus',
      // Thematic progress bars
      theme1Label: 'Your relationship with Jesus',
      theme2Label: 'Your daily life',
      theme3Label: 'Your spiritual growth',
      // Contextual intros by question
      intro1: 'To start:',
      intro2: 'Still about your relationship with Jesus:',
      intro3: 'Let\'s talk about your daily life:',
      intro4: 'Still about your daily life:',
      intro5: 'About your growth:',
      intro6: 'One last question:',
      // Questions grouped by theme
      // Theme 1: Relationship with Jesus
      q1: 'Do you desire to have a personal and living relationship with Jesus?',
      q2: 'Do you want to learn to hear Jesus\' voice daily?',
      // Theme 2: Daily life
      q3: 'Do you feel the need to spend time with Jesus every day?',
      q4: 'Do you want to make Jesus your first reflex in your decisions?',
      // Theme 3: Spiritual growth
      q5: 'Would you like to track your spiritual growth?',
      q6: 'Do you wish to receive personalized encouragements from Jesus?',
      buttonNo: 'No',
      buttonYes: 'Yes',
      completedMessage: 'Thank you for your answers! We will now prepare your communion space.',
      readyMessage: 'Your communion space is ready!',
      loadingLabel: 'Preparing',
      continueButton: 'Continue',
    },
    prePaywall: {
      title: 'Your journey of ',
      titleHighlight: 'communion',
      titleEnd: ' starts here',
      subtitle: 'We are here to help you grow your relationship with Jesus through a heart-to-heart.',
      // Result-oriented benefits (not features)
      benefit1: 'Feel inner peace from the moment you wake up',
      benefit2: 'Start each day with a clear direction',
      benefit3: 'Grow spiritually day after day',
      // Testimonial (social proof)
      testimonialQuote: 'Since using VersetVie, my relationship with Jesus has completely changed. I feel closer to Him every day.',
      testimonialAuthor: 'Marie, user for 6 months',
      // Trust note
      trustNote: 'Cancel anytime',
      // CTA
      ctaButton: 'Continue',
      // Bottom note
      bottomNote: 'Every day, a verse and an encouragement to nourish your relationship with Jesus.',
    },
  },
};
