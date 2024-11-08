<script>
    export default {
        name: "Login",
        data() {
            return {
                email: "",
                senha: ""
            }
        },
        methods: {
            emitLogin() {
                console.log("Email: " + this.email);
                this.$emit("login", this.email);
            },
        }
    }
</script>

<template>
    <div id="login">
        <h1>Login</h1>
        <form>
            <div class="container">
            <label for="email">E-mail:</label>
            <input v-model="email" placeholder="Email:" />
            <br><label for="senha">Senha:</label>
            <input v-model="senha" type="password" id="senha" name="senha">
            <button @click="emitLogin">Entrar</button>
        </div>
        </form>
    </div>
</template>

<style scoped>
    h1{
        font-size: 70px;
    }

    h1,h2 {
        font-weight: bolder;
        text-align: center;
        font-family: sans-serif;
    }
    .container{
        text-align: center;
        font-size: 20px;
        font-family: Impact,'Arial Narrow Bold', sans-serif
    }
</style>