import { Router } from "express";
import ProductController from "../controllers/Product.controller";
import ReceiptController from "../controllers/Receipt.controller";
const routes = Router();

// Rota de teste
routes.get("/", (req, res) => {
  res.send({ msg: "Hello world" });
});

// Rotas de produto
routes.get("/product/get-all", ProductController.getAll);
routes.post("/product/add", ProductController.add);
routes.put("/product/update/:id", ProductController.update);
routes.delete("/product/delete/:id", ProductController.delete);

// Rotas de recibo
routes.get("/receipt/get-all", ReceiptController.getAll);
routes.post("/receipt/add", ReceiptController.add);

export default routes;
