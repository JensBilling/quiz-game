<template>
  <div class="navbar">


    <router-link to="/">Home</router-link>
    |
    <router-link v-if="userId < 1" to="/createuser">Sign up</router-link>
    <router-link v-else to="/highscores">High-scores</router-link>
    <div v-if="userId != 0">
      <button v-on:click="logOutButton" class="logoutbutton" type="submit">Log out</button>
    </div>


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
  },
  methods: {
    logOutButton() {
      this.userId = 0
      this.username = ''
      this.userPassword = ''
      this.userScore = 0
      this.loginUserResponse = ""
      localStorage.setItem('userId', 0)
      localStorage.setItem('username', "")
      localStorage.setItem('userScore', 0)
      this.$router.push("/")
      location.reload();
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
  background-size: 100%;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  font-size: 20px;
  font-weight: bolder;
}

a:link, a:visited {
  color: white;
  text-decoration: none;
  font-size: 25px;
}

a:hover {
  color: darkkhaki;
}

.logoutbutton {
  width: 200px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 5px;
  background-image: linear-gradient(to right, rgba(201, 28, 28, 0.35) 0%, #ffffff 100%);
  background-size: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #0a0a07;
  border: none;
  outline: none;
  cursor: pointer;
  float: right;
  margin-top: -37px;
}
@media only screen and (max-width: 760px ) {
  .logoutbutton{
    float: none;
    margin-top: 10px;
    width: 150px;
    padding: 0;
  }
}



</style>