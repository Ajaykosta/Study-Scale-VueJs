<template>
    <img class="logo" src="../assets/logo.png" />
    <div class="login">
        <input type="number" placeholder="Enter Id" v-model="userId" />
        <input type="password" placeholder="Enter Passowrd" v-model="password" />
        <button type="button" v-on:click="login()">Login</button>
        <p v-if="value" style="color: red;">* {{ loginStatus }}</p>
    </div>
</template>
<script>
import axios from 'axios'
import Home from './Home'
export default {
    name: "Login",
    components: {
        Home
    },
    data() {
        return {
            userId: '',
            password: '',
            user: '',
            loginStatus: '',
            value: ''
        }
    },
    mounted() {
        if (localStorage.getItem("user-info")) {

            this.$router.push({ name: "Home" })
        }
    },
    methods: {
        async login() {
            this.value = false;
            await axios
                .post("http://localhost:8081/login", {
                    id: this.userId,
                    password: this.password,
                },
                    {
                        headers: {
                            "Content-type": "application/json",
                        },
                    }
                )
                .then(response => { (this.user = response.data) })
            if (this.user) {
                localStorage.setItem("user-info", this.userId);
                this.$router.push({ name: "Home" });
            } else {
                this.loginStatus = "Invalid Id or password";
                this.value = true;
            }
        }
    }
}
</script>