<template>
  <form class="setting bg-success is-active js-hide-selected">
    <div class="setting-body text-center">
      <img src="./../images/picalizer.png" alt="" class="img-fluid logo-img">
      <h1>Picalizer</h1>
      <p>
        Image editor using just javascript.
      </p>
      <p>
        Upload an image, or just paste one. It may work!
      </p>
      <div class="form-group">
        <label for="file" class="btn btn-primary">
          <i class="fas fa-image"></i>
          Choose an image
        </label>
      </div>
      <div class="d-none">
        <input type="file" id="file" class="form-control" ref="file">
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'TheUpload',
  mounted() {
    this.$refs.file.addEventListener('change', (e) => {
      const { files } = e.target;
      this.$store.dispatch('setupImage', files);
    });
    document.addEventListener('paste', this.paste, true);
  },
  beforeDestroy() {
    document.removeEventListener('paste', this.paste, true);
  },
  methods: {
    paste(evt) {
      this.$store.dispatch('setupImage', evt.clipboardData.files);
    },
  },
};
</script>
<style>
  .logo-img {
    max-width: 100px;
  }
</style>
