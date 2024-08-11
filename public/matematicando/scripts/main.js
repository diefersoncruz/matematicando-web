import { configuracoes } from "../dados/configuracoes.js";
import { iniciarJogo, jogoEmAndamento, pararJogo } from "./controler.js";
import { validarResultado } from "./game.js";
import Jogadores from "../service/jogadores.js";

const btnIniciarPararJogo = document.getElementById("btnIniciarPararJogo");
const btnSalvarModal = document.getElementById("btnSalvarModal");
const formConfiguracoes = document.getElementById("formConfiguracoes");
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
  Jogadores.carregaDadosJogadores();
  jogoEmAndamento() ? pararJogo(true) : iniciarJogo();
};

const handleBtnSalvarModalClick = () => {
  // Simplificando a atualização das configurações
  Object.assign(configuracoes, {
    limiteFatorA: parseInt(formConfiguracoes.limiteFatorA.value),
    limiteFatorB: parseInt(formConfiguracoes.limiteFatorB.value),
    limiteNegativoFatorA: parseInt(
      formConfiguracoes.limiteNegativoFatorA.value
    ),
    limiteNegativoFatorB: parseInt(
      formConfiguracoes.limiteNegativoFatorB.value
    ),
    limiteTempo: parseInt(formConfiguracoes.tempoLimite.value),
    operacoesPermitidas: {
      operacoesDeAdicao: formConfiguracoes.adicao.checked,
      operacoesDeDivisao: formConfiguracoes.divisao.checked,
      operacoesDeMultiplicacao: formConfiguracoes.multiplicacao.checked,
      operacoesDeSubtracao: formConfiguracoes.subtracao.checked,
    },
    exibicao: {
      exibirRespostaCerta: formConfiguracoes.exibirRespostaCerta.checked,
    },
  });

  closeModal("dv-modal"); // Assumindo que 'closeModal' está definida
};

document.body.addEventListener("keydown", handleEnterEvent);
btnResponder.addEventListener("click", handleBtnResponderClick);
btnIniciarPararJogo.addEventListener("click", handleBtnIniciarPararJogoClick);
btnSalvarModal.addEventListener("click", handleBtnSalvarModalClick);
