<template>
  <div>
    <h2>{{ page }}</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">{{ headings[0] }}</th>
            <th scope="col">{{ headings[1] }}</th>
            <th scope="col">{{ headings[2] }}</th>
            <th scope="col">{{ headings[3] }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="city in rankings" v-bind:key="city[0]">
            <td>{{ city[0] }}</td>
            <td>{{ city[1] }}</td>
            <td>{{ city[2] }}</td>
            <td>{{ city[3] }}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: "Matrix",
  props: {
    page: String,
    rankings: Array,
    headings: Array
  }
};
</script>