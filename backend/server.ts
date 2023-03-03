import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";

import routes from "./routes/routes";

dotenv.config();
const server = express();
server.use(cors());
server.use(urlencoded({ extended: false }));
server.use(express.json());
server.use(routes);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`🚀 Servidor iniciado em http://localhost:${port}`);
});
