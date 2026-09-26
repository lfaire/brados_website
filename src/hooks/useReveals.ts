import { useEffect } from "react";

export function useReveals() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    let observer: IntersectionObserver;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              try {
                if (!reduced.matches)
                  entry.target.animate?.(
                    [
                      { opacity: 0.65, transform: "translateY(18px)" },
                      { opacity: 1, transform: "translateY(0)" },
                    ],
                    { duration: 650, easing: "cubic-bezier(.16,1,.3,1)" },
                  );
              } catch {
                // Motion is optional; the underlying content is already visible.
              }
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
    } catch {
      return;
    }
    const elements = document.querySelectorAll("[data-reveal]");
    elements.forEach((element) => observer.observe(element));
    const cancelMotion = () => {
      if (reduced.matches)
        elements.forEach((element) =>
          element.getAnimations?.().forEach((animation) => animation.cancel()),
        );
    };
    reduced.addEventListener("change", cancelMotion);
    return () => {
      observer.disconnect();
      elements.forEach((element) =>
        element.getAnimations?.().forEach((animation) => animation.cancel()),
      );
      reduced.removeEventListener("change", cancelMotion);
    };
  }, []);
}
