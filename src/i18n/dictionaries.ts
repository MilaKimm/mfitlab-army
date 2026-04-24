import { ko } from "./ko";
import { en } from "./en";

export type Locale = "ko" | "en";
export type Dictionary = typeof ko;

const dictionaries: Record<Locale, Dictionary> = { ko, en };

export const LOCALES: Locale[] = ["ko", "en"];
export const DEFAULT_LOCALE: Locale = "ko";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as string[]).includes(value);
}

/** Given a current pathname, produce the URL for the same page in the target locale. */
export function localizePath(pathname: string, target: Locale): string {
  const clean = pathname.replace(/^\/en(\/|$)/, "/");
  if (target === "ko") return clean === "" ? "/" : clean;
  return clean === "/" ? "/en" : `/en${clean}`;
}

/** Prefix an internal path with the locale. For "ko" returns as-is; for "en" prefixes "/en". */
export function localePrefix(path: string, locale: Locale): string {
  if (locale === "ko") return path;
  if (path === "/") return "/en";
  return `/en${path.startsWith("/") ? path : `/${path}`}`;
}
