import express from "express";
import {
  createRoom,
  DeleteRooms,
  getRoom,
  getRooms,
  UpdateRooms,
} from "../controller/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create
router.post("/:hotelId", verifyAdmin, createRoom);
// Update
router.put("/:id", verifyAdmin, UpdateRooms);
// DELETE
router.delete("/:id/:hotelId", verifyAdmin, DeleteRooms);
// GET
router.get("/:id", getRoom);
// GET ALL
router.get("/", getRooms);

export default router;
