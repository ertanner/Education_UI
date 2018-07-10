<template>
  <div align="center" class="hello">
    <h3>Login with username and password</h3>
    <form @submit.prevent="handleSubmit"><br/>
      <table>
        <tr>
          <label>
            <td width="20%" align="right">Email: </td>
            <td width="80%" align="left"><input type="email" v-model="user.email"/></td>
          </label>
        </tr>
        <tr>
          <label>
            <td width="20%" align="right">Account Name:</td>
            <td width="80%" align="left"><input type="text" v-model="user.name"/></td>
          </label>
        </tr>
        <tr>
          <label>
            <td width="20%" align="right">Password:</td>
            <td width="80%" align="left"><input type="password" v-model="user.password"/></td>
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
        email: '',
        name: '',
        password: ''
      },
      bp: ''
    }
  },
  methods: {
    handleSubmit () {
      this.fetchData()
      // Send data to the server or update your stores and such.
    },
    fetchData () {
      axios.get(`http://localhost:1338/getUser`, this.user.name,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded'
          }
        })
        .then(function (response) {
          console.log('got here')
          this.bp = response.data
          console.log(this.bp)
        })
        .catch(function (e) {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style scoped>

</style>
