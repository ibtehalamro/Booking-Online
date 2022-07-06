import express, { Express, Request, Response } from "express";
import loginRoutes from "./Routes/LoginRoutes.js";
import homeRoutes from "./Routes/HomeRoutes.js";

export default function (app: express.Express) {
  app.use("/login", loginRoutes);
  app.use("/home", homeRoutes);
}
