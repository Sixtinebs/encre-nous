<template>
  <div id="bloc-home-1">
    <h1>Bienvenue sur la seule plateforme <br>de mise en relation entre beta lecteurs et auteurs !</h1>
    <!-- <input class="input-search" type="text" placeholder="Rechercher un projet de lecture ..."> -->
    <img class="img-background" src="../assets/images/books-imagination.jpg" alt="">
  </div>
  <div id="bloc-home-2">
    <start-register />
  </div>
  <div id="bloc-home-3">
    <h2>Comment ça marche ?</h2>
    <div class="bloc-instruction">
      <h3>Beta lecteur cherche projet</h3>
      <p>Vous êtes bêta-lecteur et souhaitez être rémunéré pour vos conseils ?</p>
      <p>Proin posuere diam in diam sagittis luctus. Proin feugiat malesuada purus ac malesuada. Ut eget ligula
        condimentum, egestas lectus sit amet,</p>
    </div>
    <div class="bloc-instruction">
      <h3>Auteur cherche bêta-lecteur</h3>
      <p>Vous écrivez un livre et avec besoin de conseil ?</p>
      <p>Proin posuere diam in diam sagittis luctus. Proin feugiat malesuada purus ac malesuada. Vestibulum eget
        tristique dui, tincidunt lobortis libero. Ut eget ligula condimentum, egestas lectus sit amet,</p>
    </div>
  </div>
  <div id="bloc-home-4">
    <liste-last-beta-reader />
  </div>

</template>

<script>
import StartRegister from "../components/StartRegister.vue";
import ListeLastBetaReader from "../components/ListeLastBetaReader.vue";
export default {
  name: "MyHome",
  components: {
    StartRegister,
    ListeLastBetaReader
  },
};
</script>

<style scoped>
#bloc-home-1 {
  position: relative;
  height: 531px;
}

#bloc-home-2 {
  position: relative;
  height: 700px;
}

#bloc-home-3 {
  background-image: url("../assets/images/fond.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 60px 40px 60px 40px;
  height: fit-content;
}

#bloc-home-4 {
  padding-bottom: 40px;
}

h1 {
  margin-top: 65px;
  font-size: 40px;
}

#bloc-home-3 h2 {
  margin-bottom: 100px;
}

.input-search {
  border-radius: 50px;
  margin: auto;
  display: flex;
  width: 80%;
  height: 60px;
  border: 1px solid #707070;
  margin-top: 20px;
}

.input-search::placeholder {
  text-align: center;
  letter-spacing: 0px;
  color: #918f8f;
  font-size: 18px;
}

img.img-background {
  width: 100%;
  position: absolute;
  top: -200px;
  left: 0;
  z-index: -1;
  height: 740px;
  object-fit: cover;
}

@media screen and (max-width: 1100px) {
  #bloc-home-3 .bloc-instruction {
    height: max-content;
    padding: 20px;
  }
}

@media screen and (max-width: 880px){
   #bloc-home-3 .bloc-instruction {
   max-width: fit-content;
   width: 100%;
  margin: 0 0 30px 0;

  } 
}
</style>
