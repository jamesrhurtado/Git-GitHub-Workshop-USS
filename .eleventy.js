module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
  
    eleventyConfig.addCollection("participants", function(collectionApi) {
        return collectionApi.getFilteredByGlob("participants/*.md").map(item => {
            return {
                ...item.data,
                participant: item.data // Esto asegura que los datos estén disponibles en la plantilla
            };
        });
    });
  
    return {
        dir: {
            input: ".",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };
};