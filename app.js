new Vue({
    el: '#challenge',
    data: {
        name: 'Higor Silverio',
        age: 27,
        img: 'giraffe.jpeg'
    },
    methods: {
        rand() {
            return Math.random()
        }
    }
})