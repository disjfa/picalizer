<template>
  <div>
    <the-navbar></the-navbar>
    <the-actions></the-actions>
    <div class="main">
      <div class="text-center px-2 py-2">
        <img :src="getImage" alt="" class="img-fluid" ref="img">
      </div>
    </div>
    <edit-resize v-on:cancelAction="cancelAction"></edit-resize>
  </div>
</template>

<script>
import TheNavbar from './../components/TheNavbar.vue';
import TheActions from './../components/TheActions.vue';
import EditResize from './../components/EditResize.vue';

export default {
  name: 'TheContainer',
  components: {
    TheNavbar,
    TheActions,
    EditResize,
  },
  methods: {
    cancelAction() {
      this.$store.commit('setAction', false);
    },
  },
  mounted() {
    this.$refs.img.addEventListener('load', (evt) => {
      this.$store.commit('initSize', evt.target);
    });
  },
  computed: {
    getImage() {
      const { image } = this.$store.getters;
      return window.URL.createObjectURL(image);
    },
  },
};
</script>
