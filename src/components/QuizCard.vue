<template>
  <div class="que-card">
    <div v-if="currentQuestion < 6">
      <img v-bind:src="question.image" alt=""/>
      <div id="questionBlock">
        {{ question.question }}
      </div>
      <button v-if="clueUsed == 0" style="background-color: gray;
                       width: 60px;
                       height: 50px;
                       margin: auto;
                       margin-bottom: 5px;
                       background-image: linear-gradient(to top, #333333 0%, lightgray 100%);
                       background-size: 100%;"
              v-on:click="use5050">
        50/50
      </button>
      <div class="grid-container">

        <button v-if="showAnswer[0] == 0" v-on:click="click1">
          {{ question.answer1 }}
        </button>
        <button v-if="showAnswer[1] == 0" v-on:click="click2">
          {{ question.answer2 }}
        </button>
        <button v-if="showAnswer[2] == 0" v-on:click="click3">
          {{ question.answer3 }}
        </button>
        <button v-if="showAnswer[3] == 0" v-on:click="click4">
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
    <img id="answerStatus" src="">
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
      currentQuestion: 1,
      clueUsed: 0,
      showAnswer: [0, 0, 0, 0]
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
        document.querySelector("#answerStatus").style.display = "block"
        document.querySelector("#answerStatus").src="https://i.imgur.com/CdZXgD3.png"
      } else {
        document.querySelector("#answerStatus").style.display = "block"
        document.querySelector("#answerStatus").src="https://i.imgur.com/rrQpV4o.png"
      }

      setTimeout(function () {
        document.querySelector("#answerStatus").style.display = "none"
      }, 1500)

      this.showAnswer = [0, 0, 0, 0]

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
    },
    use5050() {
      this.correctAnswer = this.question.correct_answer
      this.clueUsed++
      let counter = 0
      let randomNum = 0
      let randomNumSave = 0
      do {
        randomNum = Math.floor(Math.random() * 4) + 1
        if (randomNum != this.correctAnswer && randomNum != randomNumSave){
          randomNumSave = randomNum
          this.showAnswer[randomNum-1]++
          counter++

        }
      } while (counter < 2)


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
  margin-top: 5px;
  width: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
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
  display: none;
  width: 201px;
  height: 201px;
  margin: auto;
}

button {
  width: 100%;
  padding: 0;
  margin: 0;
}


@media only screen and (max-width: 760px) {
  img {
    max-width: 90%;
  }

  .grid-container {
    margin: auto;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }

  #answerStatus {
    display: none;
    width: 40px;
    height: 40px;
    margin: auto;
    margin-top: 5px;
  }

}

</style>