<script>
import Botao from './Botao.vue';
  export default {
    name: "Cabecalho",
    props: {
      logotipo: String,
      usuario: String,
    },
    components: {
      Botao
    },
    methods: {
      obterRotaAtual() {
        console.log(this.$route.path);
        return this.$route.path;
      }
    }
  }
</script>

<template>
    <header>
      <div id="cabecalho">
      <img class="logotipo" :src="logotipo">
      <nav class="cabecalho-col2" v-if="obterRotaAtual()!='/'">
        <Botao textoDoBotao="Login" link="/"/>
        <Botao textoDoBotao="Postagens" link="/Areapostagem"/>
        <p v-if="usuario">Bem-vindo, {{usuario}}</p>
      </nav>
    </div>
    </header>
</template>

<style scoped>
    img {
      height: 110px;
      padding: 20px;
      background-color: rgb(104, 9, 28);
      border-radius: 10px 10px 10px 10px;
    }

    h1{
        font-size: 70px;
    }

    h1, h2 {
        font-weight: bolder;
    }
    nav{
      text-align: right;
      font-family:Arial, Helvetica, sans-serif;
    }
</style>