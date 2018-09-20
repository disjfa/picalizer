<template>
  <div>
    <div class="navbar bg-success">
      <a :href="getImage" class="btn btn-outline-light" :download="name">
        <i class="fas fa-download"></i>
        download
      </a>
      <div class="text-light">
        {{ width }}px x {{ height }}px
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TheNavbar',
  computed: {
    ...mapGetters([
      'width',
      'height',
      'name',
    ]),
    getImage() {
      const { image } = this.$store.getters;
      return window.URL.createObjectURL(image);
    },
  },
};
</script>
