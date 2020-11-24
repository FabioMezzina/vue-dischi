const app = new Vue({
  el: '#app',
  data: {
    cds: [],
    genres: ['all'],
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
            // populate genre filter list
            this.cds.forEach(cd => {
              if (! this.genres.includes(cd.genre)) {
                this.genres.push(cd.genre);
              }
            });
            // if a filter is selected, the cds array is filtered
            if (this.filterGenre !== 'all') {
              this.cds = this.cds.filter(el => el.genre === this.filterGenre);
            }
          })
          .catch(error => {
            console.log(error);
          });
    }
  } // <- End Methods
}); // <- End Vue