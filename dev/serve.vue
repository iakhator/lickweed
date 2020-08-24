<script>
import Vue from 'vue';
import { Spinner } from "@/entry";

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Spinner
  }
});
</script>

<template>
  <div id="app">
    <Spinner />
  </div>
</template>
