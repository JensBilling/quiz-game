<template>

  <div id="app">
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
  background-color: #bef3ff;
  background-image: linear-gradient(to right, #5e99c7 0%, #90bbea 100%);
  /*background-image: url("./assets/curtains.jpg");

   */
  margin: 20px;
  font-family: 'monospace', Merriweather;
}

h1 {
  font-family: 'Merriweather', serif;
  font-size: 40px;
  font-weight: bold;
}

p {
  font-size: 16px;
  line-height: 130%;
  padding: 5px;

  color: black;
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



</style>



