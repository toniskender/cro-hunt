<template>
  <footer>
    <p>&copy; 2024 Moja Web Stranica. Sva prava pridržana.</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
};
</script>

<style scoped>
footer {
  background-color: #505b3e; /* Maslinasto zelena pozadina */
  color: white; /* Bijela boja teksta */
  text-align: center;
  padding: 10px 20px; /* Unutarnji razmak */
  border-top: 2px solid #ccc; /* Gornji okvir */
  position: relative; /* Relativni položaj */
  bottom: 0;
  width: 100%;
}

footer p {
  margin: 0; /* Uklanjanje margine za p element */
}
</style>