<template>
  <div id="container">
    <HeaderMain />
    <router-view />
    <FooterMain />
  </div>
</template>

<script>
import HeaderMain from "./components/HeaderMain.vue";
import FooterMain from "./components/FooterMain.vue";

export default {
  name: "App",
  components: {
    HeaderMain,
    FooterMain
  },
};
</script>

<style>
body {
  margin: initial;
}
#container {
  font-family: "Segoe UI", Eras, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0e0e66;
}


@font-face {
  font-family: "Eras";
  src: url("./assets/fonts/eras/eras-demi-itc.ttf") format("truetype");
}

@font-face {
  font-family: "Segoe UI";
  src: url("./assets/fonts/segoe-ui/Segoe-UI.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Segoe UI";
  src: url("./assets/fonts/segoe-ui/Segoe-UI-Bold-Italic.ttf")
    format("truetype");
  font-weight: bold;
  font-style: italic;
}

@font-face {
  font-family: "Segoe UI";
  src: url("./assets/fonts/segoe-ui/Segoe-UI-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Segoe UI";
  src: url("./assets/fonts/segoe-ui/Segoe-UI-Italic.ttf") format("truetype");
  font-weight: normal;
  font-style: italic;
}
h1 {
  font-weight: normal;
}
h2 {
  color: #ff5e1a;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 35px;
}
.btn-form {
  background-color: #ff5e1a;
  border: 1px solid #70707000;
  border-radius: 45px;
  padding: 17px 15px;
  color: #ffffff;
  cursor: pointer;
}
.btn-form:hover {
  background-color: #0e0e66;
  color: #ffffff;
}


.btn-form.btn-1 {
     background-color: #0e0e66;
     color: #ffffff;
}
.btn-form.btn-1:hover {
    background-color: #ff5e1a;
    border: 0.5px solid #0e0e66;
    color: #ffffff;
}
.btn-form.btn-2:hover {
    border: 0.5px solid #ff5e1a;
    color: #ffffff;
}

</style>
