module.exports = {
  plugins: [
    require("postcss-calc")({
      mediaQueries: true,
      preserve: false,
    }),
  ],
};
