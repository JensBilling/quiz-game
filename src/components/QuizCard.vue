<template>
  <div class="que-card">
    <div>
      {{ question.question }}
    </div>

    <img v-bind:src="question.image" alt=""/>


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
      if (userAnswer == this.correctAnswer){
        this.userPoints++
      }

      this.currentQuestion++
      this.question = JSON.parse(localStorage.getItem('question' + this.currentQuestion))
    }

  }

}


</script>

<style scoped>
.que-card.que-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  align-items: center;
  align-content: center;
}

.que-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);

}

.que-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>