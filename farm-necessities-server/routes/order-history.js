import express from "express";
// import { getUsers } from '../controllers/users.js';
import {
  getOrderHistory,
  addOrderHistory,
  editOrderHistory,
  removeOrderHistory,
} from "../controllers/order-history.js";
import auth from "../middleware/authenticate.js";

const router = express.Router();

router.get("/", auth, getOrderHistory);
router.post("/", auth, addOrderHistory);
router.delete("/", auth, removeOrderHistory);
router.put("/", auth, editOrderHistory);

export default router;
