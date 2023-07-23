import express from "express";
import { userRouter } from "./router/users.router.js";
const app = express();

app.use(express.json);
app.use(userRouter);

app.listen(5003, () => {
    console.log('server running ');
});