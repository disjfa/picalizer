const DEFAULT_RESIZE_OPTS = {
  quality: 3,
  alpha: false,
};

export function resize(from, to, options) {
  let opts = Object.assign({}, DEFAULT_RESIZE_OPTS);

  if (!isNaN(options)) {
    opts = Object.assign(opts, { quality: options });
  } else if (options) {
    opts = Object.assign(opts, options);
  }

  opts.toWidth = to.width;
  opts.toHeight = to.height;
  opts.width = from.naturalWidth || from.width;
  opts.height = from.naturalHeight || from.height;

  return new Promise(resolve => {
    let toCtx = to.getContext('2d', { alpha: Boolean(opts.alpha) });
    toCtx.drawImage(from, 0, 0, opts.toWidth, opts.toHeight);
    toCtx = null;

    resolve(to);
  });
}
