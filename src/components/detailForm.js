const { apply } = require("core-js/fn/reflect");

app.component('detail-form', {
    template: 
    <form class="detail-form">
        <h3>Oklahome Christian</h3>
        <h2>Course List Details</h2>

        <label for = "courseNo">Course Number: </label>
        <textarea id = "courseNo" v-model = "courseNo"></textarea>

        <label for = "name">Course Name: </label>
        <textarea id = "name" v-model = "name"></textarea>

        <label for = "description">Course Description: </label>
        <textarea id = "description" v-model = "description"></textarea>
    </form>,

//placeholder for fixing stuff






    data(){
        return{
            courseNo: courseNo,
            name: courseName,
            description: description,
        }
    }
    
})


