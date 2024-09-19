import express from "express"
import mainRouter from "./routes"
import { ResponsStatus } from "./types";
import { errorHandler } from "./utils";
import connectDB from "./postgresql/connectDB";

const app = express();

app.use(express.json());
app.use("/api/v1", mainRouter)

app.use((req, res) => {
    errorHandler(res, { statusCode: ResponsStatus.NotFound, message: "Page not found!" })
})

app.listen(3000, async() => {
    await connectDB();
    console.log("Server runing on port 3000");
})