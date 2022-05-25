<template>
  <div id="container">
    <div :class="{ active: isMobile }">
      <header-main />
    </div>
    <div :class="{ active: isDesktop }">
      <burger-header />
    </div>
    <router-view />
    <footer-main />
  </div>
</template>

<script>
import HeaderMain from "./components/HeaderMain.vue";
import BurgerHeader from "./components/BurgerHeader.vue";
import FooterMain from "./components/FooterMain.vue";

export default {
  name: "App",
  components: {
    HeaderMain,
    FooterMain,
    BurgerHeader
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      isMobile: false,
      isDesktop: true
    }
  },
  mounted() {
    this.resizeMenu();

  },
  methods: {
    resizeMenu(){
      window.onresize = () => {
        this.windowWidth = window.innerWidth
        if (this.windowWidth > 1150) {
          this.isDesktop = true;
          this.isMobile = false;
        } else if (this.windowWidth < 1151) {
          this.isDesktop = false;
          this.isMobile = true;
        } else {
          this.isDesktop = false;
          this.isMobile = true;
        }
      }
    }
  }

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
  src: url("./assets/fonts/segoe-ui/Segoe-UI-Bold-Italic.ttf") format("truetype");
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

.not-succes-msg {
  width: 500px;
  background-color: #efc5bd;
  padding: 20px;
  margin: auto;
  border-radius: 20px;
  border: 1px solid #efc5bd;
  margin: 20px auto;
}

.active {
  display: none;
}

</style>
