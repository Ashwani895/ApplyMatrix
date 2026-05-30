const express = require("express");
const cors = require("cors");
const dotenv= require("dotenv");
const connectDb = require("./config/db");
const applicationRoutes = require("./routes/applicationRoutes");

dotenv.config();

connectDb();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", applicationRoutes);

app.get("/", (req, res) => {
    res.send("ApplyMatrix Api running");

});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});