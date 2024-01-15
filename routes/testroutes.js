import express from "express";
import {
  testController,
  testController1,
} from "../controllers/testController.js";

const router = express.Router();

router.get("/test", testController);
router.get("/test1", testController1);
// export
export default router;
