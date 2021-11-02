<template>
  <div class="home">



    <Login></Login>
    <QuizGame v-if="userId > 0"></QuizGame>

    <!--   <img alt="Vue logo" src="../assets/logo-quiz-movie.png"> -->
  </div>
</template>

<script>
import Login from "@/views/Login";
import QuizGame from "../components/QuizGame";

export default {
  components: {QuizGame, Login},
  Login,
  data() {
    return {
      userId: localStorage.getItem('userId')
    }
  }
}

if (!localStorage.getItem('userId') > 0) {
  localStorage.setItem("userId", 0)
}

</script>


<style>


</style>
