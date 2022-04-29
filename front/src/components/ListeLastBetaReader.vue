<template>
    <h2>Ils Viennent de nous rejoindre</h2>
    <p class="under-text">Les derniers beta lecteur à rejoindre l'aventure</p>
    <div class="list-user">
      <div class="user">
        <img
          class="img-user"
          src="../assets/images/user-1.jpg"
          alt=""
        />
        <div class="info-1">
          <p class="blod">Jérome d'Atant</p>
          <p>Grenoble</p>
        </div>
        <div class="info-2">
          <p class="blod">Beta lecteur depuis 5 ans</p>
          <p>Spécialiste dans le genre <span class="genre blod">Fantastique</span></p>
          <p class="blod">Tarifs : <span class="price">X euros par mots</span></p>
          <a class="blod profil-user" src="#">Décrouvrire le profil complet</a>
        </div>

      </div>
      <div class="user">
        <img
          class="img-user"
          src="../assets/images/user-2.jpg"
          alt=""
        />
        <div class="info-1">
          <p class="blod">Jérome d'Atant</p>
          <p>Grenoble</p>
        </div>
        <div class="info-2">
          <p class="blod">Beta lecteur depuis 5 ans</p>
          <p>Spécialiste dans le genre <span class="genre blod">Fantastique</span></p>
          <p class="blod">Tarifs : <span class="price">X euros par mots</span></p>
          <a class="blod profil-user" src="#">Décrouvrire le profil complet</a>
        </div>

      </div>
      <div class="user">
        <img
          class="img-user"
          src="../assets/images/user-3.jpg"
          alt=""
        />
        <div class="info-1">
          <p class="blod">Jérome d'Atant</p>
          <p>Grenoble</p>
        </div>
        <div class="info-2">
          <p class="blod">Beta lecteur depuis 5 ans</p>
          <p>Spécialiste dans le genre <span class="genre blod">Fantastique</span></p>
          <p class="blod">Tarifs : <span class="price">X euros par mots</span></p>
          <a class="blod profil-user" src="#">Décrouvrire le profil complet</a>
        </div>

      </div>
      <div class="user">
        <img
          class="img-user"
          src="../assets/images/user-4.jpg"
          alt=""
        />
        <div class="info-1">
          <p class="blod">Jérome d'Atant</p>
          <p>Grenoble</p>
        </div>
        <div class="info-2">
          <p class="blod">Beta lecteur depuis 5 ans</p>
          <p>Spécialiste dans le genre <span class="genre blod">Fantastique</span></p>
          <p class="blod">Tarifs : <span class="price">X euros par mots</span></p>
          <a class="blod profil-user" src="#">Décrouvrire le profil complet</a>
        </div>

      </div>
    </div>
</template>

<script>
export default {

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