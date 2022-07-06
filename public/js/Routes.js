import loginRoutes from "./Routes/LoginRoutes.js";
import homeRoutes from "./Routes/HomeRoutes.js";
export default function (app) {
    app.use("/login", loginRoutes);
    app.use("/home", homeRoutes);
}
//# sourceMappingURL=Routes.js.map