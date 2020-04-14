<template>
  <div>
    <Matrix page="Books" :items="items" :headings="headings" @save-item="saveBook" @delete-item="deleteBook" @refresh-data="getItems"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Matrix from '@/components/Matrix.vue'
import axios from 'axios';

export default {
  name: 'Books',
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
      try {
        let response = await axios.get("/books");
        this.items = response.data.map(book => [
          book.name,
          book.releaseYear,
          book.author,
          book.genre,
          book._id
        ]).sort((a, b) => b[1] - a[1]);
      } catch (error) {
        console.log(error);
      }
    },
    async saveBook(name, releaseYear, author, genre, id) {
      try {
        if (id) {
          await axios.put("/books/" + id, {
            name,
            releaseYear,
            author,
            genre
          });
        } else {
          await axios.post("/books/", {
            name,
            releaseYear,
            author,
            genre
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async deleteBook(id) {
      try {
        await axios.delete("/books/" + id);
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    headings() {
      return [
        "Title",
        "Release Year",
        "Author",
        "Genre"
      ];
    }
  },
  components: {
    Matrix
  }
}
</script>