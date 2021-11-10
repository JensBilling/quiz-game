<template>
  <div class="navbar">
    <router-link to="/">Home</router-link> |
    <router-link v-if="userId < 1" to="/createuser">Sign up</router-link>
    <router-link v-else to="/highscores">High-scores</router-link>


  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    linkname: String
  },
  data() {
    return {
      userId: localStorage.getItem('userId')
    }
  }
}

</script>

<style>
.navbar {
  flex: 1;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  background-image: linear-gradient(to top, #286caf 0%, #258be1 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  font-size: 20px;

  font-weight: bolder;
}


</style>