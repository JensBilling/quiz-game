<template>
  <div class="que-card">

    <h4>{{}}</h4>

  </div>
</template>

<script>
export default {
  name: "QuizCard",
  data() {
    return {
      que: [
        {quizId: 0, question:'',answer1:'',answer2:'',answer3:'',answer4:'',img:'null'}

      ]
    }
  },
  methods: {
    test() {
     /* let options = {
        method: '',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
      }

      */
      fetch('http://127.0.0.1:3000/startgame')



          }
  }
}
</script>

<style scoped>
.que-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
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