import express from "express";
import logger from "morgan";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import mapRouter from "./routes/mapRouter.js";

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/maps", mapRouter);

app.use((_, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
});

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
    .connect(DB_HOST)
    .then(() => {
        app.listen(PORT, () => {
            console.log(
                `Database connection successful. Use our API on port: ${PORT}`
            );
        });
    })
    .catch((error) => {
        console.log(error.message);
        process.exit(1);
    });
