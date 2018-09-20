<template>
  <form action="#" id="resize" class="setting" @submit.prevent="resize" v-if="action=='resize'">
    <div class="setting-body">
      <h3>Resize image</h3>
      <p>
        Resize image using these settings.
      </p>
      <div class="form-group">
        <label for="resize_width">width</label>
        <input type="number" id="resize_width" v-model="myWidth" class="form-control">
      </div>
      <div class="form-group">
        <label for="resize_height">height</label>
        <input type="number" id="resize_height" v-model="myHeight" class="form-control">
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="constrain_proportions"
            :checked="constrain_proportions" @change="constrain_proportions=!constrain_proportions">
          <label class="custom-control-label" for="constrain_proportions">
            Constrain proportions
          </label>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">resize</button>
        <button type="button" class="btn btn-warning" @click="cancelAction">cancel</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'EditResize',
  data() {
    return {
      constrain_proportions: true,
      myWidth: 0,
      myHeight: 0,
    };
  },
  methods: {
    resize() {
      const canvas = document.createElement('canvas');
      const img = document.createElement('img');
      canvas.width = this.myWidth;
      canvas.height = this.myHeight;

      img.addEventListener('load', (evt) => {
        let toCtx = canvas.getContext('2d', { alpha: Boolean(false) });
        toCtx.drawImage(evt.target, 0, 0, this.myWidth, this.myHeight);
        toCtx = null;
        canvas.toBlob((blob) => {
          this.$store.commit('updateImage', blob);
          this.cancelAction();
        });
      });
      img.src = window.URL.createObjectURL(this.image);
    },
    cancelAction() {
      this.$emit('cancelAction');
    },
  },
  mounted() {
    this.myWidth = this.width;
    this.myHeight = this.height;
  },
  watch: {
    width(val) {
      this.myWidth = val;
    },
    height(val) {
      this.myHeight = val;
    },
    myWidth(val) {
      if (this.constrain_proportions) {
        this.myHeight = ((this.height * val) / this.width).toFixed();
      }
    },
    myHeight(val) {
      if (this.constrain_proportions) {
        this.myWidth = ((this.width * val) / this.height).toFixed();
      }
    },
  },
  computed: {
    ...mapGetters([
      'width',
      'height',
      'image',
      'action',
    ]),
  },
};
</script>
