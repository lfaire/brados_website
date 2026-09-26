import { useEffect, useRef, useState } from "react";
import { BrandMark } from "./BrandMark";
import { navigation } from "../config/brand";
import { focusSection } from "../lib";

export function Header() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 761px)");
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
    <header className="header" ref={header}>
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
        <button
          className="nav-toggle"
          type="button"
          ref={button}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Cerrar" : "Menú"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
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
      </div>
    </header>
  );
}
