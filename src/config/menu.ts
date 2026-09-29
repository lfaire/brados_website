export type CategoryId = "pollo" | "alitas" | "acompanamientos" | "bebidas";
export interface MenuProduct {
  id: string;
  name: string;
  description: string;
  price: number | null;
  provisional: boolean;
}
export interface MenuCategory {
  id: CategoryId;
  label: string;
  products: MenuProduct[];
}

export const menu: MenuCategory[] = [
  {
    id: "pollo",
    label: "Pollo a la brasa",
    products: [
      {
        id: "pollo-compartir",
        name: "Pollo a la brasa",
        description:
          "El centro de la mesa. Presentaciones y acompañamientos por confirmar.",
        price: null,
        provisional: true,
      },
    ],
  },
  {
    id: "alitas",
    label: "Alitas",
    products: [
      {
        id: "alitas-compartir",
        name: "Alitas para compartir",
        description:
          "Un buen motivo para juntarse. Porciones y opciones por confirmar.",
        price: null,
        provisional: true,
      },
    ],
  },
  {
    id: "acompanamientos",
    label: "Acompañamientos",
    products: [
      {
        id: "acompanamiento",
        name: "Acompañamiento por definir",
        description: "Estamos preparando los detalles de esta categoría.",
        price: null,
        provisional: true,
      },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    products: [
      {
        id: "bebida",
        name: "Bebida por definir",
        description: "Opciones y formatos disponibles por confirmar.",
        price: null,
        provisional: true,
      },
    ],
  },
];

export interface Sauce {
  id: string;
  name: string;
  description: string;
  character: string;
  color: string;
  highlight: string;
  garnish: string;
  provisional: boolean;
}

// Sample flavor concepts, pending the confirmed BRADOS sauce menu.
export const sauces: Sauce[] = [
  {
    id: "aji-amarillo",
    name: "Ají Pollero",
    character: "Cremosa · Vibrante · Con carácter",
    description:
      "Un toque de inspiración peruana. Cremosa, con notas frutales y ese picor que invita a volver por otra alita.",
    color: "#c78b2d",
    highlight: "#edb849",
    garnish: "#827a39",
    provisional: true,
  },
  {
    id: "Brados Hot",
    name: "BBQ ahumada",
    character: "Dulce · Ahumada · Intensa",
    description:
      "Dulzor profundo y un toque ahumado. Una combinación envolvente para acompañar el sabor de la brasa.",
    color: "#713726",
    highlight: "#a45a38",
    garnish: "#dfad6f",
    provisional: true,
  },
  {
    id: "ajo-parmesano",
    name: "Acevichada",
    character: "Suave · Cremosa · Generosa",
    description:
      "Ajo, notas de queso y una textura cremosa. Un sabor suave que se queda contigo, perfecto para untar sin apuro.",
    color: "#c4b48c",
    highlight: "#ede0b9",
    garnish: "#677447",
    provisional: true,
  },
  {
    id: "buffalo",
    name: "Vinagreta",
    character: "Picante · Ácida · Atrevida",
    description:
      "El clásico compañero de las alitas. Un encuentro entre picor y acidez para quienes disfrutan subir la intensidad.",
    color: "rgba(246, 241, 240, 0.9)",
    highlight: "#e47c41",
    garnish: "#8c3422",
    provisional: true,
  },
  {
    id: "verde-de-la-casa",
    name: "Verde de la casa",
    character: "Fresca · Herbal · Diferente",
    description:
      "Notas de hierbas y un toque fresco que equilibra cada bocado. Ligera de espíritu, llena de personalidad.",
    color: "#677344",
    highlight: "#9ca465",
    garnish: "#cbd18d",
    provisional: true,
  },
  {
    id: "miel-mostaza",
    name: "Miel mostaza",
    character: "Dulce · Ácida · Equilibrada",
    description:
      "La suavidad de la miel se encuentra con el carácter de la mostaza. Ese contraste que combina con todo y siempre deja ganas de más.",
    color: "#b7903d",
    highlight: "#dbb75c",
    garnish: "#59412a",
    provisional: true,
  },
];
