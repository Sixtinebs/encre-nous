<template>
  <div id="bloc-liste-br">
    <p>Nous avons trouvez {{ br_length }} Bêta-lecteur(s)</p>
    <div class="list-user">
      <div v-for="beta_reader in beta_readers" :key="beta_reader.id" class="user">
        <img class="img-user" v-if="beta_reader.img" :src="beta_reader.img" alt="" />
        <img class="img-user" v-else src="../assets/images/image-default.jpeg" alt="" />
        <div class="info-1">
          <p class="bloc">{{ beta_reader.first_name }} {{ beta_reader.last_name }}</p>
        </div>
        <div class="info-2">
          <p class="bloc">{{ beta_reader.experience }}</p>
          <p>Inscrit depuis <span class="genre bloc">{{ dateTime(beta_reader.createdAt) }}</span></p>
          <p class="bloc">Tarifs : <span class="price">{{ beta_reader.price }}</span></p>
          <a class="bloc profil-user" :href="'/profil/br/' + beta_reader.user_id">Découvrire le profil complet</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import userService from '../services/userService';
import moment from 'moment';

export default {
  name: 'ListeBetaReader',
  data() {
    return {
      beta_readers: null,
      br_length: 0
    }
  },
  methods: {
    getAllBetaReader() {
      userService.getAllBetaReader()
        .then((response) => {
          this.beta_readers = response.data.beta_readers;
          this.br_length = response.data.beta_readers.length
        })
        .catch((error) => console.log(error))
    },
    dateTime(value) {
      return moment(value).format('DD/MM/YYYY');
    },
  },
  mounted() {
    this.getAllBetaReader()
  }
}
</script>

<style>

.bloc-instruction {
  background-color: #0e0e66;
  color: #ffffff;
  width: 40%;
  display: inline-block;
  margin: 0 20px;
  border-radius: 130px;
  padding: 10px;
  height: 260px;
}

.bloc-instruction p {
  font-size: 20px;
  margin: initial;
}

h3 {
  color: #ff5e1a;
  font-weight: bold;
  font-size: 22px;
  text-transform: uppercase;
}

#bloc-liste-br .img-user {
  object-fit: cover;
  width: 100%;
  height: 300px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

.list-user {
  display: flex;
  justify-content: start;
  padding: 0 100px;
  margin-top: 80px;
  flex-flow: wrap;
  justify-content: center;
}

.user {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 15px;
  height: 300px;
  color: #ffffff;
  margin: 10px;

}

.img-user {
  height: 100%;
}

.info-1 {
  padding: 10px 7px;
  background-color: #0E0E6663;
}

.info-2 {
  padding: 10px 7px;
  background-color: #F948088A;
}

.user p {
  margin: initial;
  text-align: left;

}

.user a {
  color: #ffffff;
  text-align: left;
  display: block;
  margin: initial;
}

.bloc {
  font-weight: bold;
}

.info-2 p:nth-child(2) {
  margin-bottom: 7px;
}

.price {
  font-weight: 100;
}

#bloc-liste-br {
  margin-bottom: 100px;
}
@media screen and (max-width: 900px) {
 .list-user {
   padding: 0 10px;
 } 
}
</style>