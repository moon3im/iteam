"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLanguage() {
    const newLocale = locale === "ar" ? "en" : "ar";

    const segments = pathname.split("/");
    segments[1] = newLocale;

    router.push(segments.join("/"));
  }

  return (
    <button
      className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100 transition"
      onClick={switchLanguage}
    >
      {locale === "ar" ? "English" : "العربية"}
    </button>
  );
}
