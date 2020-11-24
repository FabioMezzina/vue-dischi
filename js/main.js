const app = new Vue({
  el: '#app',
  data: {
    cds: [],
    filterGenre: 'all'
  }, // >_ End Data
  created() {
    this.filterAlbums();
  },
  methods: {
    /**
     * HTTP request for albums
     * The function also filters albums if a differet genre is selected
     */
    filterAlbums() {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
          .then(response => {
            this.cds = [...response.data.response];
            if (this.filterGenre !== 'all') {
              this.cds = this.cds.filter(el => el.genre.toLowerCase() === this.filterGenre);
            }
          })
          .catch(error => {
            console.log(error);
          });
    }
  } // <- End Methods
}); // <- End Vue