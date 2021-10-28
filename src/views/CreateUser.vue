<template>
  <div>
    <form id="registration-form" @submit.prevent="sendDataToBackend">
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
    sendDataToBackend() {
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

<style scoped>

</style>