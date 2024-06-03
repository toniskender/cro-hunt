<template>
  <div class="home">
    <!-- Slika ispod navigacijskog menija -->
    <div class="banner-container">
      <img src="@/assets/images/Pogled.jpg" alt="Banner" class="banner">
    </div>
    <!-- CRO Hunt i opis -->
    <div class="intro-section">
      <div class="intro-text">
        <h2>CRO Hunt</h2>
      </div>
      <div class="intro-description">
        <p>Welcome to the official website of the hunting agency "CRO Hunt". Our headquarters are in Croatia, one of the most beautiful regions with a rich hunting tradition. Hunting is our passion and profession. If you are one of those people who still enjoy nature, the great outdoors and the thrill of the hunt, then you are what we want! Come and join us for an unforgettable hunting experience in Croatia and the rest of the world, you won't regret it!</p>
        <p>On behalf of our team, we wish you all a successful hunt – DOBRA KOB!</p>
      </div>
    </div>
    
    <!-- Ponuda lova -->
    <div class="section">
      <h2>What We Offer</h2>
      <div class="offerings">
        <div class="offering" @click="goToOffer('bear')">
          <img src="@/assets/images/Medvjed.jpeg" alt="Bear Hunting">
          <div class="offering-text">Bear Hunting</div>
        </div>
        <div class="offering" @click="goToOffer('red_stag')">
          <img src="@/assets/images/Jelen.jpeg" alt="Red Stag Hunting">
          <div class="offering-text">Red Stag Hunting</div>
        </div>
        <div class="offering" @click="goToOffer('chamois')">
          <img src="@/assets/images/Divokoza.jpg" alt="Chamois Hunting">
          <div class="offering-text">Chamois Hunting</div>
        </div>
        <div class="offering" @click="goToOffer('roe_deer')">
          <img src="@/assets/images/Srnjak.jpg" alt="Roe Deer Hunting">
          <div class="offering-text">Roe Deer Hunting</div>
        </div>
        <div class="offering" @click="goToOffer('wild_boar')">
          <img src="@/assets/images/Prasci.jpeg" alt="Wild Boar Hunting">
          <div class="offering-text">Wild Boar Hunting</div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>Tourist Services</h2>
      <p>Our tourist services include guided hunting tours, accommodation, and transportation. Enjoy a seamless and enjoyable hunting trip with our professional services.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToOffer(offer) {
      this.$router.push({ name: 'HuntingOffer', params: { offer } });
    }
  }
};
</script>

<style scoped>
.home {
  padding-top: 60px; /* Osigurava da sadržaj ne prelazi ispod fiksnog headera */
}

.banner-container {
  width: 100%;
  height: 773.39px; /* Postavljanje visine slike */
  overflow: hidden;
}

.banner {
  width: 100%;
  height: 100%; /* Postavljanje visine na 100% */
  object-fit: cover; /* Prilagođava sliku da pokrije cijeli prostor */
}

.intro-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 20px;
}

.intro-text {
  flex: 1;
}

.intro-description {
  flex: 2;
}

.intro-text h2 {
  font-size: 3em;
  color: #505b3e;
  margin: 0;
}

.intro-description p {
  font-size: 1.2em;
  color: #666;
}

.section {
  margin: 20px 0;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}

.offerings {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.offering {
  flex: 1 1 calc(33.333% - 20px);
  text-align: center;
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.offering img {
  width: 100%;
  height: 340px; /* Postavljanje visine slika */
  object-fit: cover;
}

.offering-text {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px 0;
  font-size: 1.2em;
}

@media (max-width: 768px) {
  .intro-section {
    flex-direction: column;
  }

  .intro-description {
    margin-top: 20px;
  }

  .offerings {
    flex-direction: column;
    align-items: center;
  }

  .offering {
    flex: 1 1 100%;
  }
}

@media (max-width: 480px) {
  .offering {
    flex: 1 1 100%;
  }
}
</style>
