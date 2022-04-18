<template>
  <div id="my-profil">
    <h1>Bonjour {{ userInfo.first_name }}</h1>
    <div class="bloc-1">
      <div class="container-image">
        <img v-if="userInfo.img" :src="infoPost.image" alt="" />
        <img v-else src="../assets/images/image-default.jpeg" alt="" />
      </div>

      <div class="container-info">
        <h2>A propose de moi</h2>
        <p>{{ user.email }}</p>
        <p>{{ userInfo.first_name }} {{ userInfo.last_name }}</p>
        <p>Date de naissance : {{ userInfo.birthday }}</p>
        <p>Date d'inscription{{ userInfo.createdAt }}</p>
      </div>
    </div>

    <div class="container-description">
      <h2>Ma description</h2>
      <p>{{ userInfo.description }}</p>
    </div>

    <div class="container-other-info">
      <div v-if="userInfo.experience" class="container-experience">
        <h2>Mon Experience</h2>
        <p>{{ userInfo.experience }}</p>
      </div>

      <div>
        <div v-if="userInfo.method_working" class="container-method-working">
          <h2>Ma méthode de travail</h2>
          <p>{{ userInfo.method_working }}</p>
        </div>
      </div>
    </div>

    <a @click="modify()" class="btn-form btn-submit">Modifier mon profil</a>
    <a @click="signOut()" class="btn-form btn-submit">Se déconnecter</a>
  </div>

</template>

<script>
//import userService from '../services/userService';
import { mapState } from 'vuex'
export default {
  name: "MyLogin",
  computed: {
    ...mapState( ['userInfo', 'user']),

  },
  methods: {
    signOut() {
      this.$store.commit('LOGOUT');
      this.$router.push('/');
    },
    modify() {
      console.log('coucou !')
    }
  }
}
</script>

<style scoped>
#my-profil {
  margin: 0 150px 100px 150px;
}

h1 {
  font-weight: bold;
}

h2 {
  font-weight: bold;
  text-align: left;
}

p {
  text-align: left;
}

.bloc-1 {
  display: flex;
}

img {
  max-width: 400px;
  border-radius: 25px;

}

.container-info {
  margin-left: 50px;
}

a.btn-submit {
  float: right;
}
</style>