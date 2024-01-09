import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controller/userController.js";

export default (router) => {
  router.post("/", registerUser);
  router.post("/auth", authUser);
  router.post("/logout", logoutUser);
  router.route("/profile").get(getUserProfile).put(updateUserProfile);
};
