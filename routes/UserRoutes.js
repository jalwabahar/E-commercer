import express from "express";
import {
  getUserProfileController,
  loginController,
  logoutController,
  registerController,
  updatePasswordController,
  updateProfileController,
  updateProfilePicController,
} from "../controllers/userController.js";
import { isAuth } from "../Data/middlewares.js";
import { singleUpload } from "../Data/multer.js";

const router = express.Router();

//routes

// register
router.post("/register", registerController);
// Login
router.post("/login", loginController);
// Get Profile Add middleware
router.get("/getProfile", isAuth, getUserProfileController);
//logout
router.get("/logout", isAuth, logoutController);
// update profile
router.put("/profile-update", isAuth, updateProfileController);
// update password
router.put("/update-password", isAuth, updatePasswordController);
// update profile pic
router.put("/update-picture", isAuth, singleUpload, updateProfilePicController);

export default router;
