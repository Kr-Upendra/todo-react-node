import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json({ limit: "16kb" }));

import userRouter from "./routes/userRotues.js";
import todoRouter from "./routes/todoRoutes.js";

app.use("/api/todo/", todoRouter);
app.use("/api/user/", userRouter);

export default app;
