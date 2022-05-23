<template>
      <slide-menu >
      <router-link to="/"> Accueil </router-link>
      <router-link to="/beta-readers"> Pour les auteurs </router-link>
      <router-link to="/livres"> Pour les béta-lecteurs </router-link>
      <router-link v-if="status!=='login'" to="/enregistrer"> Je m'inscris </router-link>
      <router-link v-if="status=='login'" class="btn-form" to="/profil"> Mon profil </router-link>
      <router-link v-if="status!=='login'" class="btn-form" to="/connexion"> Se connecter </router-link>
    </slide-menu>
</template>

<script>
import { Slide as slideMenu} from 'vue3-burger-menu' 
export default {
    components: {
        slideMenu // Register your component
    }
}
</script>

<style>

</style>