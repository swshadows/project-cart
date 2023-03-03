import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import isEmpty from "../helpers/isEmpty";
import messages from "./Product.messages";

const prisma = new PrismaClient();

export default {
  // Retorna todos os produtos
  async getAll(req: Request, res: Response) {
    const products = await prisma.product.findMany();
    if (!products)
      return res.status(400).send({ message: messages.getAllNone });
    return res.status(200).send({ products });
  },

  // Adiciona produto no banco
  async add(req: Request, res: Response) {
    const { name, qty, price } = req.body;
    if (isEmpty(name, qty, price))
      return res.status(400).send({ message: messages.empty });
    try {
      await prisma.product.create({
        data: { name, qty, price },
      });
      return res.status(200).send({ message: messages.addSuccess });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: messages.internalError });
    }
  },
  // Edita produto já adicionado no banco
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, qty, price } = req.body;

    if (isEmpty(id, name, qty, price))
      return res.status(400).send({ message: messages.empty });

    try {
      await prisma.product.update({
        where: { id: Number(id) },
        data: { name, qty, price },
      });
      return res.status(200).send({ message: messages.updateSuccess });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: messages.internalError });
    }
  },

  // Apaga produto do banco de dados
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await prisma.product.delete({
        where: { id: Number(id) },
      });
      return res.status(200).send({ message: messages.deleteSuccess });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: messages.internalError });
    }
  },
};
