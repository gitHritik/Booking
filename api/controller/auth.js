import User from "../models/User.js";
import bcrypt from "bcrypt";
import { checkError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const newUser = new User({
    ...req.body,
    password: hash,
  });
  try {
    const saveUser = await newUser.save();
    res.status(200).json("User has been created");
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(checkError("404", "User not found"));
    const isPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isPassword) return next(checkError("400", "Wrong Password"));
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};
