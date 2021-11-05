import express, {Application} from "express";
const app:Application = express(),
      config = require("config"),
      HOST = config.get("HOST"),
      PORT = config.get("PORT") || 5000;
const cors = require("cors");
const router = require("./router")
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
	console.log(`Server has been started on ${HOST}:${PORT}`);
})
