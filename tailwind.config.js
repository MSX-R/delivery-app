module.exports = {
  content: ["./**/*.tsx"], //En faisant cela, tailwind rn est disponible partout dans l'appli sur fichier TSX
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
