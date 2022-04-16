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
        <input type="password" id="password" name="password" v-model="password" />
      </div>
      <button type="submit" class="btn-form btn-submit" @click="onSubmit">Se connecter</button>
    </form>
  </div>
  <img class="img-background" src="../assets/images/books-imagination.jpg" alt="">
</template>

<script>
import { ref } from 'vue';
export default {
  name: "LoginUser",
  setup() {
    return {
      email: ref(''),
      password: ref('')
    }

  }
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

form button {
  display: flex;
}
</style>
