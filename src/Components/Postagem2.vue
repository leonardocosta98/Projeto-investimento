<script setup>
import PostModelo from './PostModelo.vue'; 
import investir2 from '@/assets/investir2.jpg';
</script>

<template>
    <div class="card">
        <PostModelo 
            titulo="Tipos de investimento" 
            CorpoDoTexto="Existem diversos tipos de investimento, cada um com características e objetivos específicos. Entre os mais comuns estão as ações, os títulos de renda fixa e os fundos de investimento, que reúnem dinheiro de vários investidores. Existem também, investimentos em imóveis, commodities, criptomoedas, etc."
            autor="Feito por Leonardo" 
            :imagem="investir2"
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
    box-shadow:5px 5px 5px 5px;
}
</style>