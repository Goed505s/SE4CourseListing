<template>
  <form class="detail-form">
        
        <label for = "courseNo">Course Number: </label>
        <textarea readonly id = "courseNo" v-model = "courseNo"></textarea>

        <label for = "name">Course Name: </label>
        <textarea id = "name" v-model = "name"></textarea>

        <label for = "description">Course Description: </label>
        <textarea id = "description" v-model = "description"></textarea>

    </form>,
</template>

<script>
import CourseServices from "@/services/CourseServices.js";

export default{
props: ['courseNo'],
data() {
        return{
            courseNo: courseNo,
            name: courseName,
            description: description,
        };
    }
}

</script>

 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
