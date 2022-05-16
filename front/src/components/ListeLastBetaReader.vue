<template>
    <h2>Ils Viennent de nous rejoindre</h2>
    <p class="under-text">Les derniers beta lecteur à rejoindre l'aventure</p>
    <div class="list-user">
      <div class="user"  v-for="beta_reader in beta_readers" :key="beta_reader.id" >
        <img class="img-user" v-if="beta_reader.img" :src="infoPost.image" alt="" />
          <img class="img-user" v-else src="../assets/images/image-default.jpeg" alt="" />
        <div class="info-1">
          <p class="bloc ">{{beta_reader.first_name}}</p>
        </div>
        <div class="info-2">
          <p class="bloc">Beta lecteur depuis {{beta_reader.experience}}</p>
          <p class="bloc">Tarifs : <span class="price">{{beta_reader.price}}</span></p>
          <a class="bloc profil-user" :href="'/profil/br/'+beta_reader.user_id">Décrouvrire le profil complet</a>
        </div>

      </div>
    </div>
</template>

<script>
import userService from '../services/userService';
export default {
  name:'listeLastbetareader',
  data(){
    return {
        beta_readers: null,
    }
  },
  methods: {
    getLastBetaReader(){
      userService.getLastBetaReader()
      .then((response) => {
        this.beta_readers = response.data.beta_readers;
      })
      .catch((error) => {console.log(error)})
    }
  },
  mounted() {
    this.getLastBetaReader()
  }
  

}
</script>

<style scoped>

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

#bloc-home-4 .img-user {
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
  justify-content: space-around;
  padding: 0 130px;
  margin-top: 80px;
}
.user {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 15px;
  height: 300px;
  color: #ffffff
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
.blod {
  font-weight: bold;
}
.info-2 p:nth-child(2){
  margin-bottom: 7px;
}
.price {
  font-weight: 100;
}

#bloc-home-4 h2 {
  margin-bottom: 0px;
}
#bloc-home-4 .under-text {
  font-size: 25px;
  margin-top: 3px ;
}
#bloc-home-4 {
  margin-bottom: 100px ;
}
</style>