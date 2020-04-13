<template>
  <div>
    <Matrix page="Economy Ranking" :rankings="rankings" :headings="headings" />
  </div>
</template>

<script>
// @ is an alias to /src
import Matrix from '@/components/Matrix.vue'

export default {
  name: 'Economy',
  props: {
  },
  computed: {
    rankings() {
      return this.$root.$data.cities.map(city => [
        city.Economy,
        city.City,
        city.State,
        city.MostCommonJobTitle
      ]).sort((a, b) => b[0] - a[0]);
    },
    headings() {
      return [
        "Economy Score",
        "City",
        "State",
        "Most Common Job"
      ];
    }
  },
  components: {
    Matrix
  }
}
</script>