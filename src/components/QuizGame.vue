<template>
  <div>
    <h1>Select a quiz:</h1>
    <div id="quizContainer">
      <button  class="button1"  v-on:click ="startQuizOne">MEGAQUIZ</button>
      <button class="button2" v-on:click="startQuizTwo">SUPAQUIZ</button>
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
  background-image: linear-gradient(to right, rgba(201, 28, 28, 0.35) 0%, #ffffff 100%);
  background-size: 100%;
  font-size: 20px;
  color: #0a0a07;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 3px 3px 5px black;
}
h1{
  color: white;
  text-decoration: none;
  font-size: 40px;
}
</style>