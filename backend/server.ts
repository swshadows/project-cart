import express from "express";
import dotenv from "dotenv";

dotenv.config();
const server = express();

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`🚀 Servidor iniciado em http://localhost:${port}`);
});
