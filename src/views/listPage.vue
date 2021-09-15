<template>
  <div class="hello">
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
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>