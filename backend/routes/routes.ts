import { Router } from "express";
import ProductController from "../controllers/Product.controller";
const routes = Router();

// Rota de teste
routes.get("/", (req, res) => {
  res.send({ msg: "Hello world" });
});

// Rotas reais
routes.get("/product/get-all", ProductController.getAll);
routes.post("/product/add", ProductController.add);
routes.put("/product/update/:id", ProductController.update);
routes.delete("/product/delete/:id", ProductController.delete);

export default routes;
