import { useRef, type KeyboardEvent } from "react";
import { menu, type CategoryId } from "../config/menu";
import { formatPrice } from "../lib";

export function Menu({
  active,
  onChange,
}: {
  active: CategoryId;
  onChange: (id: CategoryId) => void;
}) {
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  function onKey(event: KeyboardEvent, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % menu.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + menu.length) % menu.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = menu.length - 1;
    else return;
    event.preventDefault();
    onChange(menu[next].id);
    tabs.current[next]?.focus();
  }
  return (
    <section
      className="section menu-section cream"
      id="carta"
      aria-labelledby="menu-title"
    >
      <div className="container">
        <div className="section-top">
          <span className="eyebrow">04 / La carta</span>
          <span className="eyebrow">Para todos los antojos</span>
        </div>
        <div className="menu-heading">
          <h2 id="menu-title" tabIndex={-1}>
            ELIGE TU
            <br />
            <span className="serifless-outline">BUEN MOMENTO.</span>
          </h2>
          <p>
            Al centro de la mesa.
            <br />Y al centro de tus planes.
          </p>
        </div>
        <div
          className="menu-tabs"
          role="tablist"
          aria-label="Categorías de la carta"
        >
          {menu.map((category, index) => (
            <button
              key={category.id}
              ref={(node) => {
                tabs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`tab-${category.id}`}
              aria-controls={`panel-${category.id}`}
              aria-selected={active === category.id}
              tabIndex={active === category.id ? 0 : -1}
              onKeyDown={(event) => onKey(event, index)}
              onClick={() => onChange(category.id)}
            >
              {category.label}
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <p className="provisional-note">
          <span className="status-dot" aria-hidden="true" />
          Carta provisional · Productos, formatos y precios por confirmar.
        </p>
        {menu.map((category) => (
          <div
            key={category.id}
            role="tabpanel"
            id={`panel-${category.id}`}
            aria-labelledby={`tab-${category.id}`}
            hidden={active !== category.id}
            tabIndex={0}
            className="menu-panel"
          >
            {category.products.map((product, index) => (
              <article className="menu-product" key={product.id}>
                <span className="product-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  {product.provisional && (
                    <span className="sample-label">Contenido de muestra</span>
                  )}
                </div>
                <p className="product-price">{formatPrice(product.price)}</p>
              </article>
            ))}
          </div>
        ))}
        <div className="menu-bottom">
          <span>Buen sabor. Buena compañía.</span>
          <span aria-hidden="true">BRADOS / CHICKEN & WINGS</span>
        </div>
      </div>
    </section>
  );
}
