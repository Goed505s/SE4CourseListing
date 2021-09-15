<template>
  <div class="courseDisp">
    <span>{{course.courseNo}} {{course.name}} (</span>
    <router-link :to="{ name: 'edit', params: { id: course.courseNo } }">
      <span>edit</span>
    </router-link>
    <span> | </span>
    <router-link :to="{ name: 'delete', params: { id: course.courseNo } }">
      <span>delete</span>
    </router-link>
    <span>)</span>
  </div>
</template>

<script>
export default {
  name: 'ListEntry',
  props: {
    course: Object
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
