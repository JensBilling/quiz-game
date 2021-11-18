<template>

  <div id="app">

    <img class="navimg" src="./assets/logo-quiz-movie2.png">

    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {NavBar},

}
</script>


<style>
/* Mobile first */
body {
  background: url("./assets/curtains.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 20px;
  font-family: 'monospace', Merriweather;
}

h1 {
  font-family: 'Merriweather', serif;
  font-size: 40px;
  font-weight: bold;
  color: white;
}

p {
  font-size: 16px;
  line-height: 130%;
  padding: 5px;
  color: white;
}
#app{
display: grid;
grid-template-columns: 1fr;
grid-template-rows: auto auto auto 50px;
grid-template-areas:
"header"
"navigation"
"main-content"
"footer";
grid-gap: 5px;
text-align: center;
}
.navimg {
  height: 60px;
  float: left;
  z-index: -1;
  position: absolute;
}
@media only screen and (max-width: 760px ) {

  .navimg {
    height: auto;
    max-height: 165px;
    width: 95%;
    float: none;
    z-index: 0;
    position: static;
    margin: auto;

  }
}





</style>



