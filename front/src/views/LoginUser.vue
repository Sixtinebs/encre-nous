<template>
  <div id="bloc-login">
    <h1>Se connecter</h1>
    <form>
      <div class="bloc-input">
        <label for="email">Email</label>
        <input class="input" type="email" id="email" name="email" placeholder="Votre email" v-model="email" />
      </div>
      <div class="bloc-input">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" name="password" autocomplete="on" v-model="password" />
      </div>
      <a @click="login()" class="btn-form btn-submit">Se connecter</a>
    </form>
    <p class='error-message' v-if="status == 'error_login'"> Email et/ou mot de passe invalide</p>
  </div>
  <img class="img-background" src="../assets/images/books-imagination.jpg" alt="">
</template>

<script>
import { ref } from 'vue';
import { mapState } from 'vuex';
export default {
  name: "LoginUser",
  setup() {
    return {
      email: ref(''),
      password: ref('')
    }

  },
  computed: {
    ...mapState(['status'])
  },
  methods: {
    login() {
      const self = this;
      this.$store.dispatch('loginUser', {
        email: this.email,
        password: this.password
      }).then(function () {
       self.$router.push('/profil');
      },
        function (error) {
          console.log(error);
        })
    },
  },

};
</script>

<style scoped>
#bloc-login {
  background-color: #ffffff;
  background-color: #ffffff;
  max-width: 700px;
  margin: 30px auto;
  padding: 20px 60px 20px 40px;
}

h1 {
  text-align: start;
  font-weight: bold;
}

input {
  width: 100%;
  height: 50px;
  margin-top: 5px;
  display: flex;
}

.bloc-input {
  margin-bottom: 25px;
}

label {
  text-align: start;
  display: block;
  font-size: 20px;
}

img.img-background {
  width: 100%;
  position: absolute;
  top: -200px;
  left: 0;
  z-index: -1;
  height: 900px;
  object-fit: cover;
}

form a {
  display: flex;
      display: inline-block;
}

.error-message {
  color: red;
}
</style>
