<template>
  <div>
    <h1>Create new account and Join us!</h1>
    <form class="registration-form" @submit.prevent="createUserAndPost">
      <label for="username">
        Username:
      </label>
      <input v-model="username" id="username" type="text" name="username">

      <label for="userPassword">
        Password:
      </label>
      <input v-model="userPassword" id="userPassword" type="text" name="userPassword">

      <label for="userEmail">
        Email:
      </label>
      <input v-model="userEmail" id="userEmail" type="text" name="userEmil">

      <button type="submit">Submit</button>
    </form>

    <p>{{ createUserResponse }}</p>
  </div>

</template>

<script>

export default {

  data() {
    return {
      username: '',
      userPassword: '',
      userEmail: '',
      createUserResponse: ''

    }
  },
  methods: {
    createUserAndPost() {
      const jsonData = {'username': this.username, 'password': this.userPassword, 'email': this.userEmail}
      let options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      }
      fetch('http://127.0.0.1:3000/createuser', options)
          .then(response => response.json())
          .then(data => {
            this.createUserResponse = data.createUserStatus
          })
    }
  }
}
</script>

<style>

.registration-form {
  display: inline-grid;
  font-size: 27px;
  flex-direction: column;

}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5em;
  height: 2em;
  margin: 0.5em;
  border-radius: 5px;
  background-image: linear-gradient(to right, #1c7ac9 0%, #71b5f1 100%);
  background-size: 100%;
  font-size: 20px;
  color: white;
  border: none;
  outline: none;
}
</style>