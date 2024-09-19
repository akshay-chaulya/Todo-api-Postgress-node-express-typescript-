import {Router} from "express"
import authRouter from "./auth.route"
import todosRouter from "./todos.route"

const router = Router();

router.use("/auth", authRouter)
router.use("/todos", todosRouter)


export default router;