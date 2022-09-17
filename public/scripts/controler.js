import { geradorGameMatematica, zerarAcertosEErros } from "./game.js";

var intervalo;

function iniciarJogo(segundos) {
  if (confirm("Pronto para começar?")) {
    iniciarCronometro(segundos);
    geradorGameMatematica();
    inputFator1.removeAttribute("disabled");
    inputFator2.removeAttribute("disabled");
    inputResultado.removeAttribute("disabled");
    btnIniciarPararJogo.textContent = "Parar Jogo";
    btnIniciarPararJogo.classList.remove("btnIniciarJogo");
    btnIniciarPararJogo.classList.add("btnPararJogo");
    zerarAcertosEErros();
  }
}

function pararJogo() {
  if (confirm("Deseja realmente parar o jogo?")) {
    window.clearInterval(intervalo);
    intervalo = undefined;
    document.getElementById("inputResultado").setAttribute("value", "");
    document.getElementById("segundo").innerHTML = "00";
    document.getElementById("minuto").innerHTML = "00";
    inputFator1.setAttribute("disabled", true);
    inputFator2.setAttribute("disabled", true);
    inputResultado.setAttribute("disabled", true);
    btnIniciarPararJogo.innerText = "Iniciar Jogo";
    btnIniciarPararJogo.classList.add("btnIniciarJogo");
    btnIniciarPararJogo.classList.remove("btnPararJogo");
  }
}

function iniciarCronometro(limiteTempo = 90) {
  let segundos = 0;
  let minutos = 0;
  let contador = 0;

  intervalo = window.setInterval(function () {
    if (segundos == 60) {
      minutos++;
      segundos = 0;
    }
    if (minutos == 60) {
      segundos = 0;
      minutos = 0;
    }

    segundos++;
    contador++;
    preencherMinutosSegundos(segundos, minutos);
    if (parseInt(contador) == parseInt(limiteTempo)) {
      pararJogo();
    }
  }, 1000);
}

function preencherMinutosSegundos(segundos, minutos) {
  // Valida se os segundos são menor que 10
  if (segundos < 10) {
    document.getElementById("segundo").innerHTML = "0" + segundos;
  } else {
    document.getElementById("segundo").innerHTML = segundos;
  }
  // Valida se os minutos são menor que 10
  if (minutos < 10) {
    document.getElementById("minuto").innerHTML = "0" + minutos;
  } else {
    document.getElementById("minuto").innerHTML = minutos;
  }
}

export { iniciarJogo, pararJogo };
