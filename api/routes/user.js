import express from "express";
import {
  DeleteUsers,
  getUser,
  getUsers,
  UpdateUsers,
} from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//For authenticating user

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user ");
// });

//for verifying user
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user! You are varified and you can delete your id ");
// });

//for verifying admin
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello stupid admin! You are varified and you can delete all id ");
// });

// Update
router.put("/:id", verifyUser, UpdateUsers);
// DELETE
router.delete("/:id", verifyUser, DeleteUsers);
// GET
router.get("/:id", verifyUser, getUser);
// GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
