<script setup>
import PostModelo from './PostModelo.vue';
import investir from '../assets/investir.jpg';
</script>

<template>
  <div class="card">
    <PostModelo 
      titulo="O que é investimento?"  
      :imagem="investir"
      CorpoDoTexto="Investimento é a alocação de dinheiro em ativos com o objetivo de obter retorno econômico no futuro. 
      Esses ativos podem incluir ações, títulos, imóveis, fundos de investimento e outros instrumentos financeiros."
      autor="Feito por Leonardo"
    />
  </div>
</template>

<style scoped>
.card {
  background-color: #ffffff; /* White background for the card */
  border-radius:  10px 10px 10px 10px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  padding: 20px; /* Inner spacing */
  margin: 20px; /* Space around the card */
  font-size:large; /* Font size for the text */
  box-shadow:5px 5px 5px;
}
</style>