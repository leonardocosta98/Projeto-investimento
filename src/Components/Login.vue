<script>
</script>

<template>
<div class="container">
    <h1>Entar na sua conta</h1>
    <input type="email" placeholder="Email:">
    <br>
    <input type="text" placeholder="Senha:">
    <br>
    <button class="btnLogin">Enviar</button>
    <br>
</div>
</template>

<style scoped>
.container{
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    display: flex;
}
.btnLogin {
  padding: 5px; 
  background-color: #2c5858; 
  color: white; 
  text-decoration: none; 
  border-radius: 5px; 
  box-shadow: 5px 5px;
}

.btnLogin:hover{
    background-color: #06fab1;
    cursor: pointer;
    color: black;
    box-shadow: 5px 5px
}
</style>