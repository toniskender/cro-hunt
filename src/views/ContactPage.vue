<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <div class="contact-info">
      <p><strong>Address:</strong> bana Josipa Jelačića 2, Delnice, Croatia</p>
      <p><strong>Phone:</strong> +385 99 772 3096</p>
      <p><strong>Email:</strong> info@crohunt.com</p>
    </div>
    <div class="contact-form">
      <h2>Send Us a Message</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      alert(`Thank you for your message, ${this.form.name}!`);
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.contact {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f5f5f5; /* Svijetla pozadina za cijelu stranicu */
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #ffffff; /* Bijela boja za naslov */
  background-color: #505b3e; /* Maslinasto zelena pozadina za naslov */
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

h2 {
  color: #505b3e;
  text-align: center;
}

.contact-info {
  text-align: center;
  margin-bottom: 40px;
}

.contact-form {
  margin-bottom: 40px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #505b3e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #4a5437;
}

.faq-section {
  margin-bottom: 40px;
}

.faq-section ul {
  list-style-type: none;
  padding: 0;
}

.faq-section li {
  margin-bottom: 10px;
}

.social-media {
  text-align: center;
}

.social-media p {
  font-size: 1.2em;
}

.social-media a {
  color: #505b3e;
  text-decoration: none;
  margin: 0 10px;
}

.social-media a:hover {
  text-decoration: underline;
}
</style>
