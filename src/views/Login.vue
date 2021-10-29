<template>
<div>

  <form class="login-form" @submit.prevent="loginUser">
    <label for="username">
      Username:
    </label>
    <input v-model="username" id="username" type="text" name="username">
    <label for="userPassword">
      Password:
    </label>

    <input v-model="userPassword" id="userPassword" type="text" name="userPassword">
    <button class="loginbutton" type="submit">Log in</button>
  </form>

  <p>{{loginUserResponse}}</p>
</div>
</template>

<script>
export default {

  data() {
    return {
      userId:0,
      username: '',
      userPassword: '',
      userScore:0,
      loginUserResponse: ''

    }
  },
  methods: {

    loginUser(){
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
            if(data.userInfo === "userNotFound") {
              this.loginUserResponse = "Wrong user input"
            }else {
              this.userId = data.userInfo.id
              this.username= data.userInfo.user_name
              this.userScore = data.userInfo.user_score


              this.loginUserResponse = this.userId + " "
                  + this.username + ", score: " + this.userScore

            }

          })
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

p{
  font-size: 10px;
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
button:hover {

}



</style>