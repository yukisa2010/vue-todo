Vue.component('todo-items', {
    props: ['todos'],
    template: `
        <ul>
            <li 
                v-for="todo in todoItems" 
                :key="todo.text"
                @click.prevent="check(todo)"
            >
                {{ todo.text }}
                <input type="checkbox" />
            </li>
        </ul>
    `,
    methods: {
        check(todo) {
            this.$emit('check', todo)
        }
    },
    computed: {
        todoItems() {
            const items = this.todos.filter((todo) => {
                return !todo.done
            })
            return items
        }
    }
})

Vue.component('done-items', {
    props: ['todos'],
    template: `
        <ul>
            <li 
                v-for="todo in doneItems" 
                :key="todo.text" 
                :style="lineThrough" 
                @click="check(todo)"
            >
                {{ todo.text }}
            </li>
        </ul>
    `,
    methods: {
        check(todo) {
            this.$emit('check', todo)
        }
    },
    computed: {
        doneItems() {
            const items = this.todos.filter((todo) => {
                return todo.done
            })
            return items
        },
        lineThrough() {
            return {
                textDecoration : 'line-through'
            }
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
            if(!this.valid()) {
                return
            }
            todo = {}
            todo.text = this.inputText
            todo.done = false
            this.todos.push(todo)
            this.inputText = ''
        },
        valid() {
            this.errorMessages = []
            if(this.inputText === '') {
                this.errorMessages.push('Todoは1文字以上で入力してください。')
                return false
            } else if(this.inputText.length > 10) {
                this.errorMessages.push('Todoは10文字以下で入力してください。')
                return false
            } else if(this.inputText !== '') {
                return true
            }
        },
        checkTodo(todo) {
            todo.done = !todo.done
        }
    }
})

