import express from "express";
// import { getUsers } from '../controllers/users.js';
import {
  getCategory,
  addCategory,
  editCategory,
  removeCategory,
} from "../controllers/category.js";
import auth from "../middleware/authenticate.js";

const router = express.Router();

router.get("/", auth, getCategory);
router.post("/", auth, addCategory);
router.delete("/", auth, removeCategory);
router.put("/", auth, editCategory);

export default router;
