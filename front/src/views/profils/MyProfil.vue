<template>
  <div id="my-profil">
    <h1>Bonjour {{ userInfo.first_name }}</h1>

    <section id="display-profil" v-if="display">

      <div class="bloc-1">

        <div class="container-image">
          <img v-if="userInfo.img && !url" :src="userInfo.img" alt="" />
          <img v-else-if="url" :src="url" alt="" />
          <img v-else src="../../assets/images/image-default.jpeg" alt="" />
          <div class="info info-img">
            <input @change="onFileChange" type="file" class="input-file" id="img-profil" name="img-profil" ref="file"
              accept="image/png, image/jpeg, image/jpg">
            <p class="custom-file" @click="updateImage(user.id, $refs.file.files[0])">Valider</p>
            <p class="succes-msg-img" v-if="message">{{ message }}</p>
          </div>
        </div>


        <div class="container-info">
          <h2>A propose de moi</h2>
          <p>{{ user.email }}</p>
          <p>{{ userInfo.first_name }} {{ userInfo.last_name }}</p>
          <p>Date de naissance : {{ dateTime(userInfo.birthday) }}</p>
          <p>Date d'inscription : {{ dateTime(userInfo.createdAt) }}</p>
          <p v-if="user.role == 'BR'">Mon siret {{ userInfo.siret }}</p>
        </div>
      </div>

      <div class="container-description">
        <h2>Ma description</h2>
        <p>{{ userInfo.description }}</p>
      </div>

      <div class="container-other-info">
        <div v-if="user.role == 'BR'" class="container-experience">
          <h2>Mon Experience</h2>
          <p>{{ userInfo.experience }}</p>
        </div>

        <div v-if="user.role == 'BR'" class="container-method-working">
          <h2>Ma méthode de travail</h2>
          <p>{{ userInfo.method_working }}</p>
        </div>
        <div v-if="user.role == 'BR'" class="container-method-working">
          <h2>Mon prix</h2>
          <p>{{ userInfo.price }}</p>
        </div>

        <div v-if="user.role == 'A'" class="container-my-books">
          <h2>Mes livres </h2>
          <list-book-author v-bind:author-id="userInfo.id" />
        </div>

      </div>
      <div class="all-buttons">
        <a v-if="user.role == 'A'" @click="addBook()" class="btn-form btn-submit">Ajouter un livre</a>
        <a @click="modify()" class="btn-form btn-submit">Modifier mon profil</a>
        <a @click="signOut()" class="btn-form btn-submit">Se déconnecter</a>
        <a @click="deleteProfil(user.id)" class="btn-delete btn-form btn-submit">Supprimer son compte</a>
      </div>

    </section>

    <section id="modify-profil" v-if="!display">
      <modify-profil @change-display="modify" />
    </section>


  </div>
</template>

<script>
import userService from '@/services/userService';
import bookService from '@/services/bookService';
import { ref } from 'vue';
import { mapState } from 'vuex';
import ModifyProfil from './ModifyProfil.vue';
import moment from 'moment';
import ListBookAuthor from '../../components/books/ListBookAuthor.vue';


