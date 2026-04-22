"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GA4_ID = "G-BMZH34QV07";

export default function GtagPageview() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      send_to: GA4_ID,
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
