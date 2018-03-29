const DEFAULT_SATURATION_OPTS = {
  alpha: true,
  red: 255,
  green: 255,
  blue: 255,
};

export function saturation(from, to, options) {
  let opts = Object.assign({}, DEFAULT_SATURATION_OPTS);

  if (options) {
    opts = Object.assign(opts, options);
  }

  to.width = from.naturalWidth || from.width;
  to.height = from.naturalHeight || from.height;

  return new Promise(resolve => {
    let toCtx = to.getContext('2d', { alpha: Boolean(opts.alpha) });
    toCtx.drawImage(from, 0, 0);
    toCtx.globalCompositeOperation = 'saturation';
    toCtx.fillStyle = `rgb(${opts.red}, ${opts.green}, ${opts.blue})`;
    toCtx.fillRect(0, 0, to.width, to.height);
    toCtx.globalCompositeOperation = 'source-over';

    resolve(to);
  });
}
