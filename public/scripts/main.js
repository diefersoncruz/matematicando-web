import { iniciarJogo, pararJogo } from "./controler.js";
import { validaResultado } from "./game.js";

let jogoIniciado = false;

let btnIniciarPararJogo = document.querySelector("#btnIniciarPararJogo");

document.querySelector("body").addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    if (jogoIniciado) {
      validaResultado();
    } else {
      jogoIniciado = true;
      iniciarJogo();
    }
  }
});

btnIniciarPararJogo.addEventListener("click", function () {
  if (jogoIniciado) {
    jogoIniciado = false;
    pararJogo();
  } else {
    jogoIniciado = true;
    iniciarJogo();
  }
});
