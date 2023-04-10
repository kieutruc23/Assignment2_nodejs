import express from "express";
import { checkPermission } from "../middlewares/checkPermission";
import { create, get, getAll, remove, update } from "../Controllers/products";
const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", get);
router.post("/products", create);
router.delete("/products/:id", remove);
router.put("/products/:id", update);

export default router;