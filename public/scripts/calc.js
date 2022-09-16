var fatorOld,
  fator = 0;
var multiplicador = 0;
var limiteFatorA = 10;
var limiteFatorB = 10;
var limiteNegativoFatorA = 0;
var limiteNegativoFatorB = 0;
var resultadoOperacao = 0;
var qtdAcertosUsuario = 0;
var qtdErrosUsuario = 0;
var qtdMinutos = 0;
var qtdSegundos = 0;
var tempoTotalSegundos = 0;
var operadorMatematico;
const dadosConfigurados = {
  operacoesDeAdicao: true,
  operacoesDeDivisao: true,
  operacoesDeMultiplicacao: true,
  operacoesDeSubtracao: true,
};

const inputFator1 = document.getElementById("inputFator1");
const inputFator2 = document.getElementById("inputFator2");
const inputResultado = document.querySelector("#inputResultado");
const inputOperador = document.getElementById("inputOperador");

function geradorGameMatematica() {
  let opcaoValida = false;
  while (opcaoValida == false) {
    operadorMatematico = getRandomInt(1, 4);
    if (operadorMatematico == 1 && dadosConfigurados.operacoesDeDivisao) {
      gerarFatoresOperacaoMatematica();
      resultadoOperacao = fator / multiplicador;
      opcaoValida = true;
      preencherDadosMultiplicadorFatorTela(operadorMatematico);
    } else if (
      operadorMatematico == 2 &&
      dadosConfigurados.operacoesDeMultiplicacao
    ) {
      gerarFatoresOperacaoMatematica();
      resultadoOperacao = fator * multiplicador;
      opcaoValida = true;
      preencherDadosMultiplicadorFatorTela(operadorMatematico);
    } else if (operadorMatematico == 3 && dadosConfigurados.operacoesDeAdicao) {
      gerarFatoresOperacaoMatematica();
      resultadoOperacao = fator + multiplicador;
      preencherDadosMultiplicadorFatorTela(operadorMatematico);
    } else if (
      operadorMatematico == 4 &&
      dadosConfigurados.operacoesDeSubtracao
    ) {
      gerarFatoresOperacaoMatematica();
      resultadoOperacao = fator - multiplicador;
      opcaoValida = true;
      preencherDadosMultiplicadorFatorTela(operadorMatematico);
    }
  }
  inputResultado.focus();
  inputResultado.value = "";
}

function preencherDadosMultiplicadorFatorTela(operador) {
  switch (operador) {
    case 1:
      operador = "X";
      break;
    case 2:
      operador = "/";
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
  if (operadorMatematico === 2) {
    while (fatorOld == fator) {
      fator = getRandomInt(limiteNegativoFatorA, limiteFatorA);
      multiplicador = getRandomInt(limiteNegativoFatorB, limiteFatorB);
      // valida se o fator é igual a 0
      if (fator == 0) {
        fator += 1;
      }
      if (multiplicador == 0) {
        multiplicador += 1;
      }
      while (fator % multiplicador != 0) {
        fator = getRandomInt(limiteNegativoFatorA, limiteFatorA);
        multiplicador = getRandomInt(limiteNegativoFatorB, limiteFatorB);
        if (multiplicador == 0 || fator == 0) {
          fator = 1;
          multiplicador = 3;
        }
      }
    }
  } else {
    while (fatorOld == fator) {
      fator = getRandomInt(limiteNegativoFatorA, limiteFatorA);
      multiplicador = getRandomInt(limiteNegativoFatorB, limiteFatorB);
    }
  }
  inputFator1.setAttribute("value", fator);
  inputFator2.setAttribute("value", multiplicador);
  fatorOld = fator;
}
