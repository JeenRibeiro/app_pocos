<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm', // Nome do componente
  data() {
    return {
      username: '', // Estado para armazenar o nome de usuário
      password: ''  // Estado para armazenar a senha
    };
  },
  methods: {
    handleSubmit() {
      // Lógica para lidar com o envio do formulário
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      // Aqui você pode adicionar a lógica para autenticação, por exemplo
    }
  }
}
</script>

<style scoped>
/* Estilos do seu componente */
h1 {
  font-size: 2em;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-top: 10px;
}
</style>
