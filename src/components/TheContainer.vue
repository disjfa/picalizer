<template>
  <div>
    <the-navbar></the-navbar>
    <the-actions></the-actions>
    <div class="main">
      <div class="text-center px-2 py-2">
        <img :src="getImage" alt="" class="img-fluid" ref="img">
      </div>
    </div>
    <edit-resize
      v-on:cancelAction="cancelAction"
      v-if="action==='resize'">
    </edit-resize>
    <edit-saturation
      v-on:cancelAction="cancelAction"
      v-if="action==='saturation'">
    </edit-saturation>
    <edit-crop
      v-on:cancelAction="cancelAction"
      v-if="action==='crop'">
    </edit-crop>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TheNavbar from './../components/TheNavbar.vue';
import TheActions from './../components/TheActions.vue';
import EditResize from './../components/EditResize.vue';
import EditSaturation from './../components/EditSaturation.vue';
import EditCrop from './../components/EditCrop.vue';

export default {
  name: 'TheContainer',
  components: {
    TheNavbar,
    TheActions,
    EditResize,
    EditSaturation,
    EditCrop,
  },
  methods: {
    setAction(action) {
      this.$store.commit('setAction', action);
    },
    cancelAction() {
      this.setAction(false);
    },
    checkKeyDown(evt) {
      if (evt.key === 'Escape' || evt.key === 'Esc' || evt.keyCode === 27) {
        evt.preventDefault();
        this.cancelAction();
        return false;
      }

      if (evt.altKey && evt.ctrlKey) {
        if (evt.key === 'i') {
          this.setAction('resize');
        }
        if (evt.key === 'c') {
          this.setAction('crop');
        }
      }
      return false;
    },
  },
  mounted() {
    this.$refs.img.addEventListener('load', (evt) => {
      this.$store.commit('initSize', evt.target);
    });

    document.addEventListener('keydown', this.checkKeyDown, true);
  },
  computed: {
    ...mapGetters([
      'action',
    ]),
    getImage() {
      const { image } = this.$store.getters;
      return window.URL.createObjectURL(image);
    },
  },
};
</script>
