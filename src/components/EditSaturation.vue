<template>
  <form class="setting" @submit.prevent="saturate" v-if="action=='saturation'">
    <div class="setting-body">
      <h3>Apply saturation</h3>
      <div class="form-group">
        <label for="red">red</label>
        <input type="range" class="form-control" min="0" max="255" v-model="red">
      </div>
      <div class="form-group">
        <label for="red">green</label>
        <input type="range" class="form-control" min="0" max="255" v-model="green">
      </div>
      <div class="form-group">
        <label for="red">blue</label>
        <input type="range" class="form-control" min="0" max="255" v-model="blue">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">apply</button>
        <button type="button" class="btn btn-warning" @click="cancelAction">cancel</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'EditSaturation',
  data() {
    return {
      alpha: true,
      red: 255,
      green: 255,
      blue: 255,
    };
  },
  methods: {
    saturate() {
      const canvas = document.createElement('canvas');
      const img = document.createElement('img');

      canvas.width = this.width;
      canvas.height = this.height;

      img.addEventListener('load', (evt) => {
        let toCtx = canvas.getContext('2d', { alpha: Boolean(this.alpha) });
        toCtx.drawImage(evt.target, 0, 0);
        toCtx.globalCompositeOperation = 'saturation';
        toCtx.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
        toCtx.fillRect(0, 0, canvas.width, canvas.height);
        toCtx.globalCompositeOperation = 'source-over';
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
