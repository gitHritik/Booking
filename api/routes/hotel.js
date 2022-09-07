import express from "express";
import {
  countBycity,
  countBytype,
  createHotel,
  DeleteHotels,
  getHotel,
  getHotelRooms,
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
router.get("/find/:id", getHotel);
// GET ALL
router.get("/", getHotels);
router.get("/countBycity", countBycity);
router.get("/countBytype", countBytype);
router.get("/room/:id", getHotelRooms);
export default router;
