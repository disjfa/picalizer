<template>
  <nav class="actions">
    <div class="py-2 px-3 d-none d-md-block">
      <h3>Action</h3>
      <p>Choose an action and edit your image</p>
    </div>
    <a href="#" class="actions-item" @click.prevent="setAction('resize')">
      <span class="actions-icon"><i class="fas fa-fw fa-expand-arrows-alt"></i></span>
      <span class="actions-label">resize</span>
    </a>
    <a href="#" class="actions-item" @click.prevent="setAction('crop')">
      <span class="actions-icon"><i class="fas fa-fw fa-crop"></i></span>
      <span class="actions-label">crop</span>
    </a>
    <a href="#" class="actions-item" @click.prevent="setAction('saturation')">
      <span class="actions-icon"><i class="fas fa-fw fa-adjust"></i></span>
      <span class="actions-label">saturation</span>
    </a>
    <router-link :to="{name: 'about'}" class="actions-item">
      <span class="actions-icon"><i class="fas fa-fw fa-info-circle"></i></span>
      <span class="actions-label">about</span>
    </router-link>
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
