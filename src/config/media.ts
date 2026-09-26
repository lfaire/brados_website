import mainHero from "../assets/mainhero.png";

export interface MediaSlot {
  src?: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  aspectRatio: string;
  objectPosition: string;
  placeholderLabel: string;
  width: number;
  height: number;
}

export const media: Record<
  "hero" | "heroDetail" | "kitchen" | "sauces" | "wings",
  MediaSlot
> = {
  hero: {
    src: mainHero,
    alt: "Pollo a la brasa BRADOS",
    aspectRatio: "4 / 3",
    objectPosition: "center",
    placeholderLabel: "Foto de pollo a la brasa",
    width: 1448,
    height: 1086,
  },
  heroDetail: {
    alt: "Alitas BRADOS para compartir",
    aspectRatio: "3 / 2",
    objectPosition: "center",
    placeholderLabel: "Foto de alitas para compartir",
    width: 1500,
    height: 1000,
  },
  kitchen: {
    alt: "Pollo a la brasa para compartir",
    aspectRatio: "4 / 5",
    objectPosition: "center",
    placeholderLabel: "Foto de nuestra cocina",
    width: 1200,
    height: 1500,
  },
  sauces: {
    alt: "Selección de salsas BRADOS",
    aspectRatio: "16 / 9",
    objectPosition: "center",
    placeholderLabel: "Foto de salsas",
    width: 1600,
    height: 900,
  },
  wings: {
    alt: "Alitas BRADOS",
    aspectRatio: "3 / 2",
    objectPosition: "center",
    placeholderLabel: "Foto de alitas",
    width: 1500,
    height: 1000,
  },
};
