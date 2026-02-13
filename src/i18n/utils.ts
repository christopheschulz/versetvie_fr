import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/**
 * Returns the locale prefix for URLs.
 * French (default) has no prefix, other locales get /{lang}
 */
export function getLocalePrefix(lang: Lang): string {
  if (lang === defaultLang) return '';
  return `/${lang}`;
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

export const storeUrls = {
  appStore: 'https://apps.apple.com/app/versetvie/id6746123018',
  googlePlay: 'https://play.google.com/store/apps/details?id=com.anonymous.versetvie&pcampaignid=web_share',
};

export const storeBadges = {
  fr: {
    appStore: 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/fr-fr',
    googlePlay: 'https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png',
  },
  en: {
    appStore: 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us',
    googlePlay: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png',
  },
  de: {
    appStore: 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/de-de',
    googlePlay: 'https://play.google.com/intl/en_us/badges/static/images/badges/de_badge_web_generic.png',
  },
};
