<template>
  <div>

    <button v-on:click="fetchHighscores">test highscores bdb</button>
    <table id="scoreTable"></table>

  </div>
</template>

<script>
export default {
  name: "Highscores",
  data() {
    return {

    }
  },
  methods: {

    fetchHighscores() {
      let scoreTableHtml = ""
      fetch('http://127.0.0.1:3000/highscores')
          .then(response => response.json())
          .then(data => {
            for (let i = 0; i < data[0].length; i++) {
              scoreTableHtml += `<tr><td>${data[0][i]}<td>${data[1][i]}</td></tr>`

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

</style>