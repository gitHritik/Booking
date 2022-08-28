import express from "express";
import {
  createHotel,
  DeleteHotels,
  getHotel,
  getHotels,
  UpdateHotels,
} from "../controller/hotel.js";
import Hotel from "../models/Hotel.js";
import { checkError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create
router.post("/", verifyAdmin, createHotel);
// Update
router.put("/:id", verifyAdmin, UpdateHotels);
// DELETE
router.delete("/:id", verifyAdmin, DeleteHotels);
// GET
router.get("/:id", getHotel);
// GET ALL
router.get("/", getHotels);
export default router;
