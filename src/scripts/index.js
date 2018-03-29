'use strict';

if (module.hot) {
  module.hot.accept();
}

import 'babel-polyfill';
import '@fortawesome/fontawesome';
import '@fortawesome/fontawesome-free-solid';
import '../styles/index.scss';
import { resize } from "./actions/resizer";
import { saturation } from "./actions/saturation";

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
  const { naturalWidth, naturalHeight } = evt.target;
  resizeWidth.value = naturalWidth;
  resizeHeight.value = naturalHeight;
  currentWidth.innerText = naturalWidth;
  currentHeight.innerText = naturalHeight;
});


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
  item.addEventListener('click', function(evt) {
    if (this.dataset.target) {
      evt.preventDefault();
      evt.stopPropagation();

      document.querySelector(this.dataset.target).classList.add('is-active');
    }
  }, false);
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

    if (target.id === 'saturation') {
      // saturation

      const options = {
        red: target.elements['red'].value,
        green: target.elements['green'].value,
        blue: target.elements['blue'].value,
      };

      saturation(img, canvas, options)
        .then(result => result.toBlob(blob => {
          setupImage(blob);
          closeOpened();
        }));
    }

    return false;
  });
});
