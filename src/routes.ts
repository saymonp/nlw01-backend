import express from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import PointsController from "./controller/PointsController";
import ItemsController from "./controller/ItemsController";

const pointsController = new PointsController();
const itemsController = new ItemsController();

// index, show, create, update, delete
const routes = express.Router();
const upload = multer(multerConfig);

routes.get("/items", itemsController.index);

routes.get("/points", pointsController.index)
routes.get("/points/:id", pointsController.show)

routes.post("/points", upload.single("image"), pointsController.create)

export default routes;

// Service Pattern
// Repository Pattern (Data Mapper)