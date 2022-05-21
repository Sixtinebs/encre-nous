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
      <div class="not-succes-msg" v-if="message" v-html="message"></div>
    </div>
    <div enctype="multipart/form-data" class="register form">
      <div class="info-user">
        <div class="info">
          <label class="label-register" for="last-name">Votre nom <span class="required">*</span></label>
          <input v-model="lastName" type="text" id="last-name" name="last-name" required maxlength="50">
        </div>
        <div class="info">
          <label class="label-register" for="first-name">Votre Prénom <span class="required">*</span></label>
          <input v-model="firstName" type="text" id="first-name" name="first-name" required maxlength="50">
        </div>
      </div>

      <div class="info-user ">
        <div class="info">
          <label class="label-register" for="birthday">Votre date de naissance <span class="required">*</span></label>
          <input v-model="birthday" type="date" id="birthday" name="birthday"  max="2004-01-01"
            placeholder="Votre date de naissance" />
        </div>
        <!-- <div class="info">
          <label class="label-register label-file" for="img-profil">Ajoutez une photo de profil</label>
          <p class="custom-file">Importer</p>
          <input  @change="selectFile" type="file" class="input-file" id="img-profil" name="img-profil" ref="file" accept="image/png, image/jpeg, image/jpg">
        </div> -->
      </div>

      <div class="info-user">
        <div class="info textarea">
          <label class="label-register" for="description">Décrivez-vous <span class="required">*</span></label>
          <textarea v-model="description" type="textarea" id="description"  name="description"></textarea>
        </div>
        <div class="info textarea">
          <label class="label-register textarea" for="method-working">Décrivez votre méthode de travail <span
              class="required">*</span></label>
          <textarea v-model="methodWorking" id="method-working"  name="method-working"></textarea>
        </div>
      </div>

      <div class="info-user">
        <div>
          <div id="options-experiences">
            <p class="label-register">Combien d'années d'expériences avec vous en tant que Bêta-lecteur ? <span
                class="required">*</span></p>
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
          <label class="label-register" for="prices">Tarifs <span class="required">*</span></label>
          <input v-model="tarif" type="text" id="prices"  name="prices">
        </div>
        <div class="info">
          <label class="label-register" for="siret">Siret <span class="required">*</span></label>
          <input v-model="siret" type="number" id="Siret" name="Siret"  minlength="13" maxlength="13">
        </div>
      </div>

      <div class="info-user">
        <div class="info">
          <label class="label-register" for="email">Votre Email <span class="required">*</span></label>
          <input v-model="email" type="email" id="email" required name="email">
        </div>
        <div class="info">
          <label class="label-register" for="password">Votre mot de passe <span class="required">*</span></label>
          <input v-model="password" type="password" id="password"  name="password"  autocomplete="on">
          <label class="label-register" for="confirm-password">Confirmer votre mot de passe <span
              class="required">*</span></label>
          <input v-model="confirmPassword" type="password" id="confirm-password"  name="confirm-password">
        </div>
      </div>
      <p class="field-required"><span class="required">*</span> Champ obligatoire</p>
      <button @click="createBetaReader" class="btn-form btn-submit">Créer son profil </button>

    </div>
  </div>
</template>

<script >
import { ref } from "vue";
export default {
  setup() {
    return {
      lastName: ref(""),
      firstName: ref(""),
      birthday: ref(""),
      description: ref(""),
      methodWorking: ref(""),
      tarif: ref(""),
      experience: ref(""),
      siret: ref(""),
      email: ref(""),
      password: ref(""),
      confirmPassword: ref(""),
      message: ref(""),
      file: null
    };
  },
  methods: {
    selectFile() {
      console.log('coucou')
      //const files = this.$refs.file.files[0];
      //if (!files.length) return;
      this.file = this.$refs.file.files[0];
      console.log(this.file)
    },
    async createBetaReader() {
      this.message = "";
      const fielIsEmpty = this.fieldEmptyMessage();
      const isCorrectPassword = this.verifyPassword(this.password, this.confirmPassword);
      if (!isCorrectPassword || fielIsEmpty) {
        console.log('ici')
        return;
      }
      // console.log(this.file)
      // let formData = new FormData();
      // formData.append("file", this.file);
      // formData.append("role", "br");
      // formData.append("last_name", this.lastName);
      // formData.append("first_name", this.firstName);
      // formData.append("birthday", this.birthday);
      // formData.append("description", this.description);
      // formData.append("price", this.price);
      // formData.append("siret", this.siret);
      // formData.append("password", this.password);
      // formData.append("experience", this.experience);
      // formData.append("method_working", this.method_working);
      // formData.append("email", this.email);


      //console.log("FORMDATA : "+ formData)
      const self = this;
      try {
      await this.$store
        .dispatch("createAccountBetaReader", { 
          last_name: this.lastName,
          first_name: this.firstName,
          birthday: this.birthday,
          description: this.description,
          method_working: this.methodWorking,
          price: this.tarif,
          experience: this.experience,
          siret: this.siret,
          email: this.email,
          role: "BR",
          password: this.password 
          })
         .then((response) => {
          console.log(response)
          self.$router.push("/connexion");
          }
        )
        .catch((error) => {
            if(error.response.data.errorCode == 1062) { 
              this.message += `<p>L'email existe déjà</p>`;
              this.scrollTop();
            } 
            console.log(error);
        })
      }catch(err) {
        console.log(err)
      }

       
    },
    verifyPassword(password, password2) {
      if (password == password2) {
        return true;
      } else {
        this.scrollTop();
        this.message += `<p>Les mots de passe ne corresponde pas</p>`;
        return false;
      }
    },
    fieldEmptyMessage() {
      let isEmpty = false;
      if (!this.lastName) {
        this.message += `<p>Le champ nom est vide</p>`;
        isEmpty = true;
      }
      if (!this.firstName) {
        this.message += `<p>Le champ prénom est vide</p>`;
        isEmpty = true;
      }
      if (!this.birthday) {
        this.message += `<p>Le champ anniversaire est vide</p>`;
        isEmpty = true;
      }
      if (!this.description) {
        this.message += `<p>Le champ description est vide</p>`;
        isEmpty = true;
      }
      if (!this.methodWorking) {
        this.message += `<p>Le champ méthode de travail est vide</p>`;
        isEmpty = true;
      }
      if (!this.siret) {
        this.message += `<p>Le champ siret est vide</p>`;
      }
      if (!this.email) {
        this.message += `<p>Le champ email est vide</p>`;
        isEmpty = true;
      }

      console.log(isEmpty)
      if(isEmpty){
        this.scrollTop();
        return true;
      } else {
        return false;
      }
    },
    scrollTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }

  },
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

/* .custom-file {
  border: 1px solid black;
  display: flex;
  margin-top: 0px;
  cursor: pointer;
  height: 40px;
  justify-content: center;
  align-items: center;
} */

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

.required {
  color: red;
}

.field-required {
  text-align: left;
  margin-left: 140px;
}

.textarea textarea{
  height: 300px;
}
</style>