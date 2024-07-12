let pronoun = ["the", "our", "his", "her", "their"];

let adj = ["great", "big", "dark", "light", "fat"];

let noun = ["jogger", "racoon", "fart", "tacos"];

let ext = [".com", ".net", ".ve"];

pronoun.forEach((articulo) => {
  adj.forEach((adjetivo) => {
    noun.forEach((sustantivo) => {
      ext.forEach((extension) => {
        console.log(articulo + adjetivo + sustantivo + extension);
      });
    });
  });
});
