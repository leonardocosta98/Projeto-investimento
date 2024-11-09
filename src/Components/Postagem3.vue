<script setup>
import PostModelo from './PostModelo.vue'; 
import investir3 from '@/assets/investir3.jpg';
</script>

<template>
    <div class="card">
        <PostModelo 
            titulo="Criação de patrimônio" 
            CorpoDoTexto="Além disso, investir também oferece oportunidades para criar patrimônio e acumular riqueza. Ao investir regularmente em ativos de qualidade, como ações de empresas sólidas ou fundos de investimento diversificados, você pode colher os benefícios do crescimento do mercado e do aumento do valor dos ativos."
            autor="Feito por Leonardo" 
            :imagem="investir3"
        />
    </div>
</template>

<style scoped>
.card {
    background-color:#ffffff;/* White background for the card */
    border-radius: 10px 10px 10px 10px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    padding: 20px; /* Inner spacing */
    margin: 20px; /* Space around the card */
    font-size:large; /* Font size for the text */
    box-shadow:5px 5px 5px 5px;
}
</style>