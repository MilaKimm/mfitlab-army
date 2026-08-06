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

/**
 * 홈의 도입 문의 섹션으로 가는 링크.
 *
 * 문의 섹션(id="contact")은 홈에만 있으므로, 홈이 아닌 페이지에서 `#contact`처럼
 * 맨 해시를 쓰면 대상이 없어 아무 일도 일어나지 않는다. 항상 홈 경로를 포함시킨다.
 */
export function contactHref(locale: Locale): string {
  return locale === "en" ? "/en#contact" : "/#contact";
}

/** Prefix an internal path with the locale. For "ko" returns as-is; for "en" prefixes "/en". */
export function localePrefix(path: string, locale: Locale): string {
  if (locale === "ko") return path;
  if (path === "/") return "/en";
  return `/en${path.startsWith("/") ? path : `/${path}`}`;
}
