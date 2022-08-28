import Hotel from "../models/Hotel.js";

//Here i will define routes in controllers
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};
export const UpdateHotels = async (req, res, next) => {
  try {
    const UpdateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(UpdateHotel);
  } catch (err) {
    next(err);
  }
};
export const DeleteHotels = async (req, res, next) => {
  try {
    const DeleteHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Delted Succefully");
  } catch (err) {
    next(err);
  }
};
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};
export const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find(req.params.id);
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};
