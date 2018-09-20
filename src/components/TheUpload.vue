<template>
  <form class="setting bg-success is-active js-hide-selected">
    <div class="setting-body text-center">
      <h1>Picalizer</h1>
      <p>
        Image editor using just javascript.
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
  },
};
</script>
