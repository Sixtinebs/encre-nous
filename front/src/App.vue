<template>
  <div id="container">
    <HeaderMain />
    <router-view />
  </div>
</template>

<script>
import HeaderMain from "./components/HeaderMain.vue";

export default {
  name: "App",
  components: {
    HeaderMain,
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
</style>
