import { Router, Request, Response } from 'express';
const router = Router();
const InfoController = require("./controllers/info.controller")

router.get("/", (req: Request, res: Response) => {
  res.send("<h1>You are on home page!</h1>")
});
router.get("/info", InfoController.getHomePageInfo);
router.post("/info", InfoController.createNewInfo);

module.exports = router;