<template>
    <div v-if="logged">
        <router-link to="/">Home</router-link>
    </div>
    <div v-else>
        <router-link to="/login">Login</router-link> |
        <router-link to="/registration">Registration</router-link>
    </div>
</template>
<script>
export default {
    name: "Header",
    data() {
        return {
            logged: false
        }
    },
    mounted() {
        if (localStorage.getItem("user-info")) {
            this.logged = true;
        }
    }
}
</script>