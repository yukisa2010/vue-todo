Vue.component('todo-items', {
    props: ['todos'],
    template: `
        <ul>
            <li v-for="todo in todos" :key="todo.text" :class="{ done : todo.done }">
                {{ todo.text }}
                <input type="checkbox" @click="check(todo)"/>
            </li>
        </ul>
    `,
    methods: {
        check(todo) {
            this.$emit('check', todo)
        }
    }
})

Vue.component('done-items', {
    props: ['todos'],
    template: `
        <ul>
            <li v-for="todo in todos" :key="todo.text" :class="{ done : todo.done }">
                {{ todo.text }}
                <input type="checkbox" @click="check(todo)" checked/>
            </li>
        </ul>
    `,
    methods: {
        check(todo) {
            this.$emit('check', todo)
        }
    }
})


var app = new Vue({
    el: '#app',
    data: {
        inputText: "",
        todos: [],
        errorMessages: []
    },
    methods: {
        addTodo() {
            this.errorMessages = []
            if(this.inputText === '') {
                this.errorMessages.push('Todoは1文字以上で入力してください。')
            } else if(this.inputText.length >= 10) {
                this.errorMessages.push('Todoは10文字以下で入力してください。')
            } else if(this.inputText !== '') {
                todo = {}
                todo.text = this.inputText
                todo.done = false
                this.todos.push(todo)
                this.inputText = ''
            }
        },
        checkTodo(todo) {
            todo.done = !todo.done
        }
    },
    computed: {
        todoItems() {
            items = []
            this.todos.forEach(function(todo) {
                if (!todo.done) {
                    items.push(todo)
                }
            })
            return items
        },
        doneItems() {
            items = []
            this.todos.forEach(function(todo) {
                if (todo.done) {
                    items.push(todo)
                }
            })
            return items
        }
    }
})

