import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    image: false,
    name: false,
    loaded: false,
    action: false,
    width: false,
    height: false,
  },
  getters: {
    image: state => state.image,
    name: state => state.name,
    loaded: state => state.loaded,
    action: state => state.action,
    width: state => Object.assign(state.width),
    height: state => state.height,
  },
  mutations: {
    initImage(state, image) {
      Vue.set(state, 'image', image);
      Vue.set(state, 'name', image.name);
      Vue.set(state, 'loaded', true);
    },
    updateImage(state, image) {
      Vue.set(state, 'image', image);
    },
    initSize(state, image) {
      const { naturalWidth, naturalHeight } = image;
      Vue.set(state, 'width', naturalWidth);
      Vue.set(state, 'height', naturalHeight);
    },
    setAction(state, action) {
      Vue.set(state, 'action', action);
    },
  },
  actions: {
    setupImage(state, images) {
      for (let i = 0; i < images.length; i += 1) {
        if (images[i].type.indexOf('image') > -1) {
          state.commit('initImage', images[i]);
          return;
        }
      }
    },
  },
});
