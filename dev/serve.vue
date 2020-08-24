<script>
import Vue from 'vue';
// import { LickweedSample } from '@/entry';
import { Spinner } from "@/entry";

export default Vue.extend({
  name: 'ServeDev',
  data() {
    return {
      goto: "5"
    }
  },
  components: {
    // LickweedSample,
    Spinner
  }
});
</script>

<template>
  <div id="app">
    <Spinner />
    <!-- <lickweed-sample :goto="goto" /> -->
  </div>
</template>
