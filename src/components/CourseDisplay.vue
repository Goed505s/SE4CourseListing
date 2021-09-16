<template>
  <div class="courseDisp">
    <span>{{course.courseNo}} {{course.name}} (</span>
    <router-link :to="{ name: 'edit', params: { id: course.courseNo } }">
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

</style>
