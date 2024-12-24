const {
    defineConfig
} = require("cypress");

module.exports = defineConfig({
    e2e: {
        "baseUrl": "http://localhost:3000",
        "viewportHeight": 1366,
        "viewportWidth": 1024,
        env: {
            book: {
                "title": "One Hundred Years of Solitude",
                "authors": "Gabriel García Márquez",
                "description": "The story spans seven generations, each more eccentric than the last. Magical realism is used to blend fantastical elements with realistic ones, creating a unique narrative style. The novel explores themes of solitude, love, war, and the cyclical nature of history."
            }
        }
    },
});

//{
//  "baseUrl": "http://localhost:3000",
//  "viewportHeight": 390,
//  "viewportHeight": 844
//}