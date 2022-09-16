var btnIniciarPararJogo = document.getElementById("btnIniciarPararJogo");
var intervalo;

function iniciarJogo(segundos = 90) {
  if (intervalo === undefined) {
    btnIniciarPararJogo.textContent = "Parar Jogo";
    btnIniciarPararJogo.classList.remove("btnIniciarJogo");
    btnIniciarPararJogo.classList.add("btnPararJogo");
    iniciarCronometro(segundos);
    geradorGameMatematica();
  } else {
    pararJogo();
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

function pararJogo() {
  btnIniciarPararJogo.innerText = "Iniciar Jogo";
  btnIniciarPararJogo.classList.add("btnIniciarJogo");
  btnIniciarPararJogo.classList.remove("btnPararJogo");
  window.clearInterval(intervalo);
  intervalo = undefined;
  document.getElementById("inputResultado").setAttribute("value", "");
  document.getElementById("segundo").innerHTML = "00";
  document.getElementById("minuto").innerHTML = "00";
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
