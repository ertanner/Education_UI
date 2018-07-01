<template>
  <div>
    <h3>Login with username and password</h3>
    <form @submit.prevent="fetchData"><br/>
      <table>
        <tr>
          <label>
            <td width="20%" align="right">Salutation: </td>
            <td width="80%" align="left"><input type="text" v-model="user.saluation"/></td>
          </label>
        </tr>
        <tr>
          <label>
            <td width="20%" align="right">First Name: </td>
            <td width="80%" align="left"><input type="text" v-model="user.firstName"/></td>
          </label>
        </tr>
        <tr>
          <label>
            <td width="20%" align="right">Middle Initail: </td>
            <td width="80%" align="left"><input type="text" v-model="user.middleInitial"/></td>
          </label>
        </tr>
        <tr>
          <label>
            <td width="20%" align="right">Last Name: </td>
            <td width="80%" align="left"><input type="text" v-model="user.lastName"/></td>
          </label>
        </tr>
        <tr>
          <label>
            <td width="20%" align="right">Email: </td>
            <td width="80%" align="left"><input type="email" v-model="user.email"/></td>
          </label>
        </tr>
        <tr>
          <label>
            <td width="20%" align="right">User Name:</td>
            <td width="80%" align="left"><input type="text" v-model="user.userName"/></td>
          </label>
        </tr>
        <tr>
          <label>
            <td width="20%" align="right">Password:</td>
            <td width="80%" align="left"><input type="password" v-model="user.password"/></td>
          </label>
        </tr>
        <tr>
          <label>
            <td width="20%" align="right">Password:</td>
            <td width="80%" align="left"><input type="password" v-model="user.password2"/></td>
          </label>
        </tr>
        <tr>
          <td><button type="submit">Submit</button></td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      user: {
        salutaion: '',
        firstName: '',
        lastName: '',
        middleInitial: '',
        email: '',
        userName: '',
        password: '',
        password2: ''
      },
      bp: ''
    }
  },
  methods: {
    fetchData () {
      // Send data to the server or update your stores and such.
    }
  },
  fetchData () {
    axios.post(`http://localhost:1338/addUser`, this.user.userName,
      { headers: {'Content-type': 'application/x-www-form-urlencoded'
      }})
      .then(response => {
        console.log('got here')
        this.bp = response.data
        console.log(this.bp)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped>

</style>
