import { Router } from "express"
import { checkAuth, login, register } from "../controllers/auth.controllers";
import { verifyToken } from "../middlewares";

const router = Router();

router.post("/register", register)
router.post("/login", login)
router.get("/check-auth", verifyToken, checkAuth)

export default router;