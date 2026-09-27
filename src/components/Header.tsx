import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa6";
import { BrandMark } from "./BrandMark";
import { navigation } from "../config/brand";
import { focusSection } from "../lib";
import { business, links } from "../config/business";
import { phoneLink, safeWebLink } from "../lib";

const socialLinks = [
  { label: "Instagram", icon: FaInstagram, href: safeWebLink(links.instagram) },
  { label: "Facebook", icon: FaFacebookF, href: safeWebLink(links.facebook) },
  { label: "TikTok", icon: FaTiktok, href: safeWebLink(links.tiktok) },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const phone = phoneLink(business.phone);
  useEffect(() => {
    if (open) {
      document.querySelector<HTMLAnchorElement>("#main-navigation a")?.focus();
    }
  }, [open]);
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 1101px)");
    const onDesktop = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", onEscape);
    media.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onEscape);
      media.removeEventListener("change", onDesktop);
    };
  }, [open]);
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setCompact(window.scrollY > 48));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  useEffect(() => {
    const element = header.current;
    if (!element || !("ResizeObserver" in window)) return;
    const observer = new ResizeObserver(() =>
      document.documentElement.style.setProperty(
        "--header-height",
        `${element.offsetHeight}px`,
      ),
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--header-height");
    };
  }, []);
  return (
    <header
      className={`header${compact ? " header--compact" : ""}`}
      ref={header}
    >
      <div className="header-inner">
        <a
          href="#inicio"
          className="brand-link"
          aria-label="BRADOS — Inicio"
          onClick={() => {
            setOpen(false);
            focusSection("inicio");
          }}
        >
          <BrandMark />
        </a>
        <nav
          id="main-navigation"
          aria-label="Navegación principal"
          className={open ? "navigation is-open" : "navigation"}
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setOpen(false);
                focusSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="header-socials" aria-label="Redes sociales">
            {socialLinks.map((social) =>
              social.href ? (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                >
                  <social.icon size={20} aria-hidden="true" focusable="false" />
                </a>
              ) : (
                <span
                  key={social.label}
                  aria-label={`${social.label} por configurar`}
                >
                  <social.icon size={20} aria-hidden="true" focusable="false" />
                </span>
              ),
            )}
          </div>
          {phone ? (
            <a className="header-phone" href={phone}>
              {business.phone}
            </a>
          ) : (
            <span className="header-phone header-phone--pending">
              Teléfono por confirmar
            </span>
          )}
          <button
            className="nav-toggle"
            type="button"
            ref={button}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">{open ? "Cerrar" : "Menú"}</span>
            <span className="nav-toggle-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
