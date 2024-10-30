<template>
  <div class="container">
    <div class="opcoes">
      <div id="divAcertos" class="score-box score-box--green">
        <label for="inputAcertos" class="score-label">Acertos:</label>
        <span id="inputAcertos" class="score-value">{{ acertos }}</span>
      </div>
      <div id="divCronometro" class="cronometro">
        <span id="minuto">{{ tempoFormatado }}</span>
      </div>
      <div id="divErros" class="score-box score-box--red">
        <label for="inputErros" class="score-label">Erros:</label>
        <span id="inputErros" class="score-value">{{ erros }}</span>
      </div>
    </div>

    <div class="expressao">
      <input
        type="number"
        id="inputFator1"
        class="input-fator"
        :value="fator1"
        readonly
        disabled
      />
      <span id="inputOperador" class="operador">{{ operador }}</span>
      <input
        type="number"
        id="inputFator2"
        class="input-fator"
        :value="fator2"
        readonly
        disabled
      />
      <span class="igual">=</span>
      <input
        type="number"
        id="inputResultado"
        class="input-resultado"
        ref="inputResultado"
        v-model="respostaUsuario"
        @keyup.enter="verificarResposta"
        :disabled="!jogoEmAndamento"
      />
    </div>

    <div class="botoes">
      <button
        id="btnIniciarPararJogo"
        class="btn btn-iniciar"
        @click="iniciarOuPararJogo"
      >
        {{ jogoEmAndamento ? "Parar Jogo" : "Iniciar Jogo" }}
      </button>
      <button
        id="btn-responder"
        class="btn btn-responder"
        @click="verificarResposta"
        :disabled="!jogoEmAndamento"
      >
        Responder
      </button>
    </div>
  </div>
</template>

<script>
import { iniciarJogo, pararJogo } from "../services/controler.js";
import { gerarOperacao, validarResultado } from "../services/game.js";

export default {
  data() {
    return {
      acertos: 0,
      erros: 0,
      fator1: 0,
      fator2: 0,
      operador: "+",
      respostaUsuario: 0,
      jogoEmAndamento: false,
      tempoFormatado: "00:00",
      intervaloCronometro: null,
      tempoSegundos: 0,
    };
  },
  methods: {
    handleDocumentKeydown(event) {
      if (event.key === "Enter" && event.target === document.body) {
        this.verificarResposta();
        event.preventDefault(); // Prevent default Enter behavior (like form submission)
      }
    },
    iniciarOuPararJogo() {
      if (this.jogoEmAndamento) {
        pararJogo(true, this.atualizarDados);
        clearInterval(this.intervaloCronometro);
        this.intervaloCronometro = null;
      } else {
        iniciarJogo(this.atualizarDados);
        this.tempoSegundos = 0;
        this.intervaloCronometro = setInterval(() => {
          this.tempoSegundos++;
        }, 1000);
      }
    },

    verificarResposta() {
      if (this.jogoEmAndamento) {
        validarResultado(this.atualizarDados);
        this.$nextTick(() => {
          this.$refs.inputResultado.focus(); // Redefine o foco no input após a validação
        });
      }
    },

    atualizarDados(campo, valor = null) {
      if (valor !== null) {
        this[campo] = valor;
      }
      return this[campo];
    },
  },
  mounted() {
    gerarOperacao(this.atualizarDados);
    // Attach the event listener
    document.addEventListener("keydown", this.handleDocumentKeydown);
  },
  beforeUnmount() {
    // Remove the event listener to prevent memory leaks
    document.removeEventListener("keydown", this.handleDocumentKeydown);
  },
};
</script>
