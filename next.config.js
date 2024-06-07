const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/tuanntps33510/' : '',
  basePath: isProd ? '/tuanntps33510' : '',
};
