'use strict';

if (module.hot) {
  module.hot.accept();
}

import 'babel-polyfill';
import '../styles/index.scss';
import { resize } from "./actions/resizer";

const img = document.getElementById('img');
const canvas = document.getElementById('canvas');
const download = document.getElementById('download');
const fileLoader = document.getElementById('file');

const resizeWidth = document.getElementById('resize_width');
const resizeHeight = document.getElementById('resize_height');
const currentWidth = document.getElementById('current_width');
const currentHeight = document.getElementById('current_height');

canvas.style.display = 'none';

img.addEventListener('load', (evt) => {
  resizeWidth.value = evt.target.naturalWidth;
  resizeHeight.value = evt.target.naturalHeight;
  currentWidth.innerText = evt.target.naturalWidth;
  currentHeight.innerText = evt.target.naturalHeight;
});

function setupImage(blob) {
  img.src = window.URL.createObjectURL(blob);
  download.href = window.URL.createObjectURL(blob);
}

function setupName(name) {
  download.download = name;
}

function hideBase() {
  document.querySelectorAll('.js-hide-selected').forEach(div => {
    div.classList.remove('is-active');
  });
  document.querySelectorAll('.js-show-selected').forEach(div => {
    div.classList.remove('d-none');
  });
}

function closeOpened() {
  document.querySelectorAll('.js-can-open').forEach(item => {
    item.classList.remove('is-active');
  });
}

fileLoader.addEventListener('change', (e) => {
  const { files } = e.target;
  setupImage(files[0]);
  setupName(files[0].name);
  hideBase();
});

document.querySelectorAll('.js-close-opened').forEach(item => {
  item.addEventListener('click', evt => {
    evt.preventDefault();
    closeOpened();
  });
});

document.querySelectorAll('.js-open-target').forEach(item => {
  item.addEventListener('click', evt => {
    evt.preventDefault();
    if(evt.target.dataset.target) {
      document.querySelector(evt.target.dataset.target).classList.add('is-active');
    }
  });
});

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const { target } = evt;
    if (target.id === 'resize') {
      // resize
      canvas.width = target.elements['width'].value;
      canvas.height = target.elements['height'].value;

      resize(img, canvas)
        .then(result => result.toBlob(blob => {
          setupImage(blob);
          closeOpened();
        }));
    }
    return false;
  });
});
