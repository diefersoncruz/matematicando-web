<template>
  <div class="ranking-container">
    <h3 class="ranking-title">Ranking da Sala {{ sala }}</h3>
    <div class="ranking-table-wrapper">
      <table class="ranking-table">
        <thead class="ranking-table-header">
          <tr>
            <th>Posição</th>
            <th>Nome</th>
            <th>Acertos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(aluno, index) in alunosOrdenados" :key="aluno.id">
            <td>{{ index + 1 }}</td>
            <td>{{ aluno.nome }}</td>
            <td>{{ aluno.acertos }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import "@/assets/css/Ranking.css";
export default {
  props: {
    sala: {
      type: String,
      required: true,
    },
    alunos: {
      type: Array,
      required: true,
    },
  },
  computed: {
    alunosOrdenados() {
      // Verifica se alunos é definido antes de ordenar
      if (this.alunos) {
        return this.alunos.sort((a, b) => b.acertos - a.acertos);
      } else {
        return [
          { id: 3, nome: "Pedro", acertos: 35 },
          { id: 2, nome: "Maria", acertos: 20 },
          { id: 1, nome: "João", acertos: 15 },
          { id: 1, nome: "João", acertos: 15 },
          { id: 1, nome: "João", acertos: 15 },
          { id: 1, nome: "João", acertos: 15 },
          { id: 1, nome: "João", acertos: 15 },
          { id: 1, nome: "João", acertos: 15 },
          { id: 1, nome: "João", acertos: 15 },
          { id: 1, nome: "João", acertos: 15 },
          { id: 1, nome: "João", acertos: 15 },
          { id: 1, nome: "João", acertos: 15 },
          { id: 1, nome: "João", acertos: 15 },
          { id: 1, nome: "João", acertos: 15 },
          { id: 1, nome: "João", acertos: 15 },
          { id: 1, nome: "João", acertos: 15 },
          { id: 1, nome: "João", acertos: 15 },
          { id: 1, nome: "João", acertos: 15 },
          { id: 1, nome: "João", acertos: 15 },
          { id: 1, nome: "João", acertos: 15 },
        ]; // Retorna um array vazio se alunos for undefined
      }
    },
  },
};
</script>
