import { getRandomInt } from "./utils.js";
import { configuracoes } from "../dados/configuracoes.js";

const inputFator1 = document.getElementById("inputFator1");
const inputFator2 = document.getElementById("inputFator2");
const inputOperador = document.getElementById("inputOperador");
const inputResultado = document.getElementById("inputResultado");
const inputErros = document.getElementById("inputErros");
const inputAcertos = document.getElementById("inputAcertos");

const operacoes = {
  1: {
    simbolo: "÷",
    funcao: (a, b) => a / b,
    habilitado: configuracoes.operacoesPermitidas.operacoesDeDivisao,
  },
  2: {
    simbolo: "X",
    funcao: (a, b) => a * b,
    habilitado: configuracoes.operacoesPermitidas.operacoesDeMultiplicacao,
  },
  3: {
    simbolo: "+",
    funcao: (a, b) => a + b,
    habilitado: configuracoes.operacoesPermitidas.operacoesDeAdicao,
  },
  4: {
    simbolo: "-",
    funcao: (a, b) => a - b,
    habilitado: configuracoes.operacoesPermitidas.operacoesDeSubtracao,
  },
};

let historicoOperacoes = [];
let operadorMatematicoAtual;

function gerarOperacao() {
  const operacoesHabilitadas = Object.keys(operacoes).filter(
    (op) => operacoes[op].habilitado
  );

  if (operacoesHabilitadas.length === 0) {
    console.error("Nenhuma operação habilitada nas configurações!");
    return;
  }

  let operadorValido = false;
  let fator, multiplicador;

  do {
    operadorMatematicoAtual = parseInt(
      operacoesHabilitadas[getRandomInt(0, operacoesHabilitadas.length - 1)]
    );

    [fator, multiplicador] = gerarFatores(operadorMatematicoAtual);
    operadorValido = !operacaoRepetida(
      fator,
      multiplicador,
      operadorMatematicoAtual
    );
  } while (!operadorValido);

  historicoOperacoes.push({
    fator,
    multiplicador,
    operador: operadorMatematicoAtual,
  });
  exibirOperacao(fator, multiplicador, operadorMatematicoAtual);
}

function gerarFatores(operador) {
  let fator, multiplicador;
  do {
    fator = getRandomInt(
      configuracoes.limiteNegativoFatorA,
      configuracoes.limiteFatorA
    );
    multiplicador = getRandomInt(
      configuracoes.limiteNegativoFatorB,
      configuracoes.limiteFatorB
    );

    if (operador === 1 && multiplicador !== 0) {
      // Garante divisibilidade
      fator =
        multiplicador *
        Math.round(
          getRandomInt(
            configuracoes.limiteNegativoFatorA / multiplicador,
            configuracoes.limiteFatorA / multiplicador
          )
        );
    }
  } while (fator === 0 || multiplicador === 0); // Previne divisão por zero e multiplicação por zero

  return [fator, multiplicador];
}

function exibirOperacao(fator, multiplicador, operador) {
  inputFator1.value = fator;
  inputFator2.value = multiplicador;
  inputOperador.value = operacoes[operador].simbolo;
  inputResultado.value = ""; // Limpa o campo de resultado
}

function operacaoRepetida(fator, multiplicador, operador) {
  return historicoOperacoes.some(
    (op) =>
      op.fator === fator &&
      op.multiplicador === multiplicador &&
      op.operador === operador
  );
}

function validarResultado() {
  alert(operadorMatematicoAtual);
  const resultadoUsuario = parseFloat(inputResultado.value);
  const resultadoCorreto = operacoes[operadorMatematicoAtual].funcao(
    parseFloat(inputFator1.value),
    parseFloat(inputFator2.value)
  );
  if (resultadoCorreto === resultadoUsuario) {
    adicionarAcerto();
    gerarOperacao();
  } else {
    adicionarErro();
    if (configuracoes.exibicao.exibirRespostaCerta) {
      alert(`Resposta correta: ${resultadoCorreto}`);
    }
    gerarOperacao();
  }
}

function adicionarErro() {
  inputErros.textContent = parseInt(inputErros.textContent) + 1;
}

function adicionarAcerto() {
  inputAcertos.textContent = parseInt(inputAcertos.textContent) + 1;
}

function zerarPontuacao() {
  inputAcertos.textContent = 0;
  inputErros.textContent = 0;
}

export { gerarOperacao, validarResultado, zerarPontuacao };
