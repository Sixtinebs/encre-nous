<template>
  <div id="register-beta-lecteur">
    <div class="text-register">
      <h1>Votre profil de bêta-lecteur</h1>
      <p>Ut gravida semper eros, ac mattis ligula bibendum at. Vivamus tempor nec arcu malesuada faucibus.</p>
      <p> dictum turpis, at elementum magna fermentum sit amet.nec arcu malesuada faucibus. Vestibulum ante ipsum primis
        in faucibus </p>
      <p>orci luctus et ultrices posuere cubilia curae; Praesent lacus elit, aliquet et malesuada vel, finibus et nibh.
        Nunc consectetur massa sem, vitae luctus ante sodales nec. Sed sapien erat, tempus tristique orci sit amet,
        semper
        eleifend nibh. </p>

    </div>
    <div class="register form">
      <div class="info-user">
        <div class="info">
          <label class="label-register" for="last-name">Votre nom</label>
          <input v-model="lastName" type="text" id="last-name" name="last-name" required maxlength="50">
        </div>
        <div class="info">
          <label class="label-register" for="first-name">Votre Prénom</label>
          <input v-model="firstName" type="text" id="first-name" name="first-name" required maxlength="50">
        </div>
      </div>

      <div class="info-user ">
        <div class="info">
          <label class="label-register" for="birthday">Votre date de naissance</label>
          <input v-model="birthday" type="date" id="birthday" name="birthday" required placeholder="Votre date de naissance" />
        </div>
        <div class="info">
          <label class="label-register label-file" for="img-profil">Ajoutez une photo de profil</label>
          <p class="custom-file">Importer</p>
          <input type="file" class="input-file" id="img-profil" name="img-profil">
        </div>
      </div>

      <div class="info-user">
        <div class="info">
          <label class="label-register" for="description">Décrivez-vous </label>
          <textarea v-model="description" type="textarea" id="description" required name="description"></textarea>
        </div>
        <div class="info">
          <label class="label-register" for="method-working">Décrivez votre méthode de travail</label>
          <textarea v-model="methodWorking" id="method-working" required name="method-working"></textarea>
        </div>
      </div>

      <div class="info-user">
        <div>
          <div id="options-experiences">
            <p class="label-register">Combien d'années d'expériences avec vous en tant que Bêta-lecteur ?</p>
            <div class="option-experience">
              <input v-model="experience" type="radio" id="option-1" name="experience" value="Moins de 6 mois">
              <label class="label-register" for="experience">Moins de 6 mois</label>
            </div>
            <div class="option-experience">
              <input v-model="experience" type="radio" id="option-2" name="experience" value="6 mois à 2 ans">
              <label class="label-register" for="experience">6 mois à 2 ans</label>
            </div>
            <div class="option-experience">
              <input v-model="experience" type="radio" id="option-3" name="experience" value="Entre 2 et 5ans">
              <label class="label-register" for="experience">Entre 2 et 5ans</label>
            </div>
            <div class="option-experience">
              <input v-model="experience" type="radio" id="option-4" name="experience" value="Plus de 5 ans">
              <label class="label-register" for="experience">Plus de 5 ans</label>
            </div>
          </div>
        </div>
      </div>

      <div class="info-user">
        <div class="info">
          <label class="label-register" for="prices">Tarifs</label>
          <input v-model="tarif" type="text" id="prices" required name="prices">
        </div>
        <div class="info">
          <label class="label-register" for="siret">Siret</label>
          <input v-model="siret" type="number" id="Siret" name="Siret" required  minlength="13" maxlength="13">
        </div>
      </div>

      <div class="info-user">
        <div class="info">
          <label class="label-register" for="email">Votre Email</label>
          <input v-model="email" type="email" id="email" required name="email">
        </div>
        <div class="info">
          <label class="label-register" for="password">Votre mot de passe</label>
          <input v-model="password" type="password" id="password" required name="password" autocomplete="on">
        </div>
      </div>

      <button @click="createBetaReader" class="btn-form btn-submit">Créer son profil </button>

    </div>
  </div>
</template>

<script >
import { ref } from 'vue';
export default {
  setup() {
    return {
      lastName: ref(''),
      firstName: ref(''),
      birthday: ref(''),
      description: ref(''),
      methodWorking: ref(''),
      tarif: ref(''),
      experience: ref(''),
      siret: ref(''),
      email: ref(''),
      password: ref('')
    }
  },
  methods: {
    createBetaReader() {
      const self = this;
      this.$store.dispatch('createAccountBetaReader', {
        last_name: this.lastName,
        first_name: this.firstName,
        birthday: this.birthday,
        description: this.description,
        method_working: this.methodWorking,
        price: this.tarif,
        experience: this.experience,
        siret: this.siret,
        email: this.email,
        role: 'BR',
        // TODO : confirme mot de passe
        password: this.password
      })
        .then(function () {
            self.$router.push('/connexion');
        },
          function (error) {
            console.log(error);
          })

    }
  }
};
</script>

<style>
.text-register h1 {
  font-weight: bold;
}

.text-register p {
  margin: 0;
}

.text-register {
  max-width: 1000px;
  margin: auto;
}

.info-user {
  border: 2px solid #ff5e1a;
  padding: 50px 80px;
  margin: 40px 100px;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
}

.info {
  display: flex;
  flex-direction: column;
  width: 40%;
}

.label-register {
  text-align: left;
  font-weight: bold;
  padding: 0 0 20px 40px;
  font-size: 20px;
}

.form input {
  height: 40px;
}

input[type="file"] {
  display: none;
}

.custom-file {
  border: 1px solid black;
  display: flex;
  margin-top: 0px;
  cursor: pointer;
  height: 40px;
  justify-content: center;
  align-items: center;
}

.option-experience {
  display: flex;
}

.option-experience label {
  padding: 0 0 0 10px;
  display: flex;
  align-items: center;
}

.btn-submit {
  font-size: 20px;
  cursor: pointer;

}

.form {
  margin-bottom: 70px;
}
</style>