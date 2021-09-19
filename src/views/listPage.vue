<template>
  <div class="addnew">
      <router-link :to="{ name: 'add'}"><span>Add New Course</span></router-link>
      <course-display v-for="course in courses" :key="course.courseNo" :course="course" />
  </div>
</template>

<script>
import CourseServices from '@/services/CourseServices.js'
import CourseDisplay from '../components/CourseDisplay.vue';
export default {
  components: { CourseDisplay },
  data() {
    return {
      courses: []
    };
  },
  created() {
    CourseServices.getCourses()
      .then(response => {
        this.courses = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 20px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffffff;

}

.addnew{
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  background-color: #001f38;
  height: 40px;
  margin-left: 50px;
  margin-right: 50px;
  text-decoration: none;
}



</style>