module.exports = function(eleventyConfig) {
  // Configuraciones personalizadas irán aquí más adelante
  return {
    dir: {
      input: ".", // Le dice a Eleventy que lea desde la carpeta actual
      includes: "_includes" // Le dice dónde encontrar los archivos _includes
    }
  }
};