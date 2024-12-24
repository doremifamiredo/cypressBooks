const {
  defineConfig
} = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "http://localhost:3000",
    "viewportHeight": 932,
    "viewportWidth": 430,
    env: {
      book: {
        "title": "Alice in Wonderland",
        "authors": "Lewis Carroll ",
        "description": "It's a classic tale about a curious little girl who falls down a rabbit hole and into a magical world full of peculiar creatures. Alice encounters talking animals, such as the Cheshire Cat and the White Rabbit, and has many adventures."
      }
    }
  },
});
