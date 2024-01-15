import express from "express";
import { isAuth } from "../Data/middlewares.js";
import {
  changeOrderStatusController,
  createOrderController,
  getAllOrdersController,
  getMyOrdersCotroller,
  paymetsController,
  singleOrderDetrailsController,
} from "../controllers/orderController.js";

const router = express.Router();

//routes
// ============== ORDERS ROUTES ==================

// CREATE ORDERS
router.post("/create", isAuth, createOrderController);

//  GET ALL ORDERS
router.get("/my-orders", isAuth, getMyOrdersCotroller);

//  GET SINGLE ORDER DETAILS
router.get("/my-orders/:id", isAuth, singleOrderDetrailsController);

// receipt payments
router.post("/payments", isAuth, paymetsController);

/// ======== ADMIN PART ============
// get all order
router.get("/admin/get-all-orders", isAuth, getAllOrdersController);

// change order status
router.put("/admin/order/:id", isAuth, changeOrderStatusController);

// ====================================================================

export default router;
