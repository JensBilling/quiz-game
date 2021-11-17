<template>
  <div class="que-card">
    <div v-if="currentQuestion < 6">
      <img v-bind:src="question.image" alt=""/>
      <div id="questionBlock">
        {{ question.question }}
      </div>

      <div class="grid-container">

        <button v-on:click="click1">
          {{ question.answer1 }}
        </button>
        <button v-on:click="click2">
          {{ question.answer2 }}
        </button>
        <button v-on:click="click3">
          {{ question.answer3 }}
        </button>
        <button v-on:click="click4">
          {{ question.answer4 }}
        </button>
      </div>
    </div>

    <div v-else>
      <div class="endgame-points">
        <div v-if="userPoints == 1">
          You got {{ userPoints }} point.
        </div>
        <div v-else>
          You got {{ userPoints }} points.
        </div>
      </div>
    </div>
    <div id="answerStatus"></div>
  </div>

</template>

<script>

import QuizGame from "@/components/QuizGame";

export default {

  name: "QuizCard",
  QuizGame,
  data() {
    return {
      question: JSON.parse(localStorage.getItem('question1')),
      correctAnswer: 0,
      userPoints: 0,
      currentQuestion: 1
    }
  },
  methods: {
    click1() {
      this.checkAnswer(1)
    },
    click2() {
      this.checkAnswer(2)
    },
    click3() {
      this.checkAnswer(3)
    },
    click4() {
      this.checkAnswer(4)
    },
    checkAnswer(userAnswer) {

      this.correctAnswer = this.question.correct_answer
      if (userAnswer == this.correctAnswer) {
        this.userPoints++
        document.querySelector("#answerStatus").style.background = "url(https://i.imgur.com/CdZXgD3.png)"
      } else {
        document.querySelector("#answerStatus").style.background = "url(https://i.imgur.com/rrQpV4o.png)"
      }

      setTimeout(function () {
        document.querySelector("#answerStatus").style.background = "none"
      }, 1500)

      if (this.currentQuestion < 5) {
        this.currentQuestion++
        this.question = JSON.parse(localStorage.getItem('question' + this.currentQuestion))
      } else {

        this.currentQuestion = 6;
        this.returnScoreToBackend()
      }

    },
    returnScoreToBackend() {
      let userId = localStorage.getItem('userId')

      const jsonData = {'userId': userId, 'userScore': this.userPoints, 'quizId': this.question.quiz_id}
      let options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      }
      fetch('http://127.0.0.1:3000/endgame', options)
    }

  }

}


</script>

<style scoped>


#questionBlock {
  font-size: 30px;
  color: white;
  text-shadow: 3px 3px 0 #000,
  -1px -1px 0 #000,
  1px -1px 0 #000,
  -1px 1px 0 #000,
  1px 1px 0 #000;
}

.grid-container {
  margin: auto;
  width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;


}

.endgame-points {
  font-size: 30px;
  color: white;
  text-shadow: 3px 3px 0 #000,
  -1px -1px 0 #000,
  1px -1px 0 #000,
  -1px 1px 0 #000,
  1px 1px 0 #000;
}

#answerStatus {
  width: 201px;
  height: 201px;
  background: none;
  margin: auto;
}
</style>