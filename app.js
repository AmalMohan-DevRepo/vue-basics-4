const app = Vue.createApp({
    data() {
        return{
            userInput:'',
            showPara: true,
            color:''
        }
    },
    methods: {
        handleUserInput(e){
            this.userInput = e.target.value.toLowerCase()
        },
        handleToggleP(){
            this.showPara = !this.showPara
        },
        handleColorInput(e){
            this.color = e.target.value
        }

    },
    computed: {
        activeClass(){

            return this.userInput === 'user1' ?  'user1' 
                   : this.userInput === 'user2' ? 'user2' : ''
        },
        toggleVisibility(){
            return this.showPara ? 'visible' : 'hidden'
        },
        getColor(){
           return this.color ? this.color : ''
        }
    }
})

app.mount('#assignment')