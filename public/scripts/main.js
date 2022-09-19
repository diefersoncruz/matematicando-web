import { configuracoes } from "../dados/configuracoes.js";
import { iniciarJogo, jogoEmAndamento, pararJogo } from "./controler.js";
import { validaResultado } from "./game.js";

let btnIniciarPararJogo = document.querySelector("#btnIniciarPararJogo");
let btnSalvarModal = document.querySelector("#btnSalvarModal");
let formConfiguracoes = document.querySelector("#formConfiguracoes");

document.querySelector("body").addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    if (jogoEmAndamento()) {
      validaResultado();
    } else {
      iniciarJogo();
    }
  }
});

btnIniciarPararJogo.addEventListener("click", function () {
  if (jogoEmAndamento()) {
    pararJogo(true);
  } else {
    iniciarJogo();
  }
});

btnSalvarModal.addEventListener("click", function () {
  configuracoes.limiteFatorA = parseInt(formConfiguracoes.limiteFatorA.value);
  configuracoes.limiteFatorB = parseInt(formConfiguracoes.limiteFatorB.value);
  configuracoes.limiteNegativoFatorA = parseInt(
    formConfiguracoes.limiteNegativoFatorA.value
  );
  configuracoes.limiteNegativoFatorB = parseInt(
    formConfiguracoes.limiteNegativoFatorB.value
  );
  configuracoes.limiteTempo = parseInt(formConfiguracoes.tempoLimite.value);
  configuracoes.operacoesPermitidas.operacoesDeAdicao =
    formConfiguracoes.adicao.checked;
  configuracoes.operacoesPermitidas.operacoesDeDivisao =
    formConfiguracoes.divisao.checked;
  configuracoes.operacoesPermitidas.operacoesDeMultiplicacao =
    formConfiguracoes.multiplicacao.checked;
  configuracoes.operacoesPermitidas.operacoesDeSubtracao =
    formConfiguracoes.subtracao.checked;
  closeModal("dv-modal");
});
