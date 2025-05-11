const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
    
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addTemplateFormats("css");
    
    eleventyConfig.addExtension("css", {
        outputFileExtension: "css",
        compile: async function(content, path) {
            if (path.includes('main.css')) {
                return async () => {
                    let output = await postcss([
                        tailwindcss,
                        autoprefixer
                    ]).process(content, {
                        from: path,
                        to: path
                    });
                    return output.css;
                };
            }
            return async () => content;
        }
    });

    eleventyConfig.addCollection("participants", function(collectionApi) {
        return collectionApi.getFilteredByGlob("participants/*.md").map(item => {
            return {
                ...item.data,
                participant: item.data
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