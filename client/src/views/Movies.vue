<template>
  <div>
    <Matrix page="Movies" :items="items" :headings="headings" @save-item="saveMovie" @delete-item="deleteMovie" @refresh-data="getItems" />
  </div>
</template>

<script>
// @ is an alias to /src
import Matrix from '@/components/Matrix.vue'
import axios from 'axios';

export default {
  name: 'Movies',
  data() {
    return {
      items: []
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      let response = await axios.get("/movies");
      this.items = response.data.map(movie => [
        movie.name,
        movie.releaseYear,
        movie.starring,
        movie.boxOffice,
        movie._id
      ]).sort((a, b) => b[1] - a[1]);
    },
    async saveMovie(name, releaseYear, starring, boxOffice, id) {
      if (id) {
        await axios.put("/movies/" + id, {
          name,
          releaseYear,
          starring,
          boxOffice
        });
      } else {
        await axios.post("/movies", {
          name,
          releaseYear,
          starring,
          boxOffice
        });
      }
    },
    async deleteMovie(id) {
      await axios.delete("/movies/" + id);
    }
  },
  computed: {
    headings() {
      return [
        "Title",
        "Release Year",
        "Starring",
        "Box Office Gross"
      ];
    }
  },
  components: {
    Matrix
  }
}
</script>