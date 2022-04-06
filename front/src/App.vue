<template>
  <div id="app">
    <HeaderMain />
    <MyHome />
  </div>
</template>

<script>
import HeaderMain from "./components/HeaderMain.vue";
import MyHome from "./views/MyHome.vue";

export default {
  name: "App",
  components: {
    HeaderMain,
    MyHome,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
