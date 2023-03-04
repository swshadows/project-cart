import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import ReceiptMessages from "./Receipt.messages";
import isEmpty from "../helpers/isEmpty";
const prisma = new PrismaClient();

export default {
  // Pega todas as receitas
  async getAll(req: Request, res: Response) {
    const receipts = await prisma.receipt.findMany();
    if (!receipts)
      return res.status(400).send({ message: ReceiptMessages.getAllNone });

    return res.status(200).send({ receipts });
  },

  // Adiciona recibos
  async add(req: Request, res: Response) {
    const { payment, deliver, items, totalPrice } = req.body;
    if (isEmpty(payment, deliver, items, totalPrice))
      return res.status(400).send({ message: ReceiptMessages.empty });

    try {
      await prisma.receipt.create({
        data: { payment, deliver, items, totalPrice },
      });
      res.status(200).send({ message: ReceiptMessages.addSuccess });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: ReceiptMessages.internalError });
    }
  },
};
