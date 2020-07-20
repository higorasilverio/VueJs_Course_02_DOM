new Vue({
    el: '#challenge',
    data: {
        value: 0
    },
    computed: {
        result(){
            return this.value == 37 ? "Same Values" : "Different Values"
        }
    },
    watch: {
        result(newValue, olderValue){
            setTimeout(() => {
                this.value = 0
            }, 5000)
        }
    }
});