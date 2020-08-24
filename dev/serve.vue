<script>
import Vue from 'vue';
import { LickweedSample } from '@/entry';
import { FccButton } from "@/entry";

export default Vue.extend({
  name: 'ServeDev',
  data() {
    return {
      goto: "5"
    }
  },
  components: {
    LickweedSample,
    FccButton
  }
});
</script>

<template>
  <div id="app">
    <FccButton text="Lickweed" />
    <lickweed-sample :goto="goto" />
  </div>
</template>
