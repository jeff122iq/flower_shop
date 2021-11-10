import { Router, Request, Response } from 'express';
const router = Router();
const InfoController = require("./controllers/info.controller")
const UserController = require("./controllers/user.controller")

router.get("/", (req: Request, res: Response) => {
  res.send("<h1>You are on home page!</h1>")
});
router.get("/info", InfoController.getHomePageInfo);
router.post("/info", InfoController.createNewInfo);
router.post("/register", UserController.register);

module.exports = router;