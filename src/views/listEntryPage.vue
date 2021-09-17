<template>
  <div class="hello">
    <form>
      <h1 v-if="this.isEdit">test {{this.course}}</h1>
      <label for = "courseID">Course Number: </label>
      <textarea v-if="isEdit" readonly id = "courseID" v-model="courseID"></textarea>
      <textarea v-else id = "courseID" v-model="courseID"></textarea>

      <label for = "name">Course Name: </label>
      <textarea id = "name" v-model="course.name"></textarea>

      <label for = "description">Course Description: </label>
      <textarea id = "description" v-model="this.course.description"></textarea>
    </form>
  </div>
</template>

<script>
import CourseServices from '@/services/CourseServices.js'


export default {
  props: ['courseNo'],
  data() {
    return {
      message: String,
      course: Object,
      isEdit: false,
      courseID: ""
    };
  },
  created() {
    if (this.courseNo != null){
      this.isEdit = true;
      this.courseID = this.courseNo;
      CourseServices.getCourse(this.courseNo)
        .then(response => {
          this.course = response.data[0];
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  },

  methods: {
    execute(){
      if(this.isEdit === true) this.addCourse();
      else this.updateCourse();
    },
    addCourse() {
        CourseServices.addCourse(this.course)
        .then(() => {
          this.$router.push({ name: '' })
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateCourse() {
      CourseServices.updateCourse(this.courseNo, this.course)
        .then(() => {
          this.$router.push({ name: '' })
        })
        .catch(error => {
          this.message = error.message
        })
    },
    cancel() {
      if (this.isEdit) this.$router.push({ name: '' });
    }
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