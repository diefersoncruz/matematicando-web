import { gerarOperacao, zerarPontuacao } from "./game.js";
import { configuracoes } from "../dados/configuracoes.js";

const inputResultado = document.getElementById("inputResultado");
const segundoElement = document.getElementById("segundo");
const minutoElement = document.getElementById("minuto");
const btnIniciarPararJogo = document.getElementById("btnIniciarPararJogo");
// Certifique-se que o botão tenha este ID no seu HTML

let intervalo;
let jogoIniciado = false;
let tempoRestante; // Variável para controlar o tempo restante

function jogoEmAndamento() {
  return jogoIniciado;
}

function iniciarJogo() {
  if (confirm("Pronto para começar?")) {
    jogoIniciado = true;
    tempoRestante = configuracoes.limiteTempo; // Define o tempo restante

    inputResultado.focus();
    iniciarCronometro();
    gerarOperacao();
    zerarPontuacao();

    // Habilita inputs do jogo
    inputFator1.disabled = false;
    inputFator2.disabled = false;
    inputResultado.disabled = false;

    // Atualiza o botão para "Parar Jogo"
    btnIniciarPararJogo.textContent = "Parar Jogo";
    btnIniciarPararJogo.classList.remove("btnIniciarJogo");
    btnIniciarPararJogo.classList.add("btnPararJogo");
  }
}

function pararJogo(confirmarAntesParar = false) {
  if (!confirmarAntesParar || confirm("Deseja realmente parar o jogo?")) {
    jogoIniciado = false;
    clearInterval(intervalo);

    // Limpa e desabilita inputs do jogo
    inputResultado.value = "";
    inputFator1.disabled = true;
    inputFator2.disabled = true;
    inputResultado.disabled = true;

    // Reseta o cronômetro
    segundoElement.innerHTML = "00";
    minutoElement.innerHTML = "00";

    // Atualiza o botão para "Iniciar Jogo"
    btnIniciarPararJogo.textContent = "Iniciar Jogo";
    btnIniciarPararJogo.classList.add("btnIniciarJogo");
    btnIniciarPararJogo.classList.remove("btnPararJogo");
  }
}

function iniciarCronometro() {
  let segundos = 0;
  let minutos = 0;

  intervalo = setInterval(() => {
    if (segundos === 60) {
      minutos++;
      segundos = 0;
    }

    if (minutos === 60) {
      // Lógica para quando passar de 60 minutos, se necessário
      // ...
    }

    atualizarDisplayCronometro(segundos, minutos);

    segundos++;
    tempoRestante--;

    if (tempoRestante <= 0) {
      pararJogo(false); // Fim do tempo
    }
  }, 1000);
}

function atualizarDisplayCronometro(segundos, minutos) {
  segundoElement.innerHTML = segundos < 10 ? `0${segundos}` : segundos;
  minutoElement.innerHTML = minutos < 10 ? `0${minutos}` : minutos;
}

export { iniciarJogo, pararJogo, jogoEmAndamento };
