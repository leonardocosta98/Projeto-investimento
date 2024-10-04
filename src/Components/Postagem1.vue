<script setup>
import PostModelo from './PostModelo.vue';
import Olimpiadas from '../assets/olimpiadas.jpg';

</script>

<template>
    <div class="post">
        <PostModelo titulo="Olímpiadas" 
        :imagem="Olimpiadas"
        CorpoDoTexto="As Olimpíadas são o maior evento esportivo do mundo, no qual países dos cinco continentes se reúnem para competir em diversas modalidades. Acontecem a cada quatro anos e são divididos entre as edições de verão e de inverno. Atletas com deficiência disputam as chamadas Paralimpíadas.
            A promoção da paz, a integração e a união entre os países compõem o objetivo principal dos Jogos Olímpicos. De acordo com o Estatuto Olímpico, a intenção é garantir o desenvolvimento harmonioso da humanidade por meio da prática esportiva."
        autor="Feito por Leonardo e Juan"></PostModelo>
    </div>
</template>
<style>
</style>