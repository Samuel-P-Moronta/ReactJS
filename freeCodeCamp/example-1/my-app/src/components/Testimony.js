import React from "react";
import '../stylesheets/Testimonio.css';

//Plantillas literales `` para insertar javascript
//Definir nuestro componente funcional

export function Testimonio(props){
  //definir la estrucutra del testimonio
  //componente funcional retorna un elemento jsx
  return(
    //Estructura del componente
    //contenedor principal
    <div className="contenedor-testimonio">
    
      <img 
        className="imagen-testimonio" 
        src={require(`../images/person-${props.image}.png`)}
        alt="foto-emma"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className="cargo-testimonio">
          {props.position} at <strong>{props.company}</strong>
        </p>
        <p className="texto-testimonio">
          "{props.testimony}"
        </p>
      </div>
    </div>
  );
}
//Exportacion nombrada
//export default Testimonio;