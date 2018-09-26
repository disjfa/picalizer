<template>
  <div class="setting bg-success">
    <div class="setting-body">
      <div class="pb-3">
        <router-link :to="{name: 'home'}" class="btn btn-info">
          <i class="fas fa-fw fa-chevron-left"></i>
          Back
        </router-link>
      </div>
      <h1>
        <i class="fas fa-fw fa-info-circle"></i>
        About
      </h1>
      <p>
        Hi, thanks for using picalizer! Hope you like it and enjoy editing images.
      </p>
      <p>
        If you have any suggestions, please let me know. Also if you just like it you can let me
        know! Just add an issue on the github page.
      </p>
      <p>
        <a href="https://github.com/disjfa/picalizer" class="btn btn-primary">github</a>
        <a href="https://github.com/disjfa/picalizer/issues" class="btn btn-primary">issues</a>
      </p>
    </div>
  </div>
</template>
