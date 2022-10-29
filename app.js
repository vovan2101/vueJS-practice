const App = {
    data(){
        return {
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: ''
        }
    },
    methods: {
        inputChangeHandler(){
            
        }
    }
}


Vue.createApp(App).mount('#app')

