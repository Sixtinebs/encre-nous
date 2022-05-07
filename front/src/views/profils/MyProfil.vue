<template>
  <div id="my-profil">
    <h1>Bonjour {{ userInfo.first_name }}</h1>

    <section id="display-profil" v-if="display">
      <div class="bloc-1">
        <div class="container-image">
          <img v-if="userInfo.img" :src="infoPost.image" alt="" />
          <img v-else src="../../assets/images/image-default.jpeg" alt="" />
        </div>

        <div class="container-info">
          <h2>A propose de moi</h2>
          <p>{{ user.email }}</p>
          <p>{{ userInfo.first_name }} {{ userInfo.last_name }}</p>
          <p>Date de naissance : {{ dateTime(userInfo.birthday)  }}</p>
          <p>Date d'inscription{{  dateTime(userInfo.createdAt)}}</p>
          <p v-if="user.role == 'BR' ">Mon siret{{ userInfo.siret }}</p>
        </div>
      </div>

      <div class="container-description">
        <h2>Ma description</h2>
        <p>{{ userInfo.description }}</p>
      </div>

      <div class="container-other-info">
        <div v-if="user.role == 'BR' " class="container-experience">
          <h2>Mon Experience</h2>
          <p>{{ userInfo.experience }}</p>
        </div>

        <div>
          <div v-if="user.role == 'BR' " class="container-method-working">
            <h2>Ma méthode de travail</h2>
            <p>{{ userInfo.method_working }}</p>
          </div>
        </div>
      </div>
      
      <a v-if="user.role == 'A'" @click="addBook()" class="btn-form btn-submit">Ajouter un livre</a>
      <a @click="modify()" class="btn-form btn-submit">Modifier mon profil</a>
      <a @click="signOut()" class="btn-form btn-submit">Se déconnecter</a>
      <a @click="deleteProfil(user.id)" class="btn-delete">Supprimer son compte</a>
    </section>

    <section id="modify-profil" v-if="!display" >
      <ModifyProfil @change-display="modify"  @refresh-datas="refreshInfos"/>
    </section>

    
  </div>
</template>

<script>
import userService from '@/services/userService';
import { ref } from 'vue';
import { mapState } from 'vuex';
import ModifyProfil from './ModifyProfil.vue';
import moment from 'moment';

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
    }
  },
  components: {
    ModifyProfil
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
      console.log(this.display)
      this.display = !this.display ;
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

    refreshInfos() {
      console.log('coucou')

    },

    dateTime(value) {
      return moment(value).format('DD/MM/YYYY');
    },

    addBook(){
      console.log('coucou')
      this.$router.push('/ajouter-livres');
    }

  }
}
</script>

<style >
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
  float: right;
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
</style>