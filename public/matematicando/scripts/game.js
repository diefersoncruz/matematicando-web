import { getRandomInt } from "./utils.js";
import { configuracoes } from "../dados/configuracoes.js";

let operadorMatematico;
const dadosConfigurados = configuracoes.operacoesPermitidas;
const configuracoesExibicao = configuracoes.exibicao;

const inputFator1 = document.getElementById("inputFator1");
const inputFator2 = document.getElementById("inputFator2");
const inputOperador = document.getElementById("inputOperador");
const inputResultado = document.querySelector("#inputResultado");
const inputErros = document.querySelector("#inputErros");
const inputAcertos = document.querySelector("#inputAcertos");
let historicoOperacoes = [];

function geradorGameMatematica() {
  let opcaoValida = false;
  while (opcaoValida == false) {
    operadorMatematico = getRandomInt(1, 4);
    if (operadorMatematico == 1 && dadosConfigurados.operacoesDeDivisao) {
      gerarFatoresOperacaoMatematica();
      preencherFatorTela(operadorMatematico);
      opcaoValida = true;
    } else if (
      operadorMatematico == 2 &&
      dadosConfigurados.operacoesDeMultiplicacao
    ) {
      gerarFatoresOperacaoMatematica();
      preencherFatorTela(operadorMatematico);
      opcaoValida = true;
    } else if (operadorMatematico == 3 && dadosConfigurados.operacoesDeAdicao) {
      gerarFatoresOperacaoMatematica();
      preencherFatorTela(operadorMatematico);
      opcaoValida = true;
    } else if (
      operadorMatematico == 4 &&
      dadosConfigurados.operacoesDeSubtracao
    ) {
      gerarFatoresOperacaoMatematica();
      preencherFatorTela(operadorMatematico);
      opcaoValida = true;
    }
  }
  inputResultado.value = "";
}

function preencherFatorTela(operador) {
  switch (operador) {
    case 1:
      operador = "÷";
      break;
    case 2:
      operador = "X";
      break;
    case 3:
      operador = "+";
      break;
    case 4:
      operador = "-";
      break;
  }
  inputOperador.setAttribute("value", operador);
}
function gerarFatoresOperacaoMatematica() {
  let fator, multiplicador;

  do {
    if (operadorMatematico === 1) {
      fator = getRandomInt(
        configuracoes.limiteNegativoFatorA,
        configuracoes.limiteFatorA
      );
      multiplicador = getRandomInt(
        configuracoes.limiteNegativoFatorB,
        configuracoes.limiteFatorB
      );
      if (fator == 0) {
        fator = 1;
      }
      if (multiplicador == 0) {
        multiplicador = 1;
      }
      while (fator % multiplicador !== 0) {
        fator = getRandomInt(
          configuracoes.limiteNegativoFatorA,
          configuracoes.limiteFatorA
        );
        multiplicador = getRandomInt(
          configuracoes.limiteNegativoFatorB,
          configuracoes.limiteFatorB
        );
      }
    } else {
      fator = getRandomInt(
        configuracoes.limiteNegativoFatorA,
        configuracoes.limiteFatorA
      );
      multiplicador = getRandomInt(
        configuracoes.limiteNegativoFatorB,
        configuracoes.limiteFatorB
      );
    }
  } while (operacaoRepetida(fator, multiplicador, operadorMatematico));

  historicoOperacoes.push({
    fator: fator,
    multiplicador: multiplicador,
    operador: operadorMatematico,
  });

  inputFator1.setAttribute("value", fator);
  inputFator2.setAttribute("value", multiplicador);
}

function operacaoRepetida(fator, multiplicador, operador) {
  return historicoOperacoes.some(
    (op) =>
      op.fator === fator &&
      op.multiplicador === multiplicador &&
      op.operador === operador
  );
}

const getResultadoOperacao = () => {
  let resultado = 0;

  switch (operadorMatematico) {
    case 1:
      resultado =
        Number.parseInt(inputFator1.value) / Number.parseInt(inputFator2.value);
      break;
    case 2:
      resultado =
        Number.parseInt(inputFator1.value) * Number.parseInt(inputFator2.value);
      break;
    case 3:
      resultado =
        Number.parseInt(inputFator1.value) + Number.parseInt(inputFator2.value);
      break;
    case 4:
      resultado =
        Number.parseInt(inputFator1.value) - Number.parseInt(inputFator2.value);
      break;
  }

  return resultado;
};

function validaResultado() {
  let resultadoUsuario = inputResultado.value;
  let resultadoOperacao = getResultadoOperacao();

  alert(resultadoOperacao);
  if (resultadoOperacao == resultadoUsuario) {
    adicionaQtdAcertos();
    geradorGameMatematica();
  } else {
    adicionaQtdErros();
    if (configuracoesExibicao.exibirRespostaCerta) {
      window.alert("Resposta correta: " + resultadoOperacao);
    }
    geradorGameMatematica();
  }
}

function adicionaQtdErros() {
  let qtdErros = parseInt(inputErros.value);
  qtdErros += 1;
  inputErros.value = qtdErros;
}

function adicionaQtdAcertos() {
  let qtdAcertos = parseInt(inputAcertos.value);
  qtdAcertos += 1;
  inputAcertos.value = qtdAcertos;
}

function zerarAcertosEErros() {
  inputAcertos.value = 0;
  inputErros.value = 0;
}

export { geradorGameMatematica, validaResultado, zerarAcertosEErros };
