<template>
  <div id="bloc-home-1">
    <h1>Bienvenue sur la seule plateforme <br>de mise en relation entre beta lecteur et auteurs !</h1>
    <input
      type="text"
      placeholder="Rechercher un projet de lecture ..."
    >
    <img
      src="../assets/images/books-imagination.jpg"
      alt=""
    >
  </div>
  <div id="bloc-home-2">
    <StartRegister />
  </div>
</template>

<script>
import StartRegister from "../components/StartRegister.vue";
export default {
  name: "MyHome",
  components: {
    StartRegister,
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
  height: 531px;
  margin-top: -17px;
}
h1 {
  margin-top: 65px;
}
input {
  border-radius: 50px;
  width: 650px;
  height: 60px;
  border: 1px solid #707070;
  margin-top: 20px;
}
input::placeholder {
  text-align: center;
  letter-spacing: 0px;
  color: #918f8f;
  font-size: 18px;
}

img {
  width: 100%;
  position: absolute;
  top: -210px;
  left: 0;
  z-index: -1;
  height: 740px;
  object-fit: cover;
}
</style>
