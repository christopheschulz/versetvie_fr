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
    appStore: '/badges/appstore-fr.svg',
    googlePlay: '/badges/googleplay-fr.png',
  },
  en: {
    appStore: '/badges/appstore-en.svg',
    googlePlay: '/badges/googleplay-en.png',
  },
  de: {
    appStore: '/badges/appstore-de.svg',
    googlePlay: '/badges/googleplay-de.png',
  },
};
