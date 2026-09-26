import {
  fireEvent,
  render,
  screen,
  within,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import App from "../App";
import { MediaPlaceholder } from "../components/MediaPlaceholder";
import { media } from "../config/media";
import { formatPrice, phoneLink, safeWebLink } from "../lib";

describe("menu and navigation", () => {
  it("resolves a direct fragment after React mounts", async () => {
    window.history.replaceState(null, "", "#contacto");
    const scrollIntoView = vi.fn();
    const original = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = scrollIntoView;
    const { unmount } = render(<App />);
    await waitFor(() =>
      expect(scrollIntoView).toHaveBeenCalledWith({
        behavior: "instant",
        block: "start",
      }),
    );
    expect(scrollIntoView.mock.contexts[0]).toBe(
      document.getElementById("contacto"),
    );
    unmount();
    Element.prototype.scrollIntoView = original;
    window.history.replaceState(null, "", window.location.pathname);
  });
  it("selects Alitas through its anchor CTA and focuses the destination", async () => {
    render(<App />);
    const user = userEvent.setup();
    expect(
      screen.getByRole("tab", { name: /Pollo a la brasa/ }),
    ).toHaveAttribute("aria-selected", "true");
    const cta = screen.getByRole("link", { name: "Ver alitas" });
    expect(cta).toHaveAttribute("href", "#carta");
    await user.click(cta);
    expect(screen.getByRole("tab", { name: /Alitas/ })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(
      within(screen.getByRole("tabpanel")).getByRole("heading", {
        name: "Alitas para compartir",
      }),
    ).toBeVisible();
    await waitFor(() =>
      expect(document.getElementById("menu-title")).toHaveFocus(),
    );
  });
  it("supports keyboard category navigation with wrapping, Home and End", async () => {
    render(<App />);
    const user = userEvent.setup();
    screen.getByRole("tab", { name: /Pollo a la brasa/ }).focus();
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: /Alitas/ })).toHaveFocus();
    await user.keyboard("{End}");
    expect(screen.getByRole("tab", { name: /Bebidas/ })).toHaveFocus();
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: /Pollo a la brasa/ })).toHaveFocus();
    await user.keyboard("{ArrowLeft}");
    expect(screen.getByRole("tab", { name: /Bebidas/ })).toHaveFocus();
    await user.keyboard("{Home}");
    expect(screen.getByRole("tab", { name: /Pollo a la brasa/ })).toHaveFocus();
    expect(screen.getAllByRole("tabpanel")).toHaveLength(1);
  });
  it("closes mobile navigation on Escape and anchor selection", async () => {
    render(<App />);
    const user = userEvent.setup();
    const toggle = screen.getByRole("button", { name: /Menú/ });
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    await user.keyboard("{Escape}");
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
    await user.click(toggle);
    await user.click(
      within(
        screen.getByRole("navigation", { name: "Navegación principal" }),
      ).getByRole("link", { name: "Contacto" }),
    );
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    await waitFor(() =>
      expect(document.getElementById("contact-title")).toHaveFocus(),
    );
  });
});

describe("honest prototype states", () => {
  it("does not collect subscriptions or emit dead contact links or asset requests", () => {
    const { container } = render(<App />);
    expect(
      screen.getByText("Pronto podrás suscribirte a nuestras novedades."),
    ).toBeVisible();
    expect(container.querySelectorAll("form, input")).toHaveLength(0);
    expect(container.querySelectorAll("img")).toHaveLength(1);
    expect(
      screen.getByRole("img", { name: "Pollo a la brasa BRADOS" }),
    ).toHaveAttribute("loading", "eager");
    expect(
      container.querySelectorAll(
        'a[href="#"], a[href=""], a[href^="tel:"], a[href*="wa.me"]',
      ),
    ).toHaveLength(0);
    expect(
      screen.getAllByText("Teléfono por confirmar").length,
    ).toBeGreaterThan(0);
    expect(
      screen.getByLabelText("Instagram por configurar"),
    ).not.toHaveAttribute("href");
    container
      .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
      .forEach((link) =>
        expect(document.getElementById(link.hash.slice(1))).not.toBeNull(),
      );
  });
  it("falls back after image errors and can load a replacement source", () => {
    const { rerender } = render(
      <MediaPlaceholder slot={{ ...media.hero, src: "/fixture.webp" }} eager />,
    );
    expect(screen.getByRole("img")).toHaveAttribute("loading", "eager");
    fireEvent.error(screen.getByRole("img"));
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByText("Foto de pollo a la brasa")).toBeVisible();
    rerender(
      <MediaPlaceholder slot={{ ...media.hero, src: "/replacement.webp" }} />,
    );
    expect(screen.getByRole("img")).toHaveAttribute("loading", "lazy");
    expect(screen.getByRole("img")).toHaveAttribute("width", "1448");
  });
  it("keeps all content visible when animation observers are unavailable", () => {
    const { container } = render(<App />);
    container
      .querySelectorAll("[data-reveal]")
      .forEach((element) => expect(element).toBeVisible());
  });
  it("keeps content available if animation initialization fails", () => {
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        constructor() {
          throw new Error("Observer unavailable");
        }
      },
    );
    const { unmount } = render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
    expect(screen.getByRole("link", { name: "Ver alitas" })).toBeVisible();
    unmount();
    vi.unstubAllGlobals();
  });
  it("does not start reveal animations for reduced motion", () => {
    const animate = vi.fn();
    const originalAnimate = Element.prototype.animate;
    Element.prototype.animate = animate;
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        callback: IntersectionObserverCallback;
        constructor(callback: IntersectionObserverCallback) {
          this.callback = callback;
        }
        observe(target: Element) {
          this.callback(
            [{ isIntersecting: true, target } as IntersectionObserverEntry],
            this as unknown as IntersectionObserver,
          );
        }
        unobserve() {}
        disconnect() {}
      },
    );
    vi.mocked(window.matchMedia).mockReturnValue({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    } as unknown as MediaQueryList);
    const { unmount } = render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
    expect(animate).not.toHaveBeenCalled();
    unmount();
    Element.prototype.animate = originalAnimate;
    vi.unstubAllGlobals();
    vi.mocked(window.matchMedia).mockReturnValue({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    } as unknown as MediaQueryList);
  });
});

describe("public data helpers", () => {
  it("formats CLP without decimals and keeps unknown prices explicit", () => {
    expect(formatPrice(null)).toBe("Precio por confirmar");
    expect(formatPrice(12990)).toBe("$12.990");
  });
  it("only accepts actionable contact URLs", () => {
    expect(safeWebLink(null)).toBeUndefined();
    expect(safeWebLink("javascript:alert(1)")).toBeUndefined();
    expect(safeWebLink("not-a-url")).toBeUndefined();
    expect(safeWebLink("https://instagram.com/brados")).toBe(
      "https://instagram.com/brados",
    );
    expect(phoneLink("pending")).toBeUndefined();
    expect(phoneLink("+56 9 1234 5678")).toBe("tel:+56912345678");
  });
});
