<template>
  <div class="spinner" ref="spinner"></div>
</template>

<script>
export default {
  name: "Spinner", // vue component name
  props: ['height', 'width'],
  data() {},

  created() {
    this.loadSpinner()
  },

  methods: {
    loadSpinner() {
      console.log(this.$refs)
    }
  }
};
</script>

<style>
</style>
