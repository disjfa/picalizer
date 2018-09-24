<template>
  <form action="#" id="resize" class="setting" @submit.prevent="crop">
    <div class="setting-body" style="w">
      <h3>Resize image</h3>
      <p>
        Resize image using these settings.
      </p>
      <div class="d-relative">
        <img :src="getImage" alt="" ref="img" class="img-fluid">
      </div>
      <br>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">crop</button>
        <button type="button" class="btn btn-warning" @click="cancelAction">cancel</button>
      </div>
    </div>
  </form>
</template>

<script>
import Cropper from 'cropperjs';

export default {
  name: 'EditCrop',
  data() {
    return {
      cropper: false,
    };
  },
  methods: {
    crop() {
      this.cropper
        .getCroppedCanvas()
        .toBlob((blob) => {
          this.$store.commit('updateImage', blob);
          this.cancelAction();
        });
    },
    cancelAction() {
      this.$emit('cancelAction');
    },
  },
  mounted() {
    this.cropper = new Cropper(this.$refs.img);
  },
  computed: {
    getImage() {
      const { image } = this.$store.getters;
      return window.URL.createObjectURL(image);
    },
  },
};
</script>
