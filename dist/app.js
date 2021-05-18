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
      // Generate random date (start - upto but not including current date)
      let today_date = new Date();
      let start_date = new Date(2015, 0, 1);
      let rand_date =  new Date(start_date.getTime() + Math.random() * (today_date.getTime() - start_date.getTime())).toISOString().slice(0,10);

      // Get APOD for random date.
      const xhr = new XMLHttpRequest();
      let query_str = 'https://api.nasa.gov/planetary/apod?api_key=RXK0pf2PFdSNOqRzbIgLmBWNboZDWq766gYb2UQC&date=' + rand_date;
      xhr.open('GET', query_str);
      xhr.responseType = 'json';
      xhr.send();

      xhr.onload = () => {
        const result = xhr.response;
        this.title = result['title'];
        this.date = result['date'];
        this.desc = result['explanation'];
        this.image = result['hdurl'];
      };

    }
  }
})

app.mount('#app')