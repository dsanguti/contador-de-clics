import "./App.css";
import Boton from "./components/Boton.jsx";
import Contador from "./components/Contador.jsx";
import logo from "./img/freecodecamp-logo.svg";
import { useState } from "react";

function App() {

  const [numClics, setNumClics]

  const manejarClic = () => {
    console.log("Hola soy ManjerClic");
  };

  const reiniciarContador = () => {
    console.log("Hola soy reiniciarContador");
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <h4 id="titulo-logo">freeCodeCamp</h4>
        <img className="freecodecamp-logo" alt="logo-freecodecamp" src={logo} />
      </div>
      <div className="contenedor-principal">
        <Contador numClics="2" />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
