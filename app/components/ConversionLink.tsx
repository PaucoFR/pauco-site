"use client";

import Link from "next/link";

export default function ConversionLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={() => {
        if (typeof window !== "undefined" && typeof window.gtag === "function")
          window.gtag("event", "conversion", {
            send_to: "AW-18006689412/BR9XCNWZvZUcEISNoYpD",
          });
      }}
      className={className}
    >
      {children}
    </Link>
  );
}
