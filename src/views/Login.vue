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
      <p>Welcome {{ username }}!</p>

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

              this.username = this.username.substr(0, 1).toUpperCase() + this.username.substr(1)

              this.loginUserResponse = "Welcome " + this.username + "! Your total score is: " + this.userScore

              localStorage.setItem('userId', this.userId);
              localStorage.setItem('username', this.username)
              localStorage.setItem('userScore', this.userScore)
              location.reload();

            }

          })
    },

  }
}
</script>

<style>
.login-form {
  display: inline-grid;

  flex-direction: column;
  color: white;
  text-decoration: none;
  font-size: 25px;

}

p {
  font-size: 30px;
  font-family: "Comic Sans MS";
  background: black;
  width: 600px;
  padding: 0;
  margin: auto;
  border-radius: 50px;
}

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
}
</style>