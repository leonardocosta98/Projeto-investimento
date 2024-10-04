<script>
export default {
  name: 'PostModelo',
  props: {
    titulo: String,
    CorpoDoTexto: String,
    autor: String,
    imagem: String
  }
}
</script>

<template>
    <div class="post">
        <h2>{{ titulo }}</h2>
        <img :src="imagem" class="imag">
        <p>
          {{ CorpoDoTexto }}
        </p>
        <p class="autor">{{ autor }}</p>
        <br>
    </div>
</template>

<style scoped>

.post{
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.imag {
  height: 600px;
  width: 1000px;
}

h2, p{
  font-family: 'Times New Roman', Times, serif;
}

.autor{
  position: absolute;
  left: 1040px;
  top: auto;
}

</style>