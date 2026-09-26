import { useState, type CSSProperties } from "react";
import type { MediaSlot } from "../config/media";

export function MediaPlaceholder({
  slot,
  variant = "hero",
  eager = false,
}: {
  slot: MediaSlot;
  variant?: "hero" | "kitchen" | "sauces" | "wings";
  eager?: boolean;
}) {
  const [failedSource, setFailedSource] = useState<string>();
  const hasImage = slot.src && slot.src !== failedSource;
  const word = {
    hero: "BRASA",
    kitchen: "A LA\nBRASA.",
    sauces: "EL TOQUE\nFINAL.",
    wings: "ALITAS",
  }[variant];
  return (
    <figure
      className={`media media--${variant}`}
      style={{ "--media-ratio": slot.aspectRatio } as CSSProperties}
    >
      {hasImage ? (
        <img
          src={slot.src}
          srcSet={slot.srcSet}
          sizes={slot.sizes || "(max-width: 760px) 100vw, 50vw"}
          alt={slot.alt}
          width={slot.width}
          height={slot.height}
          style={{ objectPosition: slot.objectPosition }}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          onError={() => setFailedSource(slot.src)}
        />
      ) : (
        <>
          <div className="media-art" aria-hidden="true">
            <span className="media-orbit" />
            <span className="media-word">{word}</span>
            <span className="media-corner">B / CW</span>
          </div>
          <figcaption>
            <span>{slot.placeholderLabel}</span>
            <span>Espacio para fotografía</span>
          </figcaption>
        </>
      )}
    </figure>
  );
}
