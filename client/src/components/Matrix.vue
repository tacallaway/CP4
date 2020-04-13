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
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" v-bind:key="item[4]">
            <td v-if="editRow !== item[4]">{{ item[0] }}</td>
            <td v-if="editRow !== item[4]">{{ item[1] }}</td>
            <td v-if="editRow !== item[4]">{{ item[2] }}</td>
            <td v-if="editRow !== item[4]">{{ item[3] }}</td>
            <td v-if="editRow !== item[4]"><button @click="clickEdit(item[4])">Edit</button></td>

            <td v-if="editRow === item[4]"><input type="text" v-model="item[0]"></td>
            <td v-if="editRow === item[4]"><input type="text" v-model="item[1]"></td>
            <td v-if="editRow === item[4]"><input type="text" v-model="item[2]"></td>
            <td v-if="editRow === item[4]"><input type="text" v-model="item[3]"></td>
            <td v-if="editRow === item[4]"><button @click="clickSave(item[0], item[1], item[2], item[3], item[4])">Save</button> <button @click="clickCancel">Cancel</button> <button @click="clickDelete(item[4])">Delete</button></td>
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
    items: Array,
    headings: Array,
    saveItem: Function
  },
  data() {
    return {
      editRow: ''
    }
  },
  created() {
  },
  computed: {
    isEditMode(id) {
      return this.editRow === id;
    }
  },
  methods: {
    clickEdit(id) {
      this.editRow = id;
    },
    clickSave(field0, field1, field2, field3, field4) {
      this.editRow = '';
      this.$emit('save-item', field0, field1, field2, field3, field4);
    },
    clickCancel() {
      this.editRow = '';
    },
    clickDelete(field4) {
      this.items = this.items.filter(item => item[4] !== field4);
      this.editRow = '';
      this.$emit('delete-item', field4);
    }
  }
};
</script>