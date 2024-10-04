<script setup>
import PostModelo from './PostModelo.vue';
import investir from '../assets/investir.jpg';

</script>

<template>
        <div class="post" style="font-size: xx-large;">
        <PostModelo titulo="O que é investimento?"  
        :imagem="investir"
        CorpoDoTexto="Investimento é a alocação de dinheiro em ativos com o objetivo de obter retorno econômico no futuro. 
        Esses ativos podem incluir ações, títulos, imóveis, fundos de investimento e outros instrumentos financeiros."
        autor="Feito por Leonardo"></PostModelo>
    </div>
</template>
<style>
</style>