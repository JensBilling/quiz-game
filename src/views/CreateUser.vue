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
</div>
</template>


<script>
import axios from 'axios'
export default {
  data(){
    return {
      username: '',
      userPassword:'',
      userEmail: ''

    }
  },
  methods: {

    sendDataToBackend() {
      const jsonData = {'username':this.username,'password':this.userPassword,'email':this.userEmail}

      axios.post('http://127.0.0.1:3000/createuser', jsonData)
      .then(function (response){
        console.log('Response', response)
        console.log('hello backend')
        console.log(jsonData)
      })
      .catch(function (err){
        console.log('Error', err)
      })
    }

  }


}


</script>

<style scoped>

</style>