import { getRandomInt } from "./utils.js";
import { configuracoes } from "../dados/configuracoes.js";

let fatorOld = 0;
let fator = 0;
let resultadoOperacao = undefined;
let operadorMatematico;
let multiplicador = 0;
const dadosConfigurados = configuracoes.operacoesPermitidas;
const configuracoesExibicao = configuracoes.exibicao;

const inputFator1 = document.getElementById("inputFator1");
const inputFator2 = document.getElementById("inputFator2");
const inputOperador = document.getElementById("inputOperador");
const inputResultado = document.querySelector("#inputResultado");
const inputErros = document.querySelector("#inputErros");
const inputAcertos = document.querySelector("#inputAcertos");

function geradorGameMatematica() {
  let opcaoValida = false;
  while (opcaoValida == false) {
    operadorMatematico = getRandomInt(1, 4);
    if (operadorMatematico == 1 && dadosConfigurados.operacoesDeDivisao) {
      gerarFatoresOperacaoMatematica();
      preencherFatorTela(operadorMatematico);
      resultadoOperacao = fator / multiplicador;
      opcaoValida = true;
    } else if (
      operadorMatematico == 2 &&
      dadosConfigurados.operacoesDeMultiplicacao
    ) {
      gerarFatoresOperacaoMatematica();
      preencherFatorTela(operadorMatematico);
      resultadoOperacao = fator * multiplicador;
      opcaoValida = true;
    } else if (operadorMatematico == 3 && dadosConfigurados.operacoesDeAdicao) {
      gerarFatoresOperacaoMatematica();
      preencherFatorTela(operadorMatematico);
      resultadoOperacao = fator + multiplicador;
      opcaoValida = true;
    } else if (
      operadorMatematico == 4 &&
      dadosConfigurados.operacoesDeSubtracao
    ) {
      gerarFatoresOperacaoMatematica();
      preencherFatorTela(operadorMatematico);
      resultadoOperacao = fator - multiplicador;
      opcaoValida = true;
    }
  }
  inputResultado.value = "";
}

function preencherFatorTela(operador) {
  switch (operador) {
    case 1:
      operador = "/";
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
  if (operadorMatematico === 1) {
    while (fatorOld == fator) {
      fator = getRandomInt(
        configuracoes.limiteNegativoFatorA,
        configuracoes.limiteFatorA
      );
      multiplicador = getRandomInt(
        configuracoes.limiteNegativoFatorB,
        configuracoes.limiteFatorB
      );
      // valida se o fator é igual a 0
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
    }
  } else {
    while (fatorOld == fator) {
      fator = getRandomInt(
        configuracoes.limiteNegativoFatorA,
        configuracoes.limiteFatorA
      );
      multiplicador = getRandomInt(
        configuracoes.limiteNegativoFatorB,
        configuracoes.limiteFatorB
      );
    }
  }
  inputFator1.setAttribute("value", fator);
  inputFator2.setAttribute("value", multiplicador);
  fatorOld = fator;
}

function validaResultado() {
  let resultadoUsuario = inputResultado.value;
  if (resultadoOperacao == resultadoUsuario) {
    adicionaQtdAcertos();
    geradorGameMatematica();
  } else {
    adicionaQtdErros();
    console.log(configuracoesExibicao.exibirRespostaCerta)
    if (configuracoesExibicao.exibirRespostaCerta) {
      window.alert("Resposta correa: " + resultadoOperacao);
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
