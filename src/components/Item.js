import React from "react";
import { useState } from "react";

export default function Item(props) {
  const [stock, setStock] = useState(props.stock);

  const manejoStock = (event) => {
    props.incrementador();
    setStock(stock - 1);
  };

  return (
    <div className="producto">
      <h3>{props.nombre}</h3>
      <p>{props.descripcion}</p>
      <h5>En stock: {stock > 0 ? stock : <span>Agotado</span>}</h5>
      {stock > 0 ? (
        <button type="button" onClick={manejoStock}>
          COMPRAR
        </button>
      ) : (
        <button type="button" disabled>
          SIN STOCK
        </button>
      )}
    </div>
  );
}
