import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { BrandMark } from "./components/BrandMark";
import { MediaPlaceholder } from "./components/MediaPlaceholder";
import { Menu } from "./components/Menu";
import { brand, navigation } from "./config/brand";
import { media } from "./config/media";
import { sauces, type CategoryId } from "./config/menu";
import { business, links, subscription } from "./config/business";
import { focusSection, phoneLink, safeWebLink } from "./lib";
import { useReveals } from "./hooks/useReveals";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function App() {
  const [category, setCategory] = useState<CategoryId>("pollo");
  useEffect(() => {
    // React mounts after the initial document navigation. Resolve deep anchors
    // once the sections exist, without adding a router or altering history.
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(window.location.hash.slice(1));
      target?.scrollIntoView?.({ behavior: "instant", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  useReveals();
  const instagram = safeWebLink(links.instagram);
  const whatsapp = safeWebLink(links.whatsapp);
  const map = safeWebLink(links.map);
  const privacy = safeWebLink(links.privacy);
  const phone = phoneLink(business.phone);
  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <section id="inicio" className="hero" aria-labelledby="hero-title">
          <div className="hero-stage">
            <div className="hero-portrait">
              <MediaPlaceholder slot={media.hero} eager />
            </div>
            <div className="hero-headline">
              <span className="hero-star" aria-hidden="true">
                ★
              </span>
              <h1 id="hero-title" tabIndex={-1}>
                <span>SABOR QUE</span>
                <span>
                  PRENDE<span className="hero-period">.</span>
                </span>
              </h1>
              <span className="hero-script" aria-hidden="true">
                Más momentos juntos!
              </span>
            </div>
            <div className="hero-details" data-reveal>
              <p className="hero-introduction">{brand.introduction}</p>
              <div className="hero-detail-row">
                <span className="hero-detail-icon" aria-hidden="true">
                  ⌖
                </span>
                <div>
                  <p className="hero-detail-title">DIRECCIÓN</p>
                  <p>{business.address || "Dirección por confirmar."}</p>
                  <p>
                    {business.city}, {business.country}
                  </p>
                </div>
              </div>
              <div className="hero-detail-row">
                <span className="hero-detail-icon" aria-hidden="true">
                  ◷
                </span>
                <div>
                  <p className="hero-detail-title">HORARIOS</p>
                  <p>{business.weekdayhours || "Horarios por confirmar."}</p>
                  <p>{business.weekendhours || "Horarios por confirmar."}</p>
                </div>
              </div>
              <div className="hero-actions">
                <a
                  className="button button-cream"
                  href="#carta"
                  onClick={() => focusSection("carta")}
                >
                  Ver carta <Arrow />
                </a>
                <a
                  className="text-link"
                  href="#nosotros"
                  onClick={() => focusSection("nosotros")}
                >
                  Conócenos <Arrow />
                </a>
              </div>
            </div>
            <div className="hero-preview" data-reveal="hero-photo">
              <MediaPlaceholder slot={media.heroDetail} variant="wings" />
            </div>
            <div className="hero-continuation" data-reveal>
              <div className="worlds-heading">
                <p className="worlds-eyebrow">Nuestra mezcla</p>
                <div className="worlds-title-row">
                  <h2>
                    <span>Lo mejor de</span>
                    <span className="worlds-title-last">
                      3 mundos<span className="worlds-period">.</span>
                    </span>
                  </h2>
                  <div
                    className="worlds-flags"
                    aria-label="Perú, Estados Unidos y Chile"
                  >
                    <figure>
                      <span
                        className="fi fi-pe worlds-flag"
                        role="img"
                        aria-label="Bandera de Perú"
                      />
                      <figcaption></figcaption>
                    </figure>
                    <figure>
                      <span
                        className="fi fi-cl worlds-flag"
                        role="img"
                        aria-label="Bandera de Chile"
                      />
                      <figcaption></figcaption>
                    </figure>
                    <figure>
                      <span
                        className="fi fi-us worlds-flag"
                        role="img"
                        aria-label="Bandera de Estados Unidos"
                      />
                      <figcaption></figcaption>
                    </figure>
                    
                  </div>
                </div>
                <p className="worlds-intro">
                  Tres culturas que son parte de nuestro origen y nuestra
                  historia se encuentran alrededor del fuego para crear un sabor
                  con identidad propia.
                </p>
              </div>

              <div className="worlds-story">
                <p className="worlds-blend">
                  La sazón del pollo a la brasa del <strong style={{ color: "var(--ember)" }}>Perú</strong>, la crocancia de las chicken wings
                  de <strong style={{ color: "var(--ember)" }}>Estados Unidos</strong> y la identidad culinaria de <strong style={{ color: "var(--ember)" }}>Chile</strong> se juntan en una cocina hecha
                  para compartir.
                </p>
              </div>
            </div>
            <a
              className="hero-scroll eyebrow"
              href="#cocina"
              onClick={() => focusSection("cocina")}
            >
              Sigue el sabor <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section
          id="cocina"
          className="section cream kitchen-section"
          aria-labelledby="kitchen-title"
        >
          <div className="container kitchen-grid">
            <div className="kitchen-visual" data-reveal>
              <MediaPlaceholder slot={media.kitchen} variant="kitchen" />
              <span className="image-footnote">01 / El centro de la mesa</span>
            </div>
            <div className="kitchen-copy" data-reveal>
              <span className="eyebrow">Nuestra cocina</span>
              <h2 id="kitchen-title" tabIndex={-1}>
                NUESTRAS SALSAS
                <br />
                <span className="underlined-word">SIGNATURE</span>
                <br />
              </h2>
              <p>
                Inspiración peruana y esa forma tan nuestra de reunirnos
                alrededor de algo rico.
              </p>
              <p>
                En BRADOS, el pollo a la brasa es una invitación a compartir. Tú
                pones la compañía.
              </p>
              <span className="small-signature">BRADOS — Chicken & Wings</span>
            </div>
          </div>
        </section>

        <section
          id="salsas"
          className="section red sauces-section"
          aria-labelledby="sauces-title"
        >
          <div className="container">
            <div className="section-top">
              <span className="eyebrow">02 / Salsas</span>
              <span className="eyebrow">Los detalles cuentan</span>
            </div>
            <div className="sauces-heading" data-reveal>
              <h2 id="sauces-title" tabIndex={-1}>
                UN POCO MÁS.
                <br />
                MUCHO MEJOR.
              </h2>
              <p>
                Hay espacio para un toque más.
                <br />
                Pronto conocerás nuestras salsas.
              </p>
            </div>
            <div className="sauces-grid">
              <MediaPlaceholder slot={media.sauces} variant="sauces" />
              <div className="sauce-list">
                <p className="sample-label">
                  Selección de muestra · Por confirmar
                </p>
                {sauces.map((sauce, i) => (
                  <article className="sauce-item" key={sauce.id}>
                    <span className="eyebrow">0{i + 1}</span>
                    <div>
                      <h3>{sauce.name}</h3>
                      <p>{sauce.description}</p>
                      {sauce.heat && (
                        <span className="sample-label">
                          Picor: {sauce.heat}
                        </span>
                      )}
                      {sauce.provisional && (
                        <span className="sr-only">Contenido provisional</span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="alitas"
          className="section wings-section"
          aria-labelledby="wings-title"
        >
          <div className="container">
            <div className="section-top">
              <span className="eyebrow">03 / Alitas</span>
              <span className="eyebrow">La excusa perfecta</span>
            </div>
            <div className="wings-grid">
              <div data-reveal>
                <h2 id="wings-title" tabIndex={-1}>
                  HOY SE
                  <br />
                  COMPARTE.
                </h2>
                <p>
                  Alitas al centro. Buena compañía alrededor.
                  <br />
                  Los mejores planes empiezan así.
                </p>
                <a
                  className="button button-cream"
                  href="#carta"
                  onClick={() => {
                    setCategory("alitas");
                    focusSection("carta");
                  }}
                >
                  Ver alitas <Arrow />
                </a>
              </div>
              <div className="wings-visual" data-reveal>
                <MediaPlaceholder slot={media.wings} variant="wings" />
                <span className="image-footnote">
                  Más manos. Mejores momentos.
                </span>
              </div>
            </div>
          </div>
        </section>

        <Menu active={category} onChange={setCategory} />

        <section
          id="nosotros"
          className="section red about-section"
          aria-labelledby="about-title"
        >
          <div className="container">
            <span className="eyebrow">05 / Nosotros</span>
            <h2 id="about-title" tabIndex={-1} data-reveal>
              EL SABOR NOS JUNTA.
              <br />
              LO DEMÁS,
              <br />
              <span className="about-indent">SE COMPARTE.</span>
            </h2>
            <div className="about-bottom">
              <span className="about-place">
                DE LINARES.
                <br />
                PARA LA MESA.
              </span>
              <p>
                Somos BRADOS. Pollo a la brasa y alitas con inspiración peruana
                y calidez chilena. Una forma contemporánea, cercana y sin
                vueltas de disfrutar algo rico juntos.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="section contact-section"
          aria-labelledby="contact-title"
        >
          <div className="container contact-grid">
            <div>
              <span className="eyebrow">06 / Contacto</span>
              <h2 id="contact-title" tabIndex={-1}>
                NOS VEMOS
                <br />
                EN LINARES.
              </h2>
              <p>
                Tu próximo buen momento,
                <br />
                cada vez más cerca.
              </p>
              <span className="location-line">
                {business.city}, {business.country}{" "}
                <span aria-hidden="true">↗</span>
              </span>
            </div>
            <div className="contact-details">
              <div className="contact-row">
                <h3>Encuéntranos</h3>
                <p>
                  {business.address ||
                    "Pronto compartiremos nuestra dirección."}
                </p>
                {map && (
                  <a className="text-link" href={map}>
                    Ver en el mapa <Arrow />
                  </a>
                )}
              </div>
              <div className="contact-row">
                <h3>Horarios</h3>
                <p>{business.weekdayhours || "Horarios por confirmar."}</p>
                <p>{business.weekendhours || "Horarios por confirmar."}</p>
              </div>
              <div className="contact-row">
                <h3>Hablemos</h3>
                {phone ? (
                  <a className="text-link" href={phone}>
                    {business.phone}
                  </a>
                ) : (
                  <p>Teléfono por confirmar.</p>
                )}
                {whatsapp ? (
                  <a className="text-link" href={whatsapp}>
                    WhatsApp <Arrow />
                  </a>
                ) : (
                  <p>WhatsApp disponible próximamente.</p>
                )}
              </div>
              <div className="contact-row">
                <h3>Sigue el sabor</h3>
                {instagram ? (
                  <a className="text-link" href={instagram}>
                    Instagram <Arrow />
                  </a>
                ) : (
                  <p>Pronto nos encontrarás en Instagram.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section
          id="suscribete"
          className="newsletter cream"
          aria-labelledby="newsletter-title"
        >
          <div className="container newsletter-grid">
            <div>
              <span className="eyebrow">Que no se enfríe el plan</span>
              <h2 id="newsletter-title" tabIndex={-1}>
                LO BUENO
                <br />
                ESTÁ POR VENIR.
              </h2>
            </div>
            <div className="newsletter-message">
              <span className="availability">
                <span className="status-dot" aria-hidden="true" />
                Próximamente
              </span>
              <p>{subscription.message}</p>
              <span>Noticias de apertura, novedades y más sabor.</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <a
              href="#inicio"
              className="brand-link"
              aria-label="BRADOS — Volver al inicio"
              onClick={() => focusSection("inicio")}
            >
              <BrandMark large />
            </a>
            <nav aria-label="Navegación del pie de página">
              {navigation.map((item) => (
                <a
                  href={`#${item.id}`}
                  key={item.id}
                  onClick={() => focusSection(item.id)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} BRADOS. Sabor que prende.</span>
            <span>
              Linares, Chile
              {instagram && (
                <>
                  {" "}
                  · <a href={instagram}>Instagram</a>
                </>
              )}
              {privacy && (
                <>
                  {" "}
                  · <a href={privacy}>Privacidad</a>
                </>
              )}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
