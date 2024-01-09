import express from "express";
import {
  registerUser,
  loginUser,
  getAllUser,
} from "../controllers/userController.js";
const router = express.Router();

router.route("/").get(getAllUser);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

export default router;
