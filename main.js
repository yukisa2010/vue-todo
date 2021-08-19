var app = new Vue({
    el: '#app',
    data: {
        inputText: "",
        todos: [],
        ErrorMessages: []
    },
    methods: {
        addTodo() {
            this.ErrorMessages = []
            if(this.inputText === '') {
                this.ErrorMessages.push('Todoは1文字以上で入力してください。')
            } else if(this.inputText.length >= 10) {
                this.ErrorMessages.push('Todoは10文字以下で入力してください。')
            } else if(this.inputText !== '') {
                todo = {}
                todo.text = this.inputText
                todo.done = false
                this.todos.push(todo)
                this.inputText = ''
            }
        },
        doneTodo(todo) {
            todo.done = !todo.done
        }
    }
})