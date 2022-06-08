<template>
  <div id="user-profil">
    <h1>Profil de {{ userDatas.first_name }}</h1>

    <section id="display-profil-user">
      <div class="bloc-1">
        <div class="container-image">
          <img v-if="userDatas.img" :src="userDatas.img" alt="" class="user-img"/>
          <img v-else src="../../assets/images/image-default.jpeg" class="user-img" alt="" />
        </div>
        <div class="container-info">
          <p>{{ userDatas.first_name }} {{ userDatas.last_name }}</p>
          <p>Date d'inscription : {{ dateTime(userDatas.createdAt) }}</p>
          <p v-if="role == 'br'">Mon siret {{ userDatas.siret }}</p>
          <div class="container-description">
            <h2>A propose de {{ userDatas.first_name }} </h2>
            <p>{{ userDatas.description }}</p>
          </div>
        </div>
      </div>
      <div class="container-other-info">
        <div v-if="role == 'br'" class="container-experience">
          <h2>Son Experience</h2>
          <p>{{ userDatas.experience }}</p>
        </div>

        <div v-if="role == 'br'" class="container-method-working">
          <h2>Sa méthode de travail</h2>
          <p>{{ userDatas.method_working }}</p>
        </div>
        <div v-if="role == 'a'" class="container-books">
          <h2>Ses livres</h2>
          <list-book-author v-if="userDatas.id" v-bind:author-id="userDatas.id" />
        </div>
        <a class="btn-form contact" :href="'/messaging/'+userDatas.user_id">Contactez {{userDatas.first_name }} </a>
      </div>
    </section>
  </div>
</template>

<script>
import userService from '@/services/userService';
import moment from 'moment';
import ListBookAuthor from '../../components/books/ListBookAuthor.vue';


export default {
  name: "ProfilUser",
  components: {
    ListBookAuthor
  },
  data() {
    return {
      id: this.$route.params.id,
      userDatas: [],
      role: this.$route.params.role
    };
  },
  mounted() {
    this.findCorrectRequest(this.id);
  },
  methods: {
    getBetaReader(id) {
      userService.getBetaReader(id)
        .then((response) => {
          this.userDatas = response.data.beta_readers;
          console.log(this.userDatas);
        }).catch((error) => console.log(error));
    },
    getAuthor(id) {
      userService.getAuthor(id)
        .then((response) => {
          console.log(response.data);
          this.userDatas = response.data.author;
        }).catch((error) => console.log(error));
    },
    findCorrectRequest(id) {
      if (this.role == "a") {
        console.log('ici')
        this.getAuthor(id);
      }
      else if (this.role == "br") {
        this.getBetaReader(id);
      }
      else {
        //TODO Faire page 404
        console.log("404");
      }
    },
    dateTime(value) {
      return moment(value).format("DD/MM/YYYY");
    },
  },

}
</script>

<style >
#user-profil {
  margin: 0 150px 100px 150px;
}

#user-profil h1 {
  font-weight: bold;
}

#user-profil h2 {
  font-weight: bold;
  text-align: left;
}

#user-profil p {
  text-align: left;
}

#user-profil .bloc-1 {
  display: flex;
}

#user-profil img {
  max-width: 400px;
  border-radius: 25px;
}

#display-profil-user .container-info {
  margin-left: 50px;
}

#user-profil a.btn-submit {
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
.btn-form.contact {
    margin: 10px;
    float: right;

}
@media screen and (max-width: 990px) {
  #user-profil {
    margin: 0 25px 100px 25px;
  }

  .bloc-1 {
    display: flex;
  }

  #user-profil .bloc-1 .container-info {
    width: 70%;
  }

  #user-profil .user-img {
    max-width: 100%;
    width: 400px
  }

}
@media screen and (max-width: 750px) {
  #user-profil .btn-submit {
    font-size: 13px;
    margin: 3px auto;
  }

  #user-profil .btn-form {
    padding: 10px;
  }


}
@media screen and (max-width: 550px) {
  .bloc-1 {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
  #user-profil .bloc-1 .container-info {
    width: 100%;
  }


  #user-profil .container-info {
    margin-left: 0px;
    width: 100%;
  }

  .bloc-1 .container-image {
    width: 100%;
  }

  #user-profil .user-img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}
</style>