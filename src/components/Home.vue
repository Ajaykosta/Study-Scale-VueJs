<template>
  <a v-on:click="logout()" href="#">Logout</a>
  <h1 style="text-align: left;">Dash Board</h1>
  <button v-on:click="showCourses()">Show Courses</button>
  `{{ allCourseList }}`
</template>
<script>
import axios from 'axios'
export default {
  name: "Home",
  data() {
    return {
      userId: localStorage.getItem("user-info"),
      userCourseList:[],
      courseList:[],
      subjectList:[],
      unitList:[],
      topicsList:[]
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" })
    },
    // async getUserCourseList(){
    //   await axios
    //   .get()
    // }
    async showCourses(){
      await axios
      .get("http://localhost:8081/showallcourse")
      .then(response => {(this.courseList=response.data),
      (this.subjectList)})
    }
  }
}
</script>