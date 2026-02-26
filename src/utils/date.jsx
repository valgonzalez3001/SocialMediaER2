// Maps i18next language codes to BCP 47 locale identifiers
const LOCALE_MAP = {
  en: "en-GB",
  es: "es-ES",
  fi: "fi-FI",
  sr: "sr-Latn-RS",
};

const resolveLocale = (lang = "en") =>
  LOCALE_MAP[lang?.slice(0, 2)] ?? LOCALE_MAP.en;

export const createdOnDate = (user, lang = "en") => {
  if (!user?.createdAt) return "Unknown";
  const createdOn = new Date(user?.createdAt);
  if (isNaN(createdOn.getTime())) return "Unknown";
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return createdOn.toLocaleDateString(resolveLocale(lang), options);
};


export const getTimeDifference = (date, lang = "en") => {
  const datePosted = new Date(date);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return datePosted.toLocaleDateString(resolveLocale(lang), options);
};
