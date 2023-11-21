import React, { useEffect, useRef } from "react";

function DigitarTexto() {
  const tituloRef = useRef(null);

  useEffect(() => {
    const titulo = tituloRef.current;
    if (!titulo) return;

    function ativaLetra(elemento) {
      const arrTexto = elemento.textContent.split("");
      elemento.textContent = "";
      arrTexto.forEach((letra, i) => {
        setTimeout(() => {
          elemento.textContent += letra;
        }, 75 * i);
      });
    }

    ativaLetra(titulo);
  }, []);

  return (
    <div className="digitando" ref={tituloRef}>
      Full Stack Developer
    </div>
  );
}

export default DigitarTexto;
