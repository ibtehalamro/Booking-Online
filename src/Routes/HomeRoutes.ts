import express, { Express, Request, Response } from "express";
import UserLoginController from "../Controllers/UserLoginController.js";
import { UserRepository } from "../Repository/UserRepository.js";
import UserLoginService from "../Services/UserLoginService.js";

const homeRoutes = express.Router();
const htmlRootDir = { root: "./public/pages/" };

homeRoutes.get("", function (req: Request, res: Response) {
  res.setHeader("Content-Type", "text/html");
  res.sendFile("index.html", htmlRootDir);
});

export default homeRoutes;
