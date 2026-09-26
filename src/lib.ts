export const formatPrice = (price: number | null) =>
  price === null
    ? "Precio por confirmar"
    : new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0,
      }).format(price);

export function safeWebLink(value: string | null): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) &&
      !url.username &&
      !url.password
      ? url.href
      : undefined;
  } catch {
    return undefined;
  }
}

export function phoneLink(value: string | null): string | undefined {
  const normalized = value?.replace(/[\s()-]/g, "");
  return normalized && /^\+\d{8,15}$/.test(normalized)
    ? `tel:${normalized}`
    : undefined;
}

export function focusSection(id: string) {
  requestAnimationFrame(() => {
    document
      .getElementById(id)
      ?.querySelector<HTMLElement>("h1, h2")
      ?.focus({ preventScroll: true });
  });
}
