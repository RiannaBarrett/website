<template>
  <div class="dashboard center-container">
    <h1>Welcome to the Dashboard</h1>
    <div class="buttons">
      <button @click="navigateToLogin">Login</button>
      <button @click="navigateToSignup">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  methods: {
    navigateToLogin() {
      this.$router.push('/login');
    },
    navigateToSignup() {
      this.$router.push('/signup');
    }
  }
};
</script>

<style scoped>
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
}

h1 {
  margin-bottom: 20px;
}

.buttons button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.buttons button:hover {
  background-color: #369f6b;
}
</style>
