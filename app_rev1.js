new Vue({
    el: '#challenge',
    data: {
        value: ''
    },
    methods:{
        showAlert(e){
            alert('I am warning you!')
        },
        storeOnData(){
            this.value = event.target.value
        }
    }
})