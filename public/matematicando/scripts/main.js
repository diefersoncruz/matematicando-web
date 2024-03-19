import { configuracoes } from "../dados/configuracoes.js";
import { iniciarJogo, jogoEmAndamento, pararJogo } from "./controler.js";
import { validaResultado } from "./game.js";
import Jogadores from "../service/jogadores.js";

let btnIniciarPararJogo = document.querySelector("#btnIniciarPararJogo");
let btnSalvarModal = document.querySelector("#btnSalvarModal");
let formConfiguracoes = document.querySelector("#formConfiguracoes");
let btnResponder = document.querySelector("#btn-responder");

function handleEnterEvent(event) {
  if (event.key == "Enter") {
    if (jogoEmAndamento()) {
      validaResultado();
    } else {
      iniciarJogo();
    }
  }
}

document.querySelector("body").addEventListener("keydown", handleEnterEvent);

btnResponder.addEventListener("click", function () {
  if (jogoEmAndamento()) {
    validaResultado();
  } else {
    iniciarJogo();
  }
});

btnIniciarPararJogo.addEventListener("click", function () {
  Jogadores.carregaDadosJogadores();
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
  // configurações de exibição
  configuracoes.exibicao.exibirRespostaCerta = formConfiguracoes.exibirRespostaCerta.checked;
  closeModal("dv-modal");
});