import express from "express";
import { isAuth } from "../Data/middlewares.js";
import {
  createProductController,
  deleteProductController,
  deleteProductImageController,
  getAllProductsController,
  getSingleProductController,
  updateProductController,
  updateProductImageController,
} from "../controllers/productsContoroller.js";
import { singleUpload } from "../Data/multer.js";

const router = express.Router();

//rroutes
// ============== PRODUCT ROUTES ==================

// GET ALL PRODUCTS
router.get("/get-all", getAllProductsController);

// GET TOP PRODUCTS
// router.get("/top", getTopProductsController);

// GET SINGLE PRODUCTS
router.get("/:id", getSingleProductController);

// CREATE PRODUCT
router.post("/create", isAuth, singleUpload, createProductController);

// UPDATE PRODUCT
router.put("/:id", isAuth, updateProductController);

// UPDATE PRODUCT IMAGE
router.put("/image/:id", isAuth, singleUpload, updateProductImageController);

// delete product image
router.delete("/delete-image/:id", isAuth, deleteProductImageController);

// delete product
router.delete("/delete/:id", isAuth, deleteProductController);

// REVIEW PRODUCT
// router.put("/:id/review", isAuth, productReviewController);

// ====================================================================

export default router;
