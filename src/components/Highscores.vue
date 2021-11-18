<template>
  <div>

    <div id="medals">
      <img v-if="userScore > 4" class="medalItem" src="https://i.imgur.com/ohLJbrW.png">
      <img v-if="userScore > 9" class="medalItem" src="https://i.imgur.com/DJMeesL.png">
    </div>

    <table id="scoreTable"></table>

  </div>
</template>

<script>
export default {
  name: "Highscores",
  data() {
    return {
      userScore: localStorage.getItem("userScore")
    }
  },
  methods: {

    fetchHighscores() {
      let scoreTableHtml = ""
      fetch('http://127.0.0.1:3000/highscores')
          .then(response => response.json())
          .then(data => {
            for (let i = 0; i < data[0].length; i++) {
              scoreTableHtml += `<tr><td>${data[0][i]}<td>: ${data[1][i]}</td></tr>`

              for (let i = 0; i < data.length; i++){
                if (data[0][i].toLowerCase() == localStorage.getItem("username").toLowerCase()){
                    localStorage.setItem("userScore", data[1][i])
                }
              }
            }
            document.querySelector('#scoreTable').innerHTML = `<tr><td>Username:</td><td>Points:</td></tr>` + scoreTableHtml
            console.log(data[0])
            console.log(data[1])
          })

    }

  },
  created: function () {
    this.fetchHighscores()


  }

}

</script>

<style scoped>
#scoreTable {
  margin: auto;
  color: black;
  background: #d8001d;
  border: 5px solid black;
  font-size: 25px;
  padding: 10px;
  text-align: left;
  border-radius: 15px;
  font-family: sans-serif;
}

.medalItem{
  margin-left: 2px;
  margin-right: 2px;
}
</style>