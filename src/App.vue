<script>
  import Cabecalho from "./Components/Cabecalho.vue"
  import logotipo from './assets/logotipo.png'
  import Login from './Components/Login.vue';

  export default {
    name: 'App',
    components: {
      Cabecalho,
      Login
    },
    data() {
      return {
        logotipo: logotipo,
        email: ""
      }
    },
    methods: {
      // Metodo que recebe o email do componente filho
      checkLogin(email) {
        console.log("Usuario recebido: " + email);
        this.email = email;
        this.$router.push('/areapostagem');
      }
    }
  }
</script>

<template>
    <Cabecalho :logotipo="logotipo" :usuario="email"/>
    <router-view @login="checkLogin"></router-view>
</template>

<style scoped>
  h1{
    font-size: 70px;
  }

  h1, h2 {
    font-weight: bolder;
  }
</style>