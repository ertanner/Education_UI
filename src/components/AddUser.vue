<template>
  <div>
    <h3>Add New User Account</h3>
    <form @submit.prevent="postData"><br/>
      <table width="400px">
        <tr>
          <label>
            <td width="100px" align="right">Email: </td>
            <td align="left"><input size="30"  type="email" v-model="email"/></td>
          </label>
        </tr>
        <tr>
          <label>
            <td width="100px" align="right">Account Name:</td>
            <td align="left"><input type="text" v-model="accountName"/></td>
          </label>
        </tr>
        <tr>
          <label>
            <td width="100px" align="right">Password:</td>
            <td align="left"><input type="password" v-model="password"/></td>
          </label>
        </tr>
        <tr>
          <label>
            <td width="100px" align="right">Password2:</td>
            <td align="left"><input type="password" v-model="password2"/></td>
          </label>
        </tr>
        <hr>
        <tr>
          <label>
            <td width="100px" align="right">First Name: </td>
            <td align="left"><input type="text" v-model="firstName"/></td>
          </label>
        </tr>
        <tr>
          <label>
            <td width="100px" align="right">Middle Initail: </td>
            <td align="left"><input size="5" type="text" v-model="middleInitial"/></td>
          </label>
        </tr>
        <tr>
          <label>
            <td width="100px" align="right">Last Name: </td>
            <td align="left"><input size="30" type="text" v-model="lastName"/></td>
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
      salutation: '',
      firstName: '',
      lastName: '',
      middleInitial: '',
      email: '',
      accountName: '',
      password: '',
      password2: '',
      bp: '',
      errors: ''
    }
  },
  methods: {
    postData () {
      this.fetchData()
      // Send data to the server or update your stores and such.
    },
    fetchData () {
      axios.post(`http://localhost:1338/addUser`, {
        email: this.email,
        accountName: this.accountName,
        password: this.password,
        password2: this.password2,
        salutation: this.salutation,
        firstName: this.firstName,
        lastName: this.lastName,
        middleInitial: this.middleInitial
      },
      {
        headers: {
          'Content-type': 'application/json;charset=utf-8'
        }
      })
        .then(function (response) {
          this.bp = response.data
        })
        .catch(function (e) {
          if (e != null) {
            console.log('error!!')
          }
          // this.errors.push(e)
        })
    }
  }
}
</script>

<style scoped>
  #label{
    float: left;
    height: 30px;
    padding-right: 4px;
    padding-top: 2px;
    position: relative;
    text-align: right;
    vertical-align: middle;
    width: 73px;
  }
  .label:before{
    content:"*" ;
    color:red
  }
</style>
