import { Router } from "express";
import { userdelete, userget, userpost, userput } from "../controller/user.js";

export const userRouter = Router();

userRouter.get('/users', userget);
userRouter.post('/users', userpost);
userRouter.put('/users/:id', userput);
userRouter.delete('/users/:id', userdelete);
