<template>
  <div id="app">
    <header>
      <nav>
        <div class="logo">
          <img src="@/assets/images/CRO_hunt_logo.png" alt="CRO Hunt Logo">
        </div>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/what-we-offer">What We Offer</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view/>
    <footer>
      <div class="footer-content">
        <div class="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@crohunt.com</p>
          <p>Phone: +385 99 772 3096</p>
        </div>
        <div class="footer-section social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 CRO Hunt. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #505b3e; /* Maslinasto zelena boja */
  padding: 10px 20px;
  display: flex;
  align-items: center;
  color: #ffffff;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px; /* Pomakni logo malo desno */
}

.logo img {
  height: 50px;
}

.nav-links {
  flex: 1;
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links li a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
}

footer {
  background-color: #505b3e; /* Maslinasto zelena boja */
  color: #ffffff;
  padding: 20px 0;
  text-align: center;
  margin-top: auto;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
}

.footer-section {
  flex: 1;
  padding: 0 20px;
}

.footer-section h3 {
  border-bottom: 2px solid #ffffff;
  padding-bottom: 10px;
}

.footer-section ul {
  list-style-type: none;
  padding: 0;
}

.footer-section ul li {
  margin: 10px 0;
}

.footer-section ul li a {
  color: #ffffff;
  text-decoration: none;
}

.footer-bottom {
  background-color: #404b2e; /* Tamnija nijansa maslinasto zelene boje */
  padding: 10px 0;
}

.footer-bottom p {
  margin: 0;
}
</style>