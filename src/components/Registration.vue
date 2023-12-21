<template>
  <img class=logo src="../assets/logo.png">
  <div class="register">
    <input type="text" placeholder="Enter Name" v-model="userName" required autofocus />
    <input type="password" placeholder="Enter Password" v-model="password" required="required" />
    <input type="email" placeholder="Enter E-Mail" v-model="email" required="required" />
    <button type="button" v-on:click="registration()">Register</button>
    <p v-if="value" style="color: red;">* {{ registrationStatus }}</p>
    <p v-else>{{ registrationStatus }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Registration",
  data() {
    return {
      userName: "",
      password: "",
      email: "",
      registrationStatus: "",
      value: ""
    };
  },
  mounted() {
    if (localStorage.getItem("user-info")) {
      this.$router.push({ name: "Home" })
    }
  },
  methods: {
    async registration() {
      this.value = false;
      await axios
        .post(`http://localhost:8081/registration?name=${this.userName}&eMail=${this.email}&password=${this.password}`)
        .then(response => this.registrationStatus = response.data);
      if (this.registrationStatus == "This E-Mail is Already Registered to Some Other Account" ||
        this.registrationStatus == "Name, Email or Password cannot be empty field") {
        this.value = true;
      }
    }
  }
}
</script>