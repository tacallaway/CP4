<template>
  <div>
    <Matrix page="Crime Ranking" :rankings="rankings" :headings="headings" />
  </div>
</template>

<script>
// @ is an alias to /src
import Matrix from '@/components/Matrix.vue'

export default {
  name: 'Crime',
  props: {
  },
  computed: {
    rankings() {
      return this.$root.$data.cities.map(city => [
        city.Crime,
        city.City,
        city.State,
        `${city.MostStolenCarMake} ${city.MostStolenCarModel}`
      ]).sort((a, b) => b[0] - a[0]);
    },
    headings() {
      return [
        "Crime Score",
        "City",
        "State",
        "Most Stolen Vehicle"
      ];
    }
  },
  components: {
    Matrix
  }
}
</script>