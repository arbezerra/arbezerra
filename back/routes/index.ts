import {Router} from "express";
import authRouter from "./auth";
import categoryRouter from "./category";
import tagRouter from "./tag";
import postRouter from "./post";
import projectRouter from "./project";

const router = Router();

router.use("/auth", authRouter);
router.use("/category", categoryRouter);
router.use("/post", postRouter);
router.use("/tag", tagRouter);
router.use("/project", projectRouter);

export default router;