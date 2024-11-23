<template>
    <div class="login center-container">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" required />
        </div>
        <button type="submit">Login</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async handleLogin() {
        try {
          const response = await axios.post('http://localhost:3000/login', {
            email: this.email,
            password: this.password
          });
          alert(response.data.message);
          this.$router.push('/inform'); // Redirect to dashboard after successful login
        } catch (error) {
          alert('Error: ' + error.response.data.error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* (Your existing CSS) */
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  