<template>
  <div>
    <div v-if="userId == 0">
      <form class="login-form" @submit.prevent="loginUser">
        <label for="username">
          Username:
        </label>
        <input v-model="username" id="username" type="text" name="username" required>
        <label for="userPassword">
          Password:
        </label>

        <input v-model="userPassword" id="userPassword" type="password" name="userPassword" required>
        <button class="loginbutton" type="submit">Log in</button>
      </form>
      <p>{{ loginUserResponse }}</p>
    </div>

    <div v-else>
      <p>Welcome {{username}}! Your total score is: {{userScore}}</p>
      <button v-on:click="logOutButton" class="logoutbutton" type="submit">Log out</button>
    </div>
  </div>
</template>

<script>
export default {

  data() {

    return {
      userId: localStorage.getItem('userId'),
      username: localStorage.getItem('username'),
      userPassword: localStorage.getItem('userPassword'),
      userScore: localStorage.getItem('userScore'),
      loginUserResponse: ''
    }
  },

  methods: {
    loginUser() {
      const jsonData = {'username': this.username, 'password': this.userPassword}
      let options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      }
      fetch('http://127.0.0.1:3000/login', options)
          .then(response => response.json())
          .then(data => {
            if (data.userInfo === "userNotFound") {
              this.loginUserResponse = "Wrong user input"
            } else {
              this.userId = data.userInfo.id
              this.username = data.userInfo.user_name
              this.userScore = data.userInfo.user_score

              this.username = this.username.substr(0,1).toUpperCase() + this.username.substr(1)

              this.loginUserResponse = "Welcome " + this.username + "! Your total score is: " + this.userScore

              localStorage.setItem('userId', this.userId);
              localStorage.setItem('username', this.username)
              localStorage.setItem('userScore', this.userScore)
              location.reload();

            }

          })
    },
    logOutButton(){
      this.userId = 0
      this.username = ''
      this.userPassword = ''
      this.userScore = 0
      this.loginUserResponse = ""
      localStorage.setItem('userId', 0)
      localStorage.setItem('username', "")
      localStorage.setItem('userScore', 0)
      location.reload();
    }
  }
}
</script>

<style>
.login-form {
  display: inline-grid;
  font-size: 27px;
  flex-direction: column;

}

p {
  font-size: 20px;
}

button {
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