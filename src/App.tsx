import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { BrandMark } from "./components/BrandMark";
import { MediaPlaceholder } from "./components/MediaPlaceholder";
import { Menu } from "./components/Menu";
import { brand, navigation } from "./config/brand";
import { media } from "./config/media";
import { type CategoryId } from "./config/menu";
import { SignatureSauces } from "./components/SignatureSauces";
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
                Pronta inauguración!
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

            </div>
            <div className="hero-preview" data-reveal="hero-photo">
              <MediaPlaceholder slot={media.heroDetail} variant="wings" />
            </div>
            <div className="hero-continuation" data-reveal>
              <div className="worlds-heading">
                <div className="worlds-title-row">
                  <h2>
                    <span>Queda muy poco</span>
                  </h2>
                  <div
                    className="worlds-flags"
                  >
                    
                  </div>
                </div>
            
              </div>
              <div className="worlds-story">
                  Estamos trabajando a toda máquina para llevarte la  mejor sazón del pollo a la brasa y de las alitas de pollo! Te lo prometemos, falta muy poco!
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
