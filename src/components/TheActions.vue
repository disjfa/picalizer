<template>
  <nav class="actions">
    <div class="py-2 px-3 d-none d-md-block">
      <h3>Action</h3>
      <p>Choose an action and edit your image</p>
    </div>
    <a href="#resize" class="actions-item" @click.prevent="setAction('resize')">
      <span class="actions-icon"><i class="fas fa-expand-arrows-alt"></i></span>
      <span class="actions-label">resize</span>
    </a>
    <a href="#saturation" class="actions-item" @click.prevent="setAction('saturation')">
      <span class="actions-icon"><i class="fas fa-adjust"></i></span>
      <span class="actions-label">saturation</span>
    </a>
  </nav>
</template>

<script>
export default {
  name: 'TheActions',
  methods: {
    setAction(action) {
      this.$store.commit('setAction', action);
    },
  },
};
</script>
