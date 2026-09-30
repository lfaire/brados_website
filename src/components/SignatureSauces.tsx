import { sauces, type Sauce } from "../config/menu";

// Transparent vector artwork keeps the concept imagery light and replaceable.
function SauceIllustration({ sauce }: { sauce: Sauce }) {
  return (
    <svg viewBox="0 0 560 400" role="img" aria-labelledby={`${sauce.id}-image`}>
      <title id={`${sauce.id}-image`}>
        Ilustración de un cuenco de salsa {sauce.name}
      </title>
      <ellipse
        cx="281"
        cy="321"
        rx="166"
        ry="17"
        fill="#100f0e"
        opacity=".35"
      />
      <path
        d="M109 178C114 283 157 320 280 322C401 320 444 279 451 178Z"
        fill="#35322d"
      />
      <path
        d="M130 210C148 281 195 305 276 308"
        fill="none"
        stroke="#625b4d"
        strokeWidth="3"
        opacity=".6"
      />
      <ellipse cx="280" cy="178" rx="174" ry="109" fill="#49443b" />
      <ellipse cx="280" cy="175" rx="165" ry="100" fill="#1c1b18" />
      <ellipse cx="280" cy="178" rx="154" ry="90" fill={sauce.color} />
      <path
        d="M149 181C141 135 215 104 287 107C357 109 410 138 416 177C387 143 344 133 287 134C233 132 175 148 149 181Z"
        fill={sauce.highlight}
        opacity=".7"
      />
      <path
        d="M187 197C199 159 305 142 350 173C390 204 300 235 250 216C204 200 269 175 306 190"
        fill="none"
        stroke={sauce.highlight}
        strokeWidth="9"
        strokeLinecap="round"
        opacity=".65"
      />
      <path
        d="M148 236C194 276 357 291 415 231"
        fill="none"
        stroke="#8b7d65"
        strokeWidth="2"
        opacity=".55"
      />
      {Array.from({ length: 22 }, (_, i) => {
        const x = 181 + ((i * 53) % 202);
        const y = 141 + ((i * 29) % 79);
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx={i % 3 === 0 ? 4 : 2}
            ry="1.5"
            fill={sauce.garnish}
            transform={`rotate(${i * 31} ${x} ${y})`}
          />
        );
      })}
      <path
        d="M162 136C188 111 223 101 255 99"
        fill="none"
        stroke="#f5eddc"
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".35"
      />
    </svg>
  );
}

export function SignatureSauces() {
  return (
    <section
      id="salsas"
      className="section signature-section"
      aria-labelledby="sauces-title"
    >
      <div className="container signature-container">
        <div className="signature-heading" data-reveal>
          <span className="eyebrow">El toque que lo cambia todo</span>
          <h2 id="sauces-title" tabIndex={-1}>
            NUESTRAS SALSAS{" "}
            <span>
              SIGNATURE<span className="signature-period">.</span>
            </span>
          </h2>
          <p>
            Seis formas de darle otra vuelta al sabor.
            <br />
            Encuentra la tuya y haz la mezcla a tu manera.
          </p>
        </div>
        <div className="signature-rows">
          {sauces.map((sauce, index) => (
            <article
              className="signature-row"
              key={sauce.id}
              aria-labelledby={`${sauce.id}-title`}
              data-reveal
            >
              <div className="signature-art">
                <SauceIllustration sauce={sauce} />
              </div>
              <div className="signature-copy">
                <span className="signature-index" aria-hidden="true">
                  0{index + 1} <span>/</span> 05
                </span>
                <h3 id={`${sauce.id}-title`}>{sauce.name}</h3>
                <p className="signature-character">{sauce.character}</p>
                <p className="signature-description">{sauce.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="signature-signoff">
          Un buen bocado. <span>Tu toque personal.</span>
        </p>
      </div>
    </section>
  );
}
