<template>
  <footer>
    <div id="bloc-footer-1" class="bloc-footer">
      <router-link to="/"> Accueil </router-link>
      <router-link to="/beta-readers"> Pour les auteurs </router-link>
      <router-link to="/livres"> Pour les béta-lecteurs </router-link>
    </div>
    <div id="bloc-footer-2" class="bloc-footer">
      <router-link to="#"> Qui sommes-nous ? </router-link>
      <router-link to="#">Blog </router-link>
       <router-link to="#">La boutique </router-link>
    </div>
    <div id="bloc-footer-3" class="bloc-footer">
      <router-link to="#"> Les mentions légals </router-link>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoper>
footer {
  padding: 40px 0;
  background-color: #0e0e66;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  width: 100%;
}

footer a {
  color: white;
}

.bloc-footer {
    display: flex;
    flex-direction: column;
    text-align: left;
}
</style>