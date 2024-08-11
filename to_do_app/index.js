const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;
app.use(express.json());

const todoRoutes = require("./routes/Todo");
app.use("/api/v1", todoRoutes);

const dbConnect = require("./config/database_1");

dbConnect();


app.listen(PORT, () => {
    console.log(`SUCCESS at port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send(`<h1>Home Page</h1>`);
});
