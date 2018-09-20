<template>
  <div>
    <the-container v-if="loaded"></the-container>
    <the-upload v-else></the-upload>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TheUpload from './../components/TheUpload.vue';
import TheContainer from './../components/TheContainer.vue';

export default {
  name: 'home',
  components: {
    TheUpload,
    TheContainer,
  },
  computed: {
    ...mapGetters([
      'loaded',
    ]),
  },
};
</script>
