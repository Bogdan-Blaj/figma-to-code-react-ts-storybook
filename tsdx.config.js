// tsdx.config.js

module.exports = {
    rollup(config, options) {
      options.env = "production";
  
      return config;
    },
  };
  