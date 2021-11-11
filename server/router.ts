import { Router, Request, Response } from 'express';
const router = Router();
const InfoController = require("./controllers/info.controller")
const UserController = require("./controllers/user.controller")
const AuthMiddleware = require("./middlewares/auth.middleware")

router.get("/", (req: Request, res: Response) => {
  res.send("<h1>You are on home page!</h1>")
});
router.get("/info", InfoController.getHomePageInfo);
router.post("/info", InfoController.createNewInfo);
router.post("/register", [AuthMiddleware.register], UserController.register);

module.exports = router;