import { iniciarJogo, jogoEmAndamento, pararJogo } from "./controler.js";
import { validarResultado } from "./game.js";

const btnIniciarPararJogo = document.getElementById("btnIniciarPararJogo");
const btnResponder = document.getElementById("btn-responder");

const handleEnterEvent = (event) => {
  if (event.key === "Enter") {
    jogoEmAndamento() ? validarResultado() : iniciarJogo();
    inputResultado.focus();
  }
};

const handleBtnResponderClick = () => {
  jogoEmAndamento() ? validarResultado() : iniciarJogo();
};

const handleBtnIniciarPararJogoClick = () => {
  jogoEmAndamento() ? pararJogo(true) : iniciarJogo();
};

document.body.addEventListener("keydown", handleEnterEvent);
btnResponder.addEventListener("click", handleBtnResponderClick);
btnIniciarPararJogo.addEventListener("click", handleBtnIniciarPararJogoClick);
