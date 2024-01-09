import User from "../models/userModel.js";

const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status: "success",
      message: "All Users!",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "some error",
    });
  }
};

const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!email || !password || !username)
      return res.status(400).json({
        status: "fail",
        message: "please provide email, password and username",
      });

    const user = await User.create({ username, email, password });
    res.status(201).json({
      status: "success",
      message: "user registered!",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "some error",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(404).json({
        status: "fail",
        message: "please provide valid email and password!",
      });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({
        status: "fail",
        message: "Invalid email or password!",
      });

    if (user.password !== password)
      return res.status(400).json({
        status: "fail",
        message: "Invalid email or password!",
      });

    res.status(200).json({
      status: "success",
      message: "You are loggedin",
      user: user.username,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "some error",
    });
  }
};

export { registerUser, loginUser, getAllUser };
