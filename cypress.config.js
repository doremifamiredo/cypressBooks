const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        "baseUrl": "http://localhost:3000",
        env: {
            book: {
                "title": "1984",
                "authors": "George Orwell",
                "description": "«1984» is a dystopian novel about a totalitarian society and the oppression of individual freedom."
            }
        }
    },
});
