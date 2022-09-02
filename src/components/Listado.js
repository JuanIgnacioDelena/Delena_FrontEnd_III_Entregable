import React from "react";
import variosItem from "./data.json";
import Item from "./Item";

export default function Listado(props) {
  return (
    <div className="container">
      {variosItem.map((item) => (
        <Item
          key={item.id}
          nombre={item.producto.nombre}
          descripcion={item.producto.descripcion}
          stock={item.stock}
          incrementador={props.incrementador}
        />
      ))}
    </div>
  );
}
