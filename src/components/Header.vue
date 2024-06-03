<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/locations">Hunting Locations</router-link></li>
        <li><router-link to="/services">Tourist Services</router-link></li>
        <li><router-link to="/gallery">Gallery</router-link></li>
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
  background-color: #505b3e; /* Maslinasto zelena pozadina */
  color: white; /* Bijela boja teksta */
  padding: 10px 20px; /* Unutarnji razmak */
  border-bottom: 2px solid #ccc; /* Donji okvir */
  position: fixed; /* Fiksni položaj na vrhu */
  width: 100%;
  top: 0;
  z-index: 1000;
}

nav {
  display: flex;
  justify-content: flex-end;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

li {
  margin-left: 20px;
}

a {
  text-decoration: none;
  color: white; /* Bijela boja teksta za linkove */
  transition: color 0.3s; /* Glatka tranzicija za hover efekt */
}

a:hover {
  color: #6f7b4f; /* Svjetlija maslinasto zelena boja prilikom hovera */
}
</style>