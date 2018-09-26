<template>
  <div>
    <div class="topbar bg-success">
      <a :href="getImage" class="btn btn-outline-light" :download="name">
        <i class="fas fa-fw fa-download"></i>
        <span class="d-none d-sm-inline">download</span>
      </a>
      <div class="text-light btn" disabled>
        {{ width }}px x {{ height }}px
      </div>
      <a href="#" @click.prevent="close" class="btn btn-outline-light">
        <i class="fas fa-fw fa-times-circle"></i>
        <span class="d-none d-sm-inline">close</span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TheNavbar',
  methods: {
    close() {
      this.$store.commit('closeImage');
    },
  },
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
