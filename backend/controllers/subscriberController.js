import asyncHandler from "../middleware/asyncHandler.js";
import Subscriber from "../models/subscriberModel.js";

// @desc    Register a new subscriber
// @route   POST /api/subscribers
// @access  Public
const registerSubscriber = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  const userExists = await Subscriber.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Already Subscribed!");
  }

  const subscriber = await Subscriber.create({
    name,
    email,
    phone,
  });

  if (subscriber) {
    res.status(201).json({
      _id: subscriber._id,
      name: subscriber.name,
      email: subscriber.email,
      phone: subscriber.phone,
    });
  } else {
    res.status(400);
    throw new Error("Invalid subscriber data");
  }
});

// @desc    Get all subscribers
// @route   GET /api/subscribers
// @access  Private/Admin
const getSubscribers = asyncHandler(async (req, res) => {
  const subscribers = await Subscriber.find({});
  res.json({ subscribers });
});

export { registerSubscriber, getSubscribers };
