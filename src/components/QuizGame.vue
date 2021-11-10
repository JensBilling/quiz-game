<template>
  <div>
    <h1>Select a quiz:</h1>
    <div id="quizContainer">
      <button  class="button1"  v-on:click ="startQuizOne">Who's that actor?</button>
      <button class="button2" v-on:click="startQuizTwo">WHAT MOVIE?!</button>
    </div>
  </div>
</template>

<script>


export default {
  name: "QuizGame",

  methods: {
    startQuizOne() {
      this.fetchMethod(1)

    },
    startQuizTwo() {
      this.fetchMethod(2)

    },

    fetchMethod(quizId) {
      const jsonData = {'quizId': quizId}
      let options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      }

      fetch('http://127.0.0.1:3000/startgame', options)
          .then(response => response.json())
          .then(data => {

            localStorage.setItem('question1', JSON.stringify(data.quizdata[0]))
            localStorage.setItem('question2', JSON.stringify(data.quizdata[1]))
            localStorage.setItem('question3', JSON.stringify(data.quizdata[2]))
            localStorage.setItem('question4', JSON.stringify(data.quizdata[3]))
            localStorage.setItem('question5', JSON.stringify(data.quizdata[4]))


          })

      this.$router.push("/startgame")
      location.reload()



    }
  }
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