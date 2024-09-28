<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="submitLogin" class="form-group">
        <div class="input-box">
          <input
            type="email"
            v-model="email"
            placeholder="Email"
            required
          />
        </div>
        <div class="input-box">
          <input
            type="password"
            v-model="password"
            placeholder="Senha"
            required
          />
        </div>
        <div class="input-box">
          <button type="submit" class="btn">Entrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    submitLogin() {
      // Lógica de autenticação aqui
      if (this.email === '' || this.password === '') {
        alert('Preencha todos os campos');
        return;
      }

      console.log('Email:', this.email);
      console.log('Senha:', this.password);

      // Chamada para a API de autenticação
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
}

.login-box {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.input-box {
  margin-bottom: 15px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 2px solid #ddd;
  outline: none;
  transition: border-color 0.3s ease;
}

input[type="email"]:focus,
input[type="password"]:focus {
  border-bottom-color: green;
}

.btn {
  width: 100%;
  padding: 10px;
  background-color: green;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: darkgreen;
}
</style>
