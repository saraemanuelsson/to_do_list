import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded");
    
    new Vue({
        el: "#app",
        data: {
            todos: [
                {name: "Finish CodeClan", priority: "high"}, 
                {name: "Get a Job", priority: "high"}, 
                {name: "Make Lots of Money", priority: "medium"}, 
                {name: "Buy a Castle", priority: "low"}
            ],
            newTask: "",
            newPriority: ""
        },
        methods: {
            saveNewTask: function() {
                this.todos.push({
                    name: this.newTask,
                    priority: this.newPriority});
                this.newTask = "";
            }
        }
    });
});