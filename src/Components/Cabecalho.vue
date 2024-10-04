<script>
import router from '@/router/index.js';
</script>

<template>
<div class="Cabecalho" style="display: flex;
justify-content: center;">
    <img src="../assets/logotipo.png" class="logotipo">
    <RouterLink to="/">Tela inicial</RouterLink>
    <RouterLink to="/Login">Entrar</RouterLink>
</div>
</template>

<style scoped>
.logotipo{
  width: 110px;
  height: 60px;
}

img{
  height: 70px;
  width: 100px;
}

.Cabecalho {
  height: 80px;
  width: 100%;
  background-color: rgb(214, 0, 0);
  position: relative;
  display: flex; 
  align-items: center; 
  padding: 1rem; 

}

.links {
  display: flex; 
  margin-left: 1rem; 
  color: white;
  text-decoration: none;
  transition: 0.4s;
  padding: 3px;
}

</style>