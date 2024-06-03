<template>
  <div>
    <h1>Contact Us</h1>
    <p>If you have any questions, feel free to contact us:</p>
    <ul>
      <li>Email: info@crohunt.com</li>
      <li>Phone: (123) 456-7890</li>
      <li>Address: 123 Hunting St, Zagreb, Croatia</li>
    </ul>
    <form @submit.prevent="submitForm">
      <input v-model="name" placeholder="Your Name" required>
      <input v-model="email" type="email" placeholder="Your Email" required>
      <textarea v-model="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      alert(`Message sent by ${this.name}`);
      // Handle form submission logic here
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
};
</script>

<style scoped>
form {
  margin-top: 20px;
}

form input, form textarea {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
}

form button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>