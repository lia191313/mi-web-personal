const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  // Añade esto para que Eleventy copie archivos como CSS o imágenes si los pones en estas carpetas después
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img");

  // Configuración para plantillas
  return {
    // Directorios
    dir: {
      input: ".", // Lee archivos desde la carpeta principal
      includes: "_includes", // Busca plantillas parciales en _includes
      data: "_data", // Convención para archivos de datos (opcional, pero buena práctica)
      output: "_site" // Publica el sitio construido en la carpeta _site (lo que Netlify espera)
    },
    // Formatos de plantilla que Eleventy debe procesar y qué motor usar
    templateFormats: ["md", "njk", "html"], // Procesar archivos .md, .njk y .html
    markdownTemplateEngine: "njk", // Usar Nunjucks para procesar archivos Markdown
    htmlTemplateEngine: "njk" // Usar Nunjucks para procesar archivos HTML (si usas plantillas HTML)
  };
};