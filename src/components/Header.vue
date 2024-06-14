<template>
  <header>
    <nav>
      <div class="logo">
        <img src="@/assets/CRO_hunt_logo_.png" alt="CRO Hunt Logo">
      </div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/gallery">Gallery</router-link></li>
        <li><router-link to="/what-we-offer">What We Offer</router-link></li>
        <li><router-link to="/offer/bear">Bear Hunting</router-link></li>
        <li><router-link to="/offer/red_stag">Red Stag Hunting</router-link></li>
        <li><router-link to="/offer/chamois">Chamois Hunting</router-link></li>
        <li><router-link to="/offer/roe_deer">Roe Deer Hunting</router-link></li>
        <li><router-link to="/offer/wild_boar">Wild Boar Hunting</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
};
</script>

<style scoped>
header {
  background-color: #505b3e; /* Maslinasto zelena boja */
  padding: 10px 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 50px; /* Visina loga, možete prilagoditi prema potrebi */
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

li {
  margin: 0 15px;
}

a {
  text-decoration: none;
  color: white; /* Bijela boja za tekst */
  font-size: 1.2em;
  transition: color 0.3s ease;
}

a:hover {
  color: #ffffffb3; /* Svjetlija maslinasto zelena boja pri prelasku miša */
}
</style>