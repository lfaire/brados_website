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
                if (!reduced.matches) {
                  const isHeroPhoto =
                    entry.target.getAttribute("data-reveal") === "hero-photo";
                  entry.target.animate?.(
                    [
                      {
                        opacity: isHeroPhoto ? 0 : 0.65,
                        transform: isHeroPhoto
                          ? "translate(80px, 48px) rotate(4deg) scale(0.92)"
                          : "translateY(18px)",
                      },
                      { opacity: 1, transform: "none" },
                    ],
                    {
                      duration: isHeroPhoto ? 800 : 650,
                      easing: "cubic-bezier(.16,1,.3,1)",
                    },
                  );
                }
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
