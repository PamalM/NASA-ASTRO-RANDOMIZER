const app = Vue.createApp({
  data() {
    return {
      firstName: "Pamal",
      lastName: "Mangat",
      email: "mangat@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/50.jpg"
    }
  },
  methods: {
    async getUser(){
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()
      console.log(results)

      this.firstName = results[0].name.first
      this.lastName = results[0].name.lastName
      this.email = results[0].email
      this.picture = results[0].picture.large
    }
  }
})

app.mount('#app')