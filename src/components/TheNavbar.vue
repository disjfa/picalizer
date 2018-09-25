<template>
  <div>
    <div class="topbar bg-success">
      <a :href="getImage" class="btn btn-outline-light" :download="name">
        <i class="fas fa-download"></i>
        download
      </a>
      <div class="text-light btn" disabled>
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
