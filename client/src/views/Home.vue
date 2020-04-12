<template>
  <div>
    <Matrix page="Livability Ranking" :rankings="rankings" :headings="headings" />
  </div>
</template>

<script>
// @ is an alias to /src
import Matrix from '@/components/Matrix.vue'

export default {
  name: 'Home',
  props: {
  },
  computed: {
    rankings() {
      return this.$root.$data.cities.map(city => [
        city.Livability,
        city.City,
        city.State,
        city.CitySlogan
      ]).sort((a, b) => b[0] - a[0]);
    },
    headings() {
      return [
        "Livability Score",
        "City",
        "State",
        "City Slogan"
      ];
    }
  },
  components: {
    Matrix
  }
}
</script>
