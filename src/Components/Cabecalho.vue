<script>
import router from '@/router/index.js';
</script>

<template>
<div class="Cabecalho" style="display: flex;justify-content: space-between;">
  <div>
  <img src="../assets/logotipo.png" class="logotipo"></div>
  
  <div style="display: flex;flex-direction: column;justify-content: center; font-size: larger; font-family: Impact, 'Arial Narrow Bold', sans-serif;">
    <button class= "buttontela" ><RouterLink to="/">Tela inicial</RouterLink></button>
    <button class= "buttonlogin" ><RouterLink to="/Login">Entrar</RouterLink></button></div>
  <div></div>
</div>
</template>

<style scoped>
.logotipo{
  width: 130px;
  height: 85px;
}

img{
  height: 70px;
  width: 100px;
}

.Cabecalho {
  height: 80px;
  width: 100%;
  background-color: rgb(197, 250, 234);
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


.buttontela {
  padding: 5px; 
  background-color: #2c5858; 
  color: rgb(248, 17, 17); 
  text-decoration: none; 
  border-radius: 5px; 
  box-shadow: 5px 5px;
}

.buttonlogin {
  padding: 5px; 
  background-color: #2c5858; 
  color: white; 
  text-decoration: none; 
  border-radius: 5px; 
  box-shadow: 5px 5px;
}
}
</style>