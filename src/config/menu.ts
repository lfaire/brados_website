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
  heat?: "Suave" | "Medio" | "Intenso";
  provisional: boolean;
}
export const sauces: Sauce[] = [
  {
    id: "salsa-01",
    name: "La primera de la mesa.",
    description: "Nombre y descripción por confirmar.",
    provisional: true,
  },
  {
    id: "salsa-02",
    name: "Tu próxima favorita.",
    description: "Nombre y descripción por confirmar.",
    provisional: true,
  },
];
