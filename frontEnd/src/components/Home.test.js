import React from "react";
// le agregamos /extend-expect para extender lasa capacidades del test para ver las cosas del dom
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";
import Home from "./Home";
//para ver el porsentaje de test y detalles, vamso al coverage: npm test -- --coverage
// primer parametro del test es el texto descriptivo de lo que hace el test , el segundo el la funcion que ejecuta
//1° ver si se renderiza el componente
test("render content", () => {
  const component = render(<Home />);
  //console.log(component);
  //forma corta , ver si esta ese texto en el componenete que renderizo
  // si pasa es que renderiz oe l componente bien
  const element = component.getByText("Renderizando el Home");

  //otra forma de testear lo mismo puede ser..
  //expect(component.container).toHaveTextContent("Renderizando el Home");

  // otra forma, es ver si el elemnto que tiene ese texto existe , pero es mas de lo mismo las primeras dos ya lo sacan
  //expect(element).toBeDefined();

  // otra cosa curioasa es
  //  const h2 = component.container.querySelector("h2");
  // console.log(h2); lo va a renderizar feo , por eso hacemos.. pretyDom lo que hace es dibujar mejor el earbol de elementos renerizado
  //console.log(prettyDOM(h2)); en caso de que tengas una uan lista larga y quieras ver bien como esta
});
