<template>
  <div class="hello">
    <form>
      <h2 v>test {{this.course}}</h2>
      <h2 v-if="this.isEdit">Edit {{this.course.name}}</h2>
      <h2 v-else>Add New Course</h2>
      <p v-if="message">{{this.message}}</p>
      <label for = "courseID">Course Number: </label>
      <textarea v-if="isEdit" readonly id = "courseID" v-model="courseID"></textarea>
      <textarea v-else id = "courseID" v-model="courseID"></textarea>

      <label for = "name">Course Name: </label>
      <textarea id = "name" v-model="course.name"></textarea>

      <label for = "description">Course Description: </label>
      <textarea id = "description" v-model="this.course.description"></textarea>
      <button v-on:click="submit">Submit</button>
      <button v-on:click="cancel">Cancel</button>
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
      course: {
        dept: "",
        courseNo: "",      
        level: 0,
        hours: 0,
        name: "",
        description: ""
      },
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
    submit(){
      if(this.isEdit === true) this.addCourse();
      else this.updateCourse();
    },
    addCourse() {
      this.course.courseNo = this.courseID;
      CourseServices.addCourse(this.course)
        .then(() => {
          this.$router.push({ name: 'listPage' })
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateCourse() {
      CourseServices.updateCourse(this.courseNo, this.course)
        .then(() => {
          this.$router.push({ name: 'listPage' })
        })
        .catch(error => {
          this.message = error.message
        })
    },
    cancel() {
      this.$router.push({ name: 'listPage' });
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