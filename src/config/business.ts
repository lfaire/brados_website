export interface BusinessDetails {
  city: string;
  country: string;
  address: string | null;
  hours: string | null;
  phone: string | null;
}
export const business: BusinessDetails = {
  city: "Linares",
  country: "Chile",
  address: null,
  hours: null,
  phone: null,
};
export interface ExternalLinks {
  whatsapp: string | null;
  instagram: string | null;
  facebook: string | null;
  tiktok: string | null;
  map: string | null;
  privacy: string | null;
}
export const links: ExternalLinks = {
  whatsapp: null,
  instagram: null,
  facebook: null,
  tiktok: null,
  map: null,
  privacy: null,
};
// Reserved for a future separately implemented integration. No form is rendered in v1.
export const subscription: { available: false; message: string } = {
  available: false,
  message: "Pronto podrás suscribirte a nuestras novedades.",
};
