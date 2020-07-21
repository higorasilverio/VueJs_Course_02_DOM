new Vue({
	el: '#challenge',
	data: {
		firstClass: 'highlight',
		bigger: 'makeItBig',
		funny: 'makeItFunny',
		classControl: 'highlight',
		secondClass: '',
		differentCollor: '',
		anotherStyle: {
			width: '100px',
			height: '100px',
		},
		width: '0',
	},
	computed: {
		
	},
	methods: {
		startEffect() {
			setInterval(() => {
				this.firstClass = this.firstClass == 'highlight' ? 'choose' : 'highlight'
			}, 1000)
		},
		initiateProgress() {
			let value = 0
			const temp = setInterval(() => {
				value += 5
				this.width = `${value}%`
				if(value == 100) clearInterval (temp)
			}, 250)
		},
		setDanger(event){
			if(event.target.value == 'true'){
				this.funny = 'danger'
			} else if(event.target.value == 'false'){
				this.funny = 'easy'
			}
		}
	}
})
