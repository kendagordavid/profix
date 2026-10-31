"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = "[data-reveal]:not(.is-visible), [data-stagger]:not(.is-visible)";

/** Adds .is-visible to [data-reveal] / [data-stagger] elements as they scroll into view. */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -80px 0px" }
    );

    document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("is-visible", "reveal-instant");
      } else {
        observer.observe(el);
      }
    });
    document.documentElement.classList.add("motion-ready");

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
