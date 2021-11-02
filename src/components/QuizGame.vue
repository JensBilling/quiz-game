<template>
  <div>
    <h1>Select a quiz:</h1>
    <div id="quizContainer">
      <button>Who's that actor?</button>
      <button class="gridItem">WHAT MOVIE?!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizGame",
}
</script>

<style scoped>

button {
  width: 200px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 5px;
  background-image: linear-gradient(to right, #1c7ac9 0%, #71b5f1 100%);
  background-size: 100%;
  font-size: 20px;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>