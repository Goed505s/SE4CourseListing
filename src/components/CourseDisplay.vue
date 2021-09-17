<template>
  <div class="courseDisp">
    <span>{{course.courseNo}} {{course.name}} (</span>
    <router-link :to="{ name: 'edit', params: { courseNo: course.courseNo } }">
      <span>edit</span>
    </router-link>
    <span> | </span>
    <!--https://vuejs.org/v2/guide/events.html
      make it relad page
      make it do a pop up
    -->
    <button v-on:click="deleteCourse()"><span>delete</span></button>
      
    <span>)</span>
  </div>
</template>

<script>
import CourseServices from "@/services/CourseServices.js";

export default {
  name: 'ListEntry',
  props: {
    course: Object
  },
  methods: {
    deleteCourse(){
      // from https://www.vuemastery.com/courses/touring-vue-router/in-component-route-guards
      const answer = window.confirm(
        'Sure you wanna delete ' + this.course.name + '? It\'ll be gone forever!'
      )
      if (answer) {
        
        CourseServices.deleteCourse(this.course.courseNo); // <-- Confirm delete
        // https://stackoverflow.com/questions/40445125/how-can-component-delete-itself-in-vue-2-0
        this.$delete;
        this.$el.parentNode.removeChild(this.$el);
      } 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  size: 20px;
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
.courseDisp {
  margin: 10px 10px;
}
/*https://stackoverflow.com/questions/1367409/how-to-make-button-look-like-a-link*/
button {
  background: none!important;
  border: none;
  padding: 0!important;
  /*optional*/
  font-family: arial, sans-serif;
  /*input has OS specific font-family*/
  color: #069;
  text-decoration: underline;
  cursor: pointer;
}

</style>
