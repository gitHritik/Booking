import User from "../models/User.js";

//Here i will define routes in controllers

export const UpdateUsers = async (req, res, next) => {
  try {
    const UpdateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(UpdateUser);
  } catch (error) {
    next(err);
  }
};
export const DeleteUsers = async (req, res, next) => {
  try {
    const DeleteUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Delted Succefully");
  } catch (error) {
    next(err);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const User = await User.findById(req.params.id);
    res.status(200).json(User);
  } catch (error) {
    next(err);
  }
};
export const getUsers = async (req, res, next) => {
  try {
    const Users = await User.find(req.params.id);
    res.status(200).json(Users);
  } catch (error) {
    next(error);
  }
};
