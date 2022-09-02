import React from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import { useState } from "react";

function App() {
  const [cuenta, setCuenta] = useState(0);

  const incrementador = (event) => {
    setCuenta(cuenta + 1);
  };

  return (
    <div className="App">
      <Cabecera cantidad={cuenta} />
      <Listado incrementador={incrementador} />
    </div>
  );
}

export default App;
