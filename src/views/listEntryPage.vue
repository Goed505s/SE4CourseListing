<template>
  <div class="hello">
    <h1>test {{this.courseNo}}</h1>
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
      isEdit: Boolean
    };
  },
  created() {
    if (this.courseNo != null){
      CourseServices.getCourse(this.courseNo)
        .then(response => {
          this.course = response.data;
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
          this.$router.push({ name: 'list' })
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateCourse() {
      CourseServices.updateCourse(this.courseNo, this.course)
        .then(() => {
          this.$router.push({ name: 'list' })
        })
        .catch(error => {
          this.message = error.message
        })
    },
    cancel() {
      if (this.isEdit) this.$router.push({ name: 'list' });
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