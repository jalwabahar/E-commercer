import JWT from "jsonwebtoken";
import userModel from "../Models/User.js";

// USER AUTH
export const isAuth = async (req, res, next) => {
  const { token } = req.cookies;
  //validation
  try {
    if (!token) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized User",
      });
    }
    const decodeData = JWT.verify(token, process.env.JWT_SECRET);
    req.user = await userModel.findById(decodeData._id);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In isAuth Middleware",
      error,
    });
  }
};