export default {
  name: "MyLogin",
  data() {
    return {
      display: true,
      lastName: ref(''),
      firstName: ref(''),
      birthday: ref(''),
      description: ref(''),
      methodWorking: ref(''),
      tarif: ref(''),
      experience: ref(''),
      siret: ref(''),
      email: ref(''),
      password: ref(''),
      errorMessage: '',
      url: null,
      file: null,
    }
  },
  components: {
    ModifyProfil,
    ListBookAuthor
  },
  computed: {
    ...mapState(['userInfo', 'user']),
  },
  methods: {
    getBooksByAuthor(id) {
      bookService.getByAuthor(id)
        .then((response) => {
          this.books = response.data.books
          console.log(response.data.books)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    signOut() {
      this.$store.commit('LOGOUT');
      this.$router.push('/');
    },
    updateImage(id, file) {
      if (!file) return;
      let formData = new FormData();
      formData.append("file", file);
      if (this.user.role == "A") {
        userService.modifyAuthor(id, formData)
          .then((resp) => {
            this.message = `Votre photo à été ajouté.`;
            this.$store.commit('USER_INFO', resp.data.author)

          })
          .catch((error) => console.log(error))
      }
      if (this.user.role == "BR") {
        userService.modifyBetaReader(id, formData)
          .then((resp) => {
            this.message = `Votre photo à été ajouté.`;
            this.$store.commit('USER_INFO', resp.data.beta_reader)
          })
          .catch((error) => console.log(error))
      }
    },
    modify() {
      this.display = !this.display;
    },

    deleteProfil(id) {
      if (this.$store.state.user.role == "BR") {
        if (confirm("Est-vous sur de vouloir supprimer votre profil ?")) {
          userService.deleteBetaReader(id)
            .then(() => {
              this.$store.commit('LOGOUT');
              this.$router.push('/');
            }).catch((error) => console.log(error))
        }

      }
      if (this.$store.state.user.role == "A") {
        if (confirm("Est-vous sur de vouloir supprimer votre profil ?")) {
          userService.deleteAuthor(id)
            .then(() => {
              this.$store.commit('LOGOUT');
              this.$router.push('/');
            }).catch((error) => console.log(error))
        }
      }
    },
    dateTime(value) {
      return moment(value).format('DD/MM/YYYY');
    },

    addBook() {
      this.$router.push('/ajouter-livres');
    }

  }
}
</script>

<style scoped>
#my-profil {
  margin: 0 150px 100px 150px;
}

#my-profil h1 {
  font-weight: bold;
}

#my-profil h2 {
  font-weight: bold;
  text-align: left;
}

#my-profil p {
  text-align: left;
}

#my-profil .bloc-1 {
  display: flex;
}

#my-profil img {
  max-width: 400px;
  border-radius: 25px;

}

#my-profil .container-info {
  margin-left: 50px;
}

#my-profil a.btn-submit {
  float: initial;
  margin-bottom: 15px;
}

#modify-profil .container-info div {
  display: flex;
  margin-top: 15px;
}

#modify-profil .container-info div input {
  height: 40px;
}

#modify-profil .container-info div label {
  margin-right: 5px;
}

input[type="file"] {
  display: block;
}

#modify-profil .container-image {
  max-width: 400px;
}

#modify-profil.container-info {
  margin-left: 0px;
}

.container-other-info {
  margin-bottom: 100px;
}

.info-img {
  width: 100%;
}

.succes-msg-img {
  color: #99a71b;
  font-weight: bold;
  margin-top: 0;
}

.custom-file {
  margin-top: 15px;
  border: 1px solid black;
  display: flex;
  cursor: pointer;
  height: 40px;
  justify-content: center;
  align-items: center;
}

.all-buttons {
  display: flex;
  flex-wrap: wrap;
}

@media screen and (max-width: 990px) {
  #my-profil {
    margin: 0 25px 100px 25px;
  }

  .bloc-1 {
    display: flex;

  }

  .bloc-1 .container-info {
    width: 70%;
  }

  /* .bloc-1 .container-image {
    width: 30%;
  } */

  #my-profil img {
    max-width: 100%;
    width: 400px
  }

}

@media screen and (max-width: 750px) {
  .all-buttons .btn-submit {
    font-size: 13px;
    margin: 3px auto;
  }

  .all-buttons .btn-form {
    padding: 10px;
  }

  #bloc-liste-book .book {
    margin: 15px 0;
  }
}

@media screen and (max-width: 450px) {
  .bloc-1 {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }

  #my-profil .container-info {
    margin-left: 0px;
    width: 100%;
  }

  .bloc-1 .container-image {
    width: 100%;
  }

  #my-profil img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}
</style>