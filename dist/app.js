const app = Vue.createApp({
  data() {
    return {
      title: '',
      image: '',
      desc: '',
      date: ''
    }
  },
  methods: {    
    // Function to get APOD for today's date.
    async getApod() {
      // Get APOD for current date.
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=RXK0pf2PFdSNOqRzbIgLmBWNboZDWq766gYb2UQC');
      xhr.responseType = 'json';
      xhr.send();

      // Update output to response from NASA API.
      xhr.onload = () => {
        const result = xhr.response;
        this.title = result['title'];
        this.date = result['date'];
        this.desc = result['explanation'];
        this.image = result['hdurl'];
      };
    },

    // Function to get random APOD for any previous date.
    async randomApod() {
      alert('random');
    }
  }
})

app.mount('#app')