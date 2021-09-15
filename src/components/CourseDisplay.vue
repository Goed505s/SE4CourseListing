<template>
  <div class="courseDisp">
    <span>{{course.courseNo}} {{course.name}} (</span>
    <router-link :to="{ name: 'edit', params: { id: course.courseNo } }">
      <span>edit</span>
    </router-link>
    <span> | </span>
    <!--https://vuejs.org/v2/guide/events.html-->
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
      CourseServices.deleteCourse(this.course.courseNo);
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
