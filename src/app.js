import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded");
    
    new Vue({
        el: "#app",
        data: {
            todos: ["Clean Windows", "Get Groceries", "Make Masks", "Bake Cake"]
        },
        methods: {

        }
    });
});