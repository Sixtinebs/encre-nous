<template>
  <header>
    <router-link to="/" id="link-home"><img src="../assets/logos/encre-nous-logo.png" id="logo-header" /></router-link>
    <nav id="nav">
      <router-link to="/"> Accueil </router-link>
      <router-link to="/beta-readers">Trouver des bêta-lecteurs </router-link>
      <router-link to="/livres">Trouver des auteurs</router-link>
      <router-link v-if="status!=='login'" to="/enregistrer"> Je m'inscris </router-link>
      <router-link v-if="status=='login'" class="btn-form" to="/profil"> Mon profil </router-link>
      <router-link v-if="status!=='login'" class="btn-form" to="/connexion"> Se connecter </router-link>
    </nav>
  </header>
</template>

<script scoped>
import { mapState } from 'vuex';
export default {
  name: "HeaderMain",
  computed: {
     ...mapState(['status'])
  }
};
</script>

<style>
#logo-header {
  max-height: 90px;
}

header {
  display: flex;
  padding: 20px 60px;
  justify-content: space-between;
  background: #FFFFFF4D 0% 0% no-repeat padding-box;
}

#link-home {
  display: block;
}

#nav {
  display: flex;
  align-items: center;
  font-size: 20px;
}

a {
  text-decoration: none;
  margin: 0 20px;
  color: #0e0e66;
}

a:hover {
  color: #ff5e1a;
}

a:active,
a:focus {
  color: #ff5e1a;
}
</style>
