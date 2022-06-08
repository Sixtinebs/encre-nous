<template>
    <router-link to="/"><img src="../assets/logos/encre-nous-logo.png" id="logo-header" /></router-link>
        <slide-menu>
            <router-link to="/"> Accueil </router-link>
            <router-link to="/beta-readers"> Trouver des bêta-lecteurs </router-link>
            <router-link to="/livres">Trouver des auteurs </router-link>
            <router-link v-if="status !== 'login'" to="/enregistrer"> Je m'inscris </router-link>
            <router-link v-if="status == 'login'" class="btn-form" to="/profil"> Mon profil </router-link>
            <router-link v-if="status !== 'login'" class="btn-form" to="/connexion"> Se connecter </router-link>
        </slide-menu>
</template>

<script>
import { Slide as slideMenu } from 'vue3-burger-menu';
import { mapState } from 'vuex';
export default {
    components: {
        slideMenu
    },
  computed: {
     ...mapState(['status'])
  }
}
</script>

<style scoped>
.bm-menu a {
    color: white;
    justify-content: center;
}

.bm-menu a:hover {
    color: #ff5e1a;
}

.bm-menu .btn-form:hover {
    background-color: #ff5f1a00;
    border: 1px solid #ff5e1a;

}

#logo-header {
    max-height: 60px;

}
</style>