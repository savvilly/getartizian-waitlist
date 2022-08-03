
const { createApp } = Vue

createApp({
    data() {
        return {
            email: '',
            loading: false
        }
    },
    methods: {
        joinWaitlist() {
            this.loading = true
            // console.log(this.email)
            const data = { email: this.email }

            fetch('https://getartizan.herokuapp.com/waitlist/addWait', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    alert(data.message)
                    this.email = ""
                    this.loading = false
                });
        }
    }
}).mount('#app')


