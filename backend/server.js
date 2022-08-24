const app = require("./app")
const dotenv = require("dotenv")
/* const database = require("./config/database")
const Stock = require("./data/topganer.json") */

dotenv.config({ path: "backend/config/.env" })

// database()
app.get("/", (req, res) => {
    res.send("hello world")
})

/* app.get("/api/v1/topgainer", async (req, res) => {
    res.status(500).json(Stock)
}) */

// Handling Uncaught Exception
/* process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
}); */


app.listen(`${process.env.PORT}`, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})


// Unhandled Promise Rejection
/* process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
}); */