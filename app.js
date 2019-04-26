
new Vue({
    el: '#app',
    data: {
        title: 'Easy To-Do',
        showtextbox: false,
        buttonName: 'Add a Task',
        task: {
            title: '',
            note: ''
        },
        tasks: localStorage.getItem('tasks') && JSON.parse(localStorage.getItem('tasks')) || []
    },
    computed: {
        orderedTasks:function(){
            return this.tasks
        }
    },
    created: function () {
        console.log(this.tasks)
    },
    methods: {
        addTask: function () {
            this.showtextbox = !this.showtextbox;
            this.buttonName = this.showtextbox ? 'Cancel' : 'Add a Task'
        },
        saveTask: function () {
            let tasks = JSON.parse(localStorage.getItem('tasks')) || {}
            this.task.createdOn = new Date().getTime();
            tasks[this.task.title] = this.task;
            this.tasks = tasks
            this.showtextbox = false;
            this.buttonName = 'Add a Task'
            this.task = {
                title: '',
                note: ''
            }
            localStorage.setItem('tasks', JSON.stringify(tasks))
        },
        deleteTask: function (task) {
            console.log(task.title)
            let tasks = JSON.parse(localStorage.getItem('tasks'))
            delete tasks[task.title];
            this.tasks = tasks
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        editTask: function ($event) {
           this.editing=true;
        }   

    }
})