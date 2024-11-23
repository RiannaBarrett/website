<template>
    <div class="safety-guide">
      <h1>Internet Safety Guide</h1>
      <section>
        <h2>What Not to Share</h2>
        <ul>
          <li><strong>Personal Information:</strong> Avoid sharing your full name, address, phone number, or school/work details publicly.</li>
          <li><strong>Passwords:</strong> Never share your passwords with anyone or store them in easily accessible places.</li>
          <li><strong>Financial Information:</strong> Keep credit card numbers, bank details, and other financial data private.</li>
          <li><strong>Location:</strong> Avoid posting your real-time location on social media or public forums.</li>
        </ul>
      </section>
      <section>
        <h2>Why It's Harmful</h2>
        <p>Sharing personal information can lead to:</p>
        <ul>
          <li><strong>Identity Theft:</strong> Cybercriminals can use your personal data to impersonate you.</li>
          <li><strong>Cyberstalking:</strong> Revealing too much can make you a target for stalkers.</li>
          <li><strong>Financial Loss:</strong> Scammers may use your financial information for unauthorized transactions.</li>
          <li><strong>Privacy Invasion:</strong> Your data could be used in ways you didn't intend, affecting your safety and reputation.</li>
        </ul>
      </section>
      <button @click="fakeLogout">Logout</button>  <!-- No actual logout action -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'InformGuide',
    methods: {
      fakeLogout() {
        alert('Logout feature is currently disabled.');  // Prevent logout and show message
      }
    }
  };
  </script>
  
  <style scoped>
  .safety-guide {
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }
  
  section {
    margin-bottom: 30px;
  }
  
  h2 {
    color: #42b983;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 12px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #369f6b;
  }
  </style>
  