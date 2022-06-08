<template>
  <div id="start-register">
    <div class="text">
      <p>Êtes-vous auteur ou bêta-lecteur ? </p>
    </div>
    <div class="buttons">
      <a class="btn-form btn-1" href="/enregistrer/auteur">Je suis auteur</a>
      <a class="btn-form btn-2" href="/enregistrer/beta-lecteur">Je suis Bêta-lecteur</a>
    </div>
  </div>

</template>

<script>
export default {};
</script>

<style  scoped >
#start-register {
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/images/books-start-register.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

img.img-background {
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0;
  z-index: -1;
  height: 700px;
  object-fit: cover;
}

.text {
  margin-bottom: 40px;
}

p {
  font-size: 35px;
  color: #ff5e1a;
  margin: initial;
}

.buttons {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-flow: wrap;

}
.btn-1 {
  margin-bottom: 35px;
}
.btn-1,
.btn-2 {
  display: inline-block;
  width: 390px;
  font-size: 35px;
  height: 60px;
  line-height: 60px;
}

.btn-1:hover,
.btn-2:hover {
  transition-duration: 500ms;
  transform-origin: top center;
  transform: scaleY(1.15);
}
@media screen and (max-width: 600px){
  .btn-1,
  .btn-2 {
    width: 80%;
    font-size: 25px;
    height: 40px;
    line-height: 40px;
  }
}


</style>