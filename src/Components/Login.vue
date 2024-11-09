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
    <div id="login" class="card">
        <h1>Login</h1>
        <form @submit.prevent="emitLogin">
            <div class="container">
                <label for="email">E-mail:</label>
                <input v-model="email" placeholder="Email:" />
                <br>
                <label for="senha">Senha:</label>
                <input v-model="senha" type="password" id="senha" name="senha" />
                <button type="submit">Entrar</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.card {
    background-color: #ffffff; /* White background for the card */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    padding: 20px; /* Inner spacing */
    margin: 20px; /* Space around the card */
    max-width: 400px; /* Max width for the card */
    margin-left: auto; /* Center horizontally */
    margin-right: auto; /* Center horizontally */
    box-shadow: 5px 5px 5px 5px;
}

h1 {
    font-size: 70px;
}

h1, h2 {
    font-weight: bolder;
    text-align: center;
    font-family: sans-serif;
}

.container {
    display: flex; /* Use flexbox */
    flex-direction: column; /* Stack elements vertically */
    align-items: center; /* Center align items */
    font-size: 20px;
    font-family: Impact, 'Arial Narrow Bold', sans-serif;
}

label {
    margin-bottom: 5px; /* Space between label and input */
}

input {
    margin-bottom: 15px; /* Space between input fields */
    padding: 10px; /* Inner padding for input fields */
    width: 100%; /* Full width of the container */
    max-width: 300px; /* Optional: set a max width for inputs */
    border-radius: 10px 10px;
}

button {
    background-color: #79151c; /* Verde */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition: background-color 0.3s; /* Transição suave */
    border-radius: 10px 10px;
}
</style>