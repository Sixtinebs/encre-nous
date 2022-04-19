<template>
  <div id="my-profil">
    <h1>Bonjour {{ userInfo.first_name }}</h1>

    <section id="display-profil"  v-if="display">
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
    </section>

    <section id="modify-profil" v-if="!display">
      <form>
        <div class="bloc-1">
          <div class="container-image">
            <img v-if="userInfo.img" :src="infoPost.image" alt="" />
            <img v-else src="../assets/images/image-default.jpeg" alt="" />
          </div>

          <div class="container-info">
            <h2>A propose de moi</h2>
            <div>
              <label for="email">Votre email : </label>
              <input type="email" id="email" name="email" :placeholder="user.email" />
            </div>

            <div>
              <label for="password">Votre password : </label>
              <input type="password" id="password" name="password" :placeholder="user.password" />
            </div>

            <div class="full-name">
              <div>
                <label for="first-name">Votre prénom : </label>
                <input type="text" id="first-name" name="first-name" :placeholder="userInfo.first_name" />
              </div>
              <div>
                <label for="last-name">Votre nom : </label>
                <input type="text" id="last-name" name="last-name" :placeholder="userInfo.last_name" />
              </div>
            </div>
          </div>

          <div>
            <label for="birthday">Votre date de naissance : </label>
            <input type="date" id="birthday" name="birthday" :value="userInfo.birthday" />
          </div>

          <div>
            <label for="description">Décrivez-vous : </label>
            <input type="textarea" id="description" name="description" :placeholder="userInfo.description" />
          </div>

          <div>
            <label for="experience">Parlez de vos expériences : </label>
            <input type="textarea" id="experience" name="experience" :placeholder="userInfo.experience" />
          </div>

          <div>
            <label for="method-working">Dite en plus sur la façon dont vous travaillez : </label>
            <input type="textarea" id="method-working" name="method-working" :placeholder="userInfo.method_working" />
          </div>

        </div>
        <a @click="validate()" class="btn-form btn-submit">Valider mon profil</a>
      </form>
    </section>

  </div>
</template>

<script>
//import userService from '../services/userService';
import { mapState } from 'vuex'
export default {
  name: "MyLogin",
  data(){
    return {
      display: true
    }
  },
  computed: {
    ...mapState(['userInfo', 'user']),

  },
  methods: {
    signOut() {
      this.$store.commit('LOGOUT');
      this.$router.push('/');
    },
    modify() {
      this.display = false;
      
    },
    validate(){
      this.display = true;
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