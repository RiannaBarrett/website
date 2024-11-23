<template>
  <div class="signup-form">
    <h1>Sign Up</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" v-model="name" placeholder="Enter your full name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" placeholder="Enter your password" required />
      </div>
      <button type="submit">Sign Up</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignupForm',  // Multi-word component name
  data() {
    return {
      name: '',
      email: '',
      password: '',
      errorMessage: ''  // To display errors
    };
  },
methods: {
  async handleSubmit() {
    try {
      const response = await axios.post('http://localhost:3000/signup', {
        name: this.name,
        email: this.email,
        password: this.password
      });

      // Ensure response has a message property
      if (response.data && response.data.message) {
        alert(response.data.message); // Display success message
        this.$router.push('/login');  // Redirect after signup
      } else {
        throw new Error('Invalid response format'); // Fallback for unexpected format
      }

    } catch (error) {
      // Handle only legitimate errors, not false positives
      this.errorMessage = error.response?.data?.error || error.message || 'An unexpected error occurred';
    }
  }
}}

</script>

<style scoped>
.signup-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #369f6b;
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>
