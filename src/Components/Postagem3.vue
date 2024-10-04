<script setup>
import PostModelo from './PostModelo.vue'; 
import img3 from '@/assets/img3.jpg';
</script>

<template>
    <div class="post">
        <PostModelo titulo="Olimpíadas modernas" 
        CorpoDoTexto="A primeira edição dos Jogos Olímpicos modernos foi realizada na cidade de Atenas, em 1896. Participaram 14 países e 241 atletas homens, pois as mulheres eram proibidas de competir. Atletismo, ciclismo, esgrima, ginástica, halterofilismo, luta, natação e tênis foram as modalidades participantes.
  
  A premiação com medalha de ouro passou a ser feita somente em 1904. Na primeira edição, os vencedores receberam medalhas de prata, e os demais foram premiados com medalhas de cobre e ramos de louro.
  Desde seu início, as Olimpíadas só não foram realizadas nos anos de 1916, por causa da Primeira Guerra Mundial, e em 1940 e 1944, devido à Segunda Guerra Mundial.
  Em 2016, a cidade do Rio de Janeiro sediou as Olimpíadas. Mais de 10 mil atletas concorreram em 41 modalidades esportivas. Nessa edição, o golfe e o rúgbi voltaram a participar dos jogos, ambos os esportes não participavam desde 1924."
       autor="Feito por Juan" 
        :imagem=img3></PostModelo>
    </div>
</template>